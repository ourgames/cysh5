package com.sh.msg;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sh.bean.User;
import com.sh.define.ReturnCode;
import com.sh.service.RankService;
import com.sh.service.UserService;

@RestController
@EnableAutoConfiguration
@ComponentScan
public class PhotoWallMsg {
	@Autowired
	private UserService UserService;
	@Autowired
	private RankService RankService;
	
	// 点赞
	@RequestMapping("/like")
	public Map<String, Object> like(Integer user_no) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		if (user_no == null) {
			resultMap.put("ReturnCode", ReturnCode.PARAM_MISSING.getCode());
			return resultMap;
		}

		// 更新玩家
		User user = UserService.like(user_no);
		if(user != null)
		{
			// 更新排行榜
			RankService.updateRank(user_no);
			resultMap.put("ReturnCode", ReturnCode.SUCCESS.getCode());
		}
		else{
			resultMap.put("ReturnCode", ReturnCode.USER_LIKE_MAX.getCode());
		}
		
		resultMap.put("User", user);
		return resultMap;
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