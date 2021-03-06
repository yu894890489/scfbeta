package com.ut.scf.web.controller.pubmanage;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ut.scf.core.dict.PageInfoBean;
import com.ut.scf.core.util.BeanUtil;
import com.ut.scf.reqbean.pubmanage.IntFeeAddReqBean;
import com.ut.scf.reqbean.pubmanage.IntFeeDeleteReqBean;
import com.ut.scf.reqbean.pubmanage.IntFeeListReqBean;
import com.ut.scf.reqbean.pubmanage.IntFeeReqBean;
import com.ut.scf.reqbean.pubmanage.IntFeeUpdateReqBean;
import com.ut.scf.respbean.BaseRespBean;
import com.ut.scf.respbean.PageListRespBean;
import com.ut.scf.service.pubmanage.IntFeeService;
import com.ut.scf.service.serial.SerialService;
import com.ut.scf.web.controller.BaseJsonController;


/**
 * 标题、简要说明. <br>
 * 类详细说明.
 * <p>
 * Copyright: Copyright (c) 2017年6月14日 下午8:18:31
 * <p>
 * Company: 南京信雅达友田信息技术有限公司
 * <p>
 * @author wuk@starutian.com
 * @version 1.0.0
 */
@Controller
@RequestMapping("/pub/intfee")
public class IntFeeController extends BaseJsonController {

	@Resource
	private IntFeeService intFeeService;
	
	@Resource
	private SerialService serialService;
	
	@RequestMapping(value = "/add")
	public @ResponseBody BaseRespBean addIntFee(@Valid @RequestBody IntFeeAddReqBean reqBean, HttpSession httpSession) {

		BaseRespBean respBean = new BaseRespBean();
		reqBean.setRecUid(serialService.setSerial("INT_FEE",(String)httpSession.getAttribute("deptId")));
		respBean = this.intFeeService.addIntFee(reqBean);
		return respBean;
	}
	
	@RequestMapping(value = "/list")
	public @ResponseBody BaseRespBean getIntFeeList(HttpSession httpSession, @Valid @RequestBody IntFeeListReqBean reqBean) {

		PageListRespBean resp = new PageListRespBean();
		Map<String, Object> params = BeanUtil.beanToMap(reqBean);
		PageInfoBean page = reqBean.getPage();
		List<IntFeeReqBean> dataList = intFeeService.getIntFeeList(params, page);
		resp.putDataList(dataList, page);
		return resp;
	}
	
	@RequestMapping(value = "/delete")
	public @ResponseBody BaseRespBean deleteIntFee(@Valid @RequestBody IntFeeDeleteReqBean reqBean, HttpSession httpSession) {
		BaseRespBean respBean = new BaseRespBean();

		respBean = this.intFeeService.deleteIntFee(reqBean.getRecUid());
		return respBean;
	}
	
	@RequestMapping(value = "/get")
	@ResponseBody
	public BaseRespBean get(@RequestBody IntFeeUpdateReqBean reqBean) {
		BaseRespBean resp = new BaseRespBean();
		IntFeeReqBean result = intFeeService.get(reqBean.getRecUid());
		resp.setResultData(result);
		return resp;
	}
	
	@RequestMapping(value = "/mod")
	public @ResponseBody BaseRespBean updateIntFee(@Valid @RequestBody IntFeeUpdateReqBean reqBean, HttpSession httpSession) {
		BaseRespBean respBean = new BaseRespBean();
		respBean = this.intFeeService.updateIntFee(reqBean);
		return respBean;
	}
}
