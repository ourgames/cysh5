package com.sh.csv;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.core.io.ClassPathResource;
import org.springframework.util.ResourceUtils;

import com.opencsv.CSVReader;
import com.sh.util.PropUtil;

@ComponentScan
public class CsvReader {
	@Autowired
	PropUtil PropUtil;

	CsvReader() {
//		String csvPath = PropUtil.getProp("server.csv-dir");
//		File file = ResourceUtils.getFile(csvPath);  
//		org.springframework.core.io.Resource fileRource = new ClassPathResource("*.csv");
//		if (file.isDirectory()) {
//			System.out.println("文件夹");
//			String[] filelist = file.list();
//		}
	}

	void readCsv(String fileName) throws IOException {
		File file = new File(fileName);
		FileReader fReader = new FileReader(file);
		CSVReader csvReader = new CSVReader(fReader);
		String[] strs = csvReader.readNext();
		if (strs != null && strs.length > 0) {
			for (String str : strs)
				if (null != str && !str.equals(""))
					System.out.print(str + " , ");
			System.out.println("\n---------------");
		}
		List<String[]> list = csvReader.readAll();
		for (String[] ss : list) {
			for (String s : ss)
				if (null != s && !s.equals(""))
					System.out.print(s + " , ");
			System.out.println();
		}
		csvReader.close();
	}
}
