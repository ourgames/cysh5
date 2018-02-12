package com.sh.msg;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sh.util.NetUtil;
import com.sh.bean.User;
import com.sh.config.SHConfig;
import com.sh.define.Define;
import com.sh.define.ReturnCode;
import com.sh.service.UserService;

@RestController
@EnableAutoConfiguration
@ComponentScan
public class UserMsg {
	@Autowired
	private NetUtil NetUtil;
	@Autowired
	private UserService UserService;
	@Autowired
	SHConfig SHConfig;

	// 用户注册消息
	@Deprecated
	public Map<String, Object> signup(HttpServletRequest request, String uuid, String user_name) throws Exception {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		if (uuid == null || uuid.isEmpty() || user_name == null || user_name.isEmpty()) {
			resultMap.put("ReturnCode", ReturnCode.PARAM_MISSING.getCode());
			return resultMap;
		}

		String ip = NetUtil.getRemoteAddress(request);
		User user = UserService.insert(uuid, user_name, ip);

		// 插入成功
		if (user != null) {
			resultMap.put("User", user);
			resultMap.put("ReturnCode", ReturnCode.SUCCESS.getCode());
		} else {
			resultMap.put("ReturnCode", ReturnCode.USER_INSERT_FAILED.getCode());
		}

		return resultMap;
	}

	// 用户登录消息
	@RequestMapping("/signin")
	public Map<String, Object> signin(HttpServletRequest request, String uuid) throws Exception {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		if (uuid == null || uuid.isEmpty()) {
			resultMap.put("ReturnCode", ReturnCode.USER_NOT_LOGIN.getCode());
			return resultMap;
		}

		Integer user_no = UserService.getUserNo(uuid);
		User user = null;

		resultMap.put("ReturnCode", ReturnCode.SUCCESS.getCode());
		// 判断用户是否存在
		if (user_no != null) {
			user = UserService.getUserInfo(user_no);

			// 获取用户信息失败
			if (user == null) {
				resultMap.put("ReturnCode", ReturnCode.USER_NOT_EXIST.getCode());
			}
		} else {
			// 不存在用户，进行注册
			String ip = NetUtil.getRemoteAddress(request);
			user = UserService.insert(uuid, SHConfig.getConfig("default-name"), ip);

			// 注册用户失败
			if (user == null) {
				resultMap.put("ReturnCode", ReturnCode.USER_INSERT_FAILED.getCode());
			} else {
				user_no = user.getUser_no();
			}
		}

		request.getSession().setAttribute(Define.USER_NO, user_no);
		resultMap.put("User", user);
		return resultMap;
	}

	// 查询用户信息
	@RequestMapping("/getuserinfo")
	public Map<String, Object> getUserInfo() {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("ReturnCode", ReturnCode.SUCCESS.getCode());
		User user = UserService.getUserInfo();
		// 获取用户信息失败
		if (user == null) {
			resultMap.put("ReturnCode", ReturnCode.USER_NOT_EXIST.getCode());
			return resultMap;
		}

		resultMap.put("User", user);
		return resultMap;
	}

	// 修改用户信息
	@RequestMapping("/updateuserinfo")
	public Map<String, Object> updateUserInfo(String user_name, String phone_no, String address) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("ReturnCode", ReturnCode.SUCCESS.getCode());
		User user = UserService.updateUserInfo(user_name, phone_no, address);
		// 获取用户信息失败
		if (user == null) {
			resultMap.put("ReturnCode", ReturnCode.USER_UPDATE_FAILED.getCode());
			return resultMap;
		}

		resultMap.put("User", user);
		return resultMap;
	}

}