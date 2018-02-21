package com.sh.controller;

import com.sh.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.io.IOException;

@Controller
@Configuration
public class UserController {
    @Autowired
    private UserService UserService;

    @GetMapping("/index")
    public String index(String uuid, String like_uuid) throws Exception {
        if (like_uuid != null) {

            Integer like_no = UserService.getUserNo(like_uuid);
            // 如果是自己则不点赞
            Integer my_no = UserService.getUserNo();
            if (like_no != null && like_no != my_no) {
                UserService.like(like_no);
            }

            return "index";
        }
        return "redirect:index?like_uuid=" + uuid;
    }
}