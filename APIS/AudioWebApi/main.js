
const AudioContext = window.AudioContext || window.webkitAudioContext;
//declarar propiedad AudioContext de window; 
const audioCtx = new AudioContext();
// nueva instancia de AudioContext en audioCtx

const audioElement=document.querySelector('audio');
const playBtn=document.querySelector('button');
const volumeSlider=document.querySelector('.volume');
// audio, button y la clase volume
// audioElement, playBtn, volumeSlider

const audioSource = audioCtx.createMediaElementSource(audioElement)
// asignar a audioSource la propiedad createMediaElementSource() de audioCtx pasando por parametro audioElement


playBtn.addEventListener('click', () => {
// click a playBtn
	if(audioCtx.state === 'suspended') {
		// caso 'suspended'
		audioCtx.resume()
	}

	if (playBtn.getAttribute('class') === 'paused'){
		// si playBtn obtiene atributo class igual a paused
		audioElement.play();
		playBtn.setAttribute('class','playing');
		playBtn.textContent = 'Pause'

	} else if (playBtn.getAttribute('class') === 'playing') {
		audioElement.pause();
		playBtn.settAttribute('class','paused');
		playBtn.textContent = 'Play';
	}
})

audioElement.addEventListener('ended', () => {
	// ended action en audioElement
	playBtn.setAttribute('class', 'paused');
	playBtn.textContent = 'Play'
})

const gainNode = audioCtx.createGain();
// asignar a gainNode la propiedad createGain() de audioCtx para ajustar el volumen 

volumeSlider.addEventListener('input', () => {
	gainNode.gain.value = volumeSlider.value;
})

// connect gainNode en audioSource
// connect destination de audioCtx 
audioSource.connect(gainNode).connect(audioCtx.destination);
// API Audio Web en el browser 
