// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        jumpWeight: 0,
        jumpDuration: 0,
        maxMoveSpeed: 0,
        accel: 0,
        jumpAudio: {
            default: null,
            type: cc.AudioClip
        },
    },

    onKeyDown(event) {
        // Set a flag when key pressed
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                let moveLeft = cc.tween().to(this.jumpDuration, { position: cc.v2(-250, 0)}).call(this.playJumpSound, this)
                cc.tween(this.node).then(moveLeft).start()
                break;
            case cc.macro.KEY.d:
                let moveRight = cc.tween().to(this.jumpDuration, { position: cc.v2(250, 0)}).call(this.playJumpSound, this)
                cc.tween(this.node).then(moveRight).start()
                break;
        }
    },

    playJumpSound: function () {
        // Invoke sound engine to play the sound
        cc.audioEngine.playEffect(this.jumpAudio, false);
    },

    onKeyUp(event) {
        // Unset a flag when key released
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                break;
            case cc.macro.KEY.d:
                break;
        }
    },

    onLoad: function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    onDestroy() {
        // Cancel keyboard input monitoring
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    update: function (dt) {
        
        

    },

});
