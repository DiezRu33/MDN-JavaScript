//SharedWorker URL:
//https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker

//Service Worker API URL:
//https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API

//Progressive web apps(PWAs) URL:
//https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps



//crea un nuevo Worker, dandole el codigo de "generate.js"
const worker = new Worker('./generate.js');


//Al dar click en "Generar Primas", evia un mensaje al Worker.
//El comando del mensaje is "generate", y el mensaje también contiene "quota",
//el cual es el número de primas a generar
document.querySelector('#generate').addEventListener('click', () => {
	const quota = document.querySelector('#quota').value;
	worker.postMessage({
		command: 'generate',
		quota: quota
	})
})

//Cuando el Worker envia un mensaje de vuelta al thread principal,
//actualiza la caja del output con un msnj para el usuario,
//incluyendo el numero de primas que fueron generadas, tomadas desde los datos del mensaje.
worker.addEventListener('message',(message) => {
	document.querySelector('#output').textContent = `Terminó de generar ${message.data} de primas!`
})

document.querySelector('#reload').addEventListener('click', ()=> {
	document.querySelector('#user-input').value = "Intenta escribir aquí inmediatamente después de presionar en 'Generar Primas'"
	document.location.reload();
})
