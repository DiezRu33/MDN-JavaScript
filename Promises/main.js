const name = document.querySelector('#name')
const delay = document.querySelector('#delay')
const button = document.querySelector('#setAlarm')
const output = document.querySelector('#output')

function alarm(person, delay) {
	return new Promise((res, rej) => {
		if(delay < 0) {
			throw new Error("No puede ser menor que 0")
		}
		window.setTimeout(() => {
			res(`Despierta ${person}`)
		}, delay)
	})
}

button.addEventListener('click', async () => {
	try {
		const message = await alarm(name.value, delay.value)
		output.textContent = message
	}
	catch(error){
		output.textContent = `No puede establecerse ${error}`
	}
})