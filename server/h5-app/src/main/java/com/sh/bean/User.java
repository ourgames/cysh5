package com.sh.bean;

import java.sql.Timestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class User {
	Integer user_no;
	@JsonIgnore
	String account_uuid;
	String user_name;
	String user_photo;
	Integer user_score;
	Integer user_step;
	Integer user_tickets;
	Integer user_be_liked;
	@JsonIgnore
	Integer user_likes_today;
	@JsonIgnore
	Integer user_likes_total;
	@JsonIgnore
	Timestamp last_refresh_time;
	String phone_no;
	@JsonIgnore
	Integer qq_no;
	String address;
	@JsonIgnore
	Timestamp regist_time;
	@JsonIgnore
	String regist_ip;
	
	public Integer getUser_no() {
		return user_no;
	}
	public void setUser_no(Integer user_no) {
		this.user_no = user_no;
	}
	public String getAccount_uuid() {
		return account_uuid;
	}
	public void setAccount_uuid(String account_uuid) {
		this.account_uuid = account_uuid;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public String getUser_photo() {
		return user_photo;
	}
	public void setUser_photo(String user_photo) {
		this.user_photo = user_photo;
	}
	public Integer getUser_score() {
		return user_score;
	}
	public void setUser_score(Integer user_score) {
		this.user_score = user_score;
	}
	public Integer getUser_step() {
		return user_step;
	}
	public void setUser_step(Integer user_step) {
		this.user_step = user_step;
	}
	public Integer getUser_tickets() {
		return user_tickets;
	}
	public void setUser_tickets(Integer user_tickets) {
		this.user_tickets = user_tickets;
	}
	public Integer getUser_be_liked() {
		return user_be_liked;
	}
	public void setUser_be_liked(Integer user_be_liked) {
		this.user_be_liked = user_be_liked;
	}
	public Integer getUser_likes_today() {
		return user_likes_today;
	}
	public void setUser_likes_today(Integer user_likes_today) {
		this.user_likes_today = user_likes_today;
	}
	public Integer getUser_likes_total() {
		return user_likes_total;
	}
	public void setUser_likes_total(Integer user_likes_total) {
		this.user_likes_total = user_likes_total;
	}
	public Timestamp getLast_refresh_time() {
		return last_refresh_time;
	}
	public void setLast_refresh_time(Timestamp last_refresh_time) {
		this.last_refresh_time = last_refresh_time;
	}
	public String getPhone_no() {
		return phone_no;
	}
	public void setPhone_no(String phone_no) {
		this.phone_no = phone_no;
	}
	public Integer getQq_no() {
		return qq_no;
	}
	public void setQq_no(Integer qq_no) {
		this.qq_no = qq_no;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Timestamp getRegist_time() {
		return regist_time;
	}
	public void setRegist_time(Timestamp regist_time) {
		this.regist_time = regist_time;
	}
	public String getRegist_ip() {
		return regist_ip;
	}
	public void setRegist_ip(String regist_ip) {
		this.regist_ip = regist_ip;
	}
}
