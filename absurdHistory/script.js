const randomize = document.querySelector(".button")
const storyText = document.querySelector(".story") 
const custoname = document.getElementById('custoname')

function randomValueFromArray(array){
	const random = Math.floor(Math.random()*array.length);
	return array[random]
}

let story = storyText
story.textContent = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

randomNum = Math.floor(Math.random()* 33) + 1

let insertX = [ 'Willy the Goblin',
				'Big Daddy',
				'Father Christmas']

let insertY = ['the soup kitchen',
				'Disneyland',
				'the White House']

let insertZ = ['spontaneously combusted',
				'melted into a puddle on the sidewalk',
				'turned into a slug and crawled away']

let weight = 22

if (weight >= randomNum) {
	weight = "cold day" 
} else {
	weight = "hot day"
}

randomize.onclick = function() {
	storyText.textContent = "It was " + randomNum + " º outside, so " + randomValueFromArray(insertX) + " went for a walk. When they got to " + randomValueFromArray(insertY) + ", they stared in horror for a few moments, then " + randomValueFromArray(insertZ) + ", " + custoname.value + " saw the whole thing, but was not surprised — " + randomValueFromArray(insertX) + " weighs 300 pounds, and it was a " + weight;
	storyText.style.visibility = "initial";
}

randomize.addEventListener("click", result())

function result() {

  if(custoname.value !== '') {
    const name = custoname.value;
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.floor(Math.round()* 2.2046) + 1;
    const temperature =  Math.floor(Math.round()* 9/5) + 32;
    const peso = weight.value;
    const temperatura = temperature.value;
  }

 // Pounds(libra) a stone = 300:21,4
 // Fahrenheit a °C = 94:34,4
 xItem = randomValueFromArray(insertX);
 yItem = randomValueFromArray(insertY);
 zItem = randomValueFromArray(insertZ);
 
  story.textContent = story;
  story.style.visibility = 'visible';

  let newStoryText = "It was 94 fahrenheit outside, so " + xItem + " went for a walk. When they got to " + yItem[0] +", they stared in horror for a few moments, then " + zItem + ". Bob saw the whole thing, but was not surprised —" + xItem + " weighs 21,4 stones, and it was a hot day.";

}