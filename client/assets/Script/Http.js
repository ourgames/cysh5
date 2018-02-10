// var Http =  cc.Class.extend({
//     m_inst : null, //实例
//     url : "http://127.0.0.1:8080/request.php",

//     ctor : function(){
//     },

//       /*
//      * 网络请求之GET
//      * url 请求的网络地址
//      * callback 回调参数
//      * */
//     getWithUrl : function(url,callback){
//         var xhr = cc.loader.getXMLHttpRequest();
//         xhr.open("GET",url,true);
//         xhr["onloadend"] = function () {
//             if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status <= 207)) {
//                 err = false;
//             }else{
//                 err = true;
//             }
//             var response = xhr.responseText;
//             callback(err,response);
//         };
//         xhr.send();
//     },
 
//     /*
//      * 网络请求之POST
//      * url 请求的网络地址
//      * params  请求参数  ("id=1&id=2&id=3")
//      * callback 回调参数
//     ['loadstart', 'abort', 'error', 'load', 'loadend', 'timeout']
//     * */
//     sendWithUrl : function(url, params, callback){

//         var xhr = cc.loader.getXMLHttpRequest();
//         xhr.open("POST", url);
//         xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
//         xhr["onloadend"] = function(){

//             var sc = -1
//             if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status <= 207)) {
//                 sc = 0;
//             }

//             var json = JSON.parse(xhr.responseText)
//             var rc = parseInt(json["code"])

//             callback(sc, rc, json);

//             if(sc == 0 && (rc != 0) && RETCODE[rc + ""])
//             {
//                 Alert.getInst().show(RETCODE[rc + ""])
//             }
//             else if(sc != 0 || rc != 0 ){
//                 Alert.getInst().show("sc: " + sc + " rc: " + rc)
//             }
//         }
//        xhr.send(params);
//     }
// });

// //获取实例
// Http.inst = function() {
//     if (Http.m_inst == null) {
//         Http.m_inst = new Http();
//     }
//     return Http.m_inst;
// };


// Http.inst()->sendWithUrl("http://127.0.0.1:8080/request.php", "id=1&id=2&id=3", function(sc, rc, response){  
//   cc.log("返回数据" + response);  
// });  