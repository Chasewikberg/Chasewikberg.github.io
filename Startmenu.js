DesolateStorm.StartMenu = function (game) {
    this.startBG;
    this.startPrompt;
};
DesolateStorm.StartMenu.prototype = {
	
	create: function () {
        this.thundermusic = this.add.audio('thunderSound');
        this.thundermusic.play();
		startBG = this.add.image(0, 0, 'titleScreen');
		startBG.inputEnabled = true;
		startBG.events.onInputDown.addOnce(this.startGame, this);
		
		startPrompt = this.add.bitmapText(this.world.centerX - 310, this.world.centerY + 180, 'scarytext', 'Face Your Fears!', 24);
        startPrompt = this.add.bitmapText(this.world.centerX - 310, this.world.centerY + 200, 'scarytext', 'Click to ', 24);
	},

	startGame: function (pointer) {
		this.state.start('Game');
	}
};