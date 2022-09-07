const intentos = document.querySelector(".guesses")
const ultResult = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
let randomNum = Math.floor(Math.random() * 100) + 1;

const guessSubmit = document.querySelector(".guessSubmit")
const guessField = document.querySelector(".guessField")
const contador = document.querySelector(".guessCount");
let guessCount = 1

let resetButton;

function checkGuess() {
	let userGuess = Number(guessField.value)
	if (guessCount === 1) {
		intentos.textContent = 'Intentos anteriores: '
	}	

	if (userGuess === randomNum) {
		ultResult.textContent = "!Felicidades, adivinaste el número!";
		ultResult.style.background = "#18e";
		ultResult.style.color = "#5f3";
		lowOrHi.textContent = ''
		contador.textContent = "Ya van: " + guessCount
		contador.style.backgroundColor = "#16e"
		contador.style.color = "#5f3"
		setGameOver()
	} else if (guessCount === 10) {
		ultResult.textContent = "!Que mal, perdiste!"
		ultResult.style.fontFamily = "Sans Seriff"
		ultResult.style.color = "#fff"
		ultResult.style.backgroundColor = "#000"
		contador.textContent = "Ya van: " + guessCount
		contador.style.backgroundColor = "#f5f"
		contador.style.color = "#fff"
		setGameOver()
	} else{
		ultResult.textContent = "¡El número es incorrecto!"
		ultResult.style.color = "red"
		ultResult.style.backgroundColor = "#000"
		contador.textContent = "Ya van: " + guessCount
		contador.style.backgroundColor = "#f55"
		contador.style.color = "#fff"
	} if (userGuess < randomNum) {
		lowOrHi.textContent = "El número es muy bajo";
	} else if (userGuess > randomNum) {
		lowOrHi.textContent = "El número es muy alto"
	}

	guessCount++;
	guessField.value = ''
	guessField.focus()
	intentos.textContent += userGuess + '; '
	guessCount.textContent = 'Tus intentos son ' + guessCount
}

	guessSubmit.addEventListener("click",checkGuess)

function resetGame(){
	guessCount = 1
	//probrar el valor de i si es mayor al length de resetParas//
const resetParas = document.querySelectorAll(".resultParas p");
	for (let i = 0; i < resetParas.length; i++){
		resetParas[i].textContent = '';
	}

	resetButton.parentNode.removeChild(resetButton);

	guessField.disable = "false"
	guessSubmit.disable = "false"
	guessField.value = ' '
	guessField.focus();
	ultResult.textContent = ' '
	contador.textContent = ' '
	ultResult.style.backgroundColor = "transparent"
	intentos.textContent = ' '

	randomNumber = Math.floor(Math.random() * 100) + 1
}

function setGameOver() {
	guessField.disable = "true";
	guessSubmit.disable = "true";	
	resetButton = document.createElement("button");
	resetButton.textContent = 'Iniciar nuevo juego';
	document.body.append(resetButton)
	resetButton.addEventListener("click",resetGame);
	resetButton.style.backgroundColor = "#fff"
}