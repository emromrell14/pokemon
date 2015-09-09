var map;
var allElements;

window.onload = function() {
    map = getMap("map1");

    var grid = createGrid(map.length, map[0].length, map);
    document.getElementById("mainBoard").appendChild(grid);
}

function createGrid(rows, cols, map) {
    var grid = document.createElement('table');
    grid.className = 'grid';
    allElements = new Array(rows);
    for (var row = 0; row < rows; row++) {
        allElements[row] = new Array(cols);
        var tr = grid.appendChild(document.createElement('tr'));
        for (var col = 0; col < cols; col++){
            var cell = tr.appendChild(document.createElement('td'));
            cell.className = map[row][col];
            allElements[row][col] = cell;
        }
    }
    return grid;
}
