var C_Setting = [{
    "id": "like2ticket",
    "value": "100;200;500;1000;2000"
}, {
    "id": "score_rewards",
    "value": "100;200;500;1000;2000"
}, {
    "id": "battle_cost",
    "value": "1"
}, {
    "id": "start_time",
    "value": "1518537600"
}, {
    "id": "end_time",
    "value": "1519142400"
}, ];

var C_Reward = [{
        "id": "reward_1",
        "name": "20元代金券"
    }, {
        "id": "reward_2",
        "name": "50元代金券"
    }, {
        "id": "reward_3",
        "name": "迪奥粉饼"
    }, {
        "id": "reward_4",
        "name": "TF口红"
    }, {
        "id": "reward_5",
        "name": "TF07口红"
    }, {
        "id": "reward_6",
        "name": "纪梵希礼盒"
    },

];

var C_Battle = [{
        "id": "pos_1",
        "score": "10",
    }, {
        "id": "pos_2",
        "event_type": "move",
        "event_value": "2",
        "score": "20",
        "tips": "前进两步"
    }, {
        "id": "pos_3",
        "score": "30",
    }, {
        "id": "pos_4",
        "event_type": "move",
        "event_value": "-3",
        "score": "40",
        "tips": "后退三步"
    }, {
        "id": "pos_5",
        "score": "50",
    }, {
        "id": "pos_6",
        "event_type": "reward",
        "event_value": "reward_1",
        "score": "60",
        "tips": "恭喜获得奖励1"
    }, {
        "id": "pos_7",
        "score": "70",
    }, {
        "id": "pos_8",
        "score": "80",
    }, {
        "id": "pos_9",
        "score": "90",
    }, {
        "id": "pos_10",
        "event_type": "reward",
        "event_value": "reward_2",
        "score": "100",
        "tips": "恭喜获得奖励2"
    }, {
        "id": "pos_11",
        "score": "110",
    }, {
        "id": "pos_12",
        "score": "120",
    }, {
        "id": "pos_13",
        "event_type": "move",
        "event_value": "2",
        "score": "130",
        "tips": "前进两步"
    }, {
        "id": "pos_14",
        "score": "140",
    }, {
        "id": "pos_15",
        "score": "150",
    }, {
        "id": "pos_16",
        "event_type": "reward",
        "event_value": "reward_3",
        "score": "160",
        "tips": "恭喜获得奖励3"
    }, {
        "id": "pos_17",
        "score": "170",
    }, {
        "id": "pos_18",
        "score": "180",
    }, {
        "id": "pos_19",
        "event_type": "reward",
        "event_value": "reward_4",
        "score": "190",
        "tips": "恭喜获得奖励4"
    }, {
        "id": "pos_20",
        "score": "200",
    }, {
        "id": "pos_21",
        "score": "210",
    }, {
        "id": "pos_22",
        "event_type": "reward",
        "event_value": "reward_5",
        "score": "220",
        "tips": "恭喜获得奖励5"
    }, {
        "id": "pos_23",
        "score": "230",
    }, {
        "id": "pos_24",
        "event_type": "move",
        "event_value": "5",
        "score": "240",
        "tips": "前进五步"
    }, {
        "id": "pos_25",
        "score": "250",
    }, {
        "id": "pos_26",
        "score": "260",
    }, {
        "id": "pos_27",
        "score": "270",
    }, {
        "id": "pos_28",
        "score": "280",
    },

];

cc.Class({
    extends: cc.Component,

    properties: {
    },

    statics: {
        setting: null,
        reward: null,
        battle: null
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad : function() {
        D.config = this;
        D.config.setting = this.setting = C_Setting;
        D.config.reward = this.reward = C_Reward;
        D.config.battle = this.battle = C_Battle;
    },

    start() {

    },

    // update (dt) {},
});