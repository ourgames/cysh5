require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = "function" == typeof require && require;
        if (!u && a) return a(o, !0);
        if (i) return i(o, !0);
        var f = new Error("Cannot find module '" + o + "'");
        throw f.code = "MODULE_NOT_FOUND", f;
      }
      var l = n[o] = {
        exports: {}
      };
      t[o][0].call(l.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, l, l.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof require && require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  BtnIcon: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "611ce4/eXZC4YMUSKRl0m+/", "BtnIcon");
    "use strict";
    var BtnIcon = cc.Class({
      extends: cc.Component,
      properties: {
        btn_selected: {
          default: null,
          type: cc.SpriteFrame
        },
        btn_unSelected: {
          default: null,
          type: cc.SpriteFrame
        },
        btn_unlike: {
          default: null,
          type: cc.SpriteFrame
        },
        btn_liked: {
          default: null,
          type: cc.SpriteFrame
        }
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ],
  Config: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aaa0022uW1Ep5HRGsb1Tk5p", "Config");
    "use strict";
    var C_Setting = [ {
      id: "like2ticket",
      value: "100;200;500;1000;2000"
    }, {
      id: "score_rewards",
      value: "100;200;500;1000;2000"
    }, {
      id: "battle_cost",
      value: "1"
    }, {
      id: "start_time",
      value: "1518537600"
    }, {
      id: "end_time",
      value: "1519142400"
    } ];
    var C_Reward = {
      reward_1: {
        icon: "reward_1.png",
        name: "20元优惠卷"
      },
      reward_2: {
        icon: "reward_2.png",
        name: "50元优惠卷"
      },
      reward_3: {
        icon: "reward_3.png",
        name: "TF07口红"
      },
      reward_4: {
        icon: "reward_4.png",
        name: "纪梵希礼盒"
      },
      reward_5: {
        icon: "reward_5.png",
        name: "迪奥粉饼"
      },
      reward_6: {
        icon: "reward_6.png",
        name: "TF口红"
      }
    };
    var C_Battle = {
      "1": {
        battle_id: "1",
        event_type: "null",
        event_value: "0",
        score: "10",
        tips: "无"
      },
      "2": {
        battle_id: "2",
        event_type: "move",
        event_value: "2",
        score: "10",
        tips: "前进两步"
      },
      "3": {
        battle_id: "3",
        event_type: "null",
        event_value: "0",
        score: "10",
        tips: "无"
      },
      "4": {
        battle_id: "4",
        event_type: "move",
        event_value: "-3",
        score: "10",
        tips: "后退三步"
      },
      "5": {
        battle_id: "5",
        event_type: "null",
        event_value: "0",
        score: "10",
        tips: "无"
      },
      "6": {
        battle_id: "6",
        event_type: "reward",
        event_value: "reward_2",
        score: "10",
        tips: "恭喜获得50元优惠卷"
      },
      "7": {
        battle_id: "7",
        event_type: "null",
        event_value: "0",
        score: "10",
        tips: "无"
      },
      "8": {
        battle_id: "8",
        event_type: "null",
        event_value: "0",
        score: "10",
        tips: "无"
      },
      "9": {
        battle_id: "9",
        event_type: "null",
        event_value: "0",
        score: "10",
        tips: "无"
      },
      "10": {
        battle_id: "10",
        event_type: "reward",
        event_value: "reward_1",
        score: "10",
        tips: "恭喜获得20元优惠卷"
      },
      "11": {
        battle_id: "11",
        event_type: "null",
        event_value: "0",
        score: "10",
        tips: "无"
      },
      "12": {
        battle_id: "12",
        event_type: "null",
        event_value: "0",
        score: "10",
        tips: "无"
      },
      "13": {
        battle_id: "13",
        event_type: "move",
        event_value: "2",
        score: "10",
        tips: "前进两步"
      },
      "14": {
        battle_id: "14",
        event_type: "null",
        event_value: "0",
        score: "10",
        tips: "无"
      },
      "15": {
        battle_id: "15",
        event_type: "null",
        event_value: "0",
        score: "10",
        tips: "无"
      },
      "16": {
        battle_id: "16",
        event_type: "reward",
        event_value: "reward_3",
        score: "10",
        tips: "恭喜获得TF07口红"
      },
      "17": {
        battle_id: "17",
        event_type: "null",
        event_value: "0",
        score: "10",
        tips: "无"
      },
      "18": {
        battle_id: "18",
        event_type: "null",
        event_value: "0",
        score: "10",
        tips: "无"
      },
      "19": {
        battle_id: "19",
        event_type: "reward",
        event_value: "reward_1",
        score: "10",
        tips: "恭喜获得20元优惠卷"
      },
      "20": {
        battle_id: "20",
        event_type: "null",
        event_value: "0",
        score: "10",
        tips: "无"
      },
      "21": {
        battle_id: "21",
        event_type: "null",
        event_value: "0",
        score: "10",
        tips: "无"
      },
      "22": {
        battle_id: "22",
        event_type: "reward",
        event_value: "reward_4",
        score: "10",
        tips: "恭喜获得纪梵希礼盒"
      },
      "23": {
        battle_id: "23",
        event_type: "null",
        event_value: "0",
        score: "10",
        tips: "无"
      },
      "24": {
        battle_id: "24",
        event_type: "move",
        event_value: "5",
        score: "10",
        tips: "前进五步"
      },
      "25": {
        battle_id: "25",
        event_type: "null",
        event_value: "0",
        score: "10",
        tips: "无"
      },
      "26": {
        battle_id: "26",
        event_type: "null",
        event_value: "0",
        score: "10",
        tips: "无"
      },
      "27": {
        battle_id: "27",
        event_type: "null",
        event_value: "0",
        score: "10",
        tips: "无"
      },
      "28": {
        battle_id: "28",
        event_type: "null",
        event_value: "0",
        score: "10",
        tips: "无"
      }
    };
    cc.Class({
      extends: cc.Component,
      properties: {},
      statics: {
        setting: null,
        reward: null,
        battle: null
      },
      onLoad: function onLoad() {
        D.config = this;
        D.config.setting = this.setting = C_Setting;
        D.config.reward = this.reward = C_Reward;
        D.config.battle = this.battle = C_Battle;
      },
      start: function start() {},
      getItemById: function getItemById(config_, id) {
        var item = config_.filter(function(e) {
          return e.id == id;
        });
        return item;
      }
    });
    cc._RF.pop();
  }, {} ],
  ExternalLink: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "52172NniSNNSZjTLc4H0KW+", "ExternalLink");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        btn_link_android: {
          default: null,
          type: cc.Button
        },
        btn_link_apple: {
          default: null,
          type: cc.Button
        }
      },
      start: function start() {},
      onBtnLinkAndroid: function onBtnLinkAndroid() {
        window.open("http://www.baidu.com");
      },
      onBtnLinkApple: function onBtnLinkApple() {
        window.open("http://www.qq.com");
      }
    });
    cc._RF.pop();
  }, {} ],
  GameLogic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d85e9q/1UhDaYljzPGla5UE", "GameLogic");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        label_my_score: {
          default: null,
          type: cc.RichText
        },
        progress_bar: {
          default: null,
          type: cc.ProgressBar
        },
        label_summon_tips: {
          default: null,
          type: cc.RichText
        },
        btn_start: {
          default: null,
          type: cc.Button
        },
        label_summon_info: {
          default: null,
          type: cc.RichText
        },
        miku: {
          default: null,
          type: require("RoleCtrl")
        },
        tile: {
          default: null,
          type: cc.Node
        },
        label_pop: {
          default: null,
          type: cc.Label
        },
        dice: {
          default: null,
          type: sp.Skeleton
        },
        reward_show: {
          default: null,
          type: require("RewardShow")
        }
      },
      statics: {
        curStep: 28,
        targetStep: 28,
        diceCount: 0,
        isMoving: false,
        isMovingEnd: true
      },
      onLoad: function onLoad() {
        D.gameLogic = this;
        this.curStep = 28;
        this.curStep = 0;
        this.isMoving = false;
        this.isMovingEnd = true;
        this.dice = this.dice.getComponent("sp.Skeleton");
      },
      start: function start() {},
      Init: function Init() {
        this.reward_show.hide();
        this.refreshPanel();
        this.refreshMikuPos();
      },
      movingCallback: function movingCallback() {
        D.gameLogic.isMovingEnd = true;
      },
      update: function update(dt) {
        if (!this.isMoving) return;
        if (!this.isMovingEnd) return;
        if (0 == this.diceCount) {
          var c_event = D.config.battle[this.curStep];
          if (null == c_event || null == c_event.event_type || "null" == c_event.event_type) {
            this.miku.Idle();
            this.isMoving = false;
            this.btn_start.enabled = true;
            this.refreshPanel();
            return;
          }
          if ("move" == c_event.event_type) {
            this.diceCount = parseInt(c_event.event_value);
            this.triggerEvent(c_event);
          } else if ("reward" == c_event.event_type) {
            this.miku.Idle();
            this.isMoving = false;
            this.triggerEvent(c_event);
            this.btn_start.enabled = true;
            this.refreshPanel();
            return;
          }
        }
        if (this.diceCount > 0) {
          this.curStep += 1;
          this.diceCount -= 1;
        } else if (this.diceCount < 0) {
          this.curStep -= 1;
          this.diceCount += 1;
        }
        this.curStep = this.curStep >= 28 ? this.curStep - 28 : this.curStep;
        this.curStep = this.curStep <= 0 ? this.curStep + 28 : this.curStep;
        var node = this.tile.getChildByName("tile_" + this.curStep);
        var pos = node.getPosition();
        this.isMovingEnd = false;
        this.miku.RunTo(pos, this.movingCallback);
      },
      setScore: function setScore(score) {
        var str = "<color=#ffffff>我的积分:</c><color=#ffe178>" + score + "</color>";
        this.label_my_score.string = str;
        var progress = score / 2e3 > 1 ? 1 : score / 2e3;
        this.progress_bar.progress = progress;
      },
      setSummonTips: function setSummonTips(ticket) {
        var str = "<color=#ffffff>再获得</c><color=#ffe178>" + ticket + "</color><color=#ffffff>票即可获得一次抽奖机会</c>";
        this.label_summon_tips.string = str;
      },
      setSummonInfo: function setSummonInfo(ticket) {
        var str = "<color=#000000>我的抽奖卷:</c><color=#ff0000>" + ticket + "</color><color=#000000>张</c>";
        this.label_summon_info.string = str;
      },
      ctrlMiku: function ctrlMiku(action, step, callback) {
        step = step >= 28 ? step - 28 : step;
        step = step <= 0 ? step + 28 : step;
        var pos = this.tile.getChildByName("tile_" + step).getPosition();
        "idle" == action ? this.miku.Idle() : "run" == action && this.miku.RunTo(pos);
      },
      refreshPanel: function refreshPanel() {
        cc.log("D.common.userInfo.user_score_a:" + D.common.userInfo.user_score_a);
        cc.log("D.common.userInfo.user_tickets:" + D.common.userInfo.user_tickets);
        this.setScore(D.common.userInfo.user_score_a);
        this.setSummonInfo(D.common.userInfo.user_tickets);
        this.setSummonTips(D.common.userInfo.user_tickets);
      },
      refreshMikuPos: function refreshMikuPos() {
        this.curStep = D.common.userInfo.user_step;
        var node = this.tile.getChildByName("tile_" + this.curStep);
        var pos = node.getPosition();
        this.miku.node.setPosition(pos);
      },
      triggerEvent: function triggerEvent(event) {
        this.label_pop.string = event.tips;
        cc.log("----triggerEvent:");
        "reward" == event.event_type && this.reward_show.show(event.event_value);
      },
      onBtnSummon: function onBtnSummon() {
        if (D.common.userInfo.user_tickets > 0) {
          this.btn_start.enabled = false;
          D.common.Summon(this.onRoll.bind(this));
        } else alert("您的抽奖卷不足");
      },
      onRoll: function onRoll(step) {
        var diceAni = function diceAni() {
          this.dice.setAnimation(0, "dice" + step, false);
        };
        var moveAct = function moveAct() {
          D.gameLogic.diceCount = parseInt(step);
          cc.log("callback:" + D.gameLogic.diceCount);
          D.gameLogic.targetStep += step;
          D.gameLogic.isMoving = true;
        };
        var refresh = function refresh() {};
        var diceAniCB = cc.callFunc(diceAni.bind(this));
        var delay = cc.delayTime(1);
        var moveActCB = cc.callFunc(moveAct.bind(this));
        var refreshCB = cc.callFunc(refresh.bind(this));
        var seq = cc.sequence(diceAniCB, delay, moveActCB, refreshCB);
        this.node.runAction(seq);
      }
    });
    cc._RF.pop();
  }, {
    RewardShow: "RewardShow",
    RoleCtrl: "RoleCtrl"
  } ],
  GamePage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ba5f7FYUY1E14l/pPV68Zrn", "GamePage");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        init: false,
        scrollDone: false,
        bHavePhoto: false
      },
      onLoad: function onLoad() {
        this.init = true;
      },
      start: function start() {
        if (this.init && this.bHavePhoto && !this.scrollDone) {
          this.scrollDone = true;
          this.node.getComponent("cc.PageView").scrollToPage(1);
        }
      },
      OnLoginNotify: function OnLoginNotify(bHavePhoto) {
        this.bHavePhoto = bHavePhoto;
        if (this.init && bHavePhoto && !this.scrollDone) {
          this.scrollDone = true;
          this.node.getComponent("cc.PageView").scrollToPage(1);
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  Globals: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d6ba3aO3PVFDY4h0XQUp6BR", "Globals");
    "use strict";
    window.D = {
      common: null,
      config: null,
      gameLogic: null,
      photoWall: null
    };
    cc._RF.pop();
  }, {} ],
  HelloWorld: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "280c3rsZJJKnZ9RqbALVwtK", "HelloWorld");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        spine_1: {
          default: null,
          type: sp.Skeleton
        },
        spine_2: {
          default: null,
          type: sp.Skeleton
        },
        next_node: {
          default: null,
          type: cc.Node
        },
        touch_node: {
          default: null,
          type: cc.Node
        },
        spine_1_time: 4.5,
        spine_2_time: 2,
        spine_3_time: 1,
        propagate: {
          default: false
        },
        touch_count: 0
      },
      onLoad: function onLoad() {
        this.propagate = true;
        this.isPlaySpine2 = false;
        this.animations = new Array(17, 32, 50, 65, 83, 102, 117, 150);
        this.spine_1 = this.spine_1.getComponent("sp.Skeleton");
        this.spine_2 = this.spine_2.getComponent("sp.Skeleton");
        var play1 = function play1() {
          this.next_node.active = false;
          this.spine_2.node.active = false;
          this.spine_1.node.active = true;
          this.trackEntry = this.spine_1.setAnimation(0, "animation", false);
        };
        this.touch_node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan.bind(this), this.node);
        this.touch_node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded.bind(this), this.node);
      },
      onTouchBegan: function onTouchBegan(event) {
        if (this.propagate) {
          cc.log("TOUCH_START");
          event.stopPropagation();
        }
      },
      onTouchEnded: function onTouchEnded(event) {
        if (this.propagate) {
          cc.log("TOUCH_END");
          if (this.touch_count >= this.animations.length - 1 && false == this.isPlaySpine2) {
            this.isPlaySpine2 = true;
            this.playNextAnimation();
            return;
          }
          this.trackEntry.trackTime = this.animations[this.touch_count] / 30;
          this.spine_1.timeScale = 1;
          this.touch_count += 1;
          event.stopPropagation();
        }
      },
      playNextAnimation: function playNextAnimation() {
        var play2 = function play2() {
          this.spine_1.node.active = false;
          this.spine_2.node.active = true;
          this.spine_2.setAnimation(0, "animation", false);
        };
        var showNext = function showNext() {
          this.next_node.active = true;
          this.propagate = false;
          this.touch_node.active = false;
        };
        var play2CB = cc.callFunc(play2.bind(this));
        var delay2 = cc.delayTime(this.spine_2_time);
        var play3CB = cc.callFunc(showNext.bind(this));
        var seq = cc.sequence(play2CB, delay2, play3CB);
        this.node.runAction(seq);
      },
      update: function update(dt) {
        if (this.touch_count > this.animations.length) return;
        var time = this.trackEntry.trackTime;
        var checkTime = this.animations[this.touch_count] / 30;
        time > checkTime && (this.spine_1.timeScale = 0);
      },
      start: function start() {
        this.next_node.active = false;
        this.spine_2.node.active = false;
        this.spine_1.node.active = true;
        this.trackEntry = this.spine_1.setAnimation(0, "animation", false);
      },
      Init: function Init(skip) {
        if (skip) {
          this.touch_count = this.animations.length + 1;
          this.spine_1.timeScale = 0;
          this.spine_2.timeScale = 0;
          this.propagate = false;
          this.touch_node.active = false;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  Http: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "61ebc++7MZF57Ae9widmWNC", "Http");
    "use strict";
    var Http = cc.Class({
      extends: cc.Component,
      properties: {
        waiting: {
          default: null,
          type: cc.Node
        }
      },
      statics: {
        init: null,
        url: null,
        port: null
      },
      onLoad: function onLoad() {
        Http.init = this;
        cc.log("http init");
        this.url = "";
        this.port = "";
      },
      getWithUrl: function getWithUrl(url, callback) {
        this.waiting.active = true;
        var realUrl = url;
        var request = cc.loader.getXMLHttpRequest();
        cc.log("Status: Send Get Request to " + realUrl);
        request.open("GET", realUrl, true);
        request.setRequestHeader("Access-Control-Allow-Origin", "*");
        request.setRequestHeader("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With, X-HTTP-Method-Override");
        request.setRequestHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        request.setRequestHeader("X-Powered-By", "Jetty");
        var reqCallback = function reqCallback() {
          this.waiting.active = false;
          cc.log("request.status:" + request.status);
          if (4 == request.readyState && 200 == request.status) {
            var response = request.responseText;
            callback && callback(true, response);
          } else if (4 == request.readyState && 200 != request.status) {
            var response = request.responseText;
            callback && callback(false, response);
          }
        };
        request.onreadystatechange = reqCallback.bind(this);
        request.send();
      }
    });
    cc._RF.pop();
  }, {} ],
  PhotoWall: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "edca6Nn//xBLqJX/SgJ66jy", "PhotoWall");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        btn_rank: {
          default: null,
          type: cc.Button
        },
        btn_self: {
          default: null,
          type: cc.Button
        },
        tab_rank: {
          default: null,
          type: cc.Node
        },
        tab_self: {
          default: null,
          type: cc.Node
        },
        self_photo: {
          default: null,
          type: cc.Sprite
        },
        btn_share: {
          default: null,
          type: cc.Button
        },
        btn_input: {
          default: null,
          type: cc.Button
        },
        label_nick: {
          default: null,
          type: cc.Label
        },
        label_like: {
          default: null,
          type: cc.RichText
        },
        self_info: {
          default: null,
          type: cc.Node
        },
        edit_nick: {
          default: null,
          type: cc.EditBox
        },
        edit_phone: {
          default: null,
          type: cc.EditBox
        },
        edit_address: {
          default: null,
          type: cc.EditBox
        },
        btn_commit: {
          default: null,
          type: cc.Button
        },
        btn_upload_photo: {
          default: null,
          type: cc.Button
        },
        rank_page: {
          default: null,
          type: require("RankPage")
        }
      },
      onLoad: function onLoad() {
        D.photoWall = this;
      },
      start: function start() {},
      Init: function Init() {
        this.onBtnTabRank();
        this.refreshPanel();
        this.rank_page.Init();
      },
      refreshPanel: function refreshPanel() {
        this.label_nick.string = D.common.userInfo.user_name;
        this.label_like.string = "<color=#000000>获赞数:</c><color=#ff0000>" + D.common.userInfo.user_be_liked + "</color>";
        if (void 0 != D.common.userInfo.user_photo && "" != D.common.userInfo.user_photo) {
          var callback = function callback(texture) {
            if (null != texture && void 0 != texture) {
              this.self_photo.spriteFrame = new cc.SpriteFrame(texture);
              var ws = 366 / texture.width;
              var hs = 488 / texture.height;
              var mins = Math.min(ws, hs);
              this.self_photo.node.scaleX = mins;
              this.self_photo.node.scaleY = mins;
            } else cc.log("add image error");
          };
          cc.textureCache.addImage(D.common.userInfo.user_photo, callback.bind(this));
        }
      },
      onBtnTabRank: function onBtnTabRank() {
        this.tab_rank.active = true;
        this.tab_self.active = false;
        this.self_info.active = false;
        this.btn_rank.getComponent("cc.Sprite").spriteFrame = this.btn_rank.getComponent("BtnIcon").btn_selected;
        this.btn_rank.height = 62;
        this.btn_self.getComponent("cc.Sprite").spriteFrame = this.btn_self.getComponent("BtnIcon").btn_unSelected;
        this.btn_self.height = 54;
      },
      onBtnTabSelf: function onBtnTabSelf() {
        this.tab_rank.active = false;
        this.tab_self.active = true;
        this.self_info.active = false;
        this.btn_rank.getComponent("cc.Sprite").spriteFrame = this.btn_rank.getComponent("BtnIcon").btn_unSelected;
        this.btn_rank.height = 54;
        this.btn_self.getComponent("cc.Sprite").spriteFrame = this.btn_self.getComponent("BtnIcon").btn_selected;
        this.btn_self.height = 62;
        D.common.getUserInfo(this.refreshPanel.bind(this));
      },
      onBtnInputInfo: function onBtnInputInfo() {
        this.edit_nick.string = D.common.userInfo.user_name;
        this.edit_phone.string = D.common.userInfo.phone_no;
        this.edit_address.string = D.common.userInfo.address;
        this.self_info.active = true;
      },
      onBtnCommitInfo: function onBtnCommitInfo() {
        this.self_info.active = false;
        var nick = this.edit_nick.string;
        var phone = this.edit_phone.string;
        var address = this.edit_address.string;
        D.common.updateUserInfo(nick, phone, address);
      },
      onBtnShare: function onBtnShare() {},
      onEditNickEnd: function onEditNickEnd(sender) {
        cc.log("onEditNickEnd:" + this.edit_nick.string);
      },
      onEditPhotoEnd: function onEditPhotoEnd(sender) {
        cc.log("onEditPhotoEnd:" + this.edit_phone.string);
      },
      onEditAddressEnd: function onEditAddressEnd(sender) {
        cc.log("onEditAddressEnd:" + this.edit_address.string);
      },
      onUploadPhoto: function onUploadPhoto() {
        window.location.href = "upload/index.html";
      },
      refreshRank: function refreshRank() {}
    });
    cc._RF.pop();
  }, {
    RankPage: "RankPage"
  } ],
  RankItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ae8e2UH/XpMbLVINYsSotmJ", "RankItem");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        photo: {
          default: null,
          type: cc.Sprite
        },
        rank_bg: {
          default: null,
          type: cc.Node
        },
        label_rank: {
          default: null,
          type: cc.Label
        },
        label_nick: {
          default: null,
          type: cc.Label
        },
        label_like: {
          default: null,
          type: cc.RichText
        },
        btn_like: {
          default: null,
          type: cc.Sprite
        },
        first: {
          default: null,
          type: cc.Node
        },
        second: {
          default: null,
          type: cc.Node
        },
        third: {
          default: null,
          type: cc.Node
        },
        user_no: 0,
        rankData: null
      },
      start: function start() {},
      refresh: function refresh(rankId, rankData) {
        if (null == rankData) return;
        this.rankData = rankData;
        if (1 == rankId) {
          this.first.active = true;
          this.second.active = false;
          this.third.active = false;
          this.rank_bg.active = false;
        } else if (2 == rankId) {
          this.first.active = false;
          this.second.active = true;
          this.third.active = false;
          this.rank_bg.active = false;
        } else if (3 == rankId) {
          this.first.active = false;
          this.second.active = false;
          this.third.active = true;
          this.rank_bg.active = false;
        } else {
          this.first.active = false;
          this.second.active = false;
          this.third.active = false;
          this.rank_bg.active = true;
          this.label_rank.string = "" + rankId;
        }
        this.label_nick.string = rankData.user_name;
        this.label_like.string = "<color=#000000>点赞数:</c><color=#ff0000>" + rankData.user_be_liked + "</color>";
        this.user_no = rankData.user_no;
        this.RefreshLikeBtn();
        if (void 0 != rankData.user_photo && "" != rankData.user_photo) {
          var callback = function callback(texture) {
            if (null != texture && void 0 != texture) {
              this.photo.spriteFrame = new cc.SpriteFrame(texture);
              var ws = 178 / texture.width;
              var hs = 251 / texture.height;
              var mins = Math.min(ws, hs);
              this.photo.node.scaleX = mins;
              this.photo.node.scaleY = mins;
            } else cc.log("add image error");
          };
          cc.textureCache.addImage(rankData.user_photo, callback.bind(this));
        }
      },
      OnLike: function OnLike() {
        var likeCallback = function likeCallback() {
          this.label_like.string = "<color=#000000>点赞数:</c><color=#ff0000>" + (this.rankData.user_be_liked + 1) + "</color>";
          this.RefreshLikeBtn();
        };
        D.common.LikeYou(this.user_no, likeCallback.bind(this));
      },
      RefreshLikeBtn: function RefreshLikeBtn() {
        for (var no in D.common.userInfo.user_likes_no) {
          if (this.user_no == no) {
            this.btn_like.spriteFrame = this.btn_like.getComponent("BtnIcon").btn_liked;
            break;
          }
          this.btn_like.spriteFrame = this.btn_like.getComponent("BtnIcon").btn_unlike;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  RankPage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4e3d2Z/6+FE+5JsTmqCBMh7", "RankPage");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        grid_prefab: {
          default: null,
          type: cc.Prefab
        },
        pageWnd: {
          default: null,
          type: cc.Prefab
        },
        pageIndex: 0,
        curRankFrom: 0,
        curRankEnd: 6,
        pageLimit: 6,
        curTotal: 1
      },
      onLoad: function onLoad() {
        this.pageWnd = this.getComponent("cc.PageView");
      },
      start: function start() {},
      Init: function Init() {
        this.pageWnd.setCurrentPageIndex(0);
        this.onPageEvent(this.pageWnd, cc.PageView.EventType.PAGE_TURNING);
      },
      addPage: function addPage(index) {
        if (this.curTotal < index) return;
        this.curTotal += 1;
        var pageGrid = cc.instantiate(this.grid_prefab);
        this.pageWnd.addPage(pageGrid);
      },
      refreshGrid: function refreshGrid(error, ranks) {
        if (null == ranks || void 0 == ranks || 0 == ranks.length) return;
        var index = this.pageWnd.getCurrentPageIndex();
        var curPage = this.pageWnd.getPages()[index];
        var from = 6 * index;
        for (var i = 0; i < 6; i++) {
          var active = false;
          if (i < ranks.length) {
            this.curRankEnd = from + i;
            active = true;
          }
          var rankData = i < ranks.length ? ranks[i] : null;
          this.refreshRankItem(active, curPage, "node_" + i, from + i + 1, rankData);
        }
        7 == ranks.length && index + 1 == this.pageWnd.getPages().length && this.addPage(index + 1);
      },
      refreshRankItem: function refreshRankItem(active, page, nodeId, rankId, rankData) {
        var node = page.getChildByName(nodeId).getChildByName("rank_item");
        node.active = active;
        if (active) {
          var rankItem = node.getComponent("RankItem");
          rankItem.refresh(rankId, rankData);
        }
      },
      OnPagePrevious: function OnPagePrevious() {
        if (0 == this.pageIndex) return;
        this.pageIndex -= 1;
        this.curRankFrom = 6 * this.pageIndex;
        D.common.GetRank(this.curRankFrom, this.pageLimit, this.refreshGrid.bind(this));
      },
      OnPageNext: function OnPageNext() {
        if (16 == this.pageIndex) return;
        if (this.curRankEnd < this.curRankFrom + 5) return;
        this.pageIndex += 1;
        this.curRankFrom = 6 * this.pageIndex;
        D.common.GetRank(this.curRankFrom, this.pageLimit + 1, this.refreshGrid.bind(this));
      },
      onPageEvent: function onPageEvent(sender, eventType) {
        if (eventType !== cc.PageView.EventType.PAGE_TURNING) return;
        var index = sender.getCurrentPageIndex();
        console.log("当前所在的页面索引:" + index);
        this.curRankFrom = 6 * index;
        var ret = this.pageIndex - index;
        ret <= 0 ? D.common.GetRank(this.curRankFrom, this.pageLimit + 1, this.refreshGrid.bind(this)) : D.common.GetRank(this.curRankFrom, this.pageLimit, this.refreshGrid.bind(this));
        this.pageIndex = index;
      }
    });
    cc._RF.pop();
  }, {} ],
  RewardIcons: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c65faj6HhtJLJwxZqrj5JGm", "RewardIcons");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        reward_1: {
          default: null,
          type: cc.SpriteFrame
        },
        reward_2: {
          default: null,
          type: cc.SpriteFrame
        },
        reward_3: {
          default: null,
          type: cc.SpriteFrame
        },
        reward_4: {
          default: null,
          type: cc.SpriteFrame
        },
        reward_5: {
          default: null,
          type: cc.SpriteFrame
        },
        reward_6: {
          default: null,
          type: cc.SpriteFrame
        }
      },
      start: function start() {},
      getIcon: function getIcon(id) {
        return "reward_1" == id ? this.reward_1 : "reward_2" == id ? this.reward_2 : "reward_3" == id ? this.reward_3 : "reward_4" == id ? this.reward_4 : "reward_5" == id ? this.reward_5 : "reward_6" == id ? this.reward_6 : this.reward_1;
      }
    });
    cc._RF.pop();
  }, {} ],
  RewardShow: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6a91bLp7dZEBLOQJ/61nz9G", "RewardShow");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        reward_show_icon: {
          default: null,
          type: cc.Sprite
        },
        reward_show_label: {
          default: null,
          type: cc.Label
        }
      },
      start: function start() {},
      show: function show(reward_id) {
        this.node.active = true;
        var rewardConfig = D.config.reward[reward_id];
        this.reward_show_icon.spriteFrame = this.getComponent("RewardIcons").getIcon(reward_id);
        this.reward_show_label.string = rewardConfig.name;
      },
      hide: function hide() {
        this.node.active = false;
      },
      onBtnOk: function onBtnOk() {
        this.node.active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  RoleCtrl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4c94fFmbXtG4oIXKon/37H+", "RoleCtrl");
    "use strict";
    var RoleCtrl = cc.Class({
      extends: cc.Component,
      editor: {
        requireComponent: sp.Skeleton
      },
      properties: {},
      onLoad: function onLoad() {
        var spine = this.spine = this.getComponent("sp.Skeleton");
        this.Idle();
      },
      start: function start() {},
      Idle: function Idle() {
        this.node.setScaleX(1);
        this.spine.setAnimation(0, "miku_idle", true);
      },
      RunTo: function RunTo(pos, callback) {
        var spine = this.spine = this.getComponent("sp.Skeleton");
        this.spine.setAnimation(0, "miku_run", true);
        var curPos = this.node.getPosition();
        var dir = cc.pSub(pos, curPos);
        dir.x > 10 ? this.node.setScaleX(1) : dir.x < -10 && this.node.setScaleX(-1);
        var moveTo = cc.moveTo(1, pos);
        var dataCB = cc.callFunc(callback);
        var seq = cc.sequence(moveTo, dataCB);
        this.node.runAction(seq);
      }
    });
    cc._RF.pop();
  }, {} ],
  TouchPropagate: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5d6f8Nh+H5NMpQLgCUvvNZT", "TouchPropagate");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        propagate: {
          default: false
        }
      },
      onLoad: function onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          if (this.propagate) {
            cc.log("TOUCH_START");
            event.stopPropagation();
          }
        }, this.node);
        this.node.on(cc.Node.EventType.TOUCH_END, function(event) {
          if (this.propagate) {
            cc.log("TOUCH_END");
            event.stopPropagation();
          }
        }, this.node);
      },
      start: function start() {},
      onEnable: function onEnable() {
        this.propagate = true;
      },
      onDisable: function onDisable() {
        this.propagate = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  common: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "16a9a9XREZK5qFdRa5ig/vl", "common");
    "use strict";
    var Http = require("Http");
    cc.Class({
      extends: cc.Component,
      properties: {
        userInfo: "",
        userUuid: "",
        game_pageview: {
          default: null,
          type: cc.Node
        },
        helloworld_node: {
          default: null,
          type: cc.Node
        }
      },
      uuidv4: function uuidv4() {
        return ([ 1e7 ] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function(c) {
          return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
        });
      },
      onLoad: function onLoad() {
        D.common = this;
        this.signin();
      },
      update: function update(dt) {},
      getUuid: function getUuid() {
        var uuid = localStorage.getItem("uuid");
        this.isEmptyStr(uuid) ? this.userUuid = this.uuidv4() : this.userUuid = uuid;
        return this.userUuid;
      },
      signin: function signin() {
        var url = "/signin?uuid=" + this.getUuid();
        cc.log(url);
        var requestCB = function requestCB(err, response) {
          cc.log("response:" + response);
          if (err) {
            var msg = JSON.parse(response);
            if (200 == msg.ReturnCode) {
              var uuid = localStorage.getItem("uuid");
              this.isEmptyStr(uuid) && localStorage.setItem("uuid", this.userUuid);
              this.userInfo = msg.User;
              D.gameLogic.Init();
              D.photoWall.Init();
              var noPhoto = this.isEmptyStr(this.userInfo.user_photo);
              this.helloworld_node.getComponent("HelloWorld").Init(!noPhoto);
              this.game_pageview.getComponent("GamePage").OnLoginNotify(!noPhoto);
            } else alert("error code:" + msg.ReturnCode);
          }
        };
        Http.init.getWithUrl(url, requestCB.bind(this));
      },
      getUserInfo: function getUserInfo(callback) {
        var url = "/getuserinfo";
        cc.log(url);
        var requestCB = function requestCB(err, response) {
          cc.log("response:" + response);
          if (err) {
            var msg = JSON.parse(response);
            if (200 == msg.ReturnCode) {
              this.userInfo = msg.User;
              callback();
            } else alert("error code:" + msg.ReturnCode);
          }
        };
        Http.init.getWithUrl(url, requestCB.bind(this));
      },
      updateUserInfo: function updateUserInfo(user_name, phone_no, address) {
        var url = "/updateuserinfo";
        null != user_name && "" != user_name && (url += "&&user_name=" + user_name);
        null != phone_no && "" != phone_no && (url += "&&phone_no=" + phone_no);
        null != address && "" != address && (url += "&&address=" + address);
        cc.log(url);
        var requestCB = function requestCB(err, response) {
          cc.log("response:" + response);
          if (err) {
            var msg = JSON.parse(response);
            if (200 == msg.ReturnCode) {
              this.isEmpty(msg.User.user_name) || (this.userInfo.user_name = msg.User.user_name);
              this.isEmpty(msg.User.phone_no) || (this.userInfo.phone_no = msg.User.phone_no);
              this.isEmpty(msg.User.address) || (this.userInfo.address = msg.User.address);
            } else alert("error code:" + msg.ReturnCode);
          }
        };
        Http.init.getWithUrl(url, requestCB.bind(this));
      },
      Summon: function Summon(callback) {
        var url = "/startlottery";
        var requestCB = function requestCB(err, response) {
          cc.log("response:" + response);
          if (err) {
            var msg = JSON.parse(response);
            if (200 == msg.ReturnCode) {
              this.userInfo = msg.User;
              var step = msg.Dice;
              callback(step);
            } else alert("error code:" + msg.ReturnCode);
          }
        };
        Http.init.getWithUrl(url, requestCB.bind(this));
      },
      GetRank: function GetRank(from, limit, callback) {
        var url = "/rank?start=" + from + "&&limit=" + limit;
        var requestCB = function requestCB(err, response) {
          if (err) {
            var msg = JSON.parse(response);
            if (200 == msg.ReturnCode) {
              var rank = msg.Rank;
              callback("success", rank);
            } else callback("error");
          }
        };
        Http.init.getWithUrl(url, requestCB.bind(this));
      },
      LikeYou: function LikeYou(user_no, callback) {
        var url = "/like?user_no=" + user_no;
        var requestCB = function requestCB(err, response) {
          if (err) {
            var msg = JSON.parse(response);
            if (200 == msg.ReturnCode) {
              this.userInfo = msg.User;
              callback();
            } else 2001 == msg.ReturnCode ? alert("被您点赞的小伙伴消失在异次元中了!") : 2005 == msg.ReturnCode ? alert("今日您的三次点赞机会已经全部用光了,明天再来吧~") : 2006 == msg.ReturnCode && alert("您已经为该小伙伴点赞了~");
          }
        };
        Http.init.getWithUrl(url, requestCB.bind(this));
      },
      isEmpty: function isEmpty(obj) {
        return null == obj || void 0 == obj;
      },
      isEmptyStr: function isEmptyStr(str) {
        return null == str || void 0 == str || "" == str;
      }
    });
    cc._RF.pop();
  }, {
    Http: "Http"
  } ]
}, {}, [ "BtnIcon", "Config", "ExternalLink", "GameLogic", "GamePage", "Globals", "HelloWorld", "Http", "PhotoWall", "RankItem", "RankPage", "RewardIcons", "RewardShow", "RoleCtrl", "TouchPropagate", "common" ]);