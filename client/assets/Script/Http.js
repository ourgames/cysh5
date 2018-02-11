var Http = cc.Class({
    extends: cc.Component,

    properties: {
    },

	statics: {
        init: null
    },
    onLoad: function(){
    	Http.init = this;
    	cc.log("http init");
    },
	/*
     * 网络请求之GET
     * url 请求的网络地址
     * callback 回调参数
     * */
    getWithUrl : function(url,callback){
        var request = cc.loader.getXMLHttpRequest();
	    cc.log("Status: Send Get Request to " + url);
	    request.open("GET", url, true);
	    request.setRequestHeader("Access-Control-Allow-Origin", "*");
	    request.setRequestHeader("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With, X-HTTP-Method-Override");
	    request.setRequestHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	    request.setRequestHeader("X-Powered-By","Jetty");
	    // request.setRequestHeader("Content-Type","application/x-www-form-urlencode;charset=UTF-8");
	    request.onreadystatechange = function () {
	    	cc.log("request.status:"+request.status)
	        // if (request.readyState == 4 && (request.status >= 200 && request.status <= 207)) {
	        //     var httpStatus = request.statusText;
	        //     var response = request.responseText;
	        //     cc.log("Status: Got GET response! " + httpStatus);
	        //     callback(false, request);
	        // }else{
	        //     callback(true, request);
	        // }
	        if(request.readyState == 4 && request.status == 200){
            	var response = request.responseText;
            	if(callback)
                	callback(true, response);
	        }else if(request.readyState == 4 && request.status != 200){
	            var response = request.responseText;
            	if(callback)
	            	callback(false, response);
	        }
	    };
	    request.send();
    },
});
