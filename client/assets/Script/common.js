var UserInfo = {
    "user_no": 1000001,
    "user_name": "我的名字",
    "user_score": 150,
    "user_step": 28,
    "user_tickets": 100,
    "user_be_liked": 500,
    "phone_no": "13812345678",
    "address": "北京市朝阳区"
};

const Http = require('Http');
cc.Class({
    extends: cc.Component,

    properties: {
        // http: {
        //     default: null,
        //     type: require('Http'),
        // },
    },

    statics: {
        userInfo: null,
        uuid: null
    },

    uuidv4: function() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16))
    },

    // use this for initialization
    onLoad: function() {
        D.common = this;
        this.userInfo = UserInfo;
        this.signin();
        // cc.log("event:"+D.config.battle[1].tips)
    },

    // called every frame
    update: function(dt) {
        
    },

    getUuid: function() {
        if (this.uuid != null)
            return this.uuid;

        var uuid = cc.sys.localStorage.getItem('uuid');
        if (uuid == null) {
            this.uuid = uuid = this.uuidv4();
        }
        return this.uuid;
    },

    signin: function() {
        var url = "/signin?uuid=" + this.getUuid();
        cc.log(url);
        Http.init.getWithUrl(url, function(err, response) {
            cc.log("err:" + err);
            cc.log("response:" + response);
            if (err) {
                cc.sys.localStorage.setItem('uuid', uuid);
                this.userInfo = JSON.parse(response);
                cc.log("--user_score--:"+this.userInfo.user_score)
            }
        });
    },

    getUserInfo: function() {
        var url = "/getuserinfo?uuid=" + this.getUuid();
        cc.log(url);
        Http.init.getWithUrl(url, function(err, response) {
            cc.log("response:" + response);
            if (err) {
                this.userInfo = JSON.parse(response);
            }
        });
    },

    updateUserInfo: function(user_name, phone_no, address) {
        var url = "/updateuserinfo?uuid=" + this.getUuid();
        if (user_name != null && user_name != "") {
            url += "&&user_name=" + user_name;
        }
        if (phone_no != null && phone_no != "") {
            url += "&&phone_no=" + phone_no;
        }
        if (address != null && address != "") {
            url += "&&address=" + address;
        }

        cc.log(url);
        Http.init.getWithUrl(url, function(err, response) {
            cc.log("response:" + response);
            if (err) {
                this.userInfo = JSON.parse(response);
            }
        });
    },

    Summon: function(callback) {
        var url = "/startlottery?uuid=" + this.getUuid();
        Http.init.getWithUrl(url, function(err, response) {
            cc.log("response:" + response);
            if (err) {
                var msg = JSON.parse(response);
                this.userInfo = msg.User;
                var step = msg.Dice;
                callback(step);
            }
        });
        // var step = Math.floor(Math.random()*6+1);
        // callback(step); 
        return step;
    },
});