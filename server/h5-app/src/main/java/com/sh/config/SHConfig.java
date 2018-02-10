package com.sh.config;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import com.sh.bean.Config;
import com.sh.dao.ConfigDAO;

@Configuration
public class SHConfig {
	@Autowired
	private ConfigDAO ConfigDAO;
	Map<String, String> mapConfig = null;

	public String getConfig(String key) {
		if (mapConfig == null) {
			mapConfig = new HashMap<String, String>();
			List<Config> shConfigs = ConfigDAO.selectConfig();
			for (Config config : shConfigs) {
				mapConfig.put(config.getConfig_key(), config.getConfig_value());
			}
		}

		return mapConfig.get(key);
	}
}
