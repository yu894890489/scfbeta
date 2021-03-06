package com.ut.scf.web.controller.pubmanage;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import javax.sql.rowset.serial.SerialException;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.common.collect.Lists;
import com.ut.scf.core.dict.PageInfoBean;
import com.ut.scf.core.util.BeanUtil;
import com.ut.scf.core.util.DozerMapper;
import com.ut.scf.pojo.auto.Product;
import com.ut.scf.reqbean.PageReqBean;
import com.ut.scf.reqbean.pubmanage.ProductAddReqBean;
import com.ut.scf.reqbean.pubmanage.ProductDeleteReqBean;
import com.ut.scf.reqbean.pubmanage.ProductListReqBean;
import com.ut.scf.reqbean.pubmanage.ProductUpdateReqBean;
import com.ut.scf.respbean.BaseRespBean;
import com.ut.scf.respbean.PageListRespBean;
import com.ut.scf.respbean.pubmanage.ProductRespBean;
import com.ut.scf.service.pubmanage.ProductService;
import com.ut.scf.service.serial.SerialService;
import com.ut.scf.web.controller.BaseJsonController;

/**
 * 产品定义的控制层. <br>
 * 类详细说明.
 * <p>
 * Copyright: Copyright (c) 2017年6月14日 下午1:49:48
 * <p>
 * Company: 南京信雅达友田信息技术有限公司
 * <p>
 * 
 * @author wuk@starutian.com
 * @version 1.0.0
 */
@Controller
@RequestMapping("/pub/product")
public class ProductController extends BaseJsonController {

	@Resource
	private ProductService productService;
	
	@Resource
	private SerialService serialService;

	@RequestMapping(value = "/add")
	public @ResponseBody BaseRespBean addProduct(@Valid @RequestBody ProductAddReqBean reqBean, HttpSession httpSession) {

		BaseRespBean respBean = new BaseRespBean();
		reqBean.setCreateUser((String) httpSession.getAttribute("username"));
		reqBean.setRecUid(serialService.setSerial("PRODUCT",(String)httpSession.getAttribute("deptId")));
		respBean = this.productService.addProduct(reqBean);
		return respBean;
	}

	@RequestMapping(value = "/list")
	public @ResponseBody BaseRespBean getProductList(HttpSession httpSession,
			@Valid @RequestBody ProductListReqBean reqBean) {

		PageListRespBean resp = new PageListRespBean();
		Map<String, Object> params = BeanUtil.beanToMap(reqBean);
		PageInfoBean page = reqBean.getPage();
		List<Product> dataList = productService.getProductList(params, page);
		resp.putDataList(dataList, page);
		return resp;

	}

	@RequestMapping(value = "/delete")
	public @ResponseBody BaseRespBean deleteProduct(@Valid @RequestBody ProductDeleteReqBean reqBean,
			HttpSession httpSession) {
		BaseRespBean respBean = new BaseRespBean();

		respBean = this.productService.deleteProduct(reqBean.getRecUid());
		return respBean;
	}

	@RequestMapping(value = "/get")
	@ResponseBody
	public BaseRespBean get(@RequestBody ProductUpdateReqBean reqBean) {
		BaseRespBean resp = new BaseRespBean();
		Product result = productService.get(reqBean.getRecUid());
		resp.setResultData(result);
		return resp;
	}

	@RequestMapping(value = "/mod")
	public @ResponseBody BaseRespBean updateProduct(@Valid @RequestBody ProductUpdateReqBean reqBean,
			HttpSession httpSession) throws SerialException, SQLException {
		BaseRespBean respBean = new BaseRespBean();
		reqBean.setUpdateUser((String) httpSession.getAttribute("username"));
		respBean = this.productService.updateProduct(reqBean);
		return respBean;
	}

	@RequestMapping(value = "/lookupList")
	public @ResponseBody BaseRespBean queryProductLookupList(@Valid @RequestBody PageReqBean reqBean) {
		PageListRespBean resp = new PageListRespBean();
		Map<String, Object> params = BeanUtil.beanToMap(reqBean);
		PageInfoBean page = reqBean.getPage();
		List<Product> dataList = productService.getProductList(params, page);
		List<ProductRespBean> prdtList = Lists.newArrayList();
		for (Product product : dataList) {
			ProductRespBean prdtBean = new ProductRespBean();
			DozerMapper.copy(product, prdtBean);
			prdtBean.setProductId(product.getRecUid());
			prdtList.add(prdtBean);
		}
		resp.putDataList(prdtList, page);
		return resp;

	}
}
