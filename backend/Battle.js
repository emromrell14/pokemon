var yourPokemon;
var theirPokemon;

var Battle = function(yourPokemon, theirPokemon) {
	this.yourPokemon = yourPokemon;
	this.theirPokemon = theirPokemon;
};

Battle.prototype.setYourPokemon = function(pokemon) {
	this.yourPokemon = pokemon;
};

Battle.prototype.setTheirPokemon = function(pokemon) {
	this.theirPokemon = pokemon;
};

Battle.prototype.attack = function(defaultDamage) {
	yourPokemon = this.yourPokemon;
	theirPokemon = this.theirPokemon;

    var battle = this;

	this.theirPokemon.hp -= (defaultDamage < this.theirPokemon.hp ? defaultDamage : this.theirPokemon.hp);

	this.changeHealthBarColorAndSize($("#theirHealthBar"), this.theirPokemon.hp / this.theirPokemon.maxHp, true, function() {
		if (theirPokemon.hp > 0) {			
	    	$("#optionsText").empty();
			$("#startOptions").show();
		} else {
			$("#theirImage").hide();
			scrollText("optionsText", "Enemy " + theirPokemon.name.toUpperCase() + " fainted!", function() {
				scrollText("optionsText", yourPokemon.name.toUpperCase() + " gained 25 exp points!", function() {
                    console.log(yourPokemon.exp);
                    yourPokemon.exp += 25;
                    console.log(yourPokemon.exp + " " + yourPokemon.maxExp);               
                    var newPercentage = yourPokemon.exp / yourPokemon.maxExp;
                    if (newPercentage >= 1) {
                        battle.growLevel(yourPokemon);
                    } else {
                        $("#yourExpBar").animate({width: (yourPokemon.exp / yourPokemon.maxExp * 64)}, 500, function() {
                            exitFightScene();
                        });
                    }
				});
			});
		}
	});
};

Battle.prototype.changeHealthBarColorAndSize = function(image, newPercentage, animate, callback) {
    if (animate) {
        var currentPercentage = image.css("width").substring(0, 2) / BAR_WIDTH;

        if (currentPercentage > newPercentage) {
            //They're going down in health
            if (currentPercentage >= .5) {
                //They are starting in the green zone
                if (newPercentage < .5) {
                    //They are going into the yellow zone
                    this.changeHealthBarGreen(image, newPercentage, callback);
                } else {
                    //They are staying in the green zone
                    this.changeHealthBarSameZone(image, newPercentage, callback);
                }
            } else if (currentPercentage >= .25) {
                //They are starting in the yellow zone
                if(newPercentage < .25) {
                    //They are going into the red zone
                    this.changeHealthBarYellow(image, newPercentage, callback);
                } else {
                    //They are staying in the yellow zone
                    this.changeHealthBarSameZone(image, newPercentage, callback);
                }
            } else {
                //They are starting in the red zone
                this.changeHealthBarSameZone(image, newPercentage, callback);
            }
        } else if (currentPercentage < newPercentage) {
            //They're going up in health
        } else {
        	//No change in health
            callback();
        }
    } else {
        image.css("width", (newPercentage * BAR_WIDTH) + "px");
        if (newPercentage >= .5) {
            image.attr("src", "images/greenHealthBar.png");
        } else if (newPercentage >= .25) {
            image.attr("src", "images/yellowHealthBar.png");
        } else {
            image.attr("src", "images/redHealthBar.png");
        }    
    }
};

Battle.prototype.changeHealthBarGreen = function(image, newPercentage, callback) {
    var battle = this;
    image.animate({width: (.5 * BAR_WIDTH)}, function() {
        image.attr("src", "images/yellowHealthBar.png");
        if (newPercentage < .25) {
            battle.changeHealthBarYellow(image, newPercentage, callback);
        } else {
            battle.changeHealthBarSameZone(image, newPercentage, callback);
        }
    });
};

Battle.prototype.changeHealthBarYellow = function(image, newPercentage, callback) {
    var battle = this;
    image.animate({width: (.25 * BAR_WIDTH)}, function() {
        image.attr("src", "images/redHealthBar.png");
        battle.changeHealthBarSameZone(image, newPercentage, callback);
    })
};

Battle.prototype.changeHealthBarSameZone = function(image, newPercentage, callback) {
    image.animate({width: (newPercentage * BAR_WIDTH)}, function() {
        callback();
    });
};

Battle.prototype.growLevel = function() {
    //Animate the experience up to the level mark
    $("#yourExpBar").animate({width: 64}, 500, function() {
        //Change the level
        $("#yourLevel").empty().append("L:" + (++yourPokemon.level));

        //Check for evolution
        if (yourPokemon.getEvolutionByLevel()) {

        }

        //Check for new moves

        //Change the experience
        yourPokemon.exp = yourPokemon.exp - yourPokemon.maxExp;
        yourPokemon.maxExp = Math.round(yourPokemon.maxExp * 1.15);
        $("#yourExpBar").css("width", "0");
        scrollText("optionsText", yourPokemon.name + " grew a level!", function() {
            $("#yourExpBar").animate({width: (yourPokemon.exp / yourPokemon.maxExp * 64)}, 500, function() {
                exitFightScene();
            });
        });
    });
};