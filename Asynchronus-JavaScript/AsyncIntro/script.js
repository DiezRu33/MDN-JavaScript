const log = document.querySelector('.event-log');

document.querySelector('#xhr').addEventListener('click', () => {
	log.textContent = '';

	const xhr = new XMLHttpRequest();

	xhr.addEventListener('loadend', () => {
		log.textContent = `${log.textContent} terminó con el estatus: ${xhr.status}`;
	})

	xhr.open('GET','https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json');
	xhr.send();
	log.textContent = `${log.textContent}Empezó la tarea XHR`});

document.querySelector('#reload').addEventListener('click', () => {
	log.textContent = '';
	document.location.reload();
})