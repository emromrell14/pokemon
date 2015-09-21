function getFirstLivePokemonInParty() {
	for (var i = 0; i < party.length; i++) {
		if (party[i].hp !== 0) {
			return party[i];
		}
	}
}

function getAllPokemonInParty() {
	return party;
}

var party = [
	new Pokemon("Bulbasaur", 1, 16, 125, 150, 185, 200, [
			{name: "Razor Leaf", damage: 40}, 
			{name: "Growth", damage: 0}
		]
	),
	new Pokemon("Rattata", 19, 10, 25, 25, 0, 150, [
			{name: "Tackle", damage: 20},
			{name: "Tail Whip", damage: 0}
		]
	)
];