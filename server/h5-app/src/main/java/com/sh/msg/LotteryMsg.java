package com.sh.msg;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@EnableAutoConfiguration
@ComponentScan
public class LotteryMsg {
	// 开始抽奖
	@RequestMapping("/startlottery")
	public String startlottery() {
		return "Hello page";
	}
}