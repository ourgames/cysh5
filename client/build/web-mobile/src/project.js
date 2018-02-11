require=function e(t,o,n){function i(c,r){if(!o[c]){if(!t[c]){var u="function"==typeof require&&require;if(!r&&u)return u(c,!0);if(s)return s(c,!0);var l=new Error("Cannot find module '"+c+"'");throw l.code="MODULE_NOT_FOUND",l}var a=o[c]={exports:{}};t[c][0].call(a.exports,function(e){var o=t[c][1][e];return i(o||e)},a,a.exports,e,t,o,n)}return o[c].exports}for(var s="function"==typeof require&&require,c=0;c<n.length;c++)i(n[c]);return i}({Config:[function(e,t,o){"use strict";cc._RF.push(t,"aaa0022uW1Ep5HRGsb1Tk5p","Config");var n=[{id:"like2ticket",value:"100;200;500;1000;2000"},{id:"score_rewards",value:"100;200;500;1000;2000"},{id:"battle_cost",value:"1"},{id:"start_time",value:"1518537600"},{id:"end_time",value:"1519142400"}],i=[{id:"reward_1",name:"20元代金券"},{id:"reward_2",name:"50元代金券"},{id:"reward_3",name:"迪奥粉饼"},{id:"reward_4",name:"TF口红"},{id:"reward_5",name:"TF07口红"},{id:"reward_6",name:"纪梵希礼盒"}],s=[{id:"pos_1",score:"10"},{id:"pos_2",event_type:"move",event_value:"2",score:"20",tips:"前进两步"},{id:"pos_3",score:"30"},{id:"pos_4",event_type:"move",event_value:"-3",score:"40",tips:"后退三步"},{id:"pos_5",score:"50"},{id:"pos_6",event_type:"reward",event_value:"reward_1",score:"60",tips:"恭喜获得奖励1"},{id:"pos_7",score:"70"},{id:"pos_8",score:"80"},{id:"pos_9",score:"90"},{id:"pos_10",event_type:"reward",event_value:"reward_2",score:"100",tips:"恭喜获得奖励2"},{id:"pos_11",score:"110"},{id:"pos_12",score:"120"},{id:"pos_13",event_type:"move",event_value:"2",score:"130",tips:"前进两步"},{id:"pos_14",score:"140"},{id:"pos_15",score:"150"},{id:"pos_16",event_type:"reward",event_value:"reward_3",score:"160",tips:"恭喜获得奖励3"},{id:"pos_17",score:"170"},{id:"pos_18",score:"180"},{id:"pos_19",event_type:"reward",event_value:"reward_4",score:"190",tips:"恭喜获得奖励4"},{id:"pos_20",score:"200"},{id:"pos_21",score:"210"},{id:"pos_22",event_type:"reward",event_value:"reward_5",score:"220",tips:"恭喜获得奖励5"},{id:"pos_23",score:"230"},{id:"pos_24",event_type:"move",event_value:"5",score:"240",tips:"前进五步"},{id:"pos_25",score:"250"},{id:"pos_26",score:"260"},{id:"pos_27",score:"270"},{id:"pos_28",score:"280"}];cc.Class({extends:cc.Component,properties:{},statics:{setting:null,reward:null,battle:null},onLoad:function(){D.config=this,D.config.setting=this.setting=n,D.config.reward=this.reward=i,D.config.battle=this.battle=s},start:function(){},getItemById:function(e,t){return e.filter(function(e){return e.id==t})}}),cc._RF.pop()},{}],GameLogic:[function(e,t,o){"use strict";cc._RF.push(t,"d85e9q/1UhDaYljzPGla5UE","GameLogic"),cc.Class({extends:cc.Component,properties:{label_my_score:{default:null,type:cc.RichText},progress_bar:{default:null,type:cc.ProgressBar},label_summon_tips:{default:null,type:cc.RichText},btn_start:{default:null,type:cc.Button},label_summon_info:{default:null,type:cc.RichText},miku:{default:null,type:e("RoleCtrl")},tile:{default:null,type:cc.Node},label_pop:{default:null,type:cc.Label},dice:{default:null,type:sp.Skeleton}},statics:{curStep:28,targetStep:28,diceCount:0,isMoving:!1,isMovingEnd:!0},onLoad:function(){D.gameLogic=this,this.curStep=28,this.curStep=0,this.isMoving=!1,this.isMovingEnd=!0,this.dice=this.dice.getComponent("sp.Skeleton"),this.refreshPanel()},start:function(){},movingCallback:function(){D.gameLogic.isMovingEnd=!0},update:function(e){if(this.isMoving&&this.isMovingEnd){if(0==this.diceCount){var t=D.config.getItemById(D.config.battle,"pos_"+this.curStep);if(t=t[0],cc.log("----c_event:"+t.event_type),null==t||null==t.event_type)return cc.log("--0--c_event null:"),this.miku.Idle(),void(this.isMoving=!1);if("move"==t.event_type)cc.log("--1--c_event:"+t.event_value),this.diceCount=parseInt(t.event_value),this.triggerEvent(t);else if("reward"==t.event_type)return cc.log("--2--c_event:"+t.event_value),this.isMoving=!1,this.miku.Idle(),void this.triggerEvent(t)}this.diceCount>0?(this.curStep+=1,this.diceCount-=1):this.diceCount<0&&(this.curStep-=1,this.diceCount+=1),this.curStep=this.curStep>=28?this.curStep-28:this.curStep,this.curStep=this.curStep<=0?this.curStep+28:this.curStep;var o=this.tile.getChildByName("tile_"+this.curStep).getPosition();this.isMovingEnd=!1,this.miku.RunTo(o,this.movingCallback)}},setScore:function(e){var t="<color=#ffffff>我的积分:</c><color=#ffe178>"+e+"</color>";this.label_my_score.string=t;var o=e/2e3>1?1:e/2e3;this.progress_bar.progress=o},setSummonTips:function(e){var t="<color=#ffffff>再获得</c><color=#ffe178>"+e+"</color><color=#ffffff>票即可获得一次抽奖机会</c>";this.label_summon_tips.string=t},setSummonInfo:function(e){var t="<color=#000000>我的抽奖卷:</c><color=#ff0000>"+e+"</color><color=#000000>张</c>";this.label_summon_info.string=t},ctrlMiku:function(e,t,o){t=(t=t>=28?t-28:t)<=0?t+28:t;var n=this.tile.getChildByName("tile_"+t).getPosition();"idle"==e?this.miku.Idle():"run"==e&&this.miku.RunTo(n)},refreshPanel:function(){this.setScore(D.common.userInfo.user_score),this.setSummonInfo(D.common.userInfo.user_tickets),this.setSummonTips(D.common.userInfo.user_tickets)},triggerEvent:function(e){this.label_pop.string=e.tips,cc.log("----triggerEvent:")},onBtnSummon:function(){D.common.Summon(this.onRoll.bind(this))},onRoll:function(e){var t=cc.callFunc(function(){this.dice.setAnimation(0,"dice"+e,!1)}.bind(this)),o=cc.delayTime(1),n=cc.callFunc(function(){D.gameLogic.diceCount=parseInt(e),cc.log("callback:"+D.gameLogic.diceCount),D.gameLogic.targetStep+=e,D.gameLogic.isMoving=!0}.bind(this)),i=cc.sequence(t,o,n);this.node.runAction(i)}}),cc._RF.pop()},{RoleCtrl:"RoleCtrl"}],Globals:[function(e,t,o){"use strict";cc._RF.push(t,"d6ba3aO3PVFDY4h0XQUp6BR","Globals"),window.D={common:null,config:null,gameLogic:null},cc._RF.pop()},{}],HelloWorld:[function(e,t,o){"use strict";cc._RF.push(t,"280c3rsZJJKnZ9RqbALVwtK","HelloWorld"),cc.Class({extends:cc.Component,properties:{label:{default:null,type:cc.Label},text:"Hello, World!"},onLoad:function(){var e=cc.sys.localStorage.getItem("uuid");this.getComponent(cc.Label).string=""+e},update:function(e){}}),cc._RF.pop()},{}],Http:[function(e,t,o){"use strict";cc._RF.push(t,"61ebc++7MZF57Ae9widmWNC","Http");var n=cc.Class({extends:cc.Component,properties:{},statics:{init:null},onLoad:function(){n.init=this,cc.log("http init")},getWithUrl:function(e,t){var o=cc.loader.getXMLHttpRequest();cc.log("Status: Send Get Request to "+e),o.open("GET",e,!0),o.setRequestHeader("Access-Control-Allow-Origin","*"),o.setRequestHeader("Access-Control-Allow-Headers","Content-Type, Content-Length, Authorization, Accept, X-Requested-With, X-HTTP-Method-Override"),o.setRequestHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS"),o.setRequestHeader("X-Powered-By","Jetty"),o.onreadystatechange=function(){if(cc.log("request.status:"+o.status),4==o.readyState&&200==o.status){e=o.responseText;t&&t(!0,e)}else if(4==o.readyState&&200!=o.status){var e=o.responseText;t&&t(!1,e)}},o.send()}});cc._RF.pop()},{}],RoleCtrl:[function(e,t,o){"use strict";cc._RF.push(t,"4c94fFmbXtG4oIXKon/37H+","RoleCtrl");cc.Class({extends:cc.Component,editor:{requireComponent:sp.Skeleton},properties:{},onLoad:function(){this.spine=this.getComponent("sp.Skeleton");this.Idle()},start:function(){},Idle:function(){this.node.setScaleX(1),this.spine.setAnimation(0,"miku_idle",!0)},RunTo:function(e,t){this.spine=this.getComponent("sp.Skeleton");this.spine.setAnimation(0,"miku_run",!0);var o=this.node.getPosition(),n=cc.pSub(e,o);n.x>10?this.node.setScaleX(1):n.x<-10&&this.node.setScaleX(-1);var i=cc.moveTo(1,e),s=cc.callFunc(t),c=cc.sequence(i,s);this.node.runAction(c)}});cc._RF.pop()},{}],base64:[function(e,t,o){"use strict";cc._RF.push(t,"d10b0SrH9VI3rFPiimKKdbq","base64");new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);cc._RF.pop()},{}],common:[function(e,t,o){"use strict";cc._RF.push(t,"16a9a9XREZK5qFdRa5ig/vl","common");var n={user_no:1000001,user_name:"我的名字",user_score:150,user_step:28,user_tickets:100,user_be_liked:500,phone_no:"13812345678",address:"北京市朝阳区"},i=e("Http");cc.Class({extends:cc.Component,properties:{},statics:{userInfo:null},uuidv4:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})},onLoad:function(){D.common=this,this.userInfo=n,this.signin()},update:function(e){},signin:function(){var e=cc.sys.localStorage.getItem("uuid");null==e&&(e=this.uuidv4());var t="http://127.0.0.1/signin?uuid="+e;cc.log(t),i.init.getWithUrl(t,function(t,o){cc.log("err:"+t),cc.log("response:"+o),t&&(cc.sys.localStorage.setItem("uuid",e),this.userInfo=JSON.parse(o),cc.log("--user_score--:"+this.userInfo.user_score))})},getUserInfo:function(){var e="http://127.0.0.1/getuserinfo";cc.log(e),i.init.getWithUrl(e,function(e,t){cc.log("response:"+t),e&&(this.userInfo=JSON.parse(t))})},updateUserInfo:function(e,t,o){var n="http://127.0.0.1/updateuserinfo?",s=n.length;null!=e&&""!=e&&(n+="user_name="+e),null!=t&&""!=t&&(n.length>s&&(n+="&&"),n+="phone_no="+t),null!=o&&""!=o&&(n.length>s&&(n+="&&"),n+="address="+o),cc.log(n),i.init.getWithUrl(n,function(e,t){cc.log("response:"+t),e&&(this.userInfo=JSON.parse(t))})},Summon:function(e){var t=Math.floor(6*Math.random()+1);return e(t),t}}),cc._RF.pop()},{Http:"Http"}]},{},["Config","GameLogic","Globals","HelloWorld","Http","RoleCtrl","base64","common"]);