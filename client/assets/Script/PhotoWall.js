cc.Class({
    extends: cc.Component,

    properties: {
        btn_rank:{
            default: null,
            type:cc.Button,
        },
        btn_self:{
            default: null,
            type:cc.Button,
        },
        tab_rank:{
            default: null,
            type:cc.Node,
        },
        tab_self:{
            default: null,
            type:cc.Node,
        },
        self_photo:{
            default: null,
            type:cc.Sprite,
        },
        btn_share:{
            default: null,
            type:cc.Button,
        },
        btn_input:{
            default: null,
            type:cc.Button,
        },
        label_nick:{
            default: null,
            type:cc.Label,
        },
        label_like:{
            default: null,
            type:cc.RichText,
        },
        self_info:{
            default: null,
            type:cc.Node,
        },
        edit_nick:{
            default: null,
            type:cc.EditBox,
        },
        edit_phone:{
            default: null,
            type:cc.EditBox,
        },
        edit_address:{
            default: null,
            type:cc.EditBox,
        },
        btn_commit:{
            default: null,
            type:cc.Button,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function() {
        this.self_info.active = false;
    },

    start: function() {

    },

    // update (dt) {},

    refreshPanel: function() {

    },

    onBtnTabRank: function() {
        this.tab_rank.active = true;
        this.tab_self.active = false;
        this.self_info.active = false;
    },

    onBtnTabSelf: function() {
        this.tab_rank.active = false;
        this.tab_self.active = true;
        this.self_info.active = false;
    },

    onBtnInputInfo: function() {
        this.self_info.active = true;
        //加载信息至输入框
    },

    onBtnCommitInfo: function() {
        this.self_info.active = false;
        // 获取输入框信息
        // 发送消息
    },

    onBtnShare: function() {

    },

});
