const boton = document.querySelector('button')
const h1 = document.querySelector('h1')

function pescueso(numero) {
	return Math.floor(Math.random() * (numero+1))
}

function otraCosa(color){
	return Math.floor(Math.random() * (color+1))
}

function fondo(h1){
	let bkgText = `rgb(${pescueso(250)}, ${pescueso(250)}, ${pescueso(250)})`
	h1.target.style.background = bkgText
}

let abortar = new AbortController()
boton.addEventListener('click', ()=>{
	let cambio = `rgb(${pescueso(250)}, ${pescueso(250)}, ${pescueso(250)})`;
	let color = `rgb(${otraCosa(250)}, ${otraCosa(250)}, ${otraCosa(250)})`;
	document.body.style.backgroundColor = cambio;
	document.body.style.color = color;
}, {signal: abortar.singal})





// const boton = document.querySelector('button')

// function btn(number){
// 	return Math.floor(Math.random() * (number+1))
// }

// function button(e){
// 	let colorRandom = `rgb(${btn(255)}, ${btn(255)}, ${btn(255)})`
// 	e.target.style.backgroundColor = colorRandom
// 	console.log(e)
// }

// boton.addEventListener('click', button)





// boton.addEventListener('click', fondo)


// function cambioColor(){
// 	let color = `rgb(${otraCosa(250)}, ${otraCosa(250)}, ${otraCosa(250)})`
// 	let fondo = `rgb(${pescueso(250)}, ${pescueso(250)}, ${pescueso(250)})`
// 	document.body.style.color = color
// 	document.body.style.backgroundColor = fondo
// }
// boton.addEventListener('click', cambioColor, pescueso)





