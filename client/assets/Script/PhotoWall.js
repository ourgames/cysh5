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
        this.refreshPanel();
    },

    start: function() {

    },

    // update (dt) {},

    refreshPanel: function() {
        this.tab_rank.active = true;
        this.tab_self.active = false;
        this.self_info.active = false;
        //self
        //照片
        //名字
        this.label_nick.string = D.common.userInfo.user_name;
        //点赞数
        this.label_like.string = "<color=#000000>获赞数:</c><color=#ff0000>"+ D.common.userInfo.user_be_liked + "</color>";
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
        //加载信息至输入框
        this.edit_nick.string = D.common.userInfo.user_name;
        this.edit_phone.string = D.common.userInfo.phone_no;
        this.edit_address.string = D.common.userInfo.address;
        this.self_info.active = true;
    },

    onBtnCommitInfo: function() {
        this.self_info.active = false;
        // 获取输入框信息
        var nick = this.edit_nick.string;
        var phone = this.edit_phone.string;
        var address = this.edit_address.string;
        // 发送消息
        D.common.updateUserInfo(nick, phone, address);
    },

    onBtnShare: function() {

    },

    onEditNickEnd: function(sender) {
        cc.log("onEditNickEnd:"+this.edit_nick.string)
    },

    onEditPhotoEnd: function(sender) {
        cc.log("onEditPhotoEnd:"+this.edit_phone.string)

    },

    onEditAddressEnd: function(sender) {
        cc.log("onEditAddressEnd:"+this.edit_address.string)

    },
});