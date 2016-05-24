DesolateStorm.Game = function (game) {
    
    
};

DesolateStorm.Game.prototype = {
    create: function () { 
        
        this.openingSequence();
    },
    openingSequence () {
        this.stage.backgroundColor = '#000000';
        this.add.bitmapText(this.world.centerX - 295, this.world.centerY - 130, 'scaryFont', 'Four fifteen PR at five thirty six Fulton Street.', 24);
        this.add.bitmapText(this.world.centerX - 250, this.world.centerY - 100, 'scaryFont', 'This was the call that changed everything.', 24);
        
        
        this.buildWorld()
    },
    
    buildWorld: function () {

    },
    
}