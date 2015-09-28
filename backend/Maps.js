var Maps = {};
var currentMapName = "";

Maps.getMap = function(mapName) {
	return maps[mapName];
};

Maps.getCurrentMapName = function() {
	return currentMapName;
};

Maps.setCurrentMap = function(mapName) {
	currentMapName = mapName;
};

Maps.getCurrentMap = function() {
	return maps[currentMapName];
};

Maps.getAllMapNames = function() {
	return Object.keys(maps);
};

Maps.getLinkingLocation = function(mapName, location) {
	var result = mapLinks[mapName][location.row + "-" + location.col];
	return {mapName: result.mapName, location: {row: result.location.row, col: result.location.col}}
};

Maps.getTestStartLocation = function(mapName) {
	return {row: 6, col: 5};
};

Maps.getRandomPokemonForCurrentMap = function() {
	var wildPokemonEncounters = pokemonEncounters[Maps.getCurrentMapName()];
	var rand = Math.random();

	var j = 0;
	for (var i = 0; i < wildPokemonEncounters.length; i++) {
		var wildPokemonEncounter = wildPokemonEncounters[i];
		j += wildPokemonEncounter.encounterRate;
		if (rand < j) {
			var resource = PokemonResource.getByResourceUri("/api/v1/pokemon/" + wildPokemonEncounter.pokemonId + "/");
			var level = wildPokemonEncounter.levelRange.getRandomLevel();
			return new Pokemon(resource, level, Move.getDefaultMovesForPokemon(resource, level), null);
		}
	}
};

var mapLinks = {
	"PalletTown": {
		"0-10": {
			mapName: "Route1",
			location: {
				row: 35,
				col: 7
			}
		},
		"0-11": {
			mapName: "Route1",
			location: {
				row: 35,
				col: 8
			}
		},
		"17-4": {},
		"17-5": {},
		"17-6": {},
		"17-7": {}
	},
	"Route1": {
		"35-7": {
			mapName: "PalletTown",
			location: {
				row: 0,
				col: 10
			}
		},
		"35-8": {
			mapName: "PalletTown",
			location: {
				row: 0,
				col: 11
			}
		},
		"0-7": {
			mapName: "VeridianCity",
			location: {
				row: 35,
				col: 28
			}
		},
		"0-8": {
			mapName: "VeridianCity",
			location: {
				row: 35,
				col: 29
			}
		}
	},
	"ViridianCity": {
		"35-28": {
			mapName: "Route1",
			location: {
				row: 0,
				col: 7
			}
		},
		"35-29": {
			mapName: "Route1",
			location: {
				row: 0,
				col: 8
			}
		}
	}
};

