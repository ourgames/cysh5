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

	public ReturnCode insert(String uuid, String user_name, String ip) {
		User user = (User) SpringUtil.getBean("User");
		user.setAccount_uuid(uuid);
		user.setUser_name(user_name);
		// 记录插入IP
		user.setRegist_ip(ip);
		// 记录插入时间
		user.setRegist_time(TimeUtil.now());
		// 记录最后刷新时间
		user.setLast_refresh_time(TimeUtil.now());

		try{
			if (UserDAO.insert(user) > 0) {
				return ReturnCode.SUCCESS;
			}
		}
		catch(Exception e){
			Log.error("插入玩家失败", e);
			return ReturnCode.USER_INSERT_FAILED;
		}
		
		return ReturnCode.USER_INSERT_FAILED;
	}
}
