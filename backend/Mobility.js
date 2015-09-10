var RIGHT_BONDARY = 9;
var BOTTOM_BONDARY = 9;
var LEFT_BONDARY = 0;
var TOP_BONDARY = 0;

var walkableTiles = ["l","d","g"];

function canWalk (tileId) {
	return walkableTiles.indexOf(tileId) !== -1;
}

function canMove(location, direction) {
    mapData = getCurrentMap();
	switch(direction) {
        case "LEFT": {
			return location.col != 0 && canWalk(mapData[location.row][location.col-1]);
        }
        case "RIGHT": {
            return location.col != mapData[0].length-1 && canWalk(mapData[location.row][location.col+1]);
		}
		case "UP": {
            return location.row != 0 && canWalk(mapData[location.row-1][location.col]);
        }
        case "DOWN": {
            return location.row != mapData.length-1 && canWalk(mapData[location.row+1][location.col]);
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
	return location;
}

