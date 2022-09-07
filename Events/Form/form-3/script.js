const button = document.querySelector('button')
const videoPlay = document.querySelector('div')
const html = document.querySelector('html')
const para = document.querySelector('p')
const hiddenBtn = document.querySelector('.hiddenBtn')

videoPlay.style.visibility = "hidden"


function displayAttributes(){
	if (videoPlay.getAttribute('class') === 'hidden') {
		videoPlay.setAttribute('class','showing')
		videoPlay.style.visibility = "initial"
	}
}

button.addEventListener('click',(displayAttributes)=>{
	if (videoPlay.getAttribute('class','hidden')) {
		videoPlay.setAttribute('class','showing')
		videoPlay.style.visibility  = "initial"
	}
})



function hiddenFunction(){
	if (videoPlay.getAttribute('class') === 'showing') {
		videoPlay.setAttribute('class','hidden')
		videoPlay.style.visibility = "hidden"
	}
}

button.addEventListener('click',displayAttributes)

button.onclick = function(){
	if(videoPlay.getAttribute('class') === 'hidden'){
		videoPlay.setAttribute('class','showing')
		videoPlay.style.visibility = "initial"
	}
}


hiddenBtn.onclick = function(){
	if(videoPlay.getAttribute('class','showing')){
		videoPlay.setAttribute('class','hidden')
		videoPlay.style.visibility = "hidden"
	}
}


html.addEventListener('click', (hiddenFunction)=>{
	if (videoPlay.getAttribute('class') === 'hidden') {
		videoPlay.setAttribute('class','showing')
		videoPlay.style.visibility = "hidden"
	} else if(videoPlay.getAttribute('class') == 'showing'){
		videoPlay.setAttribute('class','hidden')
		videoPlay.style.visibility = "initial"
	}
})


videoPlay.addEventListener('click', () => {
	if (videoPlay.getAttribute('class', 'showing')) {
		videoPlay.setAttribute('class','hidden')
	}
})
const video = document.querySelector('video')

video.addEventListener('click', () => video.play());