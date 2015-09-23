var currentCell = {};
var allElements;
var inFight;
var activeBattle;
var BAR_WIDTH = 48;

function setInFight(bool) {
    inFight = bool;
}

window.onload = function() {
    init();
};

function init() {
    setStartLocation();
    $("#mainBoard").empty().append(buildPortlet());
    $("#fightScene").hide();
    currentCell.element = allElements[currentCell.location.row][currentCell.location.col];
    currentCell.element.childNodes.item('foreground').className = 'DOWN';
}

function setStartLocation() {
    Maps.setCurrentMap('PalletTown');
    currentCell.location = Maps.getTestStartLocation(Maps.getCurrentMapName());
}

function reloadMap() {
    $("#mainBoard").empty().append(buildPortlet());
}

function buildPortlet() {
    var mapData = Maps.getCurrentMap();

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
};

function executeAction() {
}

function attemptMove(dir) {
    if (!inFight) {
        if (Mobility.canMove(currentCell.location, dir)) {
            currentCell.element.childNodes.item("foreground").className = '';
            var result = Mobility.move(currentCell.location, dir);
            if (Maps.getCurrentMapName() !== result.mapName) {
                $("#mainBoard").fadeOut(500, function() {
                    Maps.setCurrentMap(result.mapName);
                    currentCell.location = result.location;
                    reloadMap();
                    currentCell.element = allElements[currentCell.location.row][currentCell.location.col];
                    currentCell.element.childNodes.item('foreground').className = dir;
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

function foundPokemon(theirPokemon) {
    $("#mainBoard").hide(1000, function() {
        $("#theirName").empty().append(theirPokemon.info.name.toUpperCase());
        $("#theirLevel").empty().append("L:" + theirPokemon.level);
        $("#theirImage").attr("src", "images/pokemon/" + theirPokemon.info.nationalId + ".png").show();

        $("#yourImage").empty().attr("src", "images/pokemon/back/trainer.png");
        $("#yourStats").hide();

        $("#startOptions").hide();
        $("#moveOptions").hide();
        $("#optionsText").empty();

        var yourPokemon = Party.getFirstLivePokemonInParty();
        activeBattle = new Battle(yourPokemon, theirPokemon);
        activeBattle.changeHealthBarColorAndSize($("#theirHealthBar"), theirPokemon.hp / theirPokemon.maxHp, false);

        $("#fightScene").show(1000, function() {
            scrollText("optionsText", "Wild " + theirPokemon.info.name.toUpperCase() + " appeared!", function() {
                scrollText("optionsText", "Go, " + yourPokemon.info.name.toUpperCase() + "!", function() {});
                $("#yourImage").hide(500, function() {
                    var yourImage = $("#yourImage");
                    yourImage.attr("src", "images/pokemon/back/" + yourPokemon.info.nationalId + ".png");
                    yourImage.show(500, function() {
                        $("#yourName").empty().append(yourPokemon.info.name.toUpperCase());
                        $("#yourLevel").empty().append("L:" + yourPokemon.level);
                        activeBattle.changeHealthBarColorAndSize($("#yourHealthBar"), yourPokemon.hp / yourPokemon.maxHp, false);
                        $("#yourExpBar").css("width", (yourPokemon.exp / yourPokemon.maxExp * 64));
                        $("#yourHp").empty().append(yourPokemon.hp + "/" + yourPokemon.maxHp);
                        $("#yourStats").show();
                        delay(2000, function() {
                            $("#optionsText").empty();
                            showStartOptions();
                        });
                    });
                });
            });
        });
    });
}

function showStartOptions() {
    $(".yesNoOption").hide();
    $(".startOption").show();
    $("#startOptions").show();
}

function showYesNoOptions() {
    $(".startOption").hide();
    $(".yesNoOption").show();
    $("#startOptions").show();
}

function showMoveOptions(action) {
    for (var i = 0; i < 4; i++) {
        if (i < activeBattle.yourPokemon.moves.length) {
            $("#move" + i).attr("value", i).prop("disabled", false).empty().append(activeBattle.yourPokemon.moves[i].info.name).unbind("click").click(action);
        } else {
            $("#move" + i).prop("disabled", true).empty().append("--");
        }
    }
    $("#moveOptions").show();
}

function fightOptionClicked() {
    showMoveOptions(function() {
        moveSelected(this);
    });
}

function pokemonOptionClicked() {
    console.log(Party.getAllPokemonInParty());
}

function packOptionClicked() {
    $("#startOptions").hide();
    scrollText("optionsText", "You don't have anything in your pack!", function() {
        $("#startOptions").show();
    });
}

function runOptionClicked() {
    $("#startOptions").hide();
    scrollText("optionsText", "Got away safely!", function() {
        exitFightScene();
    });
}

function moveSelected(button) {
    $("#moveOptions").hide();
    $("#startOptions").hide();
    scrollText("optionsText", activeBattle.yourPokemon.info.name.toUpperCase() + " used " + activeBattle.yourPokemon.moves[button.value].info.name, function() {
        activeBattle.attack(activeBattle.yourPokemon.moves[button.value].info.power);
    });
}

function exitFightScene() {
    $("#fightScene").hide(1000, function() {
        $("#mainBoard").show(1000, function() {
            inFight = false;
        });
    });
}

function scrollText(paragraphId, newText, callback) {
    var contentArray = newText.split("");
    var current = 0;
    var elem = $("#" + paragraphId).empty();
    var interval = setInterval(function() {
        if(current < contentArray.length) {
            elem.text(elem.text() + contentArray[current++]);
        } else {
            clearInterval(interval);
            delay(1500, callback);
        }
    }, 50);
}

function delay(time, callback) {
    setTimeout(callback, time);
}
