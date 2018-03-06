package com.sh.dao;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import com.sh.bean.User;
import com.sh.bean.UserShortInfo;

@Mapper
public interface UserDAO {

	// 插入新用户
	@Insert("INSERT INTO tb_user(account_uuid, user_name, user_photo, user_step, user_tickets, last_refresh_time, address, regist_time, regist_ip) VALUES (#{account_uuid}, #{user_name}, #{user_photo}, #{user_step}, #{user_tickets}, #{last_refresh_time}, #{address}, #{regist_time}, #{regist_ip})")
	@Options(useGeneratedKeys = true, keyProperty = "user_no")
	public int insert(User user);

	// 根据账户ID获取用户ID
	@Select("SELECT user_no FROM tb_user WHERE account_uuid = #{account_uuid}")
	public Integer selectUserNoByAccount(@Param("account_uuid") String account_uuid);

	// 按编号获取用户简要信息
	public List<UserShortInfo> selectUsersShort(@Param("user_nums") List<Integer> user_nums);

	// 按编号获取用户详细信息
	@Select("SELECT * FROM tb_user WHERE user_no = #{user_no}")
	public User selectUserInfo(@Param("user_no") int user_no);

	// 给其他用户点赞
	@Select("UPDATE tb_user SET user_be_liked = user_be_liked + 1, user_be_liked_for_tickets = user_be_liked_for_tickets + 1 WHERE user_no = #{user_no}")
	public User like(@Param("user_no") int user_no);

	// 修改用户信息
	public Integer updateUserInfo(User user);
}