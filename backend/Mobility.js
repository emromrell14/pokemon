var RIGHT_BONDARY = 9;
var BOTTOM_BONDARY = 9;
var LEFT_BONDARY = 0;
var TOP_BONDARY = 0;



function canMove(location, direction) {
    mapData = getCurrentMap();
	switch(direction) {
        case "LEFT": {
			return location.col != 0 && mapData[location.row][location.col-1] === "l";
        }
        case "RIGHT": {
            return location.col != mapData[0].length && mapData[location.row][location.col+1] === "l";
		}
		case "UP": {
            return location.row != 0 && mapData[location.row-1][location.col] === "l";
        }
        case "DOWN": {
            return location.row != mapData.length && mapData[location.row+1][location.col] === "l";
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

