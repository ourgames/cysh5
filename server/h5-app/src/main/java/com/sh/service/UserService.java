package com.sh.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

import com.sh.bean.User;
import com.sh.config.SHConfig;
import com.sh.dao.UserDAO;
import com.sh.define.Define;
import com.sh.util.Log;
import com.sh.util.SpringUtil;
import com.sh.util.TimeUtil;

public class UserService {
	@Autowired
	private UserDAO UserDAO;
	@Autowired
	private TimeUtil TimeUtil;
	@Autowired
	SHConfig SHConfig;

	// 插入新用户
	public User insert(String uuid, String user_name, String ip) {
		User user = (User) SpringUtil.getBean("User");
		user.setAccount_uuid(uuid);
		user.setUser_name(user_name);
		// 记录插入IP
		user.setRegist_ip(ip);
		// 记录插入时间
		user.setRegist_time(TimeUtil.now());
		// 记录最后刷新时间
		user.setLast_refresh_time(TimeUtil.now());
		// 记录初始位置
		Integer start_step = Integer.parseInt(SHConfig.getConfig("start-step"));
		user.setUser_step(start_step);
		// 记录初始奖券数
		Integer init_ticket = Integer.parseInt(SHConfig.getConfig("init-ticket"));
		user.setUser_tickets(init_ticket);

		try {
			int user_no = UserDAO.insert(user);
			if (user_no > 0) {
				return user;
			}
		} catch (Exception e) {
			Log.error("插入玩家失败", e);
			return null;
		}

		return null;
	}

	public Integer getUserNo(String account_uuid) throws Exception {

		return UserDAO.selectUserNoByAccount(account_uuid);
	}

	public Integer getUserNo() {
		Integer user_no = (Integer) RequestContextHolder.currentRequestAttributes().getAttribute(Define.USER_NO,
				RequestAttributes.SCOPE_SESSION);
		return user_no;
	}

	public User getUserInfo() {
		return getUserInfo(getUserNo());
	}

	public User getUserInfo(int user_no) {
		return UserDAO.selectUserInfo(user_no);
	}

	public User updateUserInfo(User user) {
		try {
			Integer count = UserDAO.updateUserInfo(user);
			if (count != null && count > 0) {
				return user;
			}
		} catch (Exception e) {
			Log.error("更新玩家信息失败", e);
			return null;
		}

		return null;
	}

	public User updateUserInfo(String user_name, String phone_no, String address) {
		User user = (User) SpringUtil.getBean("User");
		user.setUser_no(getUserNo());
		user.setUser_name(user_name);
		user.setPhone_no(phone_no);
		user.setAddress(address);

		try {
			Integer count = UserDAO.updateUserInfo(user);
			if (count != null && count > 0) {
				return user;
			}
		} catch (Exception e) {
			Log.error("更新玩家信息失败", e);
			return null;
		}

		return null;
	}
}
