DesolateStorm.Game = function (game) {
    
    
};

DesolateStorm.Game.prototype = {
    create: function () { 
        
        this.openingSequence();
    },
    openingSequence () {
        this.stage.backgroundColor = '#000000';
        this.add.bitmapText(this.world.centerX - 155, this.world.centerY + 180, 'scaryFont', 'IV I V PR at V III VI Fulton Street. This was the call that changed everything.', 24);
        
        this.buildWorld
    },
    
    buildWorld: function () {
        this.add.image(0,720,'policeOfficer')
    },
    
}