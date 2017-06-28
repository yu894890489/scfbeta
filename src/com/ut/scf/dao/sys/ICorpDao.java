package com.ut.scf.dao.sys;

import java.util.List;
import java.util.Map;

import com.ut.scf.core.dict.PageInfoBean;

public interface ICorpDao {

	List<Map<String, Object>> getCorpInfoList(Map<String, Object> paramMap);

	List<Map<String, Object>> getCorpInfoList(Map<String, Object> paramMap, PageInfoBean page);

	List<Map<String, String>> selectAllRelaCorp();

}