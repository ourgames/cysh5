package com.sh.controller;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@EnableAutoConfiguration
@ComponentScan
public class UserController {
	// 用户注册消息
	@RequestMapping("/signup")
	public String signup() {
		return "Hello page";
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