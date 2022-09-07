

const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
//Usando fetch() se remplaza a la function //XMLHttpRequest(), como versiòn màs moderna //para llamar una API.

	console.log(fetchPromise)
//logear la variable fetchPromise.
//Devolviendo Promise { <state>: "pending"}
//Avisando de que tengo un objeto Promise en cual //estado se encuentra pendiente
//"pendiente" dice que la operacion de fetch //sigue funcionando

fetchPromise.then((response => {
	console.log(`Received request: ${response.status}`)
}))


console.log("Started request...");
//status code 200(OK), request exitoso;


//OPCIONES DE CADENA

const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise.then((response) => {
	const jsonPromise = response.json();
//se le pasa un nuevo .then() en la promesa //retornada por response.json();
	jsonPromise.then((data) => {
		console.log(data[0].name)
	})
})
//SE PUEDE HACER DE FORMA MÀS ELEGANTE Y CORTA



const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
	.then((response) => {
		return response.json()
	})
	.then((data) => {
		console.log(data[0].name)
	})
// Promise Chaining, pudiendo incrementar los //niveles de identacion cuando necesitemos hacer //funciones de llamadas asincronas consecutivas;


// PARA CACHEAR ERRORES


const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')

fetchPromise
	.then((response) => {
		if(!response.ok){
			throw new Error(`HTTP error: ${response.status}`)
		}
		return response.json();
	})
	.then((data) => {
		console.log(data[0].name)
	})
	.catch((e) => {
		console.log(`No se pueden obtener los productos ${e}`)
	})

//Promise.all()

const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found')
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')

Promise.all([fetchPromise1,fetchPromise2,fetchPromise3])
	.then((responses) => {
		for(const response of responses){
			console.log(`${response.url}: ${response.status}`)
		}	
	})
	.catch((e) => {
		console.log(`Falló con el fetch: ${e}`)
	})

Promise.any();


async and await

async function myFunction(){
	//Funcion asincrona
}

###

async function fetchProducts(){
	try{
		//despues de esta linea, la funcion espera por 
	//fetch() para ser colocado;

		//fetch() va a retornar ambos un Response or 
	//un error;
	const response = await
	fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
	if(!response.ok){
		throw new Error(`HTTP error: ${response.status}`);
	}
		//despues de esta linea, la funcion espera a 
	//que la llamada `response.json()` sea colocada;

		//lla llamada `response.json()` va a retornar
	//ambos parsed JSON object or throw un error;
	const data = await response.json();
	console.log(data[0].name);
	}
	catch(err) {
		console.log(`No pudo obtener los productos ${err}`)
	}
}

fetchProducts()
WebRTC API:
//https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API
Web Audio API:
//https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
Media Capture and Streams API(Media Stream):
//https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API


addingDelay a alarma
const output = document.querySelector('#output');
const button = document.querySelector('#set-alarm');

function setAlarm() {
  window.setTimeout(() => {
    output.textContent = 'Wake up!';
  }, 1000);
}

button.addEventListener('click', setAlarm);




function setAlarm(person, delay){
	return new Promise((resolve, reject) => {
		if (delay < 0){
			throw new Error('El delay de la alarma no debe ser negativo');
		}
	window.setTimeout(() => {
		resolve(`Wake up, ${person}!`)
	}, delay)
})
}




const name = document.querySelector('#name')
const delay = document.querySelector('#delay')
const button = document.querySelector('#setAlarm')
const output = document.querySelector('#output')

function alarm(person, delay){
	return new Promise((res, rej) => {
		if (delay < 0) {
			throw new Error('No puede ser menor a 0')
		}
		window.setTimeout(() => {
			res(`Despertate ${person}`)
		}, delay)
	})
}

button.addEventListener('click', () => {
	alarm(name.value, delay.value)
		.then((message) => 
			output.textContent = message)
		.catch((error) => 
			output.textContent = `No puede setearse ${error}`)
})