cc.Class({
    extends: cc.Component,

    properties: {
        pickRadius: 0,
    },

    getPlayerDistance: function () {
        // Determine the distance according to the position of the Player node
        var playerPos = this.game.player.getPosition();

        // Calculate the distance between two nodes according to their positions
        var dist = this.node.position.sub(playerPos).mag();
        return dist;
    },

    // getBottomDistance: function () {
    //     // Determine the distance according to the position of the Player node
    //     var groundPos = this.game.ground.getPosition();

    //     // Calculate the distance between two nodes according to their positions
    //     var dist = this.node.position.sub(groundPos).mag();
    //     return dist;
    // },

    onPicked: function () {
        // When the stars are being collected, invoke the interface in the Game script to generate a new star
        this.game.spawnNewStar();

        // Then destroy the current star's node
        this.node.destroy();
    },

    onLoad: function () {
        var moveDown = cc.tween().by(5, {y: -600}, {easing: 'smooth'});
        cc.tween(this.node).then(moveDown).start()
    },

    update: function (dt) {
        // Determine if the distance between the Star and main character is less than the collecting distance for each frame
        if ((this.getPlayerDistance() < this.pickRadius) ) {
            // Invoke collecting behavior
            this.game.gainScore();
            this.onPicked();
            return;
        }else
        if ((this.node.y <= -300)) {
            this.onPicked();
            return;
        }
    },

});
