package com.sh.service;

import java.sql.Timestamp;
import java.util.List;

import org.apache.commons.lang3.concurrent.TimedSemaphore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

import com.sh.bean.User;
import com.sh.bean.UserShortInfo;
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
		// 初始化用户初始积分
		user.setUser_score_a(0);
		// 初始化照片
		user.setUser_photo("");
		// 初始化电话号
		user.setPhone_no("");
		// 初始化地址
		user.setAddress("");
		// 初始化点赞数
		user.setUser_be_liked(0);

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

	public User like(int user_no) {
		// 更新我自己的信息
		User user = getUserInfo();
		Integer user_likes_today = user.getUser_likes_today();
		int user_like_max = Integer.parseInt(SHConfig.getConfig("user-like-max"));

		// 判断今天是否还可以点赞
		if (user_likes_today >= user_like_max) {
			return null;
		}

		Integer user_likes_total = user.getUser_likes_total();
		user.setUser_likes_today(user_likes_today = user_likes_today + 1);
		user.setUser_likes_total(user_likes_total = user_likes_total + 1);

		// 如果被赞的是自己
		if (user_no == user.getUser_no()) {
			int be_liked = user.getUser_be_liked();
			user.setUser_be_liked(be_liked + 1);
		} else {
			// 保存其他用户点赞信息
			UserDAO.like(user_no);
		}

		// 保存用户信息
		updateUserInfo(user);
		return user;
	}

	public boolean isNeedRefresh() {
		User user = getUserInfo();
		Long last_refresh_time = user.getLast_refresh_time().getTime();
		Long system_refresh_time = TimeUtil.getTimestampToday(0, 0, 0).getTime();
		// 判断上次刷新是否小于今天0点
		if (last_refresh_time < system_refresh_time) {
			// 需要刷新
			// 重置今天的点赞数
			user.setUser_likes_today(0);

			// 设置刷新时间为现在
			user.setLast_refresh_time(TimeUtil.now());

			// 保存玩家信息
			updateUserInfo(user);
			return true;
		}

		return false;
	}

	public List<UserShortInfo> getUserShortInfos(List<Integer> user_nums) {
		List<UserShortInfo> infos = UserDAO.selectUsersShort(user_nums);
		return infos;
	}
}
