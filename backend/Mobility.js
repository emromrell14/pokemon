var RIGHT_BONDARY = 9;
var BOTTOM_BONDARY = 9;
var LEFT_BONDARY = 0;
var TOP_BONDARY = 0;

function canMove(location, direction) {
    switch(direction) {
        case "LEFT": {
            return location.col != LEFT_BONDARY;
        }
        case "RIGHT": {
            return location.col != RIGHT_BONDARY;
		}
		case "UP": {
            return location.row != TOP_BONDARY;
        }
        case "DOWN": {
            return location.row != BOTTOM_BONDARY;
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

