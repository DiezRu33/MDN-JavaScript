
let select = document.querySelector('select')
let parrafo = document.querySelector('p')  
let input1 = document.querySelector('calculadora')
let input2 = document.querySelector('calculadora2')

let boton = document.querySelector('button')
let span = document.querySelector('span')



// let operacion.addEventListener('click',function(e){
// 	while (select === boton){
// 		if (input1 === 'suma' && input2 === 'suma'){
// 			parrafo.textContent = `El resultado es ${operacion}`
// 		break;
// 	} else {
// 		parrafo.textContent = "La calculadora no funcionó"
// 	}   
// 	} 
// })

// boton.addEventListener('click',function(){
// 	let span = select.value
select.addEventListener('click',function(){
	let seleccion = select.info
	operacion = Number(input1)
	operacion2 = Number(input2)
	if (seleccion === 'sumar') {
		parrafo.textContent = operacion + operacion2
	}
})


// 	if (span === 'sumar' || span === 'restar' || span === 'dividir' || span === 'multiplicar');
// 	let 
// 	parrafo.textContent = 


// })


// let function(num1,num2){
// 	let suma = num1 + num2
// 	return;
// }

// let functionX(num1,num2){

// }