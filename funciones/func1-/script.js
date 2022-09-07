
function message(msgText,msgType){
	let html = document.querySelector('html')
	html.style.marginLeft = "15px"

	let panel = document.createElement('div')
	panel.setAttribute('class','msgBox')
	html.appendChild(panel);

	let msg = document.createElement('p')
	msg.textContent = msgText
	panel.appendChild(msg)

	let button = document.createElement('button')
	button.textContent = 'x'
	panel.appendChild(button)

button.onclick = function(){
	message("La casilla de mensajes esta llena", "warning")
	message('Que onda bro - Mensaje','chat')
}
// let btn = document.querySelector('button');
// btn.onclick = message()
	
	if (msgType === 'warning') {
		msg.style.backgroundImage = 'url(ico/warning.png)';
		panel.style.backgroundColor = '#f20'
	} else if (msgType === 'chat') {
		msg.style.backgroundImage = 'url(ico/chat.png)';
		msg.style.backgroundColor = '#18e';
	} else {
		msg.style.paddingLeft = '20px'
	}

}

message()

