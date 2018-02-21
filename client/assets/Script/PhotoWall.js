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
        },
        btn_upload_photo:{
            default: null,
            type:cc.Button, 
        },
        rank_page:{
            default: null,
            type:require("RankPage"), 
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function() {
        D.photoWall = this;
    },

    start: function() {

    },

    // update (dt) {},

    Init: function(){
        this.refreshPanel();
        this.rank_page.Init();
    },

    refreshPanel: function() {
        this.onBtnTabRank();
        //self
        //名字
        this.label_nick.string = D.common.userInfo.user_name;
        //点赞数
        this.label_like.string = "<color=#000000>获赞数:</c><color=#ff0000>"+ D.common.userInfo.user_be_liked + "</color>";
        //照片
        D.common.userInfo.user_photo = "user_photos/test.png";
        if (D.common.userInfo.user_photo != undefined && D.common.userInfo.user_photo != "") {
            var callback = function(texture) {
                if (texture != null && texture != undefined) {
                    this.self_photo.spriteFrame = new cc.SpriteFrame(texture);
                    var ws = 366 / texture.width;
                    var hs = 488 / texture.height;
                    var mins = Math.min(ws,hs);
                    this.self_photo.node.scaleX = mins;
                    this.self_photo.node.scaleY = mins;
                }
                else
                {
                    cc.log("add image error")
                }
            };
            cc.textureCache.addImage(D.common.userInfo.user_photo, callback.bind(this));
        }
    },

    onBtnTabRank: function() {
        this.tab_rank.active = true;
        this.tab_self.active = false;
        this.self_info.active = false;
        this.btn_rank.getComponent("cc.Sprite").spriteFrame = this.btn_rank.getComponent("BtnIcon").btn_selected;
        this.btn_rank.height = 62;
        this.btn_self.getComponent("cc.Sprite").spriteFrame = this.btn_self.getComponent("BtnIcon").btn_unSelected;
        this.btn_self.height = 54;
    },

    onBtnTabSelf: function() {
        this.tab_rank.active = false;
        this.tab_self.active = true;
        this.self_info.active = false;
        this.btn_rank.getComponent("cc.Sprite").spriteFrame = this.btn_rank.getComponent("BtnIcon").btn_unSelected;
        this.btn_rank.height = 54;
        this.btn_self.getComponent("cc.Sprite").spriteFrame = this.btn_self.getComponent("BtnIcon").btn_selected;
        this.btn_self.height = 62;
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

    onUploadPhoto: function() {
        // window.open("upload.html");
        window.location.href = "upload/index.html";
    },

    refreshRank: function() {
        
    }
});
