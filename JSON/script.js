const header = document.querySelector('header');
const section = document.querySelector('section');

async function populate(){
	const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'
	const request = new Request(requestURL);

	const response = await fetch(request);
	const superHeroes = await response.json()

	populateHeader(superHeroes);
	populateHeroes(superHeroes)
}

function populateHeader(obj){
	const header = document.querySelector('header');
	const myH1 = document.createElement('h1');
	myH1.textContent = obj.squadName;
	header.appendChild(myH1);

	const para = document.createElement('p');
	para.textContent = `Ciudad: ${obj.homeTown} // Formed: ${obj.formed}`;
	header.appendChild(para)
}

function populateHeroes(obj){
	const section = document.querySelector('section');
	const heroes = obj.members;

	for (const hero of heroes){
		const myArtycle = document.createElement('article');
		const myH2 = document.createElement('h2');
		const para1 = document.createElement('p');
		const para2 = document.createElement('p');
		const para3 = document.createElement('p');
		const myList = document.createElement('ul')

		myH2.textContent = hero.name;
		para1.textContent = `Identidad secreta: ${hero.secretIdentity}`;
		para2.textContent = `Edad: ${hero.age}`;
		para3.textContent = 'Superpoderes: '

		const superPoderes = hero.powers;
		for (const power of superPoderes){
			const listItem = document.createElement('li');
			listItem.textContent = power;
			myList.appendChild(listItem);
		}

		myArtycle.appendChild(myH2);
		myArtycle.appendChild(para1);
		myArtycle.appendChild(para2);
		myArtycle.appendChild(para3);
		myArtycle.appendChild(myList);

		section.appendChild(myArtycle)
	}
}

populate()