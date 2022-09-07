const div = document.querySelector('div')
const input = document.querySelector('input')

input.addEventListener('keydown', event => div.textContent = `La tecla que apretaste fue "${event.key}"`)