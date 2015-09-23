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
	var yourPokemon = this.yourPokemon;
	var theirPokemon = this.theirPokemon;

	var battle = this;

	theirPokemon.hp -= (defaultDamage < theirPokemon.hp ? defaultDamage : theirPokemon.hp);

	this.changeHealthBarColorAndSize($("#theirHealthBar"), theirPokemon.hp / theirPokemon.maxHp, true, function() {
		if (theirPokemon.hp > 0) {
			$("#optionsText").empty();
			$("#startOptions").show();
		} else {
			$("#theirImage").hide();
			scrollText("optionsText", "Enemy " + theirPokemon.info.name.toUpperCase() + " fainted!", function() {
				scrollText("optionsText", yourPokemon.info.name.toUpperCase() + " gained 25 exp points!", function() {
					yourPokemon.exp += 25;
					var newPercentage = yourPokemon.exp / yourPokemon.maxExp;
					if (newPercentage >= 1) {
						battle.growLevel(function() {
							exitFightScene();
						});
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
		var currentPercentage = image.css("width").slice(0, -2) / BAR_WIDTH;

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
				if (newPercentage < .25) {
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
			callback();
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
	});
};

Battle.prototype.changeHealthBarSameZone = function(image, newPercentage, callback) {
	image.animate({width: (newPercentage * BAR_WIDTH)}, function() {
		callback();
	});
};

Battle.prototype.growLevel = function(callback) {
	var battle = this;
	var yourExpBar = $("#yourExpBar");

	//Animate the experience up to the level mark
	yourExpBar.animate({width: 64}, 500, function() {
		//Reset the experience to 0
		yourExpBar.css("width", 0);
		battle.yourPokemon.exp = battle.yourPokemon.exp - battle.yourPokemon.maxExp;
		battle.yourPokemon.maxExp *= 1.15;

		//Change the level
		$("#yourLevel").empty().append("L:" + (++battle.yourPokemon.level));

		scrollText("optionsText", battle.yourPokemon.info.name.toUpperCase() + " grew to level " + battle.yourPokemon.level + "!", function() {
			battle.checkForEvolution(function() {
				battle.checkForNewMove(function() {
					yourExpBar.animate({width: (battle.yourPokemon.exp / battle.yourPokemon.maxExp * 64)}, 500, function() {
						callback();
					});
				});
			});
		});
	});
};

Battle.prototype.checkForEvolution = function(callback) {
	var battle = this;

	//Check for evolution
	battle.yourPokemon.getEvolutionByLevel(battle.yourPokemon.level, function(evolution) {
		if (evolution != null) {
			scrollText("optionsText", "Wait! " + battle.yourPokemon.info.name.toUpperCase() + " is evolving!", function() {
				$("#yourImage").attr("src", "images/pokemon/back/" + evolution.info.nationalId + ".png");
				$("#yourName").empty().append(evolution.info.name.toUpperCase());
				scrollText("optionsText", battle.yourPokemon.info.name.toUpperCase() + " evolved into " + evolution.info.name.toUpperCase(), function() {
					battle.yourPokemon = evolution;
					callback();
				});
			});
		} else {
			callback();
		}
	});
};

Battle.prototype.checkForNewMove = function(callback) {
	var battle = this;

	var foundMove = false;

	for (var i = 0; i < battle.yourPokemon.info.moves.length; i++) {
		var moveLookup = battle.yourPokemon.info.moves[i];
		if (moveLookup.learn_type === "level up" && moveLookup.level === battle.yourPokemon.level) {
			foundMove = true;
			MoveResource.getByResourceUri(moveLookup.resource_uri, function(resource) {
				var move = new Move(resource);
				if (battle.yourPokemon.moves.length < 4) {
					battle.yourPokemon.moves.push(move);
					scrollText("optionsText", battle.yourPokemon.info.name.toUpperCase() + " learned " + move.info.name, function() {
						callback();
					});
				} else {
					scrollText("optionsText", battle.yourPokemon.info.name.toUpperCase() + " is trying to learn " + move.info.name + ", but " + battle.yourPokemon.info.name.toUpperCase() + " already knows 4 moves...", function() {
						scrollText("optionsText", "Would you like to overwrite a move to learn " + move.info.name + "?", function() {
							$("#optionsText").empty();
							showYesNoOptions();
							$("#yesOption").click(function() {
								$("#startOptions").hide();
								scrollText("optionsText", "Which move would you like to delete?", function() {
									$("#optionsText").empty();
									showMoveOptions(function() {
										var oldMoveName = battle.yourPokemon.moves[this.value].info.name;
										battle.replaceMove(this.value, move);
										delay(1000, function() {
											$("#moveOptions").hide();
											scrollText("optionsText", battle.yourPokemon.info.name + " forgot " + oldMoveName + " and learned " + move.info.name, function() {
												callback();
											});
										});
									});
								});
							});
							$("#noOption").click(function() {
								$("#startOptions").hide();
								scrollText("optionsText", battle.yourPokemon.info.name.toUpperCase() + " did not learn " + move.info.name, function() {
									callback();
								});
							});
						});
					});
				}
			});
		}
	}
	if (!foundMove) {
		callback();
	}
};

Battle.prototype.replaceMove = function(index, move) {
	this.yourPokemon.moves[index] = move;
	$("#move" + index).empty().append(move.info.name);
};