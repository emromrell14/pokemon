var currentTile;
var allElements;
var mouseDown = false;

window.onload = function() {
    initMapSelector();
    resizeMap(10, 10);
    var btnResizeMap = document.getElementById("btnResizeMap");
    btnResizeMap.addEventListener('click', function() {
        resizeMap(document.getElementById("tbRows").value, document.getElementById("tbCols").value);
    });

    $(".tileSection").hide();
    $("#ground").show();

    var landTile = document.getElementById("groundBrown");
    landTile.className += " clicked";
    currentTile = landTile;
};

function initMapSelector() {
    var mapNames = Maps.getAllMapNames();
    var mapSelector = document.getElementById("mapSelector");
    for (var i = 0; i < mapNames.length; i++) {
        var option = document.createElement("option");
        option.text = mapNames[i];
        if (i == 0) {
            option.selected = true;
        }
        mapSelector.add(option);
    }
}

function loadMap() {
    //Remove any map that is already there
    var mainBoard = document.getElementById("mainBoard");
    while (mainBoard.firstChild) {
        mainBoard.removeChild(mainBoard.firstChild);
    }

    //Select the map from the dropdown list and load it up
    Maps.setCurrentMap(mapSelector.options[mapSelector.selectedIndex].text);
    var map = Maps.getCurrentMap();
    document.getElementById("mainBoard").appendChild(buildGridFromMap(map, function(element, row, col) {
        if(mouseDown) {
            element.id = currentTile.id;
        }
    }));
}

function buildGridFromMap(map, callback) {
    var grid = document.createElement('table');
    grid.className = 'grid';
    allElements = new Array(map.length)
    for (var row = 0; row < map.length; row++) {
        allElements[row] = new Array(map[row].length);
        var tr = grid.appendChild(document.createElement('tr'));
        for (var col = 0; col < map[0].length; col++) {
            var cell = tr.appendChild(document.createElement('td'));
            cell.addEventListener('mousemove', (function(element, row, col) {
                return function() {
                    callback(element, row, col);
                }
            })(cell, row, col), false);
            cell.addEventListener("mousedown", (function(element, row, col) {
                return function() {
                    mouseDown = true;
                    callback(element, row, col);
                }
            })(cell, row, col), false);
            cell.addEventListener("mouseup", function() {
                mouseDown = false;
            }, false);
            cell.id = map[row][col];
            allElements[row][col] = cell;
        }
    }
    return grid;
}

function resizeMap(rows, cols) {
    var mainBoard = document.getElementById("mainBoard");
    while (mainBoard.firstChild) {
        mainBoard.removeChild(mainBoard.firstChild);
    }

    if (rows == "" || cols == "") {
        alert("Please enter a valid number for how many row and columns that you would like to have");
        return;
    }

    var grid = clickableGrid(rows, cols, function(element, row, col) {
        if(mouseDown) {
            // currentCell.element = element;
            element.id = currentTile.id;
        }
    });
    document.getElementById("mainBoard").appendChild(grid);
}

function clickableGrid(rows, cols, callback) {
    var grid = document.createElement('table');
    grid.className = 'grid';
    allElements = new Array(rows);
    for (var row = 0; row < rows; row++) {
        allElements[row] = new Array(cols);
        var tr = grid.appendChild(document.createElement('tr'));
        for (var col = 0; col < cols; col++) {
            var cell = tr.appendChild(document.createElement('td'));
            cell.addEventListener('mousemove', (function(element, row, col) {
                return function() {
                    callback(element, row, col);
                }
            })(cell, row, col), false);
            cell.addEventListener("mousedown", (function(element, row, col) {
                return function() {
                    mouseDown = true;
                    callback(element, row, col);
                }
            })(cell, row, col), false);
            cell.addEventListener("mouseup", function() {
                mouseDown = false;
            }, false);

            allElements[row][col] = cell;
        }
    }
    return grid;
}

function changeCurrentTile(div) {
    if (currentTile) {
        currentTile.className = "colorBlock";
    }
    currentTile = div;
    if (currentTile.className.indexOf(" clicked") == -1) {
        currentTile.className += " clicked"
    }
}

function sectionClicked(id) {
    $(".tileSection").hide();
    $("#" + id).show();
}

function createMap() {
    var result = document.getElementById("result");
    result.innerHTML = "[<br />"
    for (var i = 0; i < allElements.length; i++) {
        result.innerHTML += "[";
        for (var j = 0; j < allElements[i].length; j++) {
            result.innerHTML += "'" + allElements[i][j].id + "'";
            if (j != allElements[i].length - 1) {
                result.innerHTML += ", ";
            }
        }
        result.innerHTML += "]";
        if (i != allElements.length - 1) {
            result.innerHTML += ",<br />";
        }
    }
    result.innerHTML += "<br />]"
}
