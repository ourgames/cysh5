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
        next_node: {
            default: null,
            type:cc.Node,
        },
        touch_node: {
            default: null,
            type:cc.Node,
        },
        spine_1_time: 4.5,
        spine_2_time: 2,
        spine_3_time: 1,
        propagate: {
            default: false
        },
        touch_count : 0,
    },
    // use this for initialization
    onLoad: function() {
    	this.propagate = true;
    	this.isPlaySpine2 = false;
        this.animations = new Array(17,32,50,65,83,102,117,150);
        this.spine_1 = this.spine_1.getComponent('sp.Skeleton');
        this.spine_2 = this.spine_2.getComponent('sp.Skeleton');

        var play1 = function(){
            this.next_node.active = false;
            this.spine_2.node.active = false;
            this.spine_1.node.active = true;
            this.trackEntry = this.spine_1.setAnimation(0, 'animation', false);
        };
        
        this.touch_node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan.bind(this), this.node);
        this.touch_node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded.bind(this), this.node);
    },


    onTouchBegan: function(event) {
		if (this.propagate)
        {
            cc.log("TOUCH_START")
            event.stopPropagation();
        }
    },

    onTouchEnded: function(event) {
    	if (this.propagate)
        {
            cc.log("TOUCH_END")
            if (this.touch_count >= this.animations.length -1 && this.isPlaySpine2 == false)
            {
            	this.isPlaySpine2 = true;
            	this.playNextAnimation();
            	return;
            }
            this.trackEntry.trackTime = this.animations[this.touch_count] / 30;
    		this.spine_1.timeScale = 1;
            this.touch_count += 1;
            event.stopPropagation();
        }
    },

    playNextAnimation: function() {
    	var play2 = function(){
            this.spine_1.node.active = false;
            this.spine_2.node.active = true;
            this.spine_2.setAnimation(0, 'animation', false);
        };

        var showNext = function(){
            this.next_node.active = true;
            this.propagate = false;
            this.touch_node.active = false;
        }

        var play2CB = cc.callFunc(play2.bind(this));
        var delay2 = cc.delayTime(this.spine_2_time);
        var play3CB = cc.callFunc(showNext.bind(this));
        var seq = cc.sequence(play2CB, delay2, play3CB);
        this.node.runAction(seq);
    },
    // called every frame
    update: function(dt) {
    	if (this.touch_count > this.animations.length)
    		return;
    	var time = this.trackEntry.trackTime;
    	var checkTime = this.animations[this.touch_count] / 30;
    	if (time > checkTime)
    	{
    		this.spine_1.timeScale = 0;
    	}
    },

    start: function() {
        this.next_node.active = false;
        this.spine_2.node.active = false;
        this.spine_1.node.active = true;
        this.trackEntry = this.spine_1.setAnimation(0, 'animation', false);
    },

    Init: function(skip) {
    	if (skip)
    	{
    		this.touch_count = this.animations.length + 1;
    		this.spine_1.timeScale = 0;
    		this.spine_2.timeScale = 0;
    		this.propagate = false;
            this.touch_node.active = false;
    	}
    },
});