var Move = function(resource, pp, maxPp) {
    this.info = resource;
    this.pp = pp;
    this.maxPp = maxPp;
};

Move.getDefaultMovesForPokemon = function(pokemonResource, level) {
    var moves = [];
    for (var i = 0; i < pokemonResource.moves.length; i++) {
        if (pokemonResource.moves[i].learn_type === "level up" && pokemonResource.moves[i].level < level) {
            var resource = MoveResource.getByResourceUri(pokemonResource.moves[i].resource_uri);
            moves.push(new Move(resource, resource.pp, resource.pp));
            if (moves.length > MAX_MOVES) {
                moves.splice(0, 1);
            }
        }
    }

    return moves;
};

Move.prototype.getDamageByPokemon = function(attackingPokemon, defendingPokemon) {
    var modifier = 1;
	var damage = Math.round((((2 * attackingPokemon.level + 10) / 250) * (attackingPokemon.stats.attack / defendingPokemon.stats.defense) * this.info.power) * modifier);
    console.log(this.info.name + " on " + defendingPokemon.info.name + " does: (2 * " + attackingPokemon.level + " + 10) / 250) * " + attackingPokemon.stats.attack + " / " + defendingPokemon.stats.defense + ") * " + this.info.power + ") = " + damage + " damage");
    return damage;

};
