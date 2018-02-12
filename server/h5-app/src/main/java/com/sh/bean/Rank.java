package com.sh.bean;

import java.sql.Timestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class Rank {
	@JsonIgnore
	Integer rank_no;
	Integer user_no;
	@JsonIgnore
	Timestamp last_refresh_time;
	Integer likes;
	public Integer getRank_no() {
		return rank_no;
	}
	public void setRank_no(Integer rank_no) {
		this.rank_no = rank_no;
	}
	public Integer getUser_no() {
		return user_no;
	}
	public void setUser_no(Integer user_no) {
		this.user_no = user_no;
	}
	public Timestamp getLast_refresh_time() {
		return last_refresh_time;
	}
	public void setLast_refresh_time(Timestamp last_refresh_time) {
		this.last_refresh_time = last_refresh_time;
	}
	public Integer getLikes() {
		return likes;
	}
	public void setLikes(Integer likes) {
		this.likes = likes;
	}
}
