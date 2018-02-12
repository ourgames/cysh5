package com.sh.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import com.sh.bean.Rank;

@Mapper
public interface RankDAO {

	// 插入排行榜
	@Insert("INSERT INTO tb_rank(user_no, last_refresh_time, likes) VALUES (#{user_no},  #{last_refresh_time}, ${likes})")
	@Options(useGeneratedKeys = true, keyProperty = "rank_no")
	public int insert(Rank rank);

	// 获取排行榜总数量
	@Select("SELECT COUNT(*) FROM tb_rank")
	public Integer selectRankCount();

	// 获取排行榜信息
	@Select("SELECT user_no FROM tb_rank ORDER BY likes DESC LIMIT #{start}, #{limit}")
	public List<Integer> selectRank(@Param("start") Integer start, @Param("limit") Integer limit);

	// 更新排行榜信息
	public void updateRank(@Param("params") Map<String, Object> params);
}