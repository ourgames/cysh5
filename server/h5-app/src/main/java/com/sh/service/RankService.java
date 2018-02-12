package com.sh.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import com.sh.bean.User;
import com.sh.config.SHConfig;
import com.sh.dao.RankDAO;

public class RankService {
	@Autowired
	private RankDAO RankDAO;
	@Autowired
	UserService UserService;
	@Autowired
	SHConfig SHConfig;

	public List<Integer> getRankInfo(int start, int limit) {
		return RankDAO.selectRank(start, limit);
	}

	public int updateRank(int user_no) {
		Map<String, Object> params = new HashMap<String, Object>();
		// 刷新排行榜
		int rank_max = Integer.parseInt(SHConfig.getConfig("rank-max"));
		User user = UserService.getUserInfo(user_no);
		int result = 0;
		params.put("result", result);
		params.put("user_no", user_no);
		params.put("user_likes", user.getUser_be_liked());
		params.put("rank_max", rank_max);
		
		RankDAO.updateRank(params);
		result = (int) params.get("result");
		return result;
	}

}