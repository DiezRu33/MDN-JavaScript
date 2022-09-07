let boton = document.querySelector("button")

boton.onclick = function() {
	let pregunta = prompt("Hola como te llamas?")
	alert(`Hola ${pregunta}, me alegro de verte!`)
}