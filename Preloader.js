DesolateStorm.Preloader = function(game) {
    
    this.ready = false;
    
};

DesolateStorm.Preloader.prototype = {
	
	preload: function () {
        this.load.image('titlescreen','')
        this.load.
	},

	create: function () {
		this.preloadBar.cropEnabled = false; 
	},

	update: function () {
	   	this.ready = true;
	}
};