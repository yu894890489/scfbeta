package com.ut.scf.service.factor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ut.scf.core.bpm.BpmProcessContext;
import com.ut.scf.reqbean.factor.PaymentReqBean;
import com.ut.scf.service.bpm.BpmProcessService;
import com.ut.scf.service.bpm.impl.BaseBpmProcessServiceImpl;

/**
 * 付款申请service类
 * 
 * @author zhangyx@starutian.com
 */
@Service("paymentBpmService")
public class PaymentBpmProcessService extends BaseBpmProcessServiceImpl<PaymentReqBean> implements BpmProcessService<PaymentReqBean> {

	@Autowired
	private PaymentService paymentService;

	private static final String CORPINFO_APPLY_BPM = "FactorPaymentBpm";

	@Override
	protected void doAuditAfter(BpmProcessContext<PaymentReqBean> context) {
		super.doAuditAfter(context);
		// 流程结束保存正式业务数据
		if (context.isProcessEnd()) {
			PaymentReqBean paymentReqBean = getFormData(context);
			paymentService.add(paymentReqBean);
		}
	}

	@Override
	public String getProcessDefinitionKey() {
		return CORPINFO_APPLY_BPM;
	}

}
