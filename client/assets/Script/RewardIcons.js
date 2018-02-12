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
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    getIcon: function(id)
    {
        if(id == "reward_1")
        {
            return this.reward_1;
        }
        else if(id == "reward_2")
        {
            return this.reward_2;
        }
        else if(id == "reward_3")
        {
            return this.reward_3;
        }
        else if(id == "reward_4")
        {
            return this.reward_4;
        }
        else if(id == "reward_5")
        {
            return this.reward_5;
        }
        else if(id == "reward_6")
        {
            return this.reward_6;
        }
        else
        {
            return this.reward_1;
        }
    }
    // update (dt) {},
});
