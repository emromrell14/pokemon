var currentCell = {};
var allElements;

window.onload=function() {
    init();
}

function init() {
    setStartLocation();
    reloadMap();
    currentCell.element = allElements[currentCell.location.row][currentCell.location.col];
    currentCell.element.childNodes.item('foreground').className = 'DOWN';
}

function setStartLocation() {
    setCurrentMap('PalletTown');
    currentCell.location = getTestStartLocation('PalletTown');
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

    var startingLocation = getUpperLeftCorner(currentCell.location, mapData[0].length, mapData.length);

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

function getUpperLeftCorner(currentLocation, mapWidth, mapHeight) {
    return {
        row: getNormalizedValue(currentLocation.row, mapHeight),
        col: getNormalizedValue(currentLocation.col, mapWidth)
    };
}

function getNormalizedValue(value, max) {
    if (value < 4) {return 0;}
    else if (value > max - 6) {return max - 10;}
    else {return value - 4;}
}

window.onkeydown = function(e) {
    if (e.keyCode === 37) {attemptMove("LEFT");} 
    else if (e.keyCode === 38) {attemptMove("UP");} 
    else if (e.keyCode === 39) {attemptMove("RIGHT");} 
    else if (e.keyCode === 40) {attemptMove("DOWN");}
}

function attemptMove(dir) {
    if (canMove(currentCell.location, dir)) {
        currentCell.element.childNodes.item('foreground').className = '';
        var result = move(currentCell.location, dir);
		if (getCurrentMapName() !== result.mapName) {
			setCurrentMap(result.mapName);
		}
		currentCell.location = result.location;
        reloadMap(); 
        currentCell.element = allElements[currentCell.location.row][currentCell.location.col];
    }

    //Still change the direction that the person is facing, even if they don't move
    currentCell.element.childNodes.item('foreground').className = dir;
}
