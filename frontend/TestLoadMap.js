var map;
var allElements;

window.onload = function() {
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
}

function buildGridFromMap(map) {
    var grid = document.createElement('table');
    grid.className = 'grid';
    allElements = new Array(map.length);
    for (var row = 0; row < map.length; row++) {
        allElements[row] = new Array(map[0].length);
        var tr = grid.appendChild(document.createElement('tr'));
        for (var col = 0; col < map[row].length; col++){
            var cell = tr.appendChild(document.createElement('td'));
            cell.className = map[row][col];
            allElements[row][col] = cell;
        }
    }
    return grid;
}
