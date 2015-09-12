var POKEMON_CHANCE = 25;

var walkableTiles = ["groundGreen","groundBrown","groundWhite","groundYellow","door","grass"];

var leftJumpTile = "cliffLeft";
var rightJumpTile = "cliffRight";
var downJumpTile = "cliffDown"

function canWalk(tileId) {
	return walkableTiles.indexOf(tileId) !== -1;
}

function canMove(location, direction) {
    mapData = getCurrentMap();
	switch(direction) {
        case "LEFT": {
			if (location.col == 0){
				return false;
			}
			var nextLoc = mapData[location.row][location.col - 1];
			if (nextLoc === leftJumpTile){
				return true;
			}
			return canWalk(nextLoc);
			
        }
        case "RIGHT": {
            if (location.col == mapData[0].length - 1){
				return false;
			}
			var nextLoc = mapData[location.row][location.col + 1];
			if (nextLoc === rightJumpTile){
				return true;
			}
			return canWalk(nextLoc);
		}
		case "UP": {
            if (location.row == 0){
				return false;
			}
			var nextLoc = mapData[location.row - 1][location.col];
			return canWalk(nextLoc);
        }
        case "DOWN": {
            if (location.row == mapData.length - 1){
				return false;
			}
			var nextLoc = mapData[location.row + 1][location.col];
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
	popUp(getCurrentMap()[location.row][location.col]);
	return location;
	
}

function popUp(tileId) {
	if (tileId == "grass") {
		rand = Math.floor(Math.random()*POKEMON_CHANCE);
		if (rand == 1) {
			alert("POKEMON!!!!");
		}
	}
}