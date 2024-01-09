const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
]

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img')
const bannerParagraph = document.querySelector('#banner p')
const dots = document.querySelector('.dots')
const dotButtons = []
let currentSlide = 0;

function changeSlide(){
	const currentImg = slides[currentSlide]['image']
	const currentParagraph = slides[currentSlide]['tagLine']

	//bannerImg.setAttribute('src', './assets/images/slideshow/' + currentImg)
	bannerImg.setAttribute('src', `./assets/images/slideshow/${currentImg}`)
	bannerParagraph.innerHTML = currentParagraph

	dotButtons.forEach((dot, index) => {
		dot.classList.remove('dot_selected')
		if(index === currentSlide){
			dot.classList.add('dot_selected')
		}
	})
}

arrowLeft.addEventListener('click', function(){
	// Enlever 1 à currentSlide
	if(currentSlide === 0){
		currentSlide = slides.length - 1
	} else {
		currentSlide -= 1
	}

	changeSlide()
})


arrowRight.addEventListener('click', function(){
	// Ajouter 1 à currentSlide
	if(currentSlide === slides.length - 1){
		currentSlide = 0
	} else {
		currentSlide += 1		
	}

	changeSlide()
})

slides.forEach((slide, index) => {
	const dot = document.createElement('button')
	dot.classList.add('dot')	

	dot.addEventListener('click', () => {
		currentSlide = index
		changeSlide()
	})

	dots.appendChild(dot)
	dotButtons.push(dot)
})

changeSlide()