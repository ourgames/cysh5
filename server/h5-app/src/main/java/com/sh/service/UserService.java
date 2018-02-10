package com.sh.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.sh.bean.User;
import com.sh.dao.UserDAO;
import com.sh.define.ReturnCode;
import com.sh.util.Log;
import com.sh.util.SpringUtil;
import com.sh.util.TimeUtil;

public class UserService {
	@Autowired
	private UserDAO UserDAO;
	@Autowired
	private TimeUtil TimeUtil;

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

		try {
			int user_no = UserDAO.insert(user);
			if (user_no > 0) {
				// user.setUser_no(user_no);
				return user;
			}
		} catch (Exception e) {
			Log.error("插入玩家失败", e);
			return null;
		}

		return null;
	}
}
