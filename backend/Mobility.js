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
        return;
    }
	
	switch(direction) {
		case "LEFT": {
			
		}
		case "RIGHT": {
			
		}
		case "UP": {
			
		}
		case "DOWN": {
			
		}
	}
}

