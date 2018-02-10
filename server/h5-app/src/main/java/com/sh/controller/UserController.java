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
	@RequestMapping("/index")
	public String signup(String uuid) {
		
		return "Hello page";
	}
}