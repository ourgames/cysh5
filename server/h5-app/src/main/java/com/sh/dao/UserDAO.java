package com.sh.dao;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import com.sh.bean.User;

@Mapper
public interface UserDAO {

	// 插入新用户
	@Insert("INSERT INTO tb_user(account_uuid, user_name, last_refresh_time, regist_time, regist_ip) VALUES (#{account_uuid}, #{user_name}, #{last_refresh_time}, #{regist_time}, #{regist_ip})")
	@Options(useGeneratedKeys = true, keyProperty = "user_no")
	public int insert(User user);

	// 根据账户ID获取用户ID
	@Select("SELECT user_no FROM tb_user WHERE account_uuid = #{account_uuid}")
	public Integer selectUserNoByAccount(@Param("account_uuid") String account_uuid);

	// 按编号获取用户详细信息
	@Select("SELECT * FROM tb_user WHERE user_no = #{user_no}")
	public User selectUserInfo(@Param("user_no") int user_no);

	// 修改用户信息
	public Integer updateUserInfo(User user);
}