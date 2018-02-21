package com.sh.dao;

import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.sh.bean.LikesLimit;

@Mapper
public interface LikesLimitDAO {
	// 获取IP限制信息
	@Select("SELECT * FROM tb_likes_limit WHERE ip = #{ip}")
	public LikesLimit selectLikesLimit(@Param("ip") String ip);

	// 获取IP限制信息
	@Select("INSERT INTO tb_likes_limit (ip, ip_likes_today, ip_likes_total, last_refresh_time) VALUES (#{ip}, #{ip_likes_today}, #{ip_likes_total}, #{last_refresh_time})")
	public Integer insertLikesLimit(LikesLimit likesLimit);

	// IP点赞信息+1
	@Select("UPDATE tb_likes_limit SET ip_likes_today = ip_likes_today + 1, ip_likes_total = ip_likes_total + 1 WHERE ip = #{ip}")
	public Integer like(@Param("ip") String ip);

	// 清楚今日IP点赞信息
	@Select("UPDATE tb_likes_limit SET ip_likes_today = 0 WHERE ip = #{ip}")
	public Integer clear(@Param("ip") String ip);
}
