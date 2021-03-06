package com.sh.controller;

import com.sh.define.Define;
import com.sh.service.UserService;
import com.sh.util.NetUtil;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@Configuration
public class UserController {
	@Autowired
	private UserService UserService;
	@Autowired
	private NetUtil NetUtil;

	@GetMapping("/")
	public String showUploadPage(Model model) throws IOException {
		return "redirect:/default.html";
	}

	@GetMapping("/index")
	public String index(HttpServletRequest request, String uuid, String like_uuid) throws Exception {
		if (like_uuid != null) {

			// 如果是自己则不点赞
			Integer my_no = UserService.getUserNo();
			// 未登录
			if(my_no == null){
				request.getSession().setAttribute(Define.LIKE_UUID, like_uuid);
			}
			
			Integer like_no = UserService.getUserNo(like_uuid);
			if (like_no != null && my_no != null && !like_no.equals(my_no)) {
				String ip = NetUtil.getRemoteAddress(request);
				UserService.like(like_no, ip);
			}

			// 调用进入场景index.html
			return "index";
		}
		return "redirect:index?like_uuid=" + uuid;
	}
}