cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    uuidv4: function() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => 
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16) )
    },

    // use this for initialization
    onLoad: function() {
        var uuid = cc.sys.localStorage.getItem('uuid');
        // this.label.string = "1";//score == null ? 0 : score;
        if (uuid == null) {
            uuid = this.uuidv4();
        }
        cc.log("--------------" + uuid)
        cc.sys.localStorage.setItem('uuid', uuid); 
        var la = this.getComponent(cc.Label);
        la.string = "" + uuid;
    },

    // called every frame
    update: function(dt) {

    },


});