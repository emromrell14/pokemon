var currentCell = {};
var allElements;
var moveSemaphore;
var activeBattle;
var startingMap = "ViridianCity";
var BAR_WIDTH = 48;
var EXP_BAR_WIDTH = 64;

window.onload = function() {
    init();
};

function init() {
    setStartLocation();
    $("#mainBoard").empty().append(buildPortlet());
    $("#fightScene").hide();
    currentCell.element = allElements[currentCell.location.row][currentCell.location.col];
    currentCell.element.find("#foreground").attr("class", "DOWN");
}

function setStartLocation() {
    Maps.setCurrentMap(startingMap);
    currentCell.location = Maps.getTestStartLocation(Maps.getCurrentMapName());
}

function reloadMap(result, dir) {
    //Clear the person image
    currentCell.element.find("#foreground").attr("class", "");

    //Set the new location
    currentCell.location = result;

    //Rebuild the UI
    $("#mainBoard").empty().append(buildPortlet());

    //Reset the person's cell and put them on it
    currentCell.element = allElements[currentCell.location.row][currentCell.location.col];
    currentCell.element.find("#foreground").attr("class", dir);

    //Allow the player to move again
    moveSemaphore = false;
}

function buildPortlet() {
    var mapData = Maps.getCurrentMap();

    var startingLocation = getUpperLeftCorner(currentCell.location, mapData[0].length, mapData.length);

    var portlet = $("<table></table>");
    portlet.addClass("grid");
    allElements = new Array(10);
    for (var row = startingLocation.row; row < startingLocation.row + 10; row++) {
		var tr = $("<tr></tr>");
        portlet.append(tr);
        allElements[row] = new Array(10);
        for (var col = startingLocation.col; col < startingLocation.col + 10; col++) {
			var td = $("<td></td>").attr("id", mapData[row][col]);
            tr.append(td);
            td.append($("<div></div>").attr("id", "foreground"));
            allElements[row][col] = td;
        }
    }
    return portlet;
}

function getUpperLeftCorner(currentLocation, mapWidth, mapHeight) {
    return new Location(currentLocation.mapName, getNormalizedValue(currentLocation.row, mapHeight), getNormalizedValue(currentLocation.col, mapWidth));
}

function getNormalizedValue(value, max) {
    if (value < 4) return 0;
    else if (value > max - 6) return max - 10;
    else return value - 4;
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
    //healAllPokemonInParty();
    console.log(currentCell.location);
}

function healAllPokemonInParty() {
    var allPokemonInParty = Party.getAllPokemonInParty();
    for (var i = 0; i < allPokemonInParty.length; i++) {
        var pokemon = allPokemonInParty[i];
        pokemon.stats.hp = pokemon.stats.maxHp;
        if (activeBattle != null) {
            activeBattle.changeHealthBarColorAndSize($("#yourHealthBar"), pokemon.stats.hp / pokemon.stats.maxHp, true, function() {
                $("#yourHp").empty().append(Util.pad(4, activeBattle.yourPokemon.stats.hp, " ") + "/" + Util.pad(4, activeBattle.yourPokemon.stats.maxHp, " "));
                //console.log(pokemon.info.name + " has been healed");
            });
        }
    }
}

function attemptMove(dir) {
    if (activeBattle == null && !moveSemaphore) {
        moveSemaphore = true;
        if (Mobility.canMove(currentCell.location, dir)) {
            var result = Mobility.move(currentCell.location, dir);

            if (Maps.getCurrentMapName() !== result.mapName) {
                Maps.setCurrentMap(result.mapName);
                $("#mainBoard").fadeOut(500, function() {
                    //This will put the person back on the map, and remove the move semaphore
                    reloadMap(result, dir);
                }).fadeIn(500);
            } else {
                reloadMap(result, dir);
            }
        } else {
            //Still change the direction that the person is facing, even if they don't move
            currentCell.element.find("#foreground").attr("class", dir);
            moveSemaphore = false;
        }
    }
}

function foundPokemon(theirPokemon) {
    var yourPokemon = Party.getFirstLivePokemonInParty();
    activeBattle = new Battle(yourPokemon, theirPokemon);

    $("#mainBoard").hide(1000, function() {
        $("#theirName").empty().append(theirPokemon.info.name.toUpperCase());
        $("#theirLevel").empty().append("L:" + Util.pad(3, theirPokemon.level, " "));
        $("#theirImage").attr("src", "images/pokemon/" + theirPokemon.info.nationalId + ".png").show();

        $("#yourImage").empty().attr("src", "images/pokemon/back/trainer.png");
        $("#yourStats").hide();

        $("#startOptions").hide();
        $("#moveOptions").hide();
        $("#optionsText").empty();

        activeBattle.changeHealthBarColorAndSize($("#theirHealthBar"), theirPokemon.stats.hp / theirPokemon.stats.maxHp, false);

        $("#fightScene").show(1000, function() {
            scrollText("Wild " + theirPokemon.info.name.toUpperCase() + " appeared!", function() {
                scrollText("Go, " + yourPokemon.info.name.toUpperCase() + "!", function() {});
                $("#yourImage").hide(500, function() {
                    var yourImage = $("#yourImage");
                    yourImage.attr("src", "images/pokemon/back/" + yourPokemon.info.nationalId + ".png");
                    yourImage.show(500, function() {
                        $("#yourName").empty().append(yourPokemon.info.name.toUpperCase());
                        $("#yourLevel").empty().append("L:" + Util.pad(3, yourPokemon.level, " "));
                        activeBattle.changeHealthBarColorAndSize($("#yourHealthBar"), yourPokemon.stats.hp / yourPokemon.stats.maxHp, false);
                        $("#yourExpBar").css("width", (yourPokemon.getExpPercentage() * EXP_BAR_WIDTH));
                        $("#yourHp").empty().append(Util.pad(4, yourPokemon.stats.hp, " ") + "/" + Util.pad(4, yourPokemon.stats.maxHp, " "));
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
    $("#optionsText").empty();
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
    for (var i = 0; i < MAX_MOVES; i++) {
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
    scrollText("You don't have anything in your pack!", function() {
        $("#startOptions").show();
    });
}

function runOptionClicked() {
    $("#startOptions").hide();

    activeBattle.escapeAttempts++;
    if (activeBattle.canRunAway()) {
        scrollText("Got away safely!", function() {
            exitFightScene();
        });
    } else {
        scrollText(activeBattle.yourPokemon.info.name.toUpperCase() + " tried to escape, but couldn't get away!", function() {
            activeBattle.theyAttackYou(activeBattle.theirPokemon.getRandomMove(), function() {
                showStartOptions();
            });
        });
    }
}

function moveSelected(button) {
    $("#moveOptions").hide();
    $("#startOptions").hide();
    var move = activeBattle.yourPokemon.moves[button.value];
    activeBattle.startTurn(move);
}

function exitFightScene() {
    $("#fightScene").hide(1000, function() {
        $("#mainBoard").show(1000, function() {
            activeBattle = null;
        });
    });
}

function scrollText(newText, callback) {
    var contentArray = newText.split("");
    var current = 0;
    var elem = $("#optionsText").empty();
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
