var currentMapName = "";

function getMap(mapName) {
	return maps[mapName];
}

function getCurrentMapName() {
	return currentMapName;
}

function setCurrentMap(mapName) {
	currentMapName = mapName;
}

function getCurrentMap() {
	return maps[currentMapName];
}

function getAllMapNames() {
	return Object.keys(maps);
}

function getLinkingLocation(mapName, location) {
	console.log(mapName);
	console.log(location);
	console.log(mapLinks);
	var result = mapLinks[mapName][location.row + "-" + location.col];
	return {mapName: result.mapName, location: {row: result.location.row, col: result.location.col}}
}

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
		"17-4": {
		
		},
		"17-5": {
			
		},
		"17-6": {
			
		},
		"17-7": {
			
		}
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
	"VeridianCity": {
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
}

maps = {
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
	VeridianCity: [
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
	]
}

