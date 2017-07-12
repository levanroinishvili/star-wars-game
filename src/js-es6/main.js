import game from './game';


let flashRestartTimeout = 300;
let stopFlashRestart = false;

function flashRestartStart() {
  stopFlashRestart = false;
  flashRestart1();
}
function flashRestartStop() {
  stopFlashRestart = true;
}

function flashRestart1() {
  document.getElementById('restart').classList.add('bright');
  setTimeout(flashRestart2,flashRestartTimeout);
}

function flashRestart2() {
  document.getElementById('restart').classList.remove('bright');
  if (!stopFlashRestart) setTimeout(flashRestart1,flashRestartTimeout);
}

window.flashRestartStart = flashRestartStart;
window.flashRestartStop  = flashRestartStop;

let starWars = new game();
starWars.start();
window.starWars = starWars;
