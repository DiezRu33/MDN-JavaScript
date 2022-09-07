const input = document.querySelector('.numberInput');
const para = document.querySelector('p')
const boton = document.querySelector('button')

function squared(num) {
	return num * num;
}

function cubed(num) {
	return num * num * num;
}

function factorial(num) {
	var x = num;
	while (x > 1) {
		num *= x-1;
		x--;
	}

	return num;
}

input.onchange = function(){
	var num = input.value;
	if (isNaN(num)) {
		para.textContent = "No ingresaste ningún número wachin."
	} else {
		let mostrar =  `<b style='color:#18e;font-size:45px;background-color:#888'>El número: ${num} al cuadrado es: ${squared(num)}. </b></br> 
							 <b style='color:#f15;font-size:45px;background-color:#888'>El número: ${num} al cubo es: ${cubed(num)}. </b></br>
							 <b style='color:#5f5;font-size:45px;background-color:#888'>El número: ${num} factorizado es: ${factorial(num)}. </b></br>`	
	document.write(mostrar)
	}
}
