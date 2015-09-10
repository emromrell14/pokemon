var currentCell = {};
var allElements;

window.onload=function() {
    initMapSelector();
}

function initMapSelector() {
    var mapNames = getAllMapNames();
    var mapSelector = document.getElementById("mapSelector");
    for (var i = 0; i < mapNames.length; i++) {
        var option = document.createElement("option");
        option.text = mapNames[i];
        if (i == 0) {
            option.selected = true;
        }
        mapSelector.add(option);
    }
    mapSelector.addEventListener("select", function() {
        mapSelector = document.getElementById("mapSelector");
        loadMap();
    });
    loadMap();
}

function loadMap() {
    //Remove any map that is already there
    var mainBoard = document.getElementById("mainBoard");
    while (mainBoard.firstChild) {
        mainBoard.removeChild(mainBoard.firstChild);
    }

    //Select the map from the dropdown list and load it up
    setCurrentMap(mapSelector.options[mapSelector.selectedIndex].text);
    var map = getCurrentMap();
    document.getElementById("mainBoard").appendChild(buildGridFromMap(map));

    //Set the starting location
    currentCell.element = allElements[5][5];
    currentCell.element.className = 'DOWN';
    currentCell.location = {row:5,col:5};
}

function buildGridFromMap(map) {
    var grid = document.createElement('table');
    grid.className = 'grid';
    allElements = new Array(map.length)
    for (var row = 0; row < map.length; row++) {
        allElements[row] = new Array(map[row].length);
        var tr = grid.appendChild(document.createElement('tr'));
        for (var col = 0; col < map[0].length; col++){
            var cell = tr.appendChild(document.createElement('td'));
            cell.style.backgroundColor = getColor(map[row][col]);
            allElements[row][col] = cell;
        }
    }
    return grid;
}

function getColor(tileId) {
    switch(tileId) {
        case 'l':return "tan";
        case 'w':return "blue";
        case 'g':return "green";
        case 'b':return "gray";
        case 'd':return "brown";
        default:return "white";
    }
}

window.onkeydown = function(e) {
    var dir;
    if (e.keyCode === 37) {
        attemptMove("LEFT");
    } else if (e.keyCode === 38) {
        attemptMove("UP");
    } else if (e.keyCode === 39) {
        attemptMove("RIGHT");
    } else if (e.keyCode === 40) {
        attemptMove("DOWN");
    }
}

function attemptMove(dir) {
    if (canMove(currentCell.location, dir)) {
        currentCell.element.className = getCurrentMap()[currentCell.location.row][currentCell.location.col];
        currentCell.location = move(currentCell.location, dir);
        currentCell.element = allElements[currentCell.location.row][currentCell.location.col];        
    }

    //Still change the direction that the person is facing, even if they don't move
    currentCell.element.className = dir;
}
