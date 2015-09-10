var LEFT = "LEFT";
var UP = "UP";
var RIGHT = "RIGHT";
var DOWN = "DOWN";
var DIRECTION_MAP = {}

var currentCell = {};
currentCell.location = {};
var allElements;
var map;

function resizeMap() {
    var mainBoard = document.getElementById("mainBoard");
    while (mainBoard.firstChild) {
        mainBoard.removeChild(mainBoard.firstChild);
    }

    var rows = document.getElementById("tbRows").value;
    var cols = document.getElementById("tbCols").value;

    if (rows == "" || cols == "") {
        alert("Please enter a valid number for how many row and columns that you would like to have");
        return;
    }

    document.getElementById("btnCreateMap").disabled = false;

    var grid = clickableGrid(rows, cols, function(element, row, col) {
        currentCell.element = element;
        currentCell.location.row = row;
        currentCell.location.col = col;
        currentCell.element.className='clicked';
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
