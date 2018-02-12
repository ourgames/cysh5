
cc.Class({
    extends: cc.Component,

    properties: {
        reward_show_icon:{
            default: null,
            type:cc.Sprite,
        },
        reward_show_label:{
            default: null,
            type:cc.Label,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    // update (dt) {},

    show: function(reward_id) {
        this.node.active = true;
        var rewardConfig = D.config.reward[reward_id];
        this.reward_show_icon.spriteFrame = this.getComponent("RewardIcons").getIcon(reward_id);
        this.reward_show_label.string = rewardConfig.name;
    },

    hide: function(){
        this.node.active = false;
    },

    onBtnOk: function() {
        this.node.active = false;
    },
});