function getMap(mapName) {
	return maps[mapName]
}

maps = {
	// w = water l = land
	map1: [["w","w","w","w","l","l","l","l","l","l"],
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