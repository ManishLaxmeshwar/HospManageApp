package com.test.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


//@AllArgsConstructor
//@NoArgsConstructor
@Table(name="patient_record")
@Entity
public class Patient {
	@Id
	private int pId;
	private String pName;
	private String pEmail;
	private String pPhone;
	private String pCategory;
	public Patient() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Patient(int pId, String pName, String pEmail, String pPhone, String pCategory) {
		super();
		this.pId = pId;
		this.pName = pName;
		this.pEmail = pEmail;
		this.pPhone = pPhone;
		this.pCategory = pCategory;
	}
	public int getpId() {
		return pId;
	}
	public void setpId(int pId) {
		this.pId = pId;
	}
	public String getpName() {
		return pName;
	}
	public void setpName(String pName) {
		this.pName = pName;
	}
	public String getpEmail() {
		return pEmail;
	}
	public void setpEmail(String pEmail) {
		this.pEmail = pEmail;
	}
	public String getpPhone() {
		return pPhone;
	}
	public void setpPhone(String pPhone) {
		this.pPhone = pPhone;
	}
	public String getpCategory() {
		return pCategory;
	}
	public void setpCategory(String pCategory) {
		this.pCategory = pCategory;
	}
	
	
	

}
