"use strict"
const input = document.getElementById('item');
const boton = document.querySelector('button');
const lista = document.querySelector('ul');


function compra(){
	
	boton.addEventListener('click',()=>{
		const buyItem = input.value;
		input.value = ""
		
		const buyList = document.createElement('li');
		const buySpan = document.createElement('span');
		const buyButton = document.createElement('button')
		
		buyList.appendChild(buySpan);
		buyList.appendChild(buyButton);
		buyButton.textContent = "Delete";
		buySpan.textContent = buyItem;
		lista.appendChild(buyList);
		buyButton.addEventListener('click',()=>{
			buyList.remove(buyItem)
		})

		item.focus()	
	})
}

compra()