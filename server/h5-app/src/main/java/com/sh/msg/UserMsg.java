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

	// 用户注册消息
	@RequestMapping("/signup")
	public Map<String, Object> signup(HttpServletRequest request, String uuid, String user_name) throws Exception {
		String ip = NetUtil.getRemoteAddress(request);
		User user = UserService.insert(uuid, user_name, ip);
		Map<String, Object> resultMap = new HashMap<String, Object>();

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
	public String signin() {
		return "Hello page";
	}

	// 查询积分
	@RequestMapping("/checkscore")
	public String checkscore() {
		return "Hello page";
	}

	// 查询奖券
	@RequestMapping("/checkticket")
	public String checkticket() {
		return "Hello page";
	}

	// 查询中奖情况
	@RequestMapping("/checkrewards")
	public String checkrewards() {
		return "Hello page";
	}

}