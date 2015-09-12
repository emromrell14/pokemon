var currentMapName = "";

function getMap(mapName) {
	return maps[mapName];
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

maps = {
	PalletTown: [
['groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier', 'grass', 'grass', 'cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'cylinderBarrier', 'land'],
['cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'grass', 'grass', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier'],
['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'building', 'building', 'building', 'building', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'building', 'building', 'building', 'building', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'building', 'building', 'building', 'building', 'groundWhite', 'groundWhite', 'groundYellow', 'groundYellow', 'building', 'building', 'building', 'building', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
['cylinderBarrier', 'groundYellow', 'groundWhite', 'signWhite', 'building', 'door', 'buildingGreenShortGroundTwoWindows', 'buildingGreenShortGroundRight', 'groundWhite', 'groundWhite', 'groundYellow', 'signWhite', 'building', 'door', 'building', 'building', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'building', 'building', 'building', 'building', 'building', 'building', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'fence', 'fence', 'fence', 'signWhite', 'groundWhite', 'groundWhite', 'building', 'building', 'building', 'building', 'building', 'building', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundWhite', 'groundWhite', 'building', 'building', 'building', 'building', 'building', 'building', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundWhite', 'groundWhite', 'building', 'building', 'door', 'building', 'building', 'building', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
['cylinderBarrier', 'groundYellow', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'fence', 'fence', 'fence', 'signWhite', 'fence', 'fence', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'waterTopLeft', 'waterTop', 'waterTop', 'waterTopRight', 'groundWhite', 'groundWhite', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'waterLeft', 'water', 'water', 'waterRight', 'groundWhite', 'groundWhite', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundYellow', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
['cylinderBarrier', 'groundYellow', 'groundYellow', 'groundYellow', 'waterLeft', 'water', 'water', 'waterRight', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundWhite', 'groundYellow', 'cylinderBarrier'],
['cylinderBarrier', 'cylinderBarrier', 'groundYellow', 'groundYellow', 'waterLeft', 'water', 'water', 'waterRight', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier']
],
	Route1: [
		['cylinderBarrier', 'land', 'land', 'land', 'land', 'land', 'cylinderBarrier', 'land', 'land', 'cylinderBarrier', 'land', 'land', 'land', 'land', 'land', 'cylinderBarrier'],
		['cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'land', 'land', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier'],
		['cylinderBarrier', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'cylinderBarrier'],
		['cylinderBarrier', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'cylinderBarrier'],
		['cylinderBarrier', 'land', 'land', 'land', 'land', 'land', 'smallTree', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'cylinderBarrier'],
		['cylinderBarrier', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'smallTree', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'land', 'land', 'land', 'land', 'cylinderBarrier'],
		['smallTree', 'land', 'land', 'land', 'land', 'land', 'smallTree', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'smallTree'],
		['smallTree', 'land', 'land', 'land', 'land', 'land', 'smallTree', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'smallTree'],
		['smallTree', 'land', 'land', 'land', 'land', 'land', 'smallTree', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'smallTree'],
		['smallTree', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'smallTree', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'smallTree'],
		['smallTree', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'smallTree'],
		['smallTree', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'smallTree'],
		['smallTree', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'grass', 'grass', 'grass', 'grass', 'smallTree'],
		['smallTree', 'smallTree', 'smallTree', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'grass', 'grass', 'grass', 'grass', 'smallTree'],
		['cylinderBarrier', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'grass', 'grass', 'grass', 'grass', 'cylinderBarrier'],
		['cylinderBarrier', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'grass', 'grass', 'grass', 'grass', 'cylinderBarrier'],
		['cylinderBarrier', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'grass', 'grass', 'grass', 'grass', 'cylinderBarrier'],
		['cylinderBarrier', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'cylinderBarrier'],
		['cylinderBarrier', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'cylinderBarrier'],
		['cylinderBarrier', 'cliffDown', 'land', 'cliffDown', 'cliffDown', 'cliffDown', 'land', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cylinderBarrier'],
		['cylinderBarrier', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'cylinderBarrier'],
		['cylinderBarrier', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'cylinderBarrier'],
		['cylinderBarrier', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'grass', 'grass', 'grass', 'grass', 'land', 'land', 'cylinderBarrier'],
		['cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'grass', 'grass', 'grass', 'grass', 'cliffDown', 'cliffDown', 'cylinderBarrier'],
		['smallTree', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'grass', 'grass', 'grass', 'grass', 'land', 'land', 'smallTree'],
		['smallTree', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'grass', 'grass', 'grass', 'grass', 'land', 'land', 'smallTree'],
		['smallTree', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'smallTree'],
		['smallTree', 'cliffDown', 'cliffDown', 'land', 'land', 'land', 'signYellow', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'cliffDown', 'smallTree'],
		['smallTree', 'land', 'land', 'grass', 'grass', 'grass', 'grass', 'land', 'land', 'land', 'land', 'grass', 'grass', 'grass', 'grass', 'smallTree'],
		['smallTree', 'land', 'land', 'grass', 'grass', 'grass', 'grass', 'land', 'land', 'land', 'land', 'grass', 'grass', 'grass', 'grass', 'smallTree'],
		['smallTree', 'grass', 'grass', 'grass', 'grass', 'land', 'land', 'land', 'land', 'grass', 'grass', 'grass', 'grass', 'land', 'land', 'smallTree'],
		['smallTree', 'grass', 'grass', 'grass', 'grass', 'land', 'land', 'land', 'land', 'grass', 'grass', 'grass', 'grass', 'land', 'land', 'smallTree'],
		['smallTree', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'grass', 'grass', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'smallTree'],
		['smallTree', 'land', 'land', 'land', 'land', 'land', 'cylinderBarrier', 'grass', 'grass', 'cylinderBarrier', 'land', 'land', 'land', 'land', 'land', 'smallTree'],
		['smallTree', 'land', 'land', 'land', 'land', 'land', 'cylinderBarrier', 'grass', 'grass', 'cylinderBarrier', 'land', 'land', 'land', 'land', 'land', 'smallTree'],
		['smallTree', 'land', 'land', 'land', 'land', 'land', 'cylinderBarrier', 'grass', 'grass', 'cylinderBarrier', 'land', 'land', 'land', 'land', 'land', 'smallTree']
	],
	VeridianCity: [
		['', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'cylinderBarrier', 'smallTree', 'smallTree', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', '', '', 'fence', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', '', '', 'fence', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'fence', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', 'cylinderBarrier', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'smallTree', 'smallTree', 'smallTree', 'smallTree', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', 'cylinderBarrier', '', '', '', '', '', 'cylinderBarrier', '', '', 'cylinderBarrier', 'land', 'land', 'land', 'land', 'land', 'cylinderBarrier', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', 'cylinderBarrier', '', '', '', '', '', 'cylinderBarrier', '', '', 'cylinderBarrier', 'land', 'land', 'land', 'land', 'land', 'cylinderBarrier', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'smallTree'],
		['', '', '', '', '', '', '', '', '', '', '', 'cylinderBarrier', '', '', '', '', '', 'cylinderBarrier', '', '', 'cylinderBarrier', 'land', 'land', 'land', 'land', 'land', 'cylinderBarrier', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'smallTree']
	]
}

