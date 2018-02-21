package com.sh.controller;

import com.sh.util.PicUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.Part;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@Controller
public class UploadController {
    @Autowired
    PicUtil PicUtil;

    @GetMapping("/upload")
    public String showUploadPage(Model model) throws IOException {
        return "redirect:/upload/index.html";
    }

    @RequestMapping("/user_photos")
    public String handleFileUpload(HttpServletRequest request) throws IOException, ServletException {
//        // 判断文件是否为空
//        if (!file.isEmpty()) {
//            PicUtil.uploadPic("123123", file.getInputStream());
//        }

        Part part = request.getPart("mfile");
        String cd = part.getHeader("Content-Disposition");

        return "redirect:/";
    }
}