var maps = {
	PalletTown: [
		['groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier', 'grass', 'grass', 'cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier', 'groundYellow'],
		['cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'grass', 'grass', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'buildingGreenTall00', 'buildingGreenTall01', 'buildingGreenTall01', 'buildingGreenTall03', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'buildingGreenTall00', 'buildingGreenTall01', 'buildingGreenTall01', 'buildingGreenTall03', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'buildingGreenTall10', 'buildingGreenTall11', 'buildingGreenTall12', 'buildingGreenTall13', 'groundWhite', 'groundWhite', 'groundYellow', 'groundYellow', 'buildingGreenTall10', 'buildingGreenTall11', 'buildingGreenTall12', 'buildingGreenTall13', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundWhite', 'signWhite', 'buildingGreenTall20', 'door', 'buildingGreenTall22', 'buildingGreenTall23', 'groundWhite', 'groundWhite', 'groundYellow', 'signWhite', 'buildingGreenTall20', 'door', 'buildingGreenTall22', 'buildingGreenTall23', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'buildingBrickTall00', 'buildingBrickTall01', 'buildingBrickTall01', 'buildingBrickTall01', 'buildingBrickTall01', 'buildingBrickTall05', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'fence', 'fence', 'fence', 'signWhite', 'groundWhite', 'groundWhite', 'buildingBrickTall10', 'buildingBrickTall11', 'buildingBrickTall11', 'buildingBrickTall11', 'buildingBrickTall11', 'buildingBrickTall15', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundWhite', 'groundWhite', 'buildingBrickTall20', 'buildingBrickTall21', 'buildingBrickTall22', 'buildingBrickTall23', 'buildingBrickTall24', 'buildingBrickTall25', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundWhite', 'groundWhite', 'buildingBrickTall30', 'buildingBrickTall31', 'door', 'buildingBrickTall33', 'buildingBrickTall31', 'buildingBrickTall35', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'fence', 'fence', 'fence', 'signWhite', 'fence', 'fence', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'waterTopLeft', 'waterTop', 'waterTop', 'waterTopRight', 'groundWhite', 'groundWhite', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'waterLeft', 'water', 'water', 'waterRight', 'groundWhite', 'groundWhite', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'waterLeft', 'water', 'water', 'waterRight', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'waterLeft', 'water', 'water', 'waterRight', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier']
	],
	Route1: [
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier', 'groundYellow', 'groundYellow', 'cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'groundYellow', 'groundYellow', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'smallTree', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier'],
		['smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'smallTree'],
		['smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'smallTree'],
		['smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'smallTree'],
		['smallTree', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'smallTree', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'smallTree'],
		['smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree'],
		['smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree'],
		['smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'grass', 'grass', 'grass', 'grass', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'grass', 'grass', 'grass', 'grass', 'smallTree'],
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'grass', 'grass', 'grass', 'grass', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'grass', 'grass', 'grass', 'grass', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'grass', 'grass', 'grass', 'grass', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'cliffDown', 'groundYellow', 'cliffDown', 'cliffDown', 'cliffDown', 'groundYellow', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'grass', 'grass', 'grass', 'grass', 'groundYellow', 'groundYellow', 'cylinderBarrier'],
		['cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'grass', 'grass', 'grass', 'grass', 'cliffDown', 'cliffDown', 'cylinderBarrier'],
		['smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'grass', 'grass', 'grass', 'grass', 'groundYellow', 'groundYellow', 'smallTree'],
		['smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'grass', 'grass', 'grass', 'grass', 'groundYellow', 'groundYellow', 'smallTree'],
		['smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree'],
		['smallTree', 'cliffDown', 'cliffDown', 'groundYellow', 'groundYellow', 'groundYellow', 'signYellow', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'smallTree'],
		['smallTree', 'groundYellow', 'groundYellow', 'grass', 'grass', 'grass', 'grass', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'grass', 'grass', 'grass', 'grass', 'smallTree'],
		['smallTree', 'groundYellow', 'groundYellow', 'grass', 'grass', 'grass', 'grass', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'grass', 'grass', 'grass', 'grass', 'smallTree'],
		['smallTree', 'grass', 'grass', 'grass', 'grass', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'grass', 'grass', 'grass', 'grass', 'groundYellow', 'groundYellow', 'smallTree'],
		['smallTree', 'grass', 'grass', 'grass', 'grass', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'grass', 'grass', 'grass', 'grass', 'groundYellow', 'groundYellow', 'smallTree'],
		['smallTree', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'grass', 'grass', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'smallTree'],
		['smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier', 'grass', 'grass', 'cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree'],
		['smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier', 'grass', 'grass', 'cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree'],
		['smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier', 'grass', 'grass', 'cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree']
	],
	ViridianCity: [
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', 'groundWhite', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', 'groundWhite', 'groundWhite', 'signYellow', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', 'groundWhite', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', 'groundWhite', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'buildingGreenShort00', 'buildingGreenShort01', 'buildingGreenShort01', 'buildingGreenShort03', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'buildingGym00', 'buildingGym01', 'buildingGym01', 'buildingGym01', 'buildingGym01', 'buildingGym05', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundGreen', 'groundGreen', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'smallTree', 'smallTree', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'buildingGreenShort10', 'buildingGreenShort12', 'buildingGreenShort12', 'buildingGreenShort13', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'buildingGym10', 'buildingGym11', 'buildingGym11', 'buildingGym11', 'buildingGym11', 'buildingGym15', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundGreen', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'buildingGym20', 'buildingGym21', 'buildingGym22', 'buildingGym23', 'buildingGym21', 'buildingGym25', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundGreen', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'signYellow', 'buildingGym30', 'buildingGym31', 'buildingGym31', 'buildingGym31', 'door', 'buildingGym35', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundGreen', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', 'groundWhite', 'groundWhite', 'groundWhite', 'buildingGreenShort00', 'buildingGreenShort01', 'buildingGreenShort01', 'buildingGreenShort03', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundGreen', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', 'groundWhite', 'groundWhite', 'groundWhite', 'buildingGreenShort10', 'door', 'buildingGreenShort12', 'buildingGreenShort13', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundGreen', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundGreen', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundGreen', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'buildingBrickTall00', 'buildingBrickTall01', 'buildingBrickTall01', 'buildingBrickTall01', 'buildingBrickTall01', 'buildingBrickTall05', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainBottom', 'mountainBottom', 'mountainBottom', 'mountainBottom', 'mountainBottom', 'mountainBottomRight', 'groundGreen', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'buildingBrickTall10', 'buildingBrickTall11', 'buildingBrickTall11', 'buildingBrickTall11', 'buildingBrickTall11', 'buildingBrickTall15', 'groundWhite', 'groundWhite', 'fence', 'fence', 'fence', 'fence', 'fence', 'fence', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'buildingBrickTall20', 'buildingBrickTall21', 'buildingBrickTall21', 'buildingBrickTall21', 'buildingBrickTall21', 'buildingBrickTall25', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'signYellow', 'buildingBrickTall30', 'door', 'buildingBrickTall31', 'buildingBrickTall31', 'buildingBrickTall31', 'buildingBrickTall35', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'buildingBrickTall00', 'buildingBrickTall01', 'buildingBrickTall01', 'buildingBrickTall05', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'signYellow', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'buildingBrickTall10', 'buildingBrickTall11', 'buildingBrickTall11', 'buildingBrickTall15', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainTop', 'mountainTop', 'mountainTop', 'mountainTopRight', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'buildingBrickTall20', 'buildingBrickTall21', 'buildingBrickTall21', 'buildingBrickTall25', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'buildingBrickTall30', 'door', 'signPokeMart', 'buildingBrickTall35', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'buildingBrickTall00', 'buildingBrickTall01', 'buildingBrickTall01', 'buildingBrickTall05', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'buildingBrickTall10', 'buildingBrickTall11', 'buildingBrickTall11', 'buildingBrickTall15', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'waterTopLeft', 'waterTop', 'waterTop', 'waterTop', 'waterTop', 'waterTopRight', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'buildingBrickTall20', 'buildingBrickTall21', 'buildingBrickTall21', 'buildingBrickTall25', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'waterLeft', 'water', 'water', 'water', 'water', 'waterRight', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'buildingBrickTall30', 'door', 'signPokeCenter', 'buildingBrickTall35', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'waterLeft', 'water', 'water', 'water', 'water', 'waterRight', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'waterLeft', 'water', 'water', 'water', 'water', 'waterRight', 'cliffDown', 'groundGreen', 'cliffDown', 'cliffDown', 'cliffDown', 'groundGreen', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainBottom', 'mountainBottom', 'mountainBottom', 'mountainBottomRight', 'fence', 'fence', 'fence', 'fence', 'fence', 'fence', 'fence', 'fence', 'fence', 'fence', 'fence', 'fence', 'fence', 'fence', 'fence', 'fence', 'fence', 'fence', 'fence', 'fence', 'fence', 'fence', 'fence', 'fence', 'groundWhite', 'groundWhite', 'fence', 'fence', 'fence', 'fence', 'fence', 'fence', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'cylinderBarrier', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'cylinderBarrier', 'groundWhite', 'groundWhite', 'cylinderBarrier', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'cylinderBarrier', 'groundGreen', 'groundGreen', 'groundGreen'],
		['groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'cylinderBarrier', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'cylinderBarrier', 'groundWhite', 'groundWhite', 'cylinderBarrier', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'cylinderBarrier', 'groundGreen', 'groundGreen', 'groundGreen'],
		['groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'cylinderBarrier', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'cylinderBarrier', 'groundWhite', 'groundWhite', 'cylinderBarrier', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'cylinderBarrier', 'groundGreen', 'groundGreen', 'groundGreen'],
		['groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'cylinderBarrier', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'cylinderBarrier', 'groundWhite', 'groundWhite', 'cylinderBarrier', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'cylinderBarrier', 'groundGreen', 'groundGreen', 'groundGreen']
	],
	Route2: [
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'groundWhite', 'groundWhite', 'fence', 'groundWhite', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'groundWhite', 'groundWhite', 'fence', 'groundWhite', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'groundWhite', 'groundWhite', 'fence', 'groundWhite', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'groundWhite', 'groundWhite', 'fence', 'groundWhite', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'groundWhite', 'groundWhite', 'mountainTopLeft', 'mountainTop', 'mountainTop', 'mountainTop', 'mountainTop', 'mountainTop', 'mountainTop', 'mountainTopRight', 'groundYellow', 'groundYellow', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'groundWhite', 'groundWhite', 'mountainLeft', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundYellow', 'groundYellow', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'mountainLeft', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundYellow', 'groundYellow', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'mountainBottomLeft', 'mountainRight', 'mountainRight', 'mountainRight', 'mountainRight', 'mountainRight', 'mountainRight', 'mountainBottomRight', 'groundYellow', 'groundYellow', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'smallTree', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'smallTree', 'groundGreen', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundYellow', 'signYellow', 'groundYellow', 'groundYellow', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'buildingBrickTall00', 'buildingBrickTall01', 'buildingBrickTall01', 'buildingBrickTall05', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'buildingBrickTall10', 'buildingBrickTall11', 'buildingBrickTall11', 'buildingBrickTall15', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'buildingBrickTall20', 'buildingBrickTall21', 'buildingBrickTall21', 'buildingBrickTall25', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundYellow', 'groundYellow', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'cylinderBarrier', 'cylinderBarrier', 'buildingBrickTall30', 'door', 'buildingBrickTall31', 'buildingBrickTall35', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundYellow', 'groundYellow', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundBrick', 'groundBrick', 'groundBrick', 'groundBrick', 'groundBrick', 'groundBrick', 'groundBrick', 'groundBrick', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundYellow', 'groundYellow', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundBrick', 'groundBrick', 'groundBrick', 'groundBrick', 'groundBrick', 'groundBrick', 'groundBrick', 'groundBrick', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundYellow', 'groundYellow', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'buildingGreenShort00', 'buildingGreenShort01', 'buildingGreenShort01', 'buildingGreenShort03', 'groundYellow', 'groundYellow', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'buildingGreenShort10', 'door', 'buildingGreenShort12', 'buildingGreenShort13', 'groundYellow', 'groundYellow', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'grass', 'grass', 'groundWhite', 'groundWhite', 'grass', 'grass', 'grass', 'grass', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'grass', 'grass', 'groundWhite', 'groundWhite', 'grass', 'grass', 'grass', 'grass', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffPassage', 'cliffDown', 'cliffDown', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffPassage', 'cliffDown', 'cliffDown', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'cylinderBarrier', 'cylinderBarrier', 'groundGreen', 'groundGreen', 'cylinderBarrier', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'buildingBrickTall00', 'buildingBrickTall01', 'buildingBrickTall01', 'buildingBrickTall01', 'buildingBrickTall01', 'buildingBrickTall05', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'buildingBrickTall10', 'buildingBrickTall11', 'buildingBrickTall11', 'buildingBrickTall11', 'buildingBrickTall11', 'buildingBrickTall15', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'smallTree', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'buildingBrickTall20', 'buildingBrickTall21', 'buildingBrickTall21', 'buildingBrickTall21', 'buildingBrickTall21', 'buildingBrickTall25', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'smallTree', 'groundGreen', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'buildingBrickTall30', 'door', 'buildingBrickTall31', 'buildingBrickTall31', 'buildingBrickTall31', 'buildingBrickTall35', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'buildingBrickTall00', 'buildingBrickTall01', 'buildingBrickTall01', 'buildingBrickTall05', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'buildingBrickTall10', 'buildingBrickTall11', 'buildingBrickTall11', 'buildingBrickTall15', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'buildingBrickTall20', 'buildingBrickTall21', 'buildingBrickTall21', 'buildingBrickTall25', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'cliffDown', 'cliffPassage', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'cylinderBarrier', 'cylinderBarrier', 'buildingBrickTall30', 'door', 'buildingBrickTall31', 'buildingBrickTall35', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundBrick', 'groundBrick', 'groundBrick', 'groundBrick', 'groundBrick', 'groundBrick', 'groundBrick', 'groundBrick', 'groundBrick', 'groundBrick', 'groundGreen', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundBrick', 'groundBrick', 'groundBrick', 'groundBrick', 'groundBrick', 'groundBrick', 'groundBrick', 'groundBrick', 'groundBrick', 'groundBrick', 'groundGreen', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundGreen', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'groundYellow', 'groundYellow', 'groundGreen', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'groundGreen', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'groundGreen', 'smallTree', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffPassage', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'groundGreen', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'groundGreen', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', '', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffPassage', 'cliffDown', 'cliffDown', 'cliffDown', 'smallTree', 'smallTree', 'smallTree', 'cliffDown', 'cliffPassage', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', 'groundWhite', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', 'groundWhite', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree']
	],
	PewterCity: [
		['groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainTop', 'mountainTop', 'mountainTop', 'mountainTopRight', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'buildingGym00', 'buildingGym01', 'buildingGym01', 'buildingGym01', 'buildingGym01', 'buildingGym01', 'buildingGym01', 'buildingGym05', 'buildingBrickTall00', 'buildingBrickTall01', 'buildingBrickTall01', 'buildingBrickTall01', 'buildingBrickTall01', 'buildingBrickTall05', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'buildingGym10', 'buildingGym11', 'buildingGym11', 'buildingGym11', 'buildingGym11', 'buildingGym11', 'buildingGym11', 'buildingGym15', 'buildingBrickTall10', 'buildingBrickTall11', 'buildingBrickTall11', 'buildingBrickTall11', 'buildingBrickTall11', 'buildingBrickTall15', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'buildingGym10', 'buildingGym11', 'buildingGym11', 'buildingGym11', 'buildingGym11', 'buildingGym11', 'buildingGym11', 'buildingGym15', 'buildingBrickTall20', 'buildingBrickTall21', 'buildingBrickTall21', 'buildingBrickTall21', 'buildingBrickTall21', 'buildingBrickTall25', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'buildingGym20', 'buildingBrickTall24', 'buildingBrickTall24', 'buildingBrickTall24', 'buildingBrickTall24', 'buildingBrickTall24', 'buildingBrickTall24', 'buildingGym25', 'buildingBrickTall30', 'buildingBrickTall31', 'buildingBrickTall31', 'buildingBrickTall31', 'buildingBrickTall31', 'buildingBrickTall35', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'buildingBrickTall20', 'buildingBrickTall21', 'buildingBrickTall21', 'buildingBrickTall21', 'buildingBrickTall21', 'buildingBrickTall21', 'buildingBrickTall21', 'buildingBrickTall25', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffPassage', 'cliffDown', 'cliffDown', 'buildingBrickTall30', 'buildingBrickTall31', 'buildingBrickTall31', 'buildingBrickTall31', 'buildingBrickTall31', 'buildingBrickTall31', 'buildingBrickTall31', 'buildingBrickTall35', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffPassage', 'cliffDown', 'cliffDown', 'cliffDown', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'signYellow', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'mountainTopLeft', 'mountainTop', 'mountainTop', 'mountainTop', 'mountainTop', 'mountainTop'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'mountainLeft', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'buildingGreenShort00', 'buildingGreenShort01', 'buildingGreenShort01', 'buildingGreenShort03', 'groundWhite', 'groundWhite', 'mountainLeft', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'buildingGreenShort10', 'door', 'buildingGreenShort12', 'buildingGreenShort13', 'groundWhite', 'groundWhite', 'mountainLeft', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'buildingGym00', 'buildingGym01', 'buildingGym01', 'buildingGym01', 'buildingGym01', 'buildingGym05', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'buildingBrickTall00', 'buildingBrickTall01', 'buildingBrickTall01', 'buildingBrickTall05', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'mountainLeft', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'buildingGym10', 'buildingGym11', 'buildingGym11', 'buildingGym11', 'buildingGym11', 'buildingGym15', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'buildingBrickTall10', 'buildingBrickTall11', 'buildingBrickTall11', 'buildingBrickTall15', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'mountainBottomLeft', 'mountainBottom', 'mountainBottom', 'mountainBottom', 'mountainBottom', 'mountainBottom'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'buildingGym20', 'buildingGym21', 'buildingGym22', 'buildingGym23', 'buildingGym21', 'buildingGym25', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'buildingBrickTall20', 'buildingBrickTall21', 'buildingBrickTall21', 'buildingBrickTall25', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'signYellow', 'buildingGym30', 'buildingGym31', 'buildingGym31', 'buildingGym31', 'door', 'buildingGym35', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'buildingBrickTall30', 'door', 'signPokeMart', 'buildingBrickTall35', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'fence', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'fence', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'signYellow', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'fence', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'mountainTopLeft', 'mountainTop', 'mountainTop', 'mountainTop', 'mountainTop', 'mountainTop'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'fence', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'mountainLeft', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'buildingBrickTall00', 'buildingBrickTall01', 'buildingBrickTall01', 'buildingBrickTall05', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'mountainLeft', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'buildingBrickTall10', 'buildingBrickTall11', 'buildingBrickTall11', 'buildingBrickTall15', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'fence', 'fence', 'fence', 'signYellow', 'fence', 'fence', 'fence', 'fence', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'mountainLeft', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'buildingBrickTall20', 'buildingBrickTall21', 'buildingBrickTall21', 'buildingBrickTall25', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundGreen', 'smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree', 'groundGreen', 'groundWhite', 'groundWhite', 'mountainLeft', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainCenter'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'buildingBrickTall30', 'door', 'signPokeCenter', 'buildingBrickTall35', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundGreen', 'smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree', 'groundGreen', 'groundWhite', 'groundWhite', 'mountainBottomLeft', 'mountainBottom', 'mountainBottom', 'mountainBottom', 'mountainBottom', 'mountainBottom'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundGreen', 'smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree', 'groundGreen', 'groundWhite', 'groundWhite', 'groundGreen', 'cylinderBarrier', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundGreen', 'smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree', 'groundGreen', 'groundWhite', 'groundWhite', 'groundGreen', 'cylinderBarrier', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen'],
		['mountainCenter', 'mountainCenter', 'mountainCenter', 'mountainRight', 'groundWhite', 'groundWhite', 'buildingGreenShort00', 'buildingGreenShort01', 'buildingGreenShort01', 'buildingGreenShort03', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'groundWhite', 'groundGreen', 'smallTree', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'smallTree', 'groundGreen', 'groundWhite', 'groundWhite', 'groundGreen', 'cylinderBarrier', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen'],
		['mountainCenter', 'mountainInnerBottomRight', 'mountainBottom', 'mountainBottomRight', 'groundWhite', 'groundWhite', 'buildingGreenShort10', 'door', 'buildingGreenShort12', 'buildingGreenShort13', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundWhite', 'signYellow', 'groundGreen', 'smallTree', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffPassage', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'smallTree', 'groundGreen', 'groundWhite', 'groundWhite', 'groundGreen', 'cylinderBarrier', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen'],
		['mountainCenter', 'mountainRight', 'cylinderBarrier', 'cylinderBarrier', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundGreen', 'cylinderBarrier', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen'],
		['mountainCenter', 'mountainRight', 'cylinderBarrier', 'cylinderBarrier', 'groundWhite', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundGreen', 'cylinderBarrier', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen'],
		['mountainCenter', 'mountainRight', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen'],
		['mountainBottom', 'mountainBottomRight', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen'],
		['groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen'],
		['groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundWhite', 'groundWhite', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen', 'groundGreen']
	]
};

var pokemonEncounters = {
	"PalletTown": [
		new WildPokemonRate(16, .55, new LevelRange(2, 4)),
		new WildPokemonRate(19, .45, new LevelRange(2, 4))
	],
	"Route1": [
		new WildPokemonRate(16, .55, new LevelRange(2, 7)),
		new WildPokemonRate(19, .45, new LevelRange(2, 4))
	],
	"ViridianCity": [],
	"Route22": [
		new WildPokemonRate(19, .10, new LevelRange(3, 3)),
		new WildPokemonRate(21, .10, new LevelRange(2, 6)),
		new WildPokemonRate(29, .30, new LevelRange(2, 4)),
		new WildPokemonRate(32, .30, new LevelRange(2, 4)),
		new WildPokemonRate(56, .20, new LevelRange(3, 5))
	],
	"Route2": [
		new WildPokemonRate(16, .30, new LevelRange(3, 7)),
		new WildPokemonRate(19, .40, new LevelRange(3, 4)),
		new WildPokemonRate(29, .15, new LevelRange(4, 6)),
		new WildPokemonRate(32, .15, new LevelRange(4, 6))
	],
	"ViridianForest": [
		new WildPokemonRate(10, .55, new LevelRange(3, 6)),
		new WildPokemonRate(11, .20, new LevelRange(4, 6)),
		new WildPokemonRate(16, .24, new LevelRange(4, 8)),
		new WildPokemonRate(17, .01, new LevelRange(9, 9))
	],
	"PewterCity": [],
	"Route3": [
		new WildPokemonRate(19, .15, new LevelRange(10, 12)),
		new WildPokemonRate(21, .55, new LevelRange(8, 12)),
		new WildPokemonRate(27, .15, new LevelRange(8, 10)),
		new WildPokemonRate(56, .15, new LevelRange(9, 9))
	],
	"MtMoon1": [
		new WildPokemonRate(27, .04, new LevelRange(12, 12)),
		new WildPokemonRate(35, .01, new LevelRange(11, 11)),
		new WildPokemonRate(41, .75, new LevelRange(6, 11)),
		new WildPokemonRate(74, .20, new LevelRange(10, 10))
	],
	"MtMoonB1": [
		new WildPokemonRate(35, .05, new LevelRange(10, 12)),
		new WildPokemonRate(41, .65, new LevelRange(8, 11)),
		new WildPokemonRate(46, .10, new LevelRange(9, 11)),
		new WildPokemonRate(74, .20, new LevelRange(10, 11))
	],
	"MtMoonB2": [
		new WildPokemonRate(35, .10, new LevelRange(9, 13)),
		new WildPokemonRate(41, .60, new LevelRange(10, 13)),
		new WildPokemonRate(46, .15, new LevelRange(13, 13)),
		new WildPokemonRate(74, .15, new LevelRange(11, 11))
	],
	"Route4": [
		new WildPokemonRate(19, .15, new LevelRange(10, 12)),
		new WildPokemonRate(21, .55, new LevelRange(8, 12)),
		new WildPokemonRate(27, .15, new LevelRange(8, 10)),
		new WildPokemonRate(56, .15, new LevelRange(9, 9))
	],
	"CeruleanCity": [],
	"Route24": [
		new WildPokemonRate(16, .29, new LevelRange(13, 17)),
		new WildPokemonRate(17, .01, new LevelRange(17, 17)),
		new WildPokemonRate(43, .35, new LevelRange(12, 14)),
		new WildPokemonRate(48, .10, new LevelRange(13, 16)),
		new WildPokemonRate(69, .25, new LevelRange(12, 14))
	],
	"Route25": [
		new WildPokemonRate(16, .29, new LevelRange(13, 17)),
		new WildPokemonRate(17, .01, new LevelRange(17, 17)),
		new WildPokemonRate(43, .30, new LevelRange(12, 14)),
		new WildPokemonRate(48, .10, new LevelRange(13, 16)),
		new WildPokemonRate(69, .30, new LevelRange(12, 14))
	],
	"Route5": [
		new WildPokemonRate(16, .45, new LevelRange(15, 17)),
		new WildPokemonRate(17, .05, new LevelRange(17, 17)),
		new WildPokemonRate(19, .25, new LevelRange(14, 16)),
		new WildPokemonRate(39, .10, new LevelRange(3, 7)),
		new WildPokemonRate(63, .15, new LevelRange(7, 7))
	],
	"Route6": [
		new WildPokemonRate(16, .45, new LevelRange(15, 17)),
		new WildPokemonRate(17, .05, new LevelRange(17, 17)),
		new WildPokemonRate(19, .25, new LevelRange(14, 16)),
		new WildPokemonRate(39, .10, new LevelRange(3, 7)),
		new WildPokemonRate(63, .15, new LevelRange(7, 7))
	],
	"VermillionCity": [],
	"S.S.Anne": [],
	"Route11": [
		new WildPokemonRate(16, .40, new LevelRange(16, 18)),
		new WildPokemonRate(17, .10, new LevelRange(18, 20)),
		new WildPokemonRate(19, .25, new LevelRange(15, 17)),
		new WildPokemonRate(20, .01, new LevelRange(17, 17)),
		new WildPokemonRate(96, .24, new LevelRange(15, 19))
	],
	"DiglettsCave": [
		new WildPokemonRate(50, .95, new LevelRange(15, 22)),
		new WildPokemonRate(51, .05, new LevelRange(29, 31))
	],
	"Route9": [
		new WildPokemonRate(19, .15, new LevelRange(18, 18)),
		new WildPokemonRate(20, .04, new LevelRange(20, 20)),
		new WildPokemonRate(21, .10, new LevelRange(17, 17)),
		new WildPokemonRate(22, .01, new LevelRange(19, 19)),
		new WildPokemonRate(29, .35, new LevelRange(16, 18)),
		new WildPokemonRate(30, .05, new LevelRange(18, 18)),
		new WildPokemonRate(32, .25, new LevelRange(16, 18)),
		new WildPokemonRate(33, .05, new LevelRange(18, 18))
	],
	"Route10": [
		new WildPokemonRate(19, .15, new LevelRange(18, 18)),
		new WildPokemonRate(20, .05, new LevelRange(20, 20)),
		new WildPokemonRate(32, .10, new LevelRange(17, 17)),
		new WildPokemonRate(35, .10, new LevelRange(17, 17)),
		new WildPokemonRate(66, .05, new LevelRange(16, 18)),
		new WildPokemonRate(81, .55, new LevelRange(16, 22))
	],
	"RockTunnel1": [
		new WildPokemonRate(41, .55, new LevelRange(15, 21)),
		new WildPokemonRate(66, .10, new LevelRange(17, 21)),
		new WildPokemonRate(74, .35, new LevelRange(16, 20))
	],
	"RockTunnelB1": [
		new WildPokemonRate(41, .45, new LevelRange(20, 22)),
		new WildPokemonRate(66, .20, new LevelRange(18, 20)),
		new WildPokemonRate(74, .25, new LevelRange(17, 21)),
		new WildPokemonRate(95, .10, new LevelRange(14, 22))
	],
	"LavenderTown": [],
	"Route7": [
		new WildPokemonRate(16, .40, new LevelRange(20, 22)),
		new WildPokemonRate(17, .10, new LevelRange(24, 24)),
		new WildPokemonRate(19, .15, new LevelRange(20, 20)),
		new WildPokemonRate(39, .10, new LevelRange(19, 24)),
		new WildPokemonRate(63, .25, new LevelRange(15, 26))
	],
	"Route8": [
		new WildPokemonRate(16, .40, new LevelRange(20, 22)),
		new WildPokemonRate(17, .10, new LevelRange(24, 24)),
		new WildPokemonRate(19, .15, new LevelRange(20, 20)),
		new WildPokemonRate(39, .10, new LevelRange(19, 24)),
		new WildPokemonRate(63, .20, new LevelRange(15, 19)),
		new WildPokemonRate(64, .05, new LevelRange(20, 27))
	],
	"CeladonCity": [],
	"RocketHideout": [],
	"PokemonTower3": [
		new WildPokemonRate(92, .95, new LevelRange(18, 25)),
		new WildPokemonRate(93, .05, new LevelRange(20, 25)),
	],
	"PokemonTower4": [
		new WildPokemonRate(92, .95, new LevelRange(18, 25)),
		new WildPokemonRate(93, .05, new LevelRange(20, 25)),
	],
	"PokemonTower5": [
		new WildPokemonRate(92, .90, new LevelRange(21, 27)),
		new WildPokemonRate(93, .05, new LevelRange(22, 27)),
		new WildPokemonRate(104, .05, new LevelRange(20, 20))
	],
	"PokemonTower6": [
		new WildPokemonRate(92, .90, new LevelRange(21, 27)),
		new WildPokemonRate(93, .05, new LevelRange(22, 27)),
		new WildPokemonRate(104, .05, new LevelRange(20, 20))
	],
	"SaffronCity": [],
	"SilphCompany": [],
	"Route16": [
		new WildPokemonRate(19, .25, new LevelRange(23, 24)),
		new WildPokemonRate(20, .05, new LevelRange(25, 26)),
		new WildPokemonRate(21, .30, new LevelRange(22, 23)),
		new WildPokemonRate(22, .05, new LevelRange(24, 24)),
		new WildPokemonRate(84, .35, new LevelRange(22, 26))
	],
	"Route17": [
		new WildPokemonRate(22, .20, new LevelRange(27, 29)),
		new WildPokemonRate(77, .24, new LevelRange(28, 32)),
		new WildPokemonRate(84, .55, new LevelRange(26, 28)),
		new WildPokemonRate(85, .01, new LevelRange(29, 29))
	],
	"Route18": [
		new WildPokemonRate(19, .25, new LevelRange(23, 24)),
		new WildPokemonRate(20, .05, new LevelRange(25, 26)),
		new WildPokemonRate(21, .30, new LevelRange(22, 23)),
		new WildPokemonRate(22, .05, new LevelRange(24, 24)),
		new WildPokemonRate(84, .35, new LevelRange(24, 26))
	],
	"FuchsiaCity": [],
	"SafariZone0": [
		new WildPokemonRate(29, .15, new LevelRange(36, 36)),
		new WildPokemonRate(32, .25, new LevelRange(14, 14)),
		new WildPokemonRate(33, .10, new LevelRange(23, 23)),
		new WildPokemonRate(46, .05, new LevelRange(27, 27)),
		new WildPokemonRate(47, .15, new LevelRange(27, 32)),
		new WildPokemonRate(102, .15, new LevelRange(24, 24)),
		new WildPokemonRate(111, .10, new LevelRange(20, 20)),
		new WildPokemonRate(113, .01, new LevelRange(7, 7)),
		new WildPokemonRate(114, .04, new LevelRange(22, 22))
	],
	"SafariZone1": [
		new WildPokemonRate(29, .25, new LevelRange(29, 29)),
		new WildPokemonRate(30, .10, new LevelRange(32, 32)),
		new WildPokemonRate(32, .15, new LevelRange(21, 21)),
		new WildPokemonRate(102, .20, new LevelRange(22, 26)),
		new WildPokemonRate(104, .10, new LevelRange(19, 19)),
		new WildPokemonRate(105, .05, new LevelRange(24, 24)),
		new WildPokemonRate(113, .04, new LevelRange(21, 21)),
		new WildPokemonRate(123, .01, new LevelRange(15, 15)),
		new WildPokemonRate(128, .10, new LevelRange(21, 21))
	],
	"SafariZone2": [
		new WildPokemonRate(29, .15, new LevelRange(14, 14)),
		new WildPokemonRate(30, .10, new LevelRange(23, 23)),
		new WildPokemonRate(32, .25, new LevelRange(36, 36)),
		new WildPokemonRate(102, .15, new LevelRange(20, 20)),
		new WildPokemonRate(104, .05, new LevelRange(16, 16)),
		new WildPokemonRate(111, .10, new LevelRange(25, 25)),
		new WildPokemonRate(115, .15, new LevelRange(28, 33)),
		new WildPokemonRate(123, .04, new LevelRange(25, 25)),
		new WildPokemonRate(127, .01, new LevelRange(15, 15))
	],
	"SafariZone3": [
		new WildPokemonRate(29, .15, new LevelRange(21, 21)),
		new WildPokemonRate(32, .25, new LevelRange(29, 29)),
		new WildPokemonRate(33, .10, new LevelRange(32, 32)),
		new WildPokemonRate(102, .20, new LevelRange(22, 26)),
		new WildPokemonRate(104, .10, new LevelRange(19, 19)),
		new WildPokemonRate(105, .05, new LevelRange(24, 24)),
		new WildPokemonRate(114, .01, new LevelRange(27, 27)),
		new WildPokemonRate(127, .04, new LevelRange(25, 25)),
		new WildPokemonRate(128, .10, new LevelRange(21, 21))
	],
	"Route12": [
		new WildPokemonRate(16, .15, new LevelRange(28, 28)),
		new WildPokemonRate(17, .10, new LevelRange(28, 28)),
		new WildPokemonRate(43, .35, new LevelRange(25, 27)),
		new WildPokemonRate(44, .05, new LevelRange(29, 29)),
		new WildPokemonRate(69, .25, new LevelRange(25, 27)),
		new WildPokemonRate(70, .05, new LevelRange(29, 29)),
		new WildPokemonRate(83, .05, new LevelRange(26, 31))
	],
	"Route13": [
		new WildPokemonRate(16, .10, new LevelRange(28, 28)),
		new WildPokemonRate(17, .15, new LevelRange(28, 28)),
		new WildPokemonRate(43, .35, new LevelRange(25, 27)),
		new WildPokemonRate(44, .05, new LevelRange(29, 29)),
		new WildPokemonRate(69, .25, new LevelRange(25, 27)),
		new WildPokemonRate(70, .05, new LevelRange(29, 29)),
		new WildPokemonRate(83, .05, new LevelRange(26, 31))
	],
	"Route14": [
		new WildPokemonRate(17, .10, new LevelRange(30, 30)),
		new WildPokemonRate(43, .35, new LevelRange(26, 28)),
		new WildPokemonRate(44, .05, new LevelRange(30, 30)),
		new WildPokemonRate(48, .19, new LevelRange(24, 27)),
		new WildPokemonRate(49, .01, new LevelRange(30, 30)),
		new WildPokemonRate(69, .25, new LevelRange(26, 28)),
		new WildPokemonRate(70, .05, new LevelRange(30, 30))
	],
	"Route15": [
		new WildPokemonRate(17, .10, new LevelRange(32, 32)),
		new WildPokemonRate(43, .35, new LevelRange(26, 28)),
		new WildPokemonRate(44, .05, new LevelRange(30, 30)),
		new WildPokemonRate(48, .19, new LevelRange(24, 27)),
		new WildPokemonRate(49, .01, new LevelRange(30, 30)),
		new WildPokemonRate(69, .25, new LevelRange(26, 28)),
		new WildPokemonRate(70, .05, new LevelRange(30, 30))
	],
	"Route21": [
		new WildPokemonRate(16, .60, new LevelRange(11, 17)),
		new WildPokemonRate(17, .10, new LevelRange(15, 19)),
		new WildPokemonRate(19, .25, new LevelRange(13, 15)),
		new WildPokemonRate(20, .05, new LevelRange(15, 15))
	],
	"CinnabarIsland": [],
	"PokemonMansion1": [
		new WildPokemonRate(19, .35, new LevelRange(34, 37)),
		new WildPokemonRate(20, .25, new LevelRange(34, 37)),
		new WildPokemonRate(58, .20, new LevelRange(26, 38)),
		new WildPokemonRate(88, .20, new LevelRange(23, 26))
	],
	"PokemonMansion2": [
		new WildPokemonRate(19, .35, new LevelRange(37, 40)),
		new WildPokemonRate(20, .25, new LevelRange(37, 40)),
		new WildPokemonRate(88, .35, new LevelRange(26, 35)),
		new WildPokemonRate(89, .05, new LevelRange(35, 38))
	],
	"PokemonMansion3": [
		new WildPokemonRate(19, .35, new LevelRange(40, 43)),
		new WildPokemonRate(20, .25, new LevelRange(40, 43)),
		new WildPokemonRate(88, .35, new LevelRange(32, 38)),
		new WildPokemonRate(89, .05, new LevelRange(38, 41))
	],
	"PokemonMansionB1": [
		new WildPokemonRate(20, .40, new LevelRange(37, 46)),
		new WildPokemonRate(88, .40, new LevelRange(35, 38)),
		new WildPokemonRate(89, .10, new LevelRange(41, 41)),
		new WildPokemonRate(132, .10, new LevelRange(12, 24))
	],
	"PowerPlant": [
		new WildPokemonRate(81, .40, new LevelRange(30, 35)),
		new WildPokemonRate(82, .20, new LevelRange(33, 38)),
		new WildPokemonRate(88, .15, new LevelRange(33, 37)),
		new WildPokemonRate(89, .05, new LevelRange(33, 37)),
		new WildPokemonRate(100, .20, new LevelRange(33, 37))
	],
	"Route19": [],
	"Route20": [],
	"SeafoamIsland1": [
		new WildPokemonRate(41, .50, new LevelRange(18, 36)),
		new WildPokemonRate(42, .05, new LevelRange(27, 36)),
		new WildPokemonRate(79, .15, new LevelRange(28, 30)),
		new WildPokemonRate(98, .30, new LevelRange(25, 27))
	],
	"SeafoamIslandB1": [
		new WildPokemonRate(41, .45, new LevelRange(18, 36)),
		new WildPokemonRate(42, .10, new LevelRange(27, 27)),
		new WildPokemonRate(79, .10, new LevelRange(29, 29)),
		new WildPokemonRate(86, .05, new LevelRange(22, 26)),
		new WildPokemonRate(98, .25, new LevelRange(26, 28)),
		new WildPokemonRate(99, .05, new LevelRange(28, 28))
	],
	"SeafoamIslandB2": [
		new WildPokemonRate(41, .40, new LevelRange(27, 36)),
		new WildPokemonRate(42, .15, new LevelRange(27, 36)),
		new WildPokemonRate(79, .04, new LevelRange(31, 31)),
		new WildPokemonRate(80, .01, new LevelRange(31, 31)),
		new WildPokemonRate(86, .10, new LevelRange(24, 24)),
		new WildPokemonRate(98, .20, new LevelRange(27, 29)),
		new WildPokemonRate(99, .10, new LevelRange(28, 28))
	],
	"SeafoamIslandB3": [
		new WildPokemonRate(41, .25, new LevelRange(27, 36)),
		new WildPokemonRate(42, .25, new LevelRange(27, 27)),
		new WildPokemonRate(86, .15, new LevelRange(26, 30)),
		new WildPokemonRate(87, .05, new LevelRange(28, 32)),
		new WildPokemonRate(98, .20, new LevelRange(29, 31)),
		new WildPokemonRate(99, .10, new LevelRange(30, 30))
	],
	"SeafoamIslandB4": [
		new WildPokemonRate(41, .20, new LevelRange(36, 45)),
		new WildPokemonRate(42, .30, new LevelRange(27, 36)),
		new WildPokemonRate(86, .20, new LevelRange(28, 32)),
		new WildPokemonRate(87, .05, new LevelRange(30, 34)),
		new WildPokemonRate(98, .15, new LevelRange(30, 30)),
		new WildPokemonRate(99, .10, new LevelRange(32, 32))
	],
	"Route23": [
		new WildPokemonRate(22, .15, new LevelRange(40, 45)),
		new WildPokemonRate(30, .25, new LevelRange(41, 44)),
		new WildPokemonRate(33, .35, new LevelRange(41, 44)),
		new WildPokemonRate(56, .20, new LevelRange(36, 41)),
		new WildPokemonRate(57, .05, new LevelRange(41, 46))
	],
	"VictoryRoad1": [
		new WildPokemonRate(41, .20, new LevelRange(39, 44)),
		new WildPokemonRate(74, .65, new LevelRange(26, 47)),
		new WildPokemonRate(75, .05, new LevelRange(41, 47)),
		new WildPokemonRate(95, .10, new LevelRange(43, 45))
	],
	"VictoryRoad2": [
		new WildPokemonRate(41, .10, new LevelRange(44, 44)),
		new WildPokemonRate(42, .10, new LevelRange(39, 39)),
		new WildPokemonRate(67, .05, new LevelRange(39, 42)),
		new WildPokemonRate(74, .55, new LevelRange(31, 41)),
		new WildPokemonRate(75, .10, new LevelRange(44, 44)),
		new WildPokemonRate(95, .10, new LevelRange(45, 47))
	],
	"VictoryRoad3": [
		new WildPokemonRate(44, .15, new LevelRange(44, 44)),
		new WildPokemonRate(67, .10, new LevelRange(42, 45)),
		new WildPokemonRate(74, .50, new LevelRange(36, 46)),
		new WildPokemonRate(75, .15, new LevelRange(41, 47)),
		new WildPokemonRate(95, .10, new LevelRange(49, 49))
	],
	"UnknownDungeon1": [
		new WildPokemonRate(28, .10, new LevelRange(52, 52)),
		new WildPokemonRate(42, .40, new LevelRange(50, 55)),
		new WildPokemonRate(44, .10, new LevelRange(55, 55)),
		new WildPokemonRate(47, .05, new LevelRange(54, 54)),
		new WildPokemonRate(49, .05, new LevelRange(54, 54)),
		new WildPokemonRate(70, .10, new LevelRange(55, 55)),
		new WildPokemonRate(75, .15, new LevelRange(45, 45)),
		new WildPokemonRate(132, .05, new LevelRange(55, 60))
	],
	"UnknownDungeon2": [
		new WildPokemonRate(28, .10, new LevelRange(56, 56)),
		new WildPokemonRate(42, .40, new LevelRange(52, 57)),
		new WildPokemonRate(44, .05, new LevelRange(58, 58)),
		new WildPokemonRate(70, .05, new LevelRange(58, 58)),
		new WildPokemonRate(75, .15, new LevelRange(50, 50)),
		new WildPokemonRate(111, .10, new LevelRange(50, 50)),
		new WildPokemonRate(112, .05, new LevelRange(58, 60)),
		new WildPokemonRate(132, .10, new LevelRange(60, 60))
	],
	"UnknownDungeonB1": [
		new WildPokemonRate(42, .40, new LevelRange(54, 59)),
		new WildPokemonRate(75, .15, new LevelRange(55, 55)),
		new WildPokemonRate(108, .05, new LevelRange(50, 55)),
		new WildPokemonRate(111, .10, new LevelRange(52, 52)),
		new WildPokemonRate(112, .10, new LevelRange(62, 62)),
		new WildPokemonRate(113, .05, new LevelRange(56, 56)),
		new WildPokemonRate(132, .15, new LevelRange(60, 65))
	]
};