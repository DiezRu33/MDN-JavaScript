const input = document.querySelector('input')
const boton = document.querySelector('button')
const parrafo = document.querySelector('p')

var i = 0;

while (i < cats.length) {
	if (i === cats.length - 1) {
		info += ' and ' + cats[i] + '. '
	} else {
		info += cats[i] `, `;
	}

	i++
}