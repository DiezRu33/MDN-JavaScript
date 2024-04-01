const boton = document.querySelector('button');
boton.textContent = "Click";
boton.addEventListener('click', upgradeFunction);

function upgradeFunction(){
	if(boton.textContent === "Click"){
		boton.textContent = "Already clicked!";
	} else if (boton.textContent === "Click"){
		boton.textContent = "Already clicked!";
	}
};
