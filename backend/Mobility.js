var POKEMON_CHANCE = 25;

var walkableTiles = ["l","d","g"];

var topJumpTiles = ["tc"];
var rightJumpTiles = ["rc"];
var leftJumpTiles = ["lc"];
var bottomJumpTiles = ["bc"]


function canWalk (tileId) {
	return walkableTiles.indexOf(tileId) !== -1;
}



function canMove(location, direction) {
    mapData = getCurrentMap();
	switch(direction) {
        case "LEFT": {
			return location.col != 0 && canWalk(mapData[location.row][location.col-1]) || leftJumpTiles === (mapData[location.row][location.col-1]);
        }
        case "RIGHT": {
            return location.col != mapData[0].length-1 && canWalk(mapData[location.row][location.col+1]) || rightJumpTiles === (mapData[location.row][location.col-1]);
		}
		case "UP": {
            return location.row != 0 && canWalk(mapData[location.row-1][location.col]) || bottomJumpTiles === (mapData[location.row-1][location.col]);
        }
        case "DOWN": {
            return location.row != mapData.length-1 && canWalk(mapData[location.row+1][location.col]) || topJumpTiles === (mapData[location.row+1][location.col]);
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
	if (tileId == "g") {
		rand = Math.floor(Math.random()*POKEMON_CHANCE);
		if (rand == 1) {
			alert("POKEMON!!!!");
		}
	}
}