package com.sh.util;

import java.sql.Timestamp;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

public class TimeUtil {
	public Timestamp now() {
		Date date = new Date();
		Timestamp now = new Timestamp(date.getTime());
		return now;
	}

	public Timestamp getDateAfterNow(int days) {
		Date date = new Date();
		// 记录过期时间
		Calendar calendar = new GregorianCalendar();
		calendar.setTime(date);
		calendar.add(Calendar.DATE, days);// 把日期往后增加一天.整数往后推,负数往前移动
		date = calendar.getTime(); // 这个时间就是日期往后推一天的结果
		Timestamp after_time = new Timestamp(date.getTime());

		return after_time;
	}

	public Timestamp getTimestampToday(int hour, int minute, int second) {
		Date date = new Date();

		Calendar calendar = new GregorianCalendar();
		calendar.setTime(new Date());
		calendar.set(Calendar.HOUR_OF_DAY, hour);
		calendar.set(Calendar.MINUTE, minute);
		calendar.set(Calendar.SECOND, second);
		calendar.set(Calendar.MILLISECOND, 0);
		calendar.add(Calendar.DAY_OF_MONTH, 0);

		date = calendar.getTime();
		Timestamp today_time = new Timestamp(date.getTime());
		return today_time;
	}

	public long getNowSecond() {
		Date date = new Date();
		Timestamp now = new Timestamp(date.getTime());
		return now.getTime() / 1000;
	}

}
