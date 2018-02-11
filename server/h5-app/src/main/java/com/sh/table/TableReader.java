package com.sh.table;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternResolver;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sh.util.Log;
import com.sh.util.PropUtil;

@ComponentScan
public class TableReader {
	Map<Class<?>, Map<Integer, Object>> mapJsonData = new HashMap<Class<?>, Map<Integer, Object>>();
	Map<Class<?>, List<Object>> mapJsonList = new HashMap<Class<?>, List<Object>>();

	TableReader() throws ClassNotFoundException, InstantiationException, IllegalAccessException {
		ResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
		try {
			// 获取所有匹配的文件
			String jsonFiles = PropUtil.getProp("server.json");
			Resource[] resources = resolver.getResources(jsonFiles);
			for (Resource resource : resources) {
				String filename = resource.getFilename();
				String name = filename.substring(0, filename.length() - 5);
				File file = resource.getFile();
				readJson(name, file);
			}
		} catch (IOException e) {
			Log.error("读取Json文件失败", e);
		}
	}

	void readJson(String name, File file)
			throws IOException, ClassNotFoundException, InstantiationException, IllegalAccessException {
		String jsonData = jsonRead(file);

		Class<?> cls = Class.forName("com.sh.table." + name);
		Map<Integer, Object> tableMap = new HashMap<Integer, Object>();
		List<Object> tableList = new ArrayList<Object>();

		try {
			JSONObject json = new JSONObject(jsonData);
			Iterator<?> it = json.keys();
			while (it.hasNext()) {
				String key = (String) it.next();
				String value = json.get(key).toString();
				Integer nkey = Integer.parseInt(key);
				ObjectMapper mapper = new ObjectMapper();
				Object object = mapper.readValue(value, cls);
				tableMap.put(nkey, object);
				tableList.add(object);
			}
		} catch (JSONException e) {
			e.printStackTrace();
		}

		mapJsonData.put(cls, tableMap);
		mapJsonList.put(cls, tableList);
	}

	@SuppressWarnings("unchecked")
	public <T> T getTableRow(Class<T> cls, Integer nKey) {
		try {
			return (T) mapJsonData.get(cls).get(nKey);
		} catch (NullPointerException e) {
			Log.error("表{}中不存在主键为{}的行", cls.getName(), nKey);
			return null;
		}
	}

	@SuppressWarnings("unchecked")
	public <T> List<T> getTable(Class<T> cls) {
		List<T> lst = (List<T>) mapJsonList.get(cls);
		return lst;
	}

	@SuppressWarnings("unchecked")
	public <T> T getTableRowByIndex(Class<T> cls, int index) {
		try {
			return (T) mapJsonList.get(cls).get(index);
		} catch (NullPointerException e) {
			return null;
		}
	}

	/**
	 * 读取文件类容为字符串
	 * 
	 * @param file
	 * @return
	 */
	private String jsonRead(File file) {
		Scanner scanner = null;
		StringBuilder buffer = new StringBuilder();
		try {
			scanner = new Scanner(file, "utf-8");
			while (scanner.hasNextLine()) {
				buffer.append(scanner.nextLine());
			}
		} catch (Exception e) {

		} finally {
			if (scanner != null) {
				scanner.close();
			}
		}
		return buffer.toString();
	}
}
