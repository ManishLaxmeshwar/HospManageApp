package com.test.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="loginUser")
public class User {
	
	@Id
	@GeneratedValue
	private Long userId;
	private String email;
	private String password;
	private String confirmPassword;
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	public User(Long userId, String email, String password, String confirmPassword) {
		super();
		this.userId = userId;
		this.email = email;
		this.password = password;
		this.confirmPassword = confirmPassword;
	}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getConfirmPassword() {
		return confirmPassword;
	}
	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}
	@Override
	public String toString() {
		return "User [userId=" + userId + ", email=" + email + ", password=" + password + ", confirmPassword="
				+ confirmPassword + "]";
	}
	
	
}
	
