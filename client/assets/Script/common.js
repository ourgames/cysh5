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
        userInfo : null
    },

    uuidv4: function() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => 
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16) )
    },

    // use this for initialization
    onLoad: function() {
        D.common = this;
        this.signin();
        // cc.log("event:"+D.config.battle[1].tips)
    },

    // called every frame
    update: function(dt) {

    },

    signin: function()
    {
        var uuid = cc.sys.localStorage.getItem('uuid');
        if (uuid == null) {
            uuid = this.uuidv4(); 
        }
        var url = "http://127.0.0.1/signin?uuid="+uuid;
        cc.log(url);
        Http.init.getWithUrl(url, function(err, response){
            cc.log("response:" + response);
            if (err)
            {
                cc.sys.localStorage.setItem('uuid', uuid);
                this.userInfo = JSON.parse(response);
            }
        });
    },

    getUserInfo: function()
    {
        var url = "http://127.0.0.1/getuserinfo";
        cc.log(url);
        Http.init.getWithUrl(url, function(err, response){
            cc.log("response:" + response);
            if (err)
            {
                this.userInfo = JSON.parse(response); 
            }
        });
    },

    updateUserInfo: function(user_name, phone_no, address)
    {
        var url = "http://127.0.0.1/updateuserinfo?";
        var baselen = url.length;
        if(user_name != null && user_name != "")
        {
            url += "user_name=" + user_name;
        }

        if(phone_no != null && phone_no != "")
        {
            if (url.length > baselen)
                url += "&&";
            url += "phone_no=" + phone_no;
        }
        if(address != null && address != "")
        {
            if (url.length > baselen)
                url += "&&";
            url += "address=" + address;
        }

        cc.log(url);
        Http.init.getWithUrl(url, function(err, response){
            cc.log("response:" + response);
            if (err)
            {
                this.userInfo = JSON.parse(response); 
            }
        });
    },

    startGame: function(){
        return 2;
    },
});