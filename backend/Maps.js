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
	]
}

