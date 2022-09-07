let boton = document.querySelector(".button")
let txt = document.querySelector(".txt")

boton.addEventListener("click", updButton)

function updButton(){
	if (boton.textContent === 'Iniciar máquina') {
		boton.textContent = 'Detener máquina'
		txt.textContent = 'La máquina se inició'
	} else {
		boton.textContent = 'Iniciar máquina'
		txt.textContent = 'La máquina se detuvo'
	}
}