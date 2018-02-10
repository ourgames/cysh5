package com.sh.bean;

import java.sql.Timestamp;

public class Favourite {
	Long favourite_no;
	int user_no;
	int is_like;
	Long product_no;
	int product_status;
	Timestamp opt_time;
	
	int result;

	public int getResult() {
		return result;
	}
	public void setResult(int result) {
		this.result = result;
	}
	public int getUser_no() {
		return user_no;
	}
	public void setUser_no(int user_no) {
		this.user_no = user_no;
	}
	public int getIs_like() {
		return is_like;
	}
	public void setIs_like(int is_like) {
		this.is_like = is_like;
	}
	public int getProduct_status() {
		return product_status;
	}
	public void setProduct_status(int product_status) {
		this.product_status = product_status;
	}
	public Timestamp getOpt_time() {
		return opt_time;
	}
	public void setOpt_time(Timestamp opt_time) {
		this.opt_time = opt_time;
	}
	public Long getFavourite_no() {
		return favourite_no;
	}
	public void setFavourite_no(Long favourite_no) {
		this.favourite_no = favourite_no;
	}
	public Long getProduct_no() {
		return product_no;
	}
	public void setProduct_no(Long product_no) {
		this.product_no = product_no;
	}
}
