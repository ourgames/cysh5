var UserInfo = {
    "user_no": 1000001,
    "user_name": "女装大佬",
    "user_score": 150,
    "user_step": 28,
    "user_tickets": 100,
    "user_be_liked": 500,
    "phone_no": "13812345678",
    "address": "北京市朝阳区"
};

var RankRet = {
    "ReturnCode": 200,
    "Rank": [{
        "user_name": "佳丽1",
        "user_photo": "http://jaredpath.oss-cn-beijing.aliyuncs.com/7bSvAhF1XVt5e-EBc7ElvwjgMf7DwuTx67nFwgLAcghit7gf8MsFB00U4mXN5hSH.jpg",
        "user_be_liked": 5,
        "user_no": 1000001
    }, {
        "user_name": "佳丽2",
        "user_photo": "http://jaredpath.oss-cn-beijing.aliyuncs.com/7bSvAhF1XVt5e-EBc7ElvwjgMf7DwuTx67nFwgLAcghit7gf8MsFB00U4mXN5hSH.jpg",
        "user_be_liked": 1,
        "user_no": 1000002
    }, {
        "user_name": "佳丽3",
        "user_photo": "http://jaredpath.oss-cn-beijing.aliyuncs.com/7bSvAhF1XVt5e-EBc7ElvwjgMf7DwuTx67nFwgLAcghit7gf8MsFB00U4mXN5hSH.jpg",
        "user_be_liked": 2,
        "user_no": 1000003
    }, {
        "user_name": "佳丽4",
        "user_photo": "http://jaredpath.oss-cn-beijing.aliyuncs.com/7bSvAhF1XVt5e-EBc7ElvwjgMf7DwuTx67nFwgLAcghit7gf8MsFB00U4mXN5hSH.jpg",
        "user_be_liked": 4,
        "user_no": 1000004
    }, {
        "user_name": "佳丽5",
        "user_photo": "http://jaredpath.oss-cn-beijing.aliyuncs.com/7bSvAhF1XVt5e-EBc7ElvwjgMf7DwuTx67nFwgLAcghit7gf8MsFB00U4mXN5hSH.jpg",
        "user_be_liked": 5,
        "user_no": 1000005
    }, {
        "user_name": "佳丽6",
        "user_photo": "http://jaredpath.oss-cn-beijing.aliyuncs.com/7bSvAhF1XVt5e-EBc7ElvwjgMf7DwuTx67nFwgLAcghit7gf8MsFB00U4mXN5hSH.jpg",
        "user_be_liked": 6,
        "user_no": 1000006
    }]
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
                cc.log("--user_score--:" + this.userInfo.user_score)
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
        // var url = "/startlottery?uuid=" + this.getUuid();
        // Http.init.getWithUrl(url, function(err, response) {
        //     cc.log("response:" + response);
        //     if (err) {
        //         var msg = JSON.parse(response);
        //         this.userInfo = msg.User;
        //         var step = msg.Dice;
        //         callback(step);
        //     }
        // });
        var step = Math.floor(Math.random() * 6 + 1);
        // step = 6;
        callback(step);
        return step;
    },


    GetRank: function(from, limit, callback) {
        // var url = "/rank?start=" + form + "&&limit=" + limit;
        // Http.init.getWithUrl(url, function(err, response) {
        //     if (err) {
        //         var msg = JSON.parse(response);
        //         var rank = msg.Rank;
        //         callback(rank);
        //     }
        // });
        // var msg = JSON.parse(RankRet);
        callback(RankRet.Rank);
        // return RankRet;
    },

    LikeYou: function(user_no, callback) {
        // var url = "/like?user_no=" + user_no;
        // Http.init.getWithUrl(url, function(err, response) {
        //     if (err) {
        //         var msg = JSON.parse(response);
        //         callback();
        //     }
        // });
        var no = Math.floor(Math.random() * 10000);
        callback(no);
    }
});