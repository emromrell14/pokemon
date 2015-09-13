var currentCell = {};
var allElements;

window.onload=function() {
    init();
}

function init() {
    setCurrentMap('PalletTown');
    currentCell.location = {row:6,col:5};
    reloadMap();
    currentCell.element = allElements[currentCell.location.row][currentCell.location.col];
    currentCell.element.childNodes.item('foreground').className = 'DOWN';
}

function reloadMap() {
    var mainBoard = document.getElementById("mainBoard");
    while (mainBoard.firstChild) {
        mainBoard.removeChild(mainBoard.firstChild);
    }
    document.getElementById("mainBoard").appendChild(buildPortlet());
}

function buildPortlet() {
    var mapData = getCurrentMap();

    var startingLocation = getUpperLeftCorner(currentCell.location, mapData);

    var portlet = document.createElement('table');
    portlet.className = 'grid';
    allElements = new Array(10);
    for (var row = startingLocation.row; row < startingLocation.row + 10; row++) {
        var tr = portlet.appendChild(document.createElement('tr'));
        allElements[row] = new Array(10);
        for (var col = startingLocation.col; col < startingLocation.col + 10; col++) {
            var td = tr.appendChild(document.createElement('td'));
            td.id = mapData[row][col];
            var div = td.appendChild(document.createElement('div'));
            div.id = "foreground";
            allElements[row][col] = td;
        }
    }
    return portlet;
}

function getUpperLeftCorner(currentLocation, mapData) {
    var result = {};

    if (currentLocation.row < 4) {result.row = 0;} 
    else if (currentLocation.row > mapData.length - 6) {result.row = mapData.length - 10;} 
    else {result.row = currentLocation.row - 4;}

    if (currentLocation.col < 4) {result.col = 0;} 
    else if (currentLocation.col > mapData[0].length - 6) {result.col = mapData[0].length - 10;} 
    else {result.col = currentLocation.col - 4;}

    return result;
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
			reloadMap();
		}
		currentCell.location = result.location;
        reloadMap(); 
        currentCell.element = allElements[currentCell.location.row][currentCell.location.col];
    }

    //Still change the direction that the person is facing, even if they don't move
    currentCell.element.childNodes.item('foreground').className = dir;
}
