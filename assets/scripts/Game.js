cc.Class({
    extends: cc.Component,

    properties: {
        starPrefab: {
            default: null,
            type: cc.Prefab
        },

        // The random scale of disappearing time for stars
        maxStarDuration: 0,
        minStarDuration: 0,

        // Ground node for confirming the height of the generated star's position
        ground: {
            default: null,
            type: cc.Node
        },

        // Player node for obtaining the jump height of the main character and controlling the movement switch of the main character
        player: {
            default: null,
            type: cc.Node
        },
        scoreDisplay: {
            default: null,
            type: cc.Label
        },
        scoreAudio: {
            default: null,
            type: cc.AudioClip
        }
    },

    onLoad: function () {
        this.timer = 0;
        this.starDuration = 0;
        // Generate a new star
        this.spawnNewStar();
        this.score = 0;
    },

    spawnNewStar: function () {
        // Generate a new node in the scene with a preset template
        var newStar = cc.instantiate(this.starPrefab);
        // Put the newly added node under the Canvas node
        this.node.addChild(newStar);
        // Set up a random position for the star
        newStar.setPosition(this.getNewStarPosition());
        newStar.getComponent('Square').game = this;
    },
    getRndInteger: function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },
    getNewStarPosition: function () {
        return cc.v2(this.getRndInteger(-250,250), this.getRndInteger(-250,250));
    },
    gainScore: function () {
        this.score += 1;
        this.scoreDisplay.string = 'Score: ' + this.score;
        cc.audioEngine.playEffect(this.scoreAudio, false);
    },
});
