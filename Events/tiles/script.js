function random(number){
	return Math.floor(Math.random()*number)
}

function bkgColor(){
	let background = `rgb(${random(255)}, ${random(255)}, ${random(255)})`
	return background;
}

const container = document.querySelector('#contenedor')

container.addEventListener('click', event => {
	event.target.style.backgroundColor = bkgColor()
// if we want to use the container instead off the event handled (event), we should use: event.currentTarget...
})