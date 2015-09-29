var Location = function(mapName, row, col) {
	this.mapName = mapName;
	this.row = row;
	this.col = col;
};

Location.prototype.equals = function(otherLocation) {
	if (this.mapName == otherLocation.mapName && this.row == otherLocation.row && this.col == otherLocation.col) {
		return true;
	} else {
		return false;
	}
};