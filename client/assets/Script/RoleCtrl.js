// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

var RoleCtrl = cc.Class({
    extends: cc.Component,
    editor: {
        requireComponent: sp.Skeleton
    },
    properties: {
        // role: cc.Node,
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var spine = this.spine = this.getComponent('sp.Skeleton');
        this.Idle();
    },

    start () {

    },

    // update (dt) {},

    Idle: function()
    {
        this.node.setScaleX(1)
        this.spine.setAnimation(0, 'miku_idle', true);
    },

    RunTo: function(pos, callback)
    {
        var spine = this.spine = this.getComponent('sp.Skeleton');
        this.spine.setAnimation(0, 'miku_run', true);
        var curPos = this.node.getPosition();
        var dir = cc.pSub(pos, curPos);
        if (dir.x > 10)
        {
            this.node.setScaleX(1)
        }
        else if(dir.x < -10)
        {
            this.node.setScaleX(-1)
        }
        var moveTo = cc.moveTo(1, pos);
        var dataCB = cc.callFunc(callback);
        var seq = cc.sequence(moveTo, dataCB);
        this.node.runAction(seq);
    },
});
