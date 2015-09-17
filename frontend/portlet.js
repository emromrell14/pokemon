var currentCell = {};
var allElements;
var inFight;

window.onload = function() {
    init();
}

function init() {
    setStartLocation();
    $("#mainBoard").empty().append(buildPortlet());
    $("#fightScene").hide();
    currentCell.element = allElements[currentCell.location.row][currentCell.location.col];
    currentCell.element.childNodes.item('foreground').className = 'DOWN';
}

function setStartLocation() {
    setCurrentMap('PalletTown');
    currentCell.location = getTestStartLocation('PalletTown');
}

function reloadMap() {
    $("#mainBoard").empty().append(buildPortlet());
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
    switch (e.keyCode) {
        case 32: executeAction();break;
        case 37: attemptMove("LEFT");break;
        case 38: attemptMove("UP");break;
        case 39: attemptMove("RIGHT");break;
        case 40: attemptMove("DOWN");break;
    }
}

function executeAction() {
}

function attemptMove(dir) {
    if (!inFight) {
        if (canMove(currentCell.location, dir)) {
            currentCell.element.childNodes.item('foreground').className = '';
            var result = move(currentCell.location, dir);
            if (getCurrentMapName() !== result.mapName) {
                $("#mainBoard").fadeOut(500, function() {
                    setCurrentMap(result.mapName);
                    currentCell.location = result.location;
                    reloadMap();
                    currentCell.element = allElements[currentCell.location.row][currentCell.location.col];
                }).fadeIn(500);
            } else {
                currentCell.location = result.location;
                reloadMap();
                currentCell.element = allElements[currentCell.location.row][currentCell.location.col];
            }
        }

        //Still change the direction that the person is facing, even if they don't move
        currentCell.element.childNodes.item('foreground').className = dir;        
    }
}

function foundPokemon(pokemon) {
    inFight = true;
    $("#mainBoard").hide(1000, function() {
        startFightScene({info: pokemon, level: 16});
    });
}

function startFightScene(pokemon) {
    $("#theirName").empty().append(pokemon.info.name.toUpperCase());
    $("#theirLevel").empty().append("L:" + pokemon.level);
    $("#theirImage").attr("src", "images/pokemon/" + pokemon.info.national_id + ".png");

    $("#yourImage").empty().attr("src", "images/pokemon/back/trainer.png");
    $("#yourLevel").empty().append("L:18");
    $("#yourName").empty().append("ERIC");

    $("#startOptions").hide();
    $("#fightScene").show(1000, function() {
        scrollText("optionsText", "Wild " + pokemon.info.name.toUpperCase() + " appeared!", sendOutPokemon);
    });
}

function scrollText(paragraphId, newText, callback) {
    var contentArray = newText.split("");
    var current = 0;
    var elem = $("#" + paragraphId);
    var interval = setInterval(function() {
        if(current < contentArray.length) {
            elem.text(elem.text() + contentArray[current++]);
        } else {
            clearInterval(interval);
            callback();
        }
    }, 50);
}

function sendOutPokemon() {
    
}

function backToMap() {
    $('#fightScene').hide(1000, function() {
        $("#mainBoard").show(1000, function() {
            inFight = false;
        });
    });
}
