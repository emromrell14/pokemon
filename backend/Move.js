var Move = function(resource) {
    this.info = resource;
};

Move.getDefaultMovesForPokemon = function(pokemonResource, level) {
    var moves = [];
    for (var i = 0; i < pokemonResource.moves.length; i++) {
        if (pokemonResource.moves[i].learn_type === "level up" && pokemonResource.moves[i].level < level) {
            moves.push(pokemonResource.moves[i]);
            if (moves.length > 4) {
                moves.splice(0, 1);
            }
        }
    }

    return moves;
};
