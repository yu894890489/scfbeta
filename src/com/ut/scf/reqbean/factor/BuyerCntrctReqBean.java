package com.ut.scf.reqbean.factor;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * 标题、简要说明. <br>
 * 类详细说明.
 * <p>
 * Copyright: Copyright (c) 2017年6月15日 下午4:20:01
 * <p>
 * Company: 南京信雅达友田信息技术有限公司
 * <p>
 * 
 * @author wuk@starutian.com
 * @version 1.0.0
 */
public class BuyerCntrctReqBean {

	/**
	 * ID
	 */
	private String recUid;

	/**
	 * 协议编号
	 */
	private String cntNo;
	/**
	 * 协议类型
	 */
	private String cntTp;

	/**
	 * 产品id
	 */
	private String productId;
	/**
	 * 产品名称
	 */
	private String productNm;

	/**
	 * 买方名称
	 */
	private String custNm;
	/**
	 * 买方编号
	 */
	private String custId;

	/**
	 * 买方邮箱
	 */
	private String email;

	/**
	 * 产品额度
	 */
	private BigDecimal productLmt;

	/**
	 * 额度模式
	 */
	private String lmtMol;

	/**
	 * 付款方式
	 */
	private String paymentMode;

	/**
	 * 付款帐号
	 */
	private String acId;

	/**
	 * 户名
	 */
	private String acNm;

	/**
	 * 开户行
	 */
	private String acBkNm;

	/**
	 * 是否需要协调人
	 */
	private String coordinator;
	/**
	 * 协调人名称
	 */
	private String coordinatorNm;

	/**
	 * 协调人电子邮箱
	 */
	private String coordinatorEmail;

	/**
	 * 卖方名称
	 */
	private String counterPartyNm;

	/**
	 * 关联额度
	 */
	private String assocAmt;

	/**
	 * 额度类型
	 */
	private String amtTp;

	/**
	 * 推荐状态
	 */
	private String recommSts;

	/**
	 * 附件名称
	 */
	private String attachNm;

	/**
	 * 文件格式
	 */
	private String attachFormat;

	/**
	 * 文件大小
	 */
	private String attachSize;

	/**
	 * 描述
	 */
	private String bewrite;
	
	private String createUser;

	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	private Date createTime;

	private Short status;

	private Date busiDt;

	private String updateUser;

	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8")
	private Date updateTime;

	private List<CntrctReqBean> sellerCommList;
    
    public String getCoordinator() {
    	return coordinator;
    }

	
    public void setCoordinator(String coordinator) {
    	this.coordinator = coordinator;
    }
	
    public String getCntTp() {
    	return cntTp;
    }

    public void setCntTp(String cntTp) {
    	this.cntTp = cntTp;
    }


	public List<CntrctReqBean> getSellerCommList() {
    	return sellerCommList;
    }

    public void setSellerCommList(List<CntrctReqBean> sellerCommList) {
    	this.sellerCommList = sellerCommList;
    }

	public String getCreateUser() {
    	return createUser;
    }

	
    public void setCreateUser(String createUser) {
    	this.createUser = createUser;
    }

	
    public Date getCreateTime() {
    	return createTime;
    }

	
    public void setCreateTime(Date createTime) {
    	this.createTime = createTime;
    }

	
    public Short getStatus() {
    	return status;
    }

	
    public void setStatus(Short status) {
    	this.status = status;
    }

	
    public Date getBusiDt() {
    	return busiDt;
    }

	
    public void setBusiDt(Date busiDt) {
    	this.busiDt = busiDt;
    }

	
    public String getUpdateUser() {
    	return updateUser;
    }

	
    public void setUpdateUser(String updateUser) {
    	this.updateUser = updateUser;
    }

	
    public Date getUpdateTime() {
    	return updateTime;
    }

	
    public void setUpdateTime(Date updateTime) {
    	this.updateTime = updateTime;
    }

	public String getRecUid() {
		return recUid;
	}

	public void setRecUid(String recUid) {
		this.recUid = recUid;
	}

	public String getCntNo() {
		return cntNo;
	}

	public void setCntNo(String cntNo) {
		this.cntNo = cntNo;
	}
	
    public String getProductId() {
    	return productId;
    }

    public void setProductId(String productId) {
    	this.productId = productId;
    }


	public String getProductNm() {
		return productNm;
	}

	public void setProductNm(String productNm) {
		this.productNm = productNm;
	}
	
    public String getCustId() {
    	return custId;
    }
	
    public void setCustId(String custId) {
    	this.custId = custId;
    }

	public String getCustNm() {
		return custNm;
	}

	public void setCustNm(String custNm) {
		this.custNm = custNm;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public BigDecimal getProductLmt() {
		return productLmt;
	}

	public void setProductLmt(BigDecimal productLmt) {
		this.productLmt = productLmt;
	}

	public String getLmtMol() {
		return lmtMol;
	}

	public void setLmtMol(String lmtMol) {
		this.lmtMol = lmtMol;
	}

	public String getPaymentMode() {
		return paymentMode;
	}

	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}

	public String getAcId() {
		return acId;
	}

	public void setAcId(String acId) {
		this.acId = acId;
	}

	public String getAcNm() {
		return acNm;
	}

	public void setAcNm(String acNm) {
		this.acNm = acNm;
	}

	public String getAcBkNm() {
		return acBkNm;
	}

	public void setAcBkNm(String acBkNm) {
		this.acBkNm = acBkNm;
	}

	public String getCoordinatorNm() {
		return coordinatorNm;
	}

	public void setCoordinatorNm(String coordinatorNm) {
		this.coordinatorNm = coordinatorNm;
	}

	public String getCoordinatorEmail() {
		return coordinatorEmail;
	}

	public void setCoordinatorEmail(String coordinatorEmail) {
		this.coordinatorEmail = coordinatorEmail;
	}

	public String getCounterPartyNm() {
		return counterPartyNm;
	}

	public void setCounterPartyNm(String counterPartyNm) {
		this.counterPartyNm = counterPartyNm;
	}

	public String getAssocAmt() {
		return assocAmt;
	}

	public void setAssocAmt(String assocAmt) {
		this.assocAmt = assocAmt;
	}

	public String getAmtTp() {
		return amtTp;
	}

	public void setAmtTp(String amtTp) {
		this.amtTp = amtTp;
	}

	public String getRecommSts() {
		return recommSts;
	}

	public void setRecommSts(String recommSts) {
		this.recommSts = recommSts;
	}

	public String getAttachNm() {
		return attachNm;
	}

	public void setAttachNm(String attachNm) {
		this.attachNm = attachNm;
	}

	public String getAttachFormat() {
		return attachFormat;
	}

	public void setAttachFormat(String attachFormat) {
		this.attachFormat = attachFormat;
	}

	public String getAttachSize() {
		return attachSize;
	}

	public void setAttachSize(String attachSize) {
		this.attachSize = attachSize;
	}

	public String getBewrite() {
		return bewrite;
	}

	public void setBewrite(String bewrite) {
		this.bewrite = bewrite;
	}

}
