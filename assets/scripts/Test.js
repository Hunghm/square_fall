// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        
    },
    runJumpAction () {
        // Jump up
        var jumpUp = cc.tween().by(1, {y: 250}, {easing: 'sineOut'});
        // Jump down
        var jumpDown = cc.tween().by(1, {y: -250}, {easing: 'sineIn'});

        // Create a easing and perform actions in the order of "jumpUp", "jumpDown"
        // Repeat
        return cc.tween().repeatForever(jumpDown);
    },
    
    onLoad: function () {
        // Initialize the jump action
        var jumpAction = this.runJumpAction();
        var moveDown = cc.tween().by(1, {y: -600}, {easing: 'smooth'});
        cc.tween(this.node).then(moveDown).start()
    },
    update: function () {
    }

});
