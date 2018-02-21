package com.sh.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.sh.define.Define;
import com.sh.service.UserService;
import com.sh.util.Log;

public class AuthInterceptor implements HandlerInterceptor {
    @Autowired
    private UserService UserService;

    @Override
    public boolean preHandle(HttpServletRequest request,
                             HttpServletResponse response, Object handler) throws Exception {
        // 获取请求的URI
        String uri = request.getRequestURI();
        // 只有登录消息可以通过拦截器
        if (uri.indexOf("/signin") >= 0 || uri.indexOf("/index") >= 0 || uri.indexOf("/") >= 0) {
            return true;
        }

        Integer user_no = (Integer) request.getSession()
                .getAttribute(Define.USER_NO);

        // user_no = 1000000009;

        if (user_no != null) {
            // 检查是否需要刷新玩家
            UserService.isNeedRefresh();
            return true;
        }

        request.getSession().setAttribute("uri_to_go", uri);
        Log.debug("权限拦截:无[{}]地址的访问权限，用户SESSION为[{}]", uri, request.getSession()
                .getId());
        response.sendRedirect("/signin");
        return false;
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
        // TODO Auto-generated method stub

    }

}