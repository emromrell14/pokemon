var currentTile;
var allElements;
var mouseDown = false;

window.onload = function() {
	initMapSelector();
	resizeMap(10, 10);
	$("#btnResizeMap").click(function() {
		resizeMap($("#tbRows").val(), $("#tbCols").val());
	});

	$(".tileSection").hide();
	$("#ground").show();

	currentTile = $("#groundBrown").addClass("clicked");
};

function initMapSelector() {
	var mapNames = Maps.getAllMapNames();
	var mapSelector = $("#mapSelector");
	for (var i = 0; i < mapNames.length; i++) {
		var option = new Option(mapNames[i], null, false, false);

		if (i == 0) {
			option.selected = true;
		}
		mapSelector.append(option);
	}
}

//noinspection JSUnusedGlobalSymbols
function loadMap() {
	//Remove any map that is already there
	var mainBoard = $("#mainBoard").empty();

	//Select the map from the dropdown list and load it up
	Maps.setCurrentMap($("#mapSelector").find(":selected").text());
	var map = Maps.getCurrentMap();
	mainBoard.append(clickableGrid(map.length, map[0].length, map));
}

function resizeMap(rows, cols) {
	var mainBoard = $("#mainBoard").empty();

	if (rows == "" || cols == "") {
		alert("Please enter a valid number for how many rows and columns that you would like to have");
		return;
	}

	mainBoard.append(clickableGrid(rows, cols));
}

function clickableGrid(rows, cols, map) {
	var grid = $("<table></table>").addClass("grid");
	allElements = new Array(rows);
	for (var row = 0; row < rows; row++) {
		allElements[row] = new Array(cols);
		var tr = $("<tr></tr>");
		grid.append(tr);
		for (var col = 0; col < cols; col++) {
			var cell = $("<td></td>");
			tr.append(cell);

			cell.mousemove(function() {
				if (mouseDown) { //noinspection JSPotentiallyInvalidUsageOfThis
					this.id = currentTile.attr("id");
				}
			});
			cell.mousedown(function() {
				mouseDown = true;
				//noinspection JSPotentiallyInvalidUsageOfThis
				this.id = currentTile.attr("id");
			});
			cell.mouseup(function() {
				mouseDown = false;
			});

			if (map) {
				cell.attr("id", map[row][col]);
			}
			allElements[row][col] = cell;
		}
	}
	return grid;
}

//noinspection JSUnusedGlobalSymbols
function changeCurrentTile(div) {
	if (currentTile) {
		currentTile.attr("class", "colorBlock");
	}
	currentTile = $("#" + div.id);
	if (currentTile.attr("class").indexOf(" clicked") == -1) {
		currentTile.addClass("clicked");
	}
}

//noinspection JSUnusedGlobalSymbols
function sectionClicked(id) {
	$(".tileSection").hide();
	$("#" + id).show();
}

//noinspection JSUnusedGlobalSymbols
function createMap() {
	var map = "";
	map += "[<br />";
	for (var i = 0; i < allElements.length; i++) {
		map += "[";
		for (var j = 0; j < allElements[i].length; j++) {
			map += "'" + allElements[i][j].attr("id") + "'";
			if (j != allElements[i].length - 1) {
				map += ", ";
			}
		}
		map += "]";
		if (i != allElements.length - 1) {
			map += ",<br />";
		}
	}
	map += "<br />]";
	$("#result").html(map);
}
