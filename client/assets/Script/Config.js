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

var C_Reward = {
    "reward_1": {
        "icon": "reward_1.png",
        "name": "20元优惠卷"
    },
    "reward_2": {
        "icon": "reward_2.png",
        "name": "50元优惠卷"
    },
    "reward_3": {
        "icon": "reward_3.png",
        "name": "TF07口红"
    },
    "reward_4": {
        "icon": "reward_4.png",
        "name": "纪梵希礼盒"
    },
    "reward_5": {
        "icon": "reward_5.png",
        "name": "迪奥粉饼"
    },
    "reward_6": {
        "icon": "reward_6.png",
        "name": "TF口红"
    },
}

var C_Battle = {
  "1": {
    "battle_id": "1",
    "event_type": "null",
    "event_value": "0",
    "score": "10",
    "tips": "无"
  },
  "2": {
    "battle_id": "2",
    "event_type": "move",
    "event_value": "2",
    "score": "10",
    "tips": "前进2步"
  },
  "3": {
    "battle_id": "3",
    "event_type": "null",
    "event_value": "0",
    "score": "10",
    "tips": "无"
  },
  "4": {
    "battle_id": "4",
    "event_type": "move",
    "event_value": "-3",
    "score": "10",
    "tips": "后退3步"
  },
  "5": {
    "battle_id": "5",
    "event_type": "null",
    "event_value": "0",
    "score": "10",
    "tips": "无"
  },
  "6": {
    "battle_id": "6",
    "event_type": "reward",
    "event_value": "reward_1",
    "score": "10",
    "tips": "恭喜获得奖励1"
  },
  "7": {
    "battle_id": "7",
    "event_type": "null",
    "event_value": "0",
    "score": "10",
    "tips": "无"
  },
  "8": {
    "battle_id": "8",
    "event_type": "null",
    "event_value": "0",
    "score": "10",
    "tips": "无"
  },
  "9": {
    "battle_id": "9",
    "event_type": "move",
    "event_value": "-4",
    "score": "10",
    "tips": "后退4步"
  },
  "10": {
    "battle_id": "10",
    "event_type": "reward",
    "event_value": "reward_2",
    "score": "10",
    "tips": "恭喜获得奖励2"
  },
  "11": {
    "battle_id": "11",
    "event_type": "null",
    "event_value": "0",
    "score": "10",
    "tips": "无"
  },
  "12": {
    "battle_id": "12",
    "event_type": "null",
    "event_value": "0",
    "score": "10",
    "tips": "无"
  },
  "13": {
    "battle_id": "13",
    "event_type": "move",
    "event_value": "4",
    "score": "10",
    "tips": "前进4步"
  },
  "14": {
    "battle_id": "14",
    "event_type": "null",
    "event_value": "0",
    "score": "10",
    "tips": "无"
  },
  "15": {
    "battle_id": "15",
    "event_type": "null",
    "event_value": "0",
    "score": "10",
    "tips": "无"
  },
  "16": {
    "battle_id": "16",
    "event_type": "reward",
    "event_value": "reward_3",
    "score": "10",
    "tips": "恭喜获得奖励3"
  },
  "17": {
    "battle_id": "17",
    "event_type": "null",
    "event_value": "0",
    "score": "10",
    "tips": "无"
  },
  "18": {
    "battle_id": "18",
    "event_type": "move",
    "event_value": "1",
    "score": "10",
    "tips": "前进1步"
  },
  "19": {
    "battle_id": "19",
    "event_type": "reward",
    "event_value": "reward_4",
    "score": "10",
    "tips": "恭喜获得奖励4"
  },
  "20": {
    "battle_id": "20",
    "event_type": "move",
    "event_value": "3",
    "score": "10",
    "tips": "前进3步"
  },
  "21": {
    "battle_id": "21",
    "event_type": "null",
    "event_value": "0",
    "score": "10",
    "tips": "无"
  },
  "22": {
    "battle_id": "22",
    "event_type": "reward",
    "event_value": "reward_5",
    "score": "10",
    "tips": "恭喜获得奖励5"
  },
  "23": {
    "battle_id": "23",
    "event_type": "null",
    "event_value": "0",
    "score": "10",
    "tips": "无"
  },
  "24": {
    "battle_id": "24",
    "event_type": "move",
    "event_value": "-5",
    "score": "10",
    "tips": "后退5步"
  },
  "25": {
    "battle_id": "25",
    "event_type": "move",
    "event_value": "1",
    "score": "10",
    "tips": "前进1步"
  },
  "26": {
    "battle_id": "26",
    "event_type": "null",
    "event_value": "0",
    "score": "10",
    "tips": "无"
  },
  "27": {
    "battle_id": "27",
    "event_type": "move",
    "event_value": "-4",
    "score": "10",
    "tips": "后退4步"
  },
  "28": {
    "battle_id": "28",
    "event_type": "null",
    "event_value": "0",
    "score": "10",
    "tips": "无"
  }
};

// var C_Battle = require("json/battle");

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

    getItemById: function(config_, id)
    {
        var item = config_.filter(function (e) { return e.id == id; }); 
        return item;
    },
     
    // update (dt) {},
});