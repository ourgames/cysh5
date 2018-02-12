cc.Class({
    extends: cc.Component,

    properties: {
        spine_1: {
            default: null,
            type:sp.Skeleton,
        },
        spine_2: {
            default: null,
            type:sp.Skeleton,
        },
        spine_3: {
            default: null,
            type:sp.Skeleton,
        },
        next_node: {
            default: null,
            type:cc.Node,
        },
        spine_1_time: 4.5,
        spine_2_time: 2,
        spine_3_time: 1,
    },
    // use this for initialization
    onLoad: function() {

        this.spine_1 = this.spine_1.getComponent('sp.Skeleton');
        this.spine_2 = this.spine_2.getComponent('sp.Skeleton');

        var play1 = function(){
            this.next_node.active = false;
            this.spine_2.node.active = false;
            this.spine_1.node.active = true;
            this.spine_1.setAnimation(0, 'animation', false);
        };
        
        var play2 = function(){
            this.spine_1.node.active = false;
            this.spine_2.node.active = true;
            this.spine_2.setAnimation(0, 'animation', false);
        };

        var showNext = function(){
            this.next_node.active = true;
            // var moveTo1 = cc.MoveTo(1,cc.p(0,-30));
            // var moveTo2 = cc.MoveTo(1,cc.p(0,0));
            // var seq2 = cc.sequence(moveTo1, moveTo2);
            // // var repeat = cc.repeatForever(seq2);
            // this.next_node.runAction(seq2);
        }

        // var play3 = function(){
        //     this.spine_3.setAnimation(0, 'animation', false);
        // };

        var play1CB = cc.callFunc(play1.bind(this));
        var delay = cc.delayTime(this.spine_1_time);
        var play2CB = cc.callFunc(play2.bind(this));
        var delay2 = cc.delayTime(this.spine_2_time);
        var play3CB = cc.callFunc(showNext.bind(this));
        var seq = cc.sequence(play1CB, delay, play2CB, delay2, play3CB);
        this.node.runAction(seq);

        
    },

    // called every frame
    update: function(dt) {

    },
});