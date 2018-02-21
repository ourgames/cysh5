package com.sh.controller;

import com.sh.bean.User;
import com.sh.service.UserService;
import com.sh.util.PicUtil;
import com.sh.util.SpringUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.Part;

import java.io.IOException;
import java.io.InputStream;

@Controller
public class UploadController {
	@Autowired
	PicUtil PicUtil;
	@Autowired
	private UserService UserService;

	@GetMapping("/upload")
	public String showUploadPage(Model model) throws IOException {
		return "redirect:/upload/index.html";
	}

	@RequestMapping("/user_photos")
	public String handleFileUpload(HttpServletRequest request) throws IOException, ServletException {
		request.setCharacterEncoding("utf-8");
		Part part = request.getPart("mfile");
		String suffix = getFileSuffix(part);
		InputStream in = part.getInputStream();

		// 获取图片的URL
		String picURL = PicUtil.uploadPic(suffix, in);
		
		// 保存用户图片信息
		User user = (User) SpringUtil.getBean("User");
		Integer user_no = UserService.getUserNo();
		user.setUser_no(user_no);
		user.setUser_photo(picURL);
		UserService.updateUserInfo(user);

		return "redirect:/";
	}

	// 图片展示接口
	@RequestMapping(value = "/pics/{filename:.+}")
	@ResponseBody
	public ResponseEntity<?> getFile(@PathVariable String filename) {
		try {
			return ResponseEntity.ok(PicUtil.getPicResource(filename));
		} catch (Exception e) {
			return ResponseEntity.notFound().build();
		}
	}

	// 获取文件扩展名
	private String getFileSuffix(Part part) {
		String contentType = part.getContentType();
		String suffix = contentType.split("/")[1];
		return suffix;
	}
}
