package com.sh.dao;

import java.util.List;

import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Mapper;
import com.sh.bean.Config;

@Mapper
public interface ConfigDAO {
	// 更新收藏信息
	@Select("SELECT * FROM tb_config")
	public List<Config> selectConfig();
}
