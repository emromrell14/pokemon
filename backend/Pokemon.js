var Pokemon = function(name, nationalId, level, hp, maxHp, exp, maxExp, moves) {
	this.name = name; 
	this.nationalId = nationalId;
	this.level = level;
	this.hp = hp;
	this.maxHp = maxHp; 
	this.exp = exp;
	this.maxExp = maxExp;
	this.moves = moves;
};

Pokemon.createPokemonFromResource = function(pokemon, level) {
	var moves = [];
	for (var i = 0; i < pokemon.moves.length; i++) {
		if (pokemon.moves[i].learn_type === "level up" && pokemon.moves[i].level < level) {
			moves.push(pokemon.moves[i]);
			if (moves.length > 4) {
				moves.splice(0, 1);
			}			
		}
	}
	return new Pokemon(pokemon.name, pokemon.national_id, level, 40, 40, 0, 200, moves);
};