package com.ut.scf.service.factor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ut.scf.core.bpm.BpmProcessContext;
import com.ut.scf.core.util.ScfUUID;
import com.ut.scf.dao.auto.LimitOccupyMapper;
import com.ut.scf.pojo.auto.LimitOccupy;
import com.ut.scf.pojo.auto.Limits;
import com.ut.scf.reqbean.factor.LoanReqBean;
import com.ut.scf.service.bpm.BpmProcessService;
import com.ut.scf.service.bpm.impl.BaseBpmProcessServiceImpl;
import com.ut.scf.service.pubmanage.LimitService;

@Service("loanBpmService")
public class LoanBpmService extends BaseBpmProcessServiceImpl<LoanReqBean> implements BpmProcessService<LoanReqBean> {

	private static final String LOAN_BPM = "FactorLoanBpm";

	@Autowired
	private LoanService loanService;

	@Autowired
	private LimitService limitService;

	@Autowired
	private LimitOccupyMapper limitOccupyMapper;

	@Override
	public String getProcessDefinitionKey() {
		return LOAN_BPM;
	}

	@Override
	protected void doAuditAfter(BpmProcessContext<LoanReqBean> context) {
		super.doAuditAfter(context);
		// 流程结束保存正式业务数据
		if (context.isProcessEnd()) {
			LoanReqBean loanBean = getFormData(context);
			loanService.save(loanBean);
		}
	}

	@Override
	protected void doStartBefore(BpmProcessContext<LoanReqBean> context) {
		super.doStartBefore(context);
		// 按客户ID和协议ID取得额度表关联额度记录，额度占用表插入一条额度记录，状态为预占用
		LoanReqBean formdata = context.getFormData();
		Limits lmt = limitService.getLimitBy(formdata.getCorpId(), formdata.getCntId(), "3");// 额度类型：3.关联额度
		if (lmt != null) {
			LimitOccupy lmtocp = new LimitOccupy();
			lmtocp.setRecUid(ScfUUID.generate());
			lmtocp.setLmtId(lmt.getRecUid());
			lmtocp.setAmt(formdata.getTtlLoanAmt());
			lmtocp.setOccSts("0");// 状态:0预占用
			limitOccupyMapper.insert(lmtocp);
			formdata.setLimitRecUid(lmt.getRecUid());

			// 按关联额度记录ID查询父级的产品额度和授信额度，插入产品额度和授信额度占用记录
			List<Limits> parLmtList = limitService.getParentLimitBy(lmt.getRecUid());
			for (Limits plmt : parLmtList) {
				LimitOccupy lo = new LimitOccupy();
				lo.setRecUid(ScfUUID.generate());
				lo.setLmtId(plmt.getRecUid());
				lo.setAmt(formdata.getTtlLoanAmt());
				lo.setOccSts("0");// 状态:0预占用
				limitOccupyMapper.insert(lo);
			}
		}
	}

}
