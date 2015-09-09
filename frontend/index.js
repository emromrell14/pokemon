var LEFT_BOUNDARY = 0;
var TOP_BOUNDARY = 0;
var RIGHT_BOUNDARY = 9;
var BOTTOM_BOUNDARY = 9;
var LEFT = "LEFT";
var UP = "UP";
var RIGHT = "RIGHT";
var DOWN = "DOWN";
var DIRECTION_MAP = {}

var currentCell = {};
currentCell.location = {};
var allElements = new Array(RIGHT_BOUNDARY + 1);
for (var i = 0; i <= RIGHT_BOUNDARY; i++) {
    allElements[i] = new Array(BOTTOM_BOUNDARY + 1);
}

window.onload=function() {
    var grid = clickableGrid(10, 10, function(element, row, col) {});
    document.getElementById("mainBoard").appendChild(grid);
    currentCell.element = allElements[0][0];
    currentCell.element.className = 'DOWN';
    currentCell.location = {row:0,col:0};
}

function clickableGrid(rows, cols, callback) {
    var grid = document.createElement('table');
    grid.className = 'grid';
    for (var row = 0; row < rows; row++){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var col = 0; col < cols; col++){
            var cell = tr.appendChild(document.createElement('td'));
            cell.addEventListener('click',(function(element, row, col){
                return function(){
                    callback(element, row, col);
                }
            })(cell, row, col),false);
            allElements[row][col] = cell;
        }
    }
    return grid;
}

window.onkeydown = function(e) {
    if (e.keyCode === 37 && canMove(currentCell, LEFT)) {
        executeMove(LEFT);
    } else if (e.keyCode === 38 && canMove(currentCell, UP)) {
        executeMove(UP);
    } else if (e.keyCode === 39 && canMove(currentCell, RIGHT)) {
        executeMove(RIGHT);
    } else if (e.keyCode === 40 && canMove(currentCell, DOWN)) {
        executeMove(DOWN);
    }
}

function executeMove(dir) {
    currentCell.element.className = '';
    currentCell.location = move(currentCell.location, dir);
    currentCell.element = allElements[currentCell.location.row][currentCell.location.col];
    currentCell.element.className = dir;
}
