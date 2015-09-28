var MAX_MOVES = 4;
var GREEN_BAR_END = .5;
var YELLOW_BAR_END = .2;

var Battle = function(yourPokemon, theirPokemon) {
	this.yourPokemon = yourPokemon;
	this.theirPokemon = theirPokemon;
	this.escapeAttempts = 0;
};

Battle.prototype.setYourPokemon = function(pokemon) {
	this.yourPokemon = pokemon;
};

Battle.prototype.setTheirPokemon = function(pokemon) {
	this.theirPokemon = pokemon;
};

Battle.prototype.startTurn = function(yourMove) {
	var battle = this;
	var theirMove = battle.theirPokemon.getRandomMove();

	if (battle.yourPokemon.info.speed >= battle.theirPokemon.info.speed) {
		battle.youAttackThem(yourMove, function() {
			battle.theyAttackYou(theirMove, function() {
				showStartOptions();
			});
		});
	} else {
		battle.theyAttackYou(theirMove, function() {
			battle.youAttackThem(yourMove, function() {
				showStartOptions();
			});
		});
	}
};

Battle.prototype.theyAttackYou = function(move, callback) {
	var battle = this;

	var damage = move.getDamageByPokemon(battle.theirPokemon, battle.yourPokemon);
	battle.yourPokemon.stats.hp -= (damage < battle.yourPokemon.stats.hp ? damage : battle.yourPokemon.stats.hp);

	scrollText("optionsText", "Enemy " + this.theirPokemon.info.name.toUpperCase() + " used " + move.info.name, function() {
		battle.changeHealthBarColorAndSize($("#yourHealthBar"), battle.yourPokemon.stats.hp / battle.yourPokemon.stats.maxHp, true, function() {
			$("#yourHp").empty().append(Util.pad(4, battle.yourPokemon.stats.hp, " ") + "/" + Util.pad(4, battle.yourPokemon.stats.maxHp, " "));
			if (battle.yourPokemon.stats.hp > 0) {
				callback();
			} else {
				scrollText("optionsText", battle.yourPokemon.info.name.toUpperCase() + " fainted.", function() {
					if (Party.getFirstLivePokemonInParty() != null) {
						scrollText("optionsText", "Please select another pokemon to send out.", function() {
							alert(Party.getAllPokemonInParty());
						});
					} else {
						alert("You have no more pokemon. You lose");
					}
				});
			}
		});
	});
};

Battle.prototype.youAttackThem = function(move, callback) {
	var battle = this;

	var damage = move.getDamageByPokemon(battle.yourPokemon, battle.theirPokemon);

	battle.theirPokemon.stats.hp -= (damage < battle.theirPokemon.stats.hp ? damage : battle.theirPokemon.stats.hp);

	scrollText("optionsText", battle.yourPokemon.info.name.toUpperCase() + " used " + move.info.name, function() {
		battle.changeHealthBarColorAndSize($("#theirHealthBar"), battle.theirPokemon.stats.hp / battle.theirPokemon.stats.maxHp, true, function() {
			if (battle.theirPokemon.stats.hp > 0) {
				callback();
			} else {
				$("#theirImage").hide();
				scrollText("optionsText", "Enemy " + battle.theirPokemon.info.name.toUpperCase() + " fainted!", function() {
					var expGained = battle.theirPokemon.getExperienceToGive();
					battle.yourPokemon.stats.totalExp += expGained;

					scrollText("optionsText", battle.yourPokemon.info.name.toUpperCase() + " gained " + expGained + " exp points!", function() {
						var newPercentage = battle.yourPokemon.getExpPercentage();
						if (newPercentage >= 1) {
							battle.growLevel(function() {
								exitFightScene();
							});
						} else {
							$("#yourExpBar").animate({width: (newPercentage * EXP_BAR_WIDTH)}, 500, function() {
								exitFightScene();
							});
						}
					});
				});
			}
		});
	});
};

