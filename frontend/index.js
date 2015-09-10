var LEFT = "LEFT";
var UP = "UP";
var RIGHT = "RIGHT";
var DOWN = "DOWN";
var DIRECTION_MAP = {}

var currentCell = {};
currentCell.location = {};
var allElements;
var map;

window.onload=function() {
    setCurrentMap("map1");
    map = getCurrentMap();
    var grid = mapGrid(10, 10, map);
    document.getElementById("mainBoard").appendChild(grid);
    currentCell.element = allElements[5][5];
    currentCell.element.className = 'DOWN';
    currentCell.location = {row:5,col:5};
}

function mapGrid(rows, cols, map) {
    var grid = document.createElement('table');
    grid.className = 'grid';
    allElements = new Array(map.length)
    for (var row = 0; row < rows; row++) {
        allElements[row] = new Array(map[row].length);
        var tr = grid.appendChild(document.createElement('tr'));
        for (var col = 0; col < cols; col++){
            var cell = tr.appendChild(document.createElement('td'));
            cell.style.backgroundColor = getColor(map[row][col]);
            allElements[row][col] = cell;
        }
    }
    return grid;
}

window.onkeydown = function(e) {
    var dir;
    if (e.keyCode === 37) {
        attemptMove(LEFT);
    } else if (e.keyCode === 38) {
        attemptMove(UP);
    } else if (e.keyCode === 39) {
        attemptMove(RIGHT);
    } else if (e.keyCode === 40) {
        attemptMove(DOWN);
    }
}

function attemptMove(dir) {
    if (canMove(currentCell.location, dir)) {
        currentCell.element.className = map[currentCell.location.row][currentCell.location.col];
        currentCell.location = move(currentCell.location, dir);
        currentCell.element = allElements[currentCell.location.row][currentCell.location.col];        
    }
    currentCell.element.className = dir;
}

function getColor(tileId) {
    switch(tileId) {
        case 'l':
            return "tan";
        case 'w':
            return "blue";
        default:
            return "white";
    }
}
