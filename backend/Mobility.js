var POKEMON_CHANCE = 100;

var walkableTiles = ["groundGreen", "groundBrick", "groundBrown", "groundWhite", "groundYellow", "door", "grass", "cliffPassage"];

var leftJumpTile = "cliffLeft";
var rightJumpTile = "cliffRight";
var downJumpTile = "cliffDown";

var Mobility = {};

Mobility.canWalk = function(tileId) {
	return walkableTiles.indexOf(tileId) !== -1;
};

Mobility.canMove = function(location, direction) {
	var mapData = Maps.getCurrentMap();
	var nextLoc;
	switch (direction) {
		case "LEFT":
		{
			if (location.col == 0) {
				return true;
			}
			nextLoc = mapData[location.row][location.col - 1];
			if (nextLoc === leftJumpTile) {
				return true;
			}
			break;
		}
		case "RIGHT":
		{
			if (location.col == mapData[0].length - 1) {
				return true;
			}
			nextLoc = mapData[location.row][location.col + 1];
			if (nextLoc === rightJumpTile) {
				return true;
			}
			break;
		}
		case "UP":
		{
			if (location.row == 0) {
				return true;
			}
			nextLoc = mapData[location.row - 1][location.col];
			break;
		}
		case "DOWN":
		{
			if (location.row == mapData.length - 1) {
				return true;
			}
			nextLoc = mapData[location.row + 1][location.col];
			if (nextLoc === downJumpTile) {
				return true;
			}
			break;
		}
	}
	return Mobility.canWalk(nextLoc);
};

Mobility.move = function(location, direction) {
	//first check if the user can move
	if (!Mobility.canMove(location, direction)) {
		return location;
	}
	var mapData = Maps.getCurrentMap();
	var oldLocation = new Location(Maps.getCurrentMapName(), location.row, location.col);
	//var oldLocation = {row: location.row, col: location.col};
	switch (direction) {
		case "LEFT":
			location.col -= 1;
			break;
		case "RIGHT":
			location.col += 1;
			break;
		case "UP":
			location.row -= 1;
			break;
		case "DOWN":
			location.row += 1;
			break;
	}

	var linkLocation = Maps.getLinkingLocation(direction, oldLocation);
	if (linkLocation != null) {
		return linkLocation;
	}
	var nextTile = mapData[location.row][location.col];

	Mobility.queryForPokemon(nextTile);

	return location;


};

Mobility.queryForPokemon = function(tileId) {
	if (tileId == "grass") {
		var rand = Math.floor(Math.random() * POKEMON_CHANCE);
		if (rand == 0) {
			setInFight(true);
			foundPokemon(Maps.getRandomPokemonForCurrentMap());
		}
	}
};