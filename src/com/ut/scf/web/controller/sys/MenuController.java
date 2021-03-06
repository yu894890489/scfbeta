package com.ut.scf.web.controller.sys;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ut.scf.core.dict.ErrorCodeEnum;
import com.ut.scf.core.dict.ScfConsts;
import com.ut.scf.core.util.BeanUtil;
import com.ut.scf.pojo.auto.SysMenu;
import com.ut.scf.reqbean.sys.MenuAddReqBean;
import com.ut.scf.reqbean.sys.MenuDeleteReqBean;
import com.ut.scf.reqbean.sys.MenuListReqBean;
import com.ut.scf.reqbean.sys.MenuMoveReqBean;
import com.ut.scf.reqbean.sys.MenuTreeReqBean;
import com.ut.scf.respbean.BaseRespBean;
import com.ut.scf.respbean.DataListRespBean;
import com.ut.scf.respbean.sys.inner.Menu;
import com.ut.scf.service.sys.MenuService;
import com.ut.scf.web.controller.BaseJsonController;

@Controller
public class MenuController extends BaseJsonController {

	@Resource
	private MenuService menuService;

	// 增加菜单
	@RequestMapping(value = "/menu/add")
	public @ResponseBody BaseRespBean addMenu(@Valid @RequestBody MenuAddReqBean reqBean) {
		Map<String, Object> paramMap = BeanUtil.beanToMap(reqBean);
		return menuService.addMenu(paramMap);
	}

	// 删除菜单信息
	@RequestMapping(value = "/menu/delete")
	public @ResponseBody BaseRespBean deleteMenu(@Valid @RequestBody MenuDeleteReqBean reqBean) {
		BaseRespBean respBean = new BaseRespBean();
		respBean = this.menuService.deleteMenu(reqBean.getMenuId());
		return respBean;
	}

	@RequestMapping(value = "/menu/list")
	public @ResponseBody BaseRespBean menuList(@RequestBody MenuListReqBean reqBean, HttpSession httpSession) {
		// 获取角色类型
		String roleIdSession = (String) httpSession.getAttribute(ScfConsts.SESSION_ROLE_ID);
		log.debug("roleIdSession: {}", roleIdSession);

		// 如果没有传roleId，则从session中获取当前用户信息，
		if (StringUtils.isBlank(reqBean.getRoleId())) {
			reqBean.setRoleId(roleIdSession);
		}
		BaseRespBean respBean = new BaseRespBean();
		List<Map<String, Object>> menuList = menuService.getMenuList(reqBean);
		respBean.setResultData(menuList);
		return respBean;
	}

	// 查询
	@RequestMapping(value = "/menu/tree")
	public @ResponseBody BaseRespBean menuTree(@RequestBody(required = false) MenuTreeReqBean reqBean, HttpSession httpSession) {
		// 获取角色类型
		String roleIdSession = (String) httpSession.getAttribute(ScfConsts.SESSION_ROLE_ID);
		log.debug("roleIdSession: {}", roleIdSession);

		// 如果没有传roleId，则从session中获取当前用户信息，
		if (StringUtils.isBlank(reqBean.getRoleId())) {
			reqBean.setRoleId(roleIdSession);
		}

		BaseRespBean respBean = new BaseRespBean();
		try {
			List<Menu> menuList = menuService.getMenuTree(reqBean);
			respBean.setResultData(menuList);
		}
		catch (Exception e) {
			log.error("menuTree error", e);
			respBean.setResult(ErrorCodeEnum.FAILED);
		}
		return respBean;
	}

	// 修改菜单信息
	@RequestMapping(value = "/menu/mod")
	public @ResponseBody BaseRespBean updateMenu(@Valid @RequestBody SysMenu reqBean) {
		BaseRespBean respBean = new BaseRespBean();
		respBean = this.menuService.updateMenu(reqBean);
		return respBean;
	}

	// 上移或者下移菜单信息
	@RequestMapping(value = "/menu/move")
	public @ResponseBody BaseRespBean updateMenuByMove(@Valid @RequestBody List<MenuMoveReqBean> reqBean) {
		BaseRespBean respBean = new BaseRespBean();
		respBean = this.menuService.updateMenuByMove(reqBean);
		return respBean;
	}
}
