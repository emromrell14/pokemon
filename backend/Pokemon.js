var Pokemon = function(resource, level, moves, stats) {
	this.info = resource;
	this.level = level;
	this.moves = moves;

	if (stats != null) {
		this.stats = stats;
	} else {
		this.stats = this.initializeStats(level);
	}
};

Pokemon.prototype.initializeStats = function(level) {
	return {
		totalExp: Util.getExpForLevel(level),
		maxHp: this.getMaxHp(),
		hp: this.getMaxHp(),
		attack: this.getStat("attack"),
		defense: this.getStat("defense"),
		speed: this.getStat("speed")
	};
};

Pokemon.getRandomPokemon = function() {
	var resource = PokemonResource.getRandomPokemonResource();
	var level = Maps.getRandomLevelForCurrentMap();
	return new Pokemon(resource, level, Move.getDefaultMovesForPokemon(resource, level), null);
};

Pokemon.prototype.getEvolutionByLevel = function(level) {
	for (var i = 0; i < this.info.evolutions.length; i++) {
		if (this.info.evolutions[i].level <= level) {
			var resource = PokemonResource.getByResourceUri(this.info.evolutions[i].resource_uri);
			return new Pokemon(resource, level, this.moves, this.stats);
		}
	}
	return null;
};

Pokemon.prototype.getExpPercentage = function() {
	var baseExpForLevel = Util.getExpForLevel(this.level);
	var expInLevel = this.stats.totalExp - baseExpForLevel;
	var expForNextLevel = Util.getExpForLevel(this.level + 1) - baseExpForLevel;
	return expInLevel / expForNextLevel;
};

Pokemon.prototype.getExperienceToGive = function() {
	return Math.round(this.info.exp * this.level / 7);
};

Pokemon.prototype.getMaxHp = function() {
	var hp = Math.floor((this.info.hp * 2 * this.level) / 100) + this.level + 10;
	//console.log("Computing hp for " + this.info.name + ": FLOOR((" + this.info.hp + " * 2 * " + this.level + ") / 100) + " + this.level + " + 10 = " + hp);
	return hp;
};

Pokemon.prototype.getStat = function(statName) {
	var stat = Math.floor((this.info[statName] * 2 * this.level) / 100) + 5;
	//console.log("Computing " + statName + " for " + this.info.name + ": FLOOR((" + this.info[statName] + " * 2 * " + this.level + ") / 100) + 5 = " + stat);
	return stat;
};

Pokemon.prototype.raiseLevel = function() {
	this.level++;
	this.refreshStats();
};

Pokemon.prototype.refreshStats = function() {
	var hpDifference = this.stats.maxHp - this.stats.hp;
	this.stats.maxHp = this.getMaxHp();
	this.stats.hp = this.stats.maxHp - hpDifference;
	this.stats.attack = this.getStat("attack");
	this.stats.defense = this.getStat("defense");
	this.stats.speed = this.getStat("speed");
};
