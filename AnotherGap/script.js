const boton = document.querySelector('button')

boton.textContent = "Apretame"

boton.addEventListener('click', upgradeFunction)

function upgradeFunction(){
	if(boton.textContent === "Apretame"){
		boton.textContent = "Ya me apretaste"
	} else if (boton.textContent === "Ya me apretaste"){
		boton.textContent = "Apretame"
	}
}