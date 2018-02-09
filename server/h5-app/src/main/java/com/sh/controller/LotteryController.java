package com.sh.controller;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@EnableAutoConfiguration
@ComponentScan
public class LotteryController {
	// 开始抽奖
	@RequestMapping("/startlottery")
	public String startlottery() {
		return "Hello page";
	}

	// 用户登录消息
	@RequestMapping("/signin")
	public String signin() {
		return "Hello page";
	}
}