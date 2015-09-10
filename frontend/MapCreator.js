var LEFT = "LEFT";
var UP = "UP";
var RIGHT = "RIGHT";
var DOWN = "DOWN";
var DIRECTION_MAP = {}

var currentCell = {};
var currentTile;
var allElements;
var map;

window.onload = function() {
    resizeMap(10, 10);
    var btnResizeMap = document.getElementById("btnResizeMap");
    btnResizeMap.addEventListener('click', function() {
        resizeMap(document.getElementById("tbRows").value, document.getElementById("tbCols").value);
    });

    var landTile = document.getElementById("l");
    landTile.className += " clicked";
    currentTile = landTile;
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
        currentCell.element = element;
        currentCell.element.id = currentTile.id;
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
            cell.addEventListener('click',(function(element, row, col) {
                return function() {
                    callback(element, row, col);
                }
            })(cell, row, col), false);
            allElements[row][col] = cell;
        }
    }
    return grid;
}

function createMap() {
    alert("Creating map...");
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
