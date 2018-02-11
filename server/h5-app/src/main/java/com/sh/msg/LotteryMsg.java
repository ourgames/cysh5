package com.sh.msg;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sh.bean.User;
import com.sh.define.ReturnCode;
import com.sh.service.LotteryService;
import com.sh.service.UserService;

@RestController
@EnableAutoConfiguration
@ComponentScan
public class LotteryMsg {
	@Autowired
	private LotteryService LotteryService;
	@Autowired
	private UserService UserService;

	// 开始抽奖
	@RequestMapping("/startlottery")
	public Map<String, Object> startlottery() {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("ReturnCode", ReturnCode.SUCCESS.getCode());

		User user = UserService.getUserInfo();
		int step = LotteryService.startLottery(user);
		if (step == 0) {
			resultMap.put("ReturnCode", ReturnCode.LOTTERY_START_FAILED.getCode());
			return resultMap;
		}

		resultMap.put("Step", step);
		resultMap.put("User", user);

		return resultMap;
	}
}