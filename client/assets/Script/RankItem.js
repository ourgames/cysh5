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
            type: cc.Button
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
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    // update (dt) {},
    refresh: function(rankId, rankData) {
        if (rankData == null)
            return;
        if (rankId == 1) {
            this.first.active = true;
            this.second.active = false;
            this.third.active = false;
            this.rank_bg.active = false;
        } else if (rankId == 2) {
            this.first.active = false;
            this.second.active = true;
            this.third.active = false;
            this.rank_bg.active = false;
        } else if (rankId == 3) {
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
        this.label_like.string = "<color=#000000>点赞数:</c><color=#ff0000>" + rankData.user_be_liked + "</color>"
        this.user_no = rankData.user_no;
        // cc.loader.load(rankData.user_photo, function(err, texture) {
        //     this.photo.spriteFrame = new cc.SpriteFrame(texture);
        // })
        // cc.loader.load(rankData.user_photo, {
        //     isCrossOrigin: true
        // }, function(err, img) {
        //     this.photo.spriteFrame = new cc.SpriteFrame(texture);
        // });
        rankData.user_photo = "http://jaredpath.oss-cn-beijing.aliyuncs.com/7bSvAhF1XVt5e-EBc7ElvwjgMf7DwuTx67nFwgLAcghit7gf8MsFB00U4mXN5hSH.jpg";
        if (rankData.user_photo != undefined && rankData.user_photo != "") {
            // cc.loader.load({
            //     url: rankData.user_photo,
            //     isCrossOrigin: true
            // }, function(err, tex) {
            //     cc.log('Should load a texture from RESTful API by specify the type: ' + (tex instanceof cc.Texture2D));
            // });
            // var item = {
            //     url: rankData.user_photo
            // };
            var callback = function(texture) {
                if (texture) {
                    this.photo.spriteFrame = new cc.SpriteFrame(texture);
                    // spTouXiang.setPosition(x, y);
                    // m_choiceLayer.addChild(spTouXiang);

                }
            }
            // var isCrossOrigin = true;
            // cc.loader.loadImage(item, callback.bind(this), isCrossOrigin)
            var url = rankData.user_photo;
            // cc.loader.addDownloadHandlers({
            //     'png': function(url, callback) {}
            // });
            var tex = cc.textureCache.addImage(url, callback.bind(this), this);
        }
        // addDownloadHandlers
        // this.loadImage(rankData.user_photo, this.photo.spriteFrame);
    },

    OnLike: function() {
        var likeCallback = function(likeCount) {
            this.label_like.string = "<color=#000000>点赞数:</c><color=#ff0000>" + likeCount + "</color>"
        };
        D.common.LikeYou(this.user_no, rankData.user_be_liked, likeCallback.bind(this));
    },

    loadImage: function(url, target) {


        var imgs = new Image();
        imgs.crossOrigin = "Anonymous"; //注意存放顺序
        imgs.src = url;
        imgs.onload = function() {
            var canvas = document.createElement('canvas');
            canvas.width = imgs.width;
            canvas.height = imgs.height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(imgs, 0, 0, imgs.width, imgs.height);
            var img = new Image();
            img.src = canvas.toDataURL("image/png");
            var texture = new cc.Texture2D();
            texture.generateMipmaps = false;
            texture.initWithElement(img);
            texture.handleLoadedTexture();
            target.spriteFrame = new cc.SpriteFrame(texture);
        };

        // img.onerror = function() {
        //     alert("error");
        // };
    }
});