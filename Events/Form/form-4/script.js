
const evtPhaseStr = ["NONE: ", "CAPTURING_PHASE: ", "AT_TARGET: ", "BUBBLING_PHASE: "];
const logElement = document.getElementById('log')

function log(msg){
	logElement.innerHTML += (`<p>${msg} </p>`);
}

function phase(evt){
	log(evtPhaseStr[evt.eventPhase] + 
this.firstChild.nodeValue.trim());
}

function gphase(evt) {
	log(evtPhaseStr[evt.eventPhase] +
		evt.currentTarget.toString().slice(8,-1));
}

function clearOutput(evt){
	evt.stopPropagation();
	logElement.innerHTML = ''
}

const divs = document.getElementsByTagName('div');
for (const div of divs){
	div.addEventListener('click', phase, true);
	div.addEventListener('click', phase, false);
}

document.addEventListener('click', gphase, true);
document.addEventListener('click', gphase, false);
window.addEventListener('click', gphase, true);
window.addEventListener('click', gphase, false);

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', clearOutput);