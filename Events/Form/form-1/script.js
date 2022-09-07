const form = document.querySelector('form')
const fName = document.getElementById('fName')
const lName = document.getElementById('lName')
const para = document.querySelector('p')

form.addEventListener('submit', e => {
	if(fName.value === '' || lName.value === '') {
		e.preventDefault()
		para.textContent = "Faltan datos";
	} else {
		e.preventDefault()
		para.textContent = "Datos enviados correctamente"
		para.style.fontSize = "15px"
	}
})