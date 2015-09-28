var LevelRange = function(startLevel, endLevel) {
	this.startLevel = startLevel;
	this.endLevel = endLevel;
};

LevelRange.prototype.getRandomLevel = function() {
	return Math.floor(Math.random() * (this.endLevel - this.startLevel + 1)) + this.startLevel;
};