var Util = {};

Util.getExpForLevel = function(level) {
	return Math.pow(level, 3);
};

Util.pad = function(width, string, padding) {
	return (width <= string.toString().length) ? string : Util.pad(width, padding + string, padding);
};