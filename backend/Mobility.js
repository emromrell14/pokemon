var RIGHT_BONDARY = 9;
var BOTTOM_BONDARY = 9;
var LEFT_BONDARY = 0;
var TOP_BONDARY = 0;

function canMove(location, direction, map1) {
    map = getMap("map1")
	switch(direction) {
        case "LEFT": {
			return location.col != LEFT_BONDARY and map1[location.row][location.col-1] !=== "w";
        }
        case "RIGHT": {
            return location.col != RIGHT_BONDARY and map1[location.row][location.col+1] !=== "w";
		}
		case "UP": {
            return location.row != TOP_BONDARY and map1[location.row-1][location.col] !=== "w";
        }
        case "DOWN": {
            return location.row != BOTTOM_BONDARY and map1[location.row+1][location.col] !=== "w";
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

