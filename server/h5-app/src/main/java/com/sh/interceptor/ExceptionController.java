package com.sh.interceptor;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sh.util.Log;

@ControllerAdvice
public class ExceptionController {
	// 服务器全局异常处理
	@ExceptionHandler(value = Exception.class)
	@ResponseBody
	public String error(HttpServletRequest request, Exception exception)
			throws Exception {
		Log.error("消息处理失败", exception);
		return "消息处理失败";
	}

}
