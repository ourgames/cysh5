package com.sh.msg;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sh.bean.UserShortInfo;
import com.sh.config.SHConfig;
import com.sh.define.ReturnCode;
import com.sh.service.RankService;
import com.sh.service.UserService;

@RestController
@EnableAutoConfiguration
@ComponentScan
public class RankMsg {
	@Autowired
	private RankService RankService;
	@Autowired
	private UserService UserService;
	@Autowired
	SHConfig SHConfig;

	// 请求排行榜信息
	@RequestMapping("/rank")
	public Map<String, Object> rank(Integer start, Integer limit) throws Exception {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		if (start == null || limit == null) {
			resultMap.put("ReturnCode", ReturnCode.PARAM_MISSING.getCode());
			return resultMap;
		}

		List<Integer> lstRankInfo = RankService.getRankInfo(start, limit);
		List<UserShortInfo> infos = UserService.getUserShortInfos(lstRankInfo);

		resultMap.put("ReturnCode", ReturnCode.SUCCESS.getCode());
		resultMap.put("Rank", infos);

		return resultMap;
	}
}