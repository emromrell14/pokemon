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
	setCurrentMap(mapSelector.options[mapSelector.selectedIndex].text);
    loadMap();
}

function loadMap() {
    //Remove any map that is already there
    var mainBoard = document.getElementById("mainBoard");
    while (mainBoard.firstChild) {
        mainBoard.removeChild(mainBoard.firstChild);
    }

    //Select the map from the dropdown list and load it up
    //setCurrentMap(mapSelector.options[mapSelector.selectedIndex].text);
    var map = getCurrentMap();
    document.getElementById("mainBoard").appendChild(buildGridFromMap(map));

    //Set the starting location
    if (currentCell.element == null) {
		currentCell.element = allElements[6][5];
		currentCell.element.childNodes.item('foreground').className = 'DOWN';
		currentCell.location = {row:6,col:5};
	}
}

function buildGridFromMap(map) {
    var grid = document.createElement('table');
    grid.className = 'grid';
    allElements = new Array(map.length)
    for (var row = 0; row < map.length; row++) {
        allElements[row] = new Array(map[row].length);
        var tr = grid.appendChild(document.createElement('tr'));
        for (var col = 0; col < map[0].length; col++) {
            var cell = tr.appendChild(document.createElement('td'));
            cell.id = map[row][col];
            var div = cell.appendChild(document.createElement('div'));
            div.id = "foreground";
            allElements[row][col] = cell;
        }
    }
    return grid;
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
        // currentCell.element.id = getCurrentMap()[currentCell.location.row][currentCell.location.col];
        currentCell.element.childNodes.item('foreground').className = '';
        var result = move(currentCell.location, dir);
		if (getCurrentMapName() !== result.mapName) {
			setCurrentMap(result.mapName);
			loadMap();
		}
		currentCell.location = result.location;
        currentCell.element = allElements[currentCell.location.row][currentCell.location.col];        
    }

    //Still change the direction that the person is facing, even if they don't move
    currentCell.element.childNodes.item('foreground').className = dir;
}
