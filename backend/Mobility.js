var POKEMON_CHANCE = 20;

var walkableTiles = ["groundGreen","groundBrown","groundWhite","groundYellow","door","grass"];

var leftJumpTile = "cliffLeft";
var rightJumpTile = "cliffRight";
var downJumpTile = "cliffDown";

function canWalk(tileId) {
	return walkableTiles.indexOf(tileId) !== -1;
}

function canMove(location, direction) {
    var mapData = getCurrentMap();
	var nextLoc;
	switch(direction) {
        case "LEFT": {
			if (location.col == 0){
				return true;
			}
			nextLoc = mapData[location.row][location.col - 1];
			if (nextLoc === leftJumpTile){
				return true;
			}
			return canWalk(nextLoc);
        }
        case "RIGHT": {
            if (location.col == mapData[0].length - 1){
				return true;
			}
			nextLoc = mapData[location.row][location.col + 1];
			if (nextLoc === rightJumpTile){
				return true;
			}
			return canWalk(nextLoc);
		}
		case "UP": {
            if (location.row == 0){
				return true;
			}
			return canWalk(mapData[location.row - 1][location.col]);
        }
        case "DOWN": {
            if (location.row == mapData.length - 1){
				return true;
			}
			nextLoc = mapData[location.row + 1][location.col];
			if (nextLoc === downJumpTile){
				return true;
			}
			return canWalk(nextLoc);
        }
    }
}

function move(location, direction) {
    //first check if the user can move 
    if(!canMove(location, direction)) {
        return location;
    }
	var mapData = getCurrentMap();
	var oldLocation = {row: location.row, col: location.col};
	switch(direction) {
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
	if (location.col == -1 || location.row == -1 || 
			location.col == mapData[0].length || location.row == mapData.length) {
		console.log(getLinkingLocation(getCurrentMapName(), oldLocation));
		return getLinkingLocation(getCurrentMapName(), oldLocation);
	}
	var nextTile = getCurrentMap()[location.row][location.col];
	
	queryForPokemon(nextTile);

	return {mapName: currentMapName, location: location};
	
	
}

function queryForPokemon(tileId) {
	if (tileId == "grass") {
		rand = Math.floor(Math.random()*POKEMON_CHANCE);
		if (rand == 1) {
			setInFight(true);
			getRandomPokemon(foundPokemon);
		}
	}
}