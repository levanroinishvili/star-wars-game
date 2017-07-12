'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
function say(text) {
	console.log('We said ' + text);
}

exports.default = say;


function laugh() {
	console.log('Ha-ha-ha');
}

function show(text) {
	document.getElementById('screen').innerHTML = text;
}

exports.laugh = laugh;
exports.show = show;