package com.sh.util;

import java.util.Random;

public class RandomUtil {
	public static final Random RANDOM = new Random(System.currentTimeMillis());

	public class RandomObject {
		public RandomObject(Object object, int weight) {
			this.object = object;
			this.weight = weight;
		}

		Object object;
		int weight;
	}

	public RandomObject getRandomObject(Object object, int weight) {
		return new RandomObject(object, weight);
	}

	// 根据权重随机出一个值
	public Object randomByWeight(RandomObject[] objects) {
		// 权重之和
		int nTotalWeight = 0;
		for (RandomObject object : objects) {
			nTotalWeight += object.weight;
		}
		if (nTotalWeight == 0)
			return null;
		// 随机值

		int nRandomValue = Math.abs(RANDOM.nextInt()) % nTotalWeight + 1;

		// 循环减去各权重，结果<=0，则跳出循环，完成掉落，否则减去权重后，继续参与运算；
		for (RandomObject object : objects) {
			nRandomValue -= object.weight;
			if (nRandomValue <= 0) {
				return object.object;
			}
		}
		return null;
	}
}