Battle.prototype.changeHealthBarColorAndSize = function(image, newPercentage, animate, callback) {
	var battle = this;

	if (animate) {
		var currentPercentage = image.css("width").slice(0, -2) / BAR_WIDTH;

		if (currentPercentage > newPercentage) {
			//They're going down in health
			if (currentPercentage >= GREEN_BAR_END) {
				//They are starting in the green zone
				if (newPercentage < GREEN_BAR_END) {
					//They are going into the yellow zone
					this.changeHealthBarToGreenLimit(image, newPercentage, function() {
						if (newPercentage < YELLOW_BAR_END) {
							//They are going into the red zone
							battle.changeHealthBarToYellowLimit(image, newPercentage, function() {
								battle.changeHealthBarSameZone(image, newPercentage, callback);
							});
						} else {
							//They are staying in the yellow zone
							battle.changeHealthBarSameZone(image, newPercentage, callback);
						}
					});
				} else {
					//They are staying in the green zone
					this.changeHealthBarSameZone(image, newPercentage, callback);
				}
			} else if (currentPercentage >= YELLOW_BAR_END) {
				//They are starting in the yellow zone
				if (newPercentage < YELLOW_BAR_END) {
					//They are going into the red zone
					this.changeHealthBarToYellowLimit(image, newPercentage, function() {
						battle.changeHealthBarSameZone(image, newPercentage, callback);
					});
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
			if (currentPercentage < YELLOW_BAR_END) {
				//They are starting in the red zone
				if (newPercentage >= YELLOW_BAR_END) {
					//They are going into the yellow zone
					this.changeHealthBarToYelloLimit(image, newPercentage, function() {
						if (newPercentage >= GREEN_BAR_END) {
							//They are going into the green zone
							battle.changeHealthBarToGreenLimit(image, newPercentage, function() {
								battle.changeHealthBarSameZone(image, newPercentage, callback);
							});
						} else {
							//They are staying in the yellow zone
							battle.changeHealthBarSameZone(image, newPercentage, callback);
						}
					});
				} else {
					//They are staying in the red zone
					this.changeHealthBarSameZone(image, newPercentage, callback);
				}
			} else if (currentPercentage < GREEN_BAR_END) {
				//They are starting in the yellow zone
				if (newPercentage >= GREEN_BAR_END) {
					//They are going into the green zone
					this.changeHealthBarToGreenLimit(image, newPercentage, function() {
						battle.changeHealthBarSameZone(image, newPercentage, callback);
					});
				} else {
					//They are staying in the yellow zone
					this.changeHealthBarSameZone(image, newPercentage, callback);
				}
			} else {
				//They are starting in the green zone
				this.changeHealthBarSameZone(image, newPercentage, callback);
			}
		} else {
			//No change in health
			callback();
		}
	} else {
		image.css("width", (newPercentage * BAR_WIDTH) + "px");
		if (newPercentage >= GREEN_BAR_END) {
			image.attr("src", "images/greenHealthBar.png");
		} else if (newPercentage >= YELLOW_BAR_END) {
			image.attr("src", "images/yellowHealthBar.png");
		} else {
			image.attr("src", "images/redHealthBar.png");
		}
	}
};

Battle.prototype.changeHealthBarToGreenLimit = function(image, newPercentage, callback) {
	var battle = this;
	image.animate({width: (GREEN_BAR_END * BAR_WIDTH)}, function() {
		image.attr("src", "images/yellowHealthBar.png");
		callback();
	});
};

Battle.prototype.changeHealthBarToYellowLimit = function(image, newPercentage, callback) {
	var battle = this;
	image.animate({width: (YELLOW_BAR_END * BAR_WIDTH)}, function() {
		image.attr("src", "images/redHealthBar.png");
		callback();
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
	yourExpBar.animate({width: EXP_BAR_WIDTH}, 500, function() {
		//Reset the experience to 0
		yourExpBar.css("width", 0);
		battle.yourPokemon.raiseLevel();

		//Change the level
		$("#yourLevel").empty().append("L:" + Util.pad(3, (battle.yourPokemon.level), " "));

		scrollText("optionsText", battle.yourPokemon.info.name.toUpperCase() + " grew to level " + battle.yourPokemon.level + "!", function() {
			battle.checkForEvolution(function() {
				battle.checkForNewMove(function() {
					yourExpBar.animate({width: (battle.yourPokemon.getExpPercentage() * EXP_BAR_WIDTH)}, 500, function() {
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
	var evolution = battle.yourPokemon.getEvolutionByLevel(battle.yourPokemon.level);
	if (evolution != null) {
		scrollText("optionsText", "Wait! " + battle.yourPokemon.info.name.toUpperCase() + " is evolving!", function() {
			$("#yourImage").attr("src", "images/pokemon/back/" + evolution.info.nationalId + ".png");
			$("#yourName").empty().append(evolution.info.name.toUpperCase());
			scrollText("optionsText", battle.yourPokemon.info.name.toUpperCase() + " evolved into " + evolution.info.name.toUpperCase(), function() {
				console.log(battle.yourPokemon);
				battle.yourPokemon.info = evolution.info;
				battle.yourPokemon.refreshStats();
				console.log(battle.yourPokemon);
				callback();
			});
		});
	} else {
		callback();
	}
};

Battle.prototype.checkForNewMove = function(callback) {
	var battle = this;

	var foundMove = false;

	for (var i = 0; i < battle.yourPokemon.info.moves.length; i++) {
		var moveLookup = battle.yourPokemon.info.moves[i];
		if (moveLookup.learn_type === "level up" && moveLookup.level === battle.yourPokemon.level) {
			foundMove = true;
			var resource = MoveResource.getByResourceUri(moveLookup.resource_uri);
			var move = new Move(resource, resource.pp, resource.pp);
			if (battle.yourPokemon.moves.length < MAX_MOVES) {
				battle.yourPokemon.moves.push(move);
				scrollText("optionsText", battle.yourPokemon.info.name.toUpperCase() + " learned " + move.info.name, function() {
					callback();
				});
			} else {
				scrollText("optionsText", battle.yourPokemon.info.name.toUpperCase() + " is trying to learn " + move.info.name + ", but " + battle.yourPokemon.info.name.toUpperCase() + " already knows " + MAX_MOVES + " moves...", function() {
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

Battle.prototype.canRunAway = function() {
	var b = (this.theirPokemon.stats.speed / 4) % 256;
	if (b == 0) return true;
	var f = ((this.yourPokemon.stats.speed * 32) / b) + 30 * this.escapeAttempts;

	if (f > 255) {
		return true;
	} else {
		var random = Math.floor(Math.random() * 256);
		return random < f;
	}
};