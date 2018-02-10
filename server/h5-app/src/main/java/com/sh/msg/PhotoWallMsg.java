package com.sh.msg;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@EnableAutoConfiguration
@ComponentScan
public class PhotoWallMsg {
	// 点赞
	@RequestMapping("/like")
	public String like() {
		return "Hello page";
	}

	// 请求排行榜
	@RequestMapping("/rank")
	public String rank() {
		return "Hello page";
	}

	// 请求个人照片墙
	@RequestMapping("/getinfo")
	public String getinfo() {
		return "Hello page";
	}

	// 领取奖励
	@RequestMapping("/getrewards")
	public String getrewards() {
		return "Hello page";
	}

	// 填写(修改)信息
	@RequestMapping("/uploadinfo")
	public String uploadinfo() {
		return "Hello page";
	}

}