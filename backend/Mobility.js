var RIGHT_BONDARY = 9;
var BOTTOM_BONDARY = 9;
var LEFT_BONDARY = 0;
var TOP_BONDARY = 0;

function canMove(location, direction) {
    switch(direction) {
        case "LEFT": {
            if(location.col == LEFT_BONDARY) {
                return false;
            } else {
                return true;
            }
        }
        case "UP": {
            if(location.row == TOP_BONDARY) {
                return false;
            } else {
                return true;
            }
        }
        case "RIGHT": {
            if(location.col == RIGHT_BONDARY) {
                return false;
            } else {
                return true;
            }
        }
        case "DOWN": {
            if(location.row == BOTTOM_BONDARY) {
                return false;
            } else {
                return true;
            }
        }
    }
}