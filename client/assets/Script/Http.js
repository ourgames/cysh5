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

	    request.onreadystatechange = function () {
	    	cc.log("request.status:"+request.status)
	        if (request.readyState == 4 && (request.status >= 200 && request.status <= 207)) {
	            var httpStatus = request.statusText;
	            var response = request.responseText;
	            cc.log("Status: Got GET response! " + httpStatus);
	            callback(true, request);
	        }else{
	            callback(false, request);
	        }
	    };
	    request.send();
    },
});
