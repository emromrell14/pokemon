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

maps = {
	// w = water l = land
	map1: [
		["w","w","w","w","l","l","l","l","l","l"],
		["w","w","w","l","l","l","l","l","l","l"],
		["w","w","l","l","l","l","l","l","l","l"],
		["w","l","l","l","l","l","l","l","l","l"],
		["w","w","l","l","l","l","l","l","l","l"],
		["w","w","w","l","l","l","l","l","l","l"],
		["w","w","w","w","l","l","l","l","l","l"],
		["w","w","l","l","l","l","l","l","l","w"],
		["l","l","l","l","l","l","l","w","w","w"],
		["l","l","l","l","l","w","w","w","w","w"]	
	],
	// b = building l = land g = grass w = water d = door
	map2: [
		["w","w","w","w","l","l","w","w","w","w",],
		["w","w","w","w","l","l","w","w","w","w",],
		["w","w","w","w","l","l","w","w","w","w",],
		["w","w","w","w","l","l","w","w","w","w",],
		["w","w","w","w","l","g","w","w","w","w",],
		["w","w","w","w","g","g","w","w","w","w",],
		["w","w","w","w","g","g","w","w","w","w",],
		["w","w","w","w","g","g","w","w","w","w",],
		["w","w","w","w","g","g","w","w","w","w",],
		["w","w","w","w","g","g","w","w","w","w",],
		["w","w","w","w","g","g","w","w","w","w",],
		["w","w","w","w","g","g","w","w","w","w",],
		["w","w","w","w","g","g","w","w","w","w",],
		["w","w","w","g","g","g","g","w","w","w",],
		["w","w","g","g","g","g","g","g","w","w",],
		["w","g","g","g","g","g","g","g","g","w",],
		["g","g","g","g","g","g","g","g","g","g",],
		["g","g","g","g","l","g","g","g","g","g",],
		["g","g","g","l","l","l","g","g","g","g",],
		["l","l","l","l","l","l","b","b","b","b",],
		["l","l","l","l","l","l","b","l","l","l",],
		["l","l","l","l","l","l","b","l","l","l",],
		["l","l","l","l","l","l","b","l","l","l",],
		["l","l","l","l","l","l","d","l","l","l",],
		["l","l","l","l","l","l","d","l","l","l",],
		["l","l","l","l","l","l","b","l","l","l",],
		["l","l","l","l","l","l","b","l","l","l",],
		["l","l","l","l","l","l","b","l","l","l",],
		["l","l","l","l","l","l","b","b","b","b",],
		["w","w","w","w","l","l","w","w","w","w",]
	]
}

