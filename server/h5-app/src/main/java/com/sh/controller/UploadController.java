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

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.InputStream;
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
        request.setCharacterEncoding("utf-8");
        Part part = request.getPart("mfile");
        String fileName = getFileName(part);
        writeTo(fileName, part);
        return "redirect:/";
    }
    
    //取得上传文件名
    private String getFileName(Part part) {
        String header = part.getHeader("Content-Disposition");
        String fileName = header.substring(header.indexOf("filename=\"") + 10,
                header.lastIndexOf("\""));
        return fileName;
    }
  
    //存储文件
    private void writeTo(String fileName, Part part) throws IOException, FileNotFoundException {
    	String contextPath = "D:\\workspace\\cysh5\\server\\h5-app\\src\\main\\resources\\static\\user_photos\\";
        InputStream in = part.getInputStream();
        OutputStream out = new FileOutputStream(contextPath + fileName + ".jpg");
        byte[] buffer = new byte[1024];
        int length = -1;
        while ((length = in.read(buffer)) != -1) {
            out.write(buffer, 0, length);
        }
        in.close();
        out.close();
    }
}
