'use strict';

var _game = require('./game');

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var flashRestartTimeout = 300;
var stopFlashRestart = false;

function flashRestartStart() {
  stopFlashRestart = false;
  flashRestart1();
}
function flashRestartStop() {
  stopFlashRestart = true;
}

function flashRestart1() {
  document.getElementById('restart').classList.add('bright');
  setTimeout(flashRestart2, flashRestartTimeout);
}

function flashRestart2() {
  document.getElementById('restart').classList.remove('bright');
  if (!stopFlashRestart) setTimeout(flashRestart1, flashRestartTimeout);
}

window.flashRestartStart = flashRestartStart;
window.flashRestartStop = flashRestartStop;

var starWars = new _game2.default();
starWars.start();
window.starWars = starWars;