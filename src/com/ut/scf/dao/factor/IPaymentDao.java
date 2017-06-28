package com.ut.scf.dao.factor;

import java.util.List;
import java.util.Map;

import com.ut.scf.pojo.factor.InvoiceExt;

public interface IPaymentDao {

	List<Map<String, Object>> getList(Map<String, Object> paramMap);

	/**
	 * 通过交易对手名称/组织机构代码 
	 * 获取交易对手信息、协议编号/id、产品名称、未付应付账款总额
     *
     * @param paramMap 查询参数
     *                 key: "counterPartyNm" 交易对手名称
     *                 key: "orgnNo" 交易对手组织机构代码
     * @return 交易信息
	 */
	List<InvoiceExt> getCounterPartyList(Map<String, Object> paramMap);
}
