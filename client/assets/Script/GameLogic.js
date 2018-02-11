// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

cc.Class({
    extends: cc.Component,

    properties: {
        label_my_score:{
            default: null,
            type:cc.RichText,
        },
        progress_bar:{
            default: null,
            type:cc.ProgressBar,
        },
        label_summon_tips:{
            default: null,
            type:cc.RichText,
        },
        btn_start:{
            default: null,
            type:cc.Button,
        },
        label_summon_info:{
            default: null,
            type:cc.RichText,
        },
        miku:{
            default: null,
            type:require("RoleCtrl"),
        },
        tile:{
            default: null,
            type:cc.Node,
        },
        label_pop:{
            default: null,
            type:cc.Label,
        },
        dice:{
            default: null,
            type:sp.Skeleton,
        },
    },

    statics: {
        curStep : 28,
        targetStep : 28,
        diceCount : 0,
        isMoving: false,
        isMovingEnd: true,
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad : function() {
        D.gameLogic = this;
        this.curStep = 28;
        this.curStep = 0;
        this.isMoving = false;
        this.isMovingEnd = true;
        this.refreshPanel();
    },

    start : function () {

    },

    movingCallback: function() {
        D.gameLogic.isMovingEnd = true;
    },

    update : function (dt) {
        if (!this.isMoving)
        {
            return;
        }
        if (!this.isMovingEnd)
        {
            return;
        }
        if (this.diceCount == 0)
        {
            var c_event = D.config.getItemById(D.config.battle, "pos_" + this.curStep)
            c_event = c_event[0];
            cc.log("----c_event:"+c_event.event_type);
            if (c_event == null || c_event.event_type == null)
            {
                cc.log("--0--c_event null:");
                this.miku.Idle();
                this.isMoving = false;
                return;
            }
            else if (c_event.event_type == "move")
            {
                cc.log("--1--c_event:"+c_event.event_value);
                this.diceCount = parseInt(c_event.event_value);
                this.triggerEvent(c_event);
            }
            else if (c_event.event_type == "reward")
            {
                cc.log("--2--c_event:"+c_event.event_value);
                this.isMoving = false;
                this.miku.Idle();
                this.triggerEvent(c_event);
                return;
            }
        }

        if(this.diceCount > 0) {
            this.curStep += 1;
            this.diceCount -= 1;
        }
        else if (this.diceCount < 0){
            this.curStep -= 1;
            this.diceCount += 1;
        }
        this.curStep = this.curStep >= 28 ? (this.curStep - 28) : this.curStep;
        this.curStep = this.curStep <= 0 ? (this.curStep + 28) : this.curStep;
        var node = this.tile.getChildByName("tile_"+this.curStep)
        var pos = node.getPosition();
        this.isMovingEnd = false;
        this.miku.RunTo(pos,this.movingCallback);
    },

    setScore: function(score) {
        var str = "<color=#ffffff>我的积分:</c><color=#ffe178>" + score + "</color>";
        this.label_my_score.string = str;
        //刷新进度条
        var progress = (score / 2000) > 1 ? 1 : (score / 2000);
        this.progress_bar.progress = progress;
    },

    setSummonTips: function(ticket) {
        var str = "<color=#ffffff>再获得</c><color=#ffe178>" + ticket + "</color><color=#ffffff>票即可获得一次抽奖机会</c>";
        this.label_summon_tips.string = str;
    },

    setSummonInfo: function(ticket) {
        var str = "<color=#000000>我的抽奖卷:</c><color=#ff0000>" + ticket + "</color><color=#000000>张</c>";
        this.label_summon_info.string = str;
    },

    ctrlMiku: function(action, step, callback){
        step = step >= 28 ? (step - 28) : step;
        step = step <= 0 ? (step + 28) : step;
        var pos = this.tile.getChildByName("tile_"+step).getPosition();
        if (action == "idle")
        {
            this.miku.Idle();
        }
        else if (action == "run")
        {
            this.miku.RunTo(pos);
        }
    },

    refreshPanel: function() {
        //刷新积分
        this.setScore(D.common.userInfo.user_score);
        //刷新抽奖卷
        this.setSummonInfo(D.common.userInfo.user_tickets);
        //刷新抽奖提示
        this.setSummonTips(D.common.userInfo.user_tickets);
    },

    triggerEvent: function(event){
        //更新对话
        this.label_pop.string = event.tips;
        //触发事件
        // var c_event = D.config.getItemById(D.config.battle, "pos_" + this.curStep)
        cc.log("----triggerEvent:");
        // if (c_event.) {}
        //播放动画
    },

    onBtnSummon: function(){
        var callback = function(step){
            D.gameLogic.diceCount = parseInt(step);
            cc.log("callback:"+D.gameLogic.diceCount)
            D.gameLogic.targetStep += step;
            D.gameLogic.isMoving = true;
            // D.gameLogic.ctrlMiku("run",D.gameLogic.curStep);
        };
        D.common.Summon(callback);
    },

    onRoll: function(step)
    {
        this.dice.
    }
});
