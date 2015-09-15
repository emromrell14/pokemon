var currentCell = {};
var allElements;
var inFight;

window.onload = function() {
    init();
}

function init() {
    setStartLocation();
    $("#mainBoard").empty().append(buildPortlet());
    $("#fightScene").empty().append(buildFightScene());
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
    if (e.keyCode === 37) {attemptMove("LEFT");} 
    else if (e.keyCode === 38) {attemptMove("UP");} 
    else if (e.keyCode === 39) {attemptMove("RIGHT");} 
    else if (e.keyCode === 40) {attemptMove("DOWN");}
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
        startFightScene(pokemon);
    });
}

function buildFightScene() {
    var fightTable = $("<table></table>").addClass('fightScene');
    
    var theirTr = $("<tr></tr>").addClass('fightTr');
    var foePokemonStats = $("<td></td>").addClass('fightTd').attr('id', 'foeStats').attr('colSpan', '2');
    var foePokemonImage = $("<td></td>").addClass('fightTd').attr('id', 'foeImage');
    theirTr.append(foePokemonStats, foePokemonImage);

    var yourTr = $("<tr></tr>").addClass('fightTr');
    var yourPokemonImage = $("<td></td>").addClass('fightTd').attr('id', 'yourImage');
    var yourPokemonStats = $("<td></td>").addClass('fightTd').attr('id', 'yourStats').attr('colSpan', '2');
    yourTr.append(yourPokemonImage, yourPokemonStats);

    var optionsTr = $("<tr></tr>").addClass('optionsTr');
    var optionsTd = $("<td></td>").addClass('optionsTd').attr('id', 'options').attr("colSpan", "3");
    optionsTr.append(optionsTd)

    fightTable.append(theirTr, yourTr, optionsTr);

    $("#fightScene").append(fightTable);
    $("#fightScene").hide();
}

function startFightScene(pokemon) {
    var foeStats = $("<img></img>").attr("src", "images/foeStats.png");
    $("#fightScene").find("#foeStats").empty().append(foeStats);

    var foeImage = $("<img></img>").attr("src", "images/pokemon/" + pokemon.national_id + ".png");
    $("#fightScene").find("#foeImage").empty().append(foeImage);

    var yourImage = $("<img></img>").attr("src", "")

    $("#fightScene").show(1000);
}

function backToMap() {
    $('#fightScene').hide(1000, function() {
        $("#mainBoard").show(1000, function() {
            inFight = false;
        });
    });
}
