DesolateStorm.Preloader = function(game) {
    
    this.ready = false;
    
};

DesolateStorm.Preloader.prototype = {
	
	preload: function () {
        this.load.atlasXML('adultBedroom','bedroom_sprite.png','bedroomsprite.xml');
        this.load.atlasXML('entrance','chandelier_sprite.png','chandeliersprite.xml') ;
        this.load.audio('metalclang', 'clinksound.mp3');
        this.load.image('deadGuy','Dead_guy.png');
        this.load.image('hallWay1','Hallway1.png');
        this.load.image('hallWay2','Hallway2.png');
        this.load.image('kid','Kid.gif');
        this.load.atlasXML('kidsBedroom', 'Kids_bedroom_sprite.png','Kids_bedroom_sprite.xml');
        this.load.atlasXML('kitchen','kitchen_sprite.png','kitchensprite.xml');
        this.load.image('leadPipe','Lead_Pipe.png');
        this.load.atlasXML('livingroom','livingroom_sprite.png','livingroomsprite.xml');
        this.load.image('policeRadio','Police_Radio.png');
        this.load.atlasXML('policeOfficer','Policeofficersprite.png','Policeofficersprite.xml');
        this.load.bitmapFont('scaryfont','', '');
        this.load.image('speechBubble','Speech_bubble.png');
        this.load.audio('thunderSound','thundersound.mp3');
        this.load.image('titleScreen','Title_screen.png');
    },

	create: function () { 
	},

	update: function () {
	   	this.ready = true;
	}
};