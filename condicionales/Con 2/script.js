const select = document.querySelector('select')
const html = document.querySelector('html')
document.body.style.padding = "10px"

function update(background,text,font) {
	html.style.backgroundColor = background;
	html.style.color = text;
	html.style.fontFamily = font
}

select.onchange = function() {
	(select.value === 'black') ? update('black','white') : update('white','black')
}
