package com.sh.bean;

import java.sql.Timestamp;

public class LikesLimit {
	String ip;
	Integer ip_likes_today;
	Integer ip_likes_total;
	Timestamp last_refresh_time;
	public String getIp() {
		return ip;
	}
	public void setIp(String ip) {
		this.ip = ip;
	}
	public Integer getIp_likes_today() {
		return ip_likes_today;
	}
	public void setIp_likes_today(Integer ip_likes_today) {
		this.ip_likes_today = ip_likes_today;
	}
	public Integer getIp_likes_total() {
		return ip_likes_total;
	}
	public void setIp_likes_total(Integer ip_likes_total) {
		this.ip_likes_total = ip_likes_total;
	}
	public Timestamp getLast_refresh_time() {
		return last_refresh_time;
	}
	public void setLast_refresh_time(Timestamp last_refresh_time) {
		this.last_refresh_time = last_refresh_time;
	}
	
	
}
