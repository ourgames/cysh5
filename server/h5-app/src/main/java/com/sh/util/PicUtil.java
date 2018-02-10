package com.sh.util;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;

@ComponentScan
public class PicUtil {
	private final ResourceLoader resourceLoader;
	@Value("${server.upload-dir}")
	public String SERVER_UPLOAD_DIR;
	@Value("${server.upload-ip}")
	public String SERVER_UPLOAD_IP;
	@Value("${server.port}")
	public String SERVER_PORT;
	@Value("${server.domain}")
	public String SERVER_DOMAIN;

	@Autowired
	public PicUtil(ResourceLoader resourceLoader) {
		this.resourceLoader = resourceLoader;
	}

	public String uploadPic(String media_id, InputStream is)
			throws JsonProcessingException {
		String fileName = String.format("%s.jpg", media_id);
		Path uploadDir = Paths.get(SERVER_UPLOAD_DIR, fileName);
		Log.debug("准备上传的路径:{}", uploadDir.toAbsolutePath().toString());
		try {
			// 判断文件是否已经存在
			if (!Files.exists(uploadDir)) {
				Files.copy(is, uploadDir);
			}
		} catch (IOException e) {
			Log.error("保存图片失败:{}", e);
			return null;
		}

		String URL = String.format("%s/pics/%s", SERVER_DOMAIN, fileName);
		Log.debug("上传图片{}成功", URL);
		return URL;
	}

	public byte[] getPicBinary(MultipartFile file) throws IOException {
		byte[] in_b = null;

		if (!file.isEmpty()) {

			ByteArrayOutputStream swapStream = new ByteArrayOutputStream();
			byte[] buff = new byte[100]; // buff用于存放循环读取的临时数据
			int rc = 0;
			while ((rc = file.getInputStream().read(buff, 0, 100)) > 0) {
				swapStream.write(buff, 0, rc);
			}
			in_b = swapStream.toByteArray(); // in_b为转换之后的结果
		}
		return in_b;
	}

	public Resource getPicResource(String filename) {
		Path downloadDir = Paths.get(SERVER_UPLOAD_DIR, filename);
		Log.debug("准备获取的路径:" + downloadDir.toAbsolutePath().toString());
		return resourceLoader.getResource("file:" + downloadDir.toString());
	}

	// 生成图片URL
	private List<String> generatePicURLs(List<MultipartFile> files)
			throws IOException {
		// 生成图片名称并上传
		List<String> lstPicURLs = new ArrayList<String>();
		MultipartFile file = null;
		for (int i = 0; i < files.size(); ++i) {
			file = files.get(i);
			if (!file.isEmpty()) {
				String name = file.getOriginalFilename();
				String suffix = name.substring(name.lastIndexOf(".") + 1);
				name = generatePicName(suffix);

				Path uploadDir = Paths.get(SERVER_UPLOAD_DIR, name);
				Log.debug("准备上传的路径:" + uploadDir.toAbsolutePath().toString());
				Files.copy(file.getInputStream(), uploadDir);

				String URL = String.format("http://%s:%s/%s/%s",
						SERVER_UPLOAD_IP, SERVER_PORT, SERVER_UPLOAD_DIR, name);
				lstPicURLs.add(URL);
			}
		}

		return lstPicURLs;
	}

	// 随机生成图片名字
	private String generatePicName(String suffix) {
		Date now = new Date();
		SimpleDateFormat outFormat = new SimpleDateFormat("yyyyMMddHHmmssSS");
		NumberFormat nf = NumberFormat.getInstance();
		// 设置是否使用分组
		nf.setGroupingUsed(false);
		// 设置最大整数位数
		nf.setMaximumIntegerDigits(4);
		// 设置最小整数位数
		nf.setMinimumIntegerDigits(4);
		int n = (int) (Math.random() * 100);

		String s = String.format("%s-%s.%s", outFormat.format(now),
				nf.format(n), suffix);
		return s;
	}
}
