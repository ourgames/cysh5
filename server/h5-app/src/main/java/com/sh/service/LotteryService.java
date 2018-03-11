package com.sh.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sh.bean.User;
import com.sh.config.SHConfig;
import com.sh.define.ReturnCode;
import com.sh.table.TableReader;
import com.sh.table.battle;
import com.sh.table.battle_step;
import com.sh.table.weight_pool;
import com.sh.util.Log;
import com.sh.util.RandomUtil;
import com.sh.util.RandomUtil.RandomObject;

public class LotteryService {
	@Autowired
	private UserService UserService;
	@Autowired
	private TableReader TableReader;
	@Autowired
	SHConfig SHConfig;
	@Autowired
	RandomUtil RandomUtil;

	static final int MAX_STEP = 28;
	static final int MAX_SCORE_B_MAX = 100;

	// 开始摇奖
	public Map<String, Integer> startLottery(User user) {
		Map<String, Integer> mapResult = new HashMap<String, Integer>();
		// 判断抽奖券是否足够
		Integer tickets = user.getUser_tickets();
		if (tickets == null || tickets <= 0) {
			mapResult.put("ReturnCode", ReturnCode.LOTTERY_TICKETS_NOT_ENOUGHT.getCode());
			return mapResult;
		}
		// 减少抽奖券
		Integer tickets_cost = Integer.parseInt(SHConfig.getConfig("tickets-cost"));
		tickets = tickets - tickets_cost;

		// 获取积分
		Integer score_a = user.getUser_score_a();
		Integer score_b = user.getUser_score_b();
		// Integer score_add =
		// Integer.parseInt(SHConfig.getConfig("score-add"));

		// 获取用户当前pos
		Integer currentStep = user.getUser_step();
		mapResult = calculateStep(currentStep, score_b, user);

		// 获取增加的积分
		battle battleInfo = TableReader.getTableRow(battle.class, currentStep);
		Integer score_add = battleInfo.getScore();

		// 添加积分
		score_a = score_a + score_add;
		score_b = loopAdd(MAX_SCORE_B_MAX, score_b, score_add);

		// 保存用户各种信息
		user.setUser_score_a(score_a);
		user.setUser_score_b(score_b);
		user.setUser_tickets(tickets);
		user.setUser_step(mapResult.get("finalStep"));
		UserService.updateUserInfo(user);

		mapResult.put("ReturnCode", ReturnCode.SUCCESS.getCode());
		return mapResult;
	}

	// 计算最终步骤
	private Map<String, Integer> calculateStep(int currentStep, int score_b, User user) {
		Map<String, Integer> mapResult = new HashMap<String, Integer>();
		int diceKey = getWeightPool(currentStep, score_b);
		battle_step stepInfo = TableReader.getTableRow(battle_step.class, diceKey);

		// 组装骰子值
		RandomObject[] objects = new RandomObject[stepInfo.getWeight().size()];
		List<Integer> lstWeights = stepInfo.getWeight();

		// 随机骰子值
		for (int i = 0; i < objects.length; ++i) {
			RandomObject object = RandomUtil.getRandomObject(i + 1, lstWeights.get(i));
			objects[i] = object;
		}

		// 计算骰子步数
		int diceValue = (Integer) RandomUtil.randomByWeight(objects);
		Integer finalStep = move(currentStep, diceValue, user);

		mapResult.put("diceValue", diceValue);
		mapResult.put("finalStep", finalStep);
		return mapResult;
	}

	// 根据骰子点数向前移动，返回最终点数
	@SuppressWarnings("unchecked")
	private int move(int currentStep, int diceValue, User user) {
		int finalStep = loopAdd(MAX_STEP, currentStep, diceValue);

		// 计算棋盘触发事件
		battle battleInfo = TableReader.getTableRow(battle.class, finalStep);
		if (battleInfo.getEvent_type() != null) {
			switch (battleInfo.getEvent_type()) {
			case "move":
				int moveStep = Integer.parseInt(battleInfo.getEvent_value());
				finalStep = move(finalStep, moveStep, user);
				Log.debug("触发移动事件，移动{}步", moveStep);
				break;
			case "reward":
				ObjectMapper mapper = new ObjectMapper(); // 转换器
				List<String> lstRewards = null;
				String rewards = user.getRewards();
				try {
					if (rewards == null) {
						lstRewards = new ArrayList<String>();
					}
					// 转换成map
					else {
						lstRewards = mapper.readValue(rewards, ArrayList.class);
					}

					String rewardValue = battleInfo.getEvent_value();
					// 记录该玩家的奖励信息
					lstRewards.add(rewardValue);
					rewards = mapper.writeValueAsString(lstRewards);
					user.setRewards(rewards);
				} catch (IOException e) {
					Log.error("JSON转换失败", e);
				}
				break;
			}
		}
		
		return finalStep;

	}

	// 取出当前权重档位
	private int getWeightPool(int currentStep, int score_b) {
		List<weight_pool> lstPools = TableReader.getTable(weight_pool.class);
		int poolID = 0;
		for (weight_pool pool : lstPools) {
			if (score_b >= pool.getNeed_score()) {
				poolID = pool.getWeight_id();
			}
		}

		// 拼凑出池ID
		poolID = poolID * 1000 + currentStep;
		return poolID;
	}

	// 循环加法算法
	private int loopAdd(int max, int current, int add) {
		int result = current + add;
		if (result > max) {
			result = result - max;
		} else if (result < 0) {
			result = result + max;
		}

		return result;
	}
}
