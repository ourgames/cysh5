package com.sh.msg;

import java.util.HashMap;
import java.util.Map;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.sh.define.ReturnCode;

@Controller
@EnableAutoConfiguration
@ComponentScan
public class LotteryMsg {
	// 开始抽奖
	@RequestMapping("/startlottery")
	public Map<String, Object> startlottery() {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("ReturnCode", ReturnCode.SUCCESS.getCode());
		resultMap.put("Step", 4);
		
		return resultMap;
	}
}