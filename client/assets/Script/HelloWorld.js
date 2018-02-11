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
    // use this for initialization
    onLoad: function() {
        var uuid = cc.sys.localStorage.getItem('uuid');
        var la = this.getComponent(cc.Label);
        la.string = "" + uuid;
    },

    // called every frame
    update: function(dt) {

    },
});