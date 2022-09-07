const eleccion = document.querySelector('select')
const parrafo = document.querySelector('p')
const link = document.querySelector('a')

eleccion.addEventListener('change', updButton)

function updButton() {
	let seleccion = eleccion.value;
	if (seleccion === "soleado") {
		parrafo.textContent = "Esta soleado"
		link.textContent = 'Acá esta el link para ir a Google'
	} else if (seleccion === "nublado") {
		parrafo.textContent = "Guarda capo que esta nublado"
		link.textContent = ''
	} else if (seleccion === "tornado"){
		parrafo.textContent = "Quedate en casa bro que se viene el tornado"
	} else if (seleccion === "lluvia") {
		parrafo.textContent = "Se viene el agua negrooo"
	} else if (seleccion === "nieve") {
		parrafo.textContent = "Te gusta la nieve? estas de suerte"
	} else {
		parrafo.textContent = "DALE GIL NO SEAS ORTIVA ELEGÍ UNO"
	}
}