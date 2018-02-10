package com.sh.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.sh.util.Log;
import com.sh.util.NetUtil;
import com.sh.util.SpringUtil;

public class URLInterceptor implements HandlerInterceptor {
	@Override
	public boolean preHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler) throws Exception {
		NetUtil netUtil = (NetUtil) SpringUtil.getBean("NetUtil");
		// 获取请求的IP
		String IP = netUtil.getRemoteAddress(request);
		// 获取请求的URI
		String uri = request.getRequestURI();
		// 获取用户ID
		Integer user_no = (Integer) request.getSession()
				.getAttribute("user_no");

		// TODO 查看是否为黑名单
		// if (isInBlackList(IP)) {
		// response.sendRedirect("/error/usernotlogin");
		// return false;
		// }

		Log.debug("----------[{}]消息开始：来自IP[{}]的用户[{}]，SESSION为[{}]----------",
				uri, IP, user_no, request.getSession().getId());
		return true;
	}

	@Override
	public void postHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		// TODO Auto-generated method stub

	}

	@Override
	public void afterCompletion(HttpServletRequest request,
			HttpServletResponse response, Object handler, Exception ex)
			throws Exception {
		NetUtil netUtil = (NetUtil) SpringUtil.getBean("NetUtil");
		// 获取请求的IP
		String IP = netUtil.getRemoteAddress(request);
		// 获取请求的URI
		String uri = request.getRequestURI();
		// 获取用户ID
		Integer user_no = (Integer) request.getSession()
				.getAttribute("user_no");

		// TODO 查看是否为黑名单
		// if (isInBlackList(IP)) {
		// response.sendRedirect("/error/usernotlogin");
		// return false;
		// }

		Log.debug("----------[{}]消息结束：来自IP[{}]的用户[{}]，SESSION为[{}]----------",
				uri, IP, user_no, request.getSession().getId());
	}

}