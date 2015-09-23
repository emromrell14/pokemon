var Pokemon = function(resource, level, hp, maxHp, exp, maxExp, moves) {
	this.info = resource;
	this.level = level;
	this.hp = hp;
	this.maxHp = maxHp;
	this.exp = exp;
	this.maxExp = maxExp;
	this.moves = moves;
};

Pokemon.getRandomPokemon = function(callback) {
	PokemonResource.getRandomPokemonResource(function(resource) {
		var level = Maps.getRandomLevelForCurrentMap();
		var pokemon = new Pokemon(resource, level, resource.hp, resource.hp, 0, 200, Move.getDefaultMovesForPokemon(resource, level));
		callback(pokemon);
	});
};

Pokemon.prototype.getEvolutionByLevel = function(level, callback) {
	for (var i = 0; i < this.info.evolutions.length; i++) {
		if (this.info.evolutions[i].level == level) {
			PokemonResource.getByResourceUri(this.info.evolutions[i].resource_uri, function(pokemon) {
				var evolution = new Pokemon(pokemon, level, this.hp, this.maxHp, this.exp, this.maxExp, this.moves);
				callback(evolution);
				return;
			});
		}
	}
	callback(null);
};