
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
//primero declaramos un AudioContext dentro de la cual manipularemos el track;

const audioElement=document.querySelector('audio');
const playBtn=document.querySelector('button');
const volumeSlider=document.querySelector('.volume');

const audioSource = audioCtx.createMediaElementSource(audioElement)
//declaramos constantes para almacenar el <audio>,<button> e <input>, usando el metodo AudioContext.createElementSource() para crear MediaElementAudioSourceNode representando el source del audio;

// play/pause audio:
playBtn.addEventListener('click', ()=>{

	if(audioCtx.state === 'suspended') {
		audioCtx.resume()
	}
	//chequeando si esta en estado suspendido (autoplay policy);

	if (playBtn.getAttribute('class')=== 'paused'){
		//si el track esta pausado, que se le de play
		audioElement.play();
		playBtn.setAttribute('class','playing');
		playBtn.textContent = 'Pause'

	} else if (playBtn.getAttribute('class') === 'playing') {
		audioElement.pause();
		playBtn.settAttribute('class','paused');
		playBtn.textContent = 'Play';
	}
})

// si el track termina:
audioElement.addEventListener('ended', () => {
	playBtn.setAttribute('class', 'paused');
	playBtn.textContent = 'Play'
})

const gainNode = audioCtx.createGain();

//creamos el objeto gainNode usando el metodo AudioContext.createGain(), puede ser usado para ajustar el volumen,
//creando otro objeto de escucha que cambia el valor de la ganancia del audio graph(volumen) cuando el valor del slider cambie:
//volumen
volumeSlider.addEventListener('input', () => {
	gainNode.gain.value = volumeSlider.value;
})

//conectar los diferentes nodos in el graph up del audio, se hace usando el metodo AudioNode.connect() disponible en cada tipo de nodo:
audioSource.connect(gainNode).connect(audioCtx.destination);
//En el Web Audio API el punto de ntrada es el objeto AudioContext, necesita ser usado para hacer cualquier manipulaciòn.
//La API del punto de entrada del Document Object Model(DOM) esta con el objeto Document
