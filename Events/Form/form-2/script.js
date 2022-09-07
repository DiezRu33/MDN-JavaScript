const container = document.querySelector('div');
const para = document.getElementById('output')
const button = document.getElementById('button')

function handleClick(e){
	para.textContent += `Aprtetaste en el elemento ${e.currentTarget.tagName}. ; `
}


document.body.addEventListener('click',handleClick)
container.addEventListener('click', handleClick)
button.addEventListener('click', handleClick)