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
        rankData: null,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    // update (dt) {},

    refresh: function(rankId, rankData) {
        if (rankData == null)
            return;
        this.rankData = rankData;
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
        this.label_like.string = "<color=#000000>点赞数:</c><color=#ff0000>" + rankData.user_be_liked + "</color>";


        this.user_no = rankData.user_no;
        this.RefreshLikeBtn();

        // rankData.user_photo = "user_photos/test.png";
        if (rankData.user_photo != undefined && rankData.user_photo != "") {
            // var cacheTex = cc.textureCache.getTextureForKey(rankData.user_photo);
            // if (cacheTex != null) {
            //     this.photo.spriteFrame = new cc.SpriteFrame(texture);
            // }
            // else {
            //     var callback = function(err, texture) {
            //         if (texture) {
            //             cc.textureCache.cacheImage(rankData.user_photo, texture);
            //             this.photo.spriteFrame = new cc.SpriteFrame(texture);
            //         }
            //     };
            //     // cc.loader.load(rankData.user_photo, callback.bind(this));
            //     cc.textureCache.addImage(rankData.user_photo, callback.bind(this));
            // }
            var callback = function(texture) {
                if (texture != null && texture != undefined) {
                    this.photo.spriteFrame = new cc.SpriteFrame(texture);
                    var ws = 178 / texture.width;
                    var hs = 251 / texture.height;
                    var mins = Math.min(ws,hs);
                    this.photo.node.scaleX = mins;
                    this.photo.node.scaleY = mins;
                }
                else
                {
                    cc.log("add image error")
                }
            };
            cc.textureCache.addImage(rankData.user_photo, callback.bind(this));
        }
    },

    OnLike: function() {
        var likeCallback = function() {
            this.label_like.string = "<color=#000000>点赞数:</c><color=#ff0000>" + (this.rankData.user_be_liked + 1) + "</color>"
            this.RefreshLikeBtn();
        };
        D.common.LikeYou(this.user_no, likeCallback.bind(this));
    },

    RefreshLikeBtn: function() {
    	
    	if (D.common.isEmptyStr(D.common.userInfo.user_likes_no))
    	{
            this.btn_like.getComponent("cc.Sprite").spriteFrame = this.btn_like.getComponent("BtnIcon").btn_unSelected;
            return;
    	}
        var jsonObj = JSON.parse(D.common.userInfo.user_likes_no);
        var user_no_str = "" + this.user_no;
        for(var like_me_no in jsonObj){
            if (user_no_str == like_me_no)
            {
                this.btn_like.getComponent("cc.Sprite").spriteFrame = this.btn_like.getComponent("BtnIcon").btn_selected;
                break;
            }
            else
            {
                this.btn_like.getComponent("cc.Sprite").spriteFrame = this.btn_like.getComponent("BtnIcon").btn_unSelected;
            }
        }
    },
});