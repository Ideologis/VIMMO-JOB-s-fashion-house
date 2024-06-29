const header = document.querySelector('header')

window.addEventListener('scroll', function () {
  header.classList.toggle('sticky', this.window.scrollY > 0)
})

let menu = document.querySelector('#menu-icon')
let navmenu = document.querySelector('.navmenu')



const images = [
  '/assets/talking.png',
  '/assets/cat1.png', 
  '/assets/cat2.png',
  '/assets/cat3.png',
  '/assets/cat4.png',
  '/assets/cat5.png',
  '/assets/cat6.png',
]

let currentIndex = 0
const imageElement = document.getElementById('image')

function changeImage () {
 
  currentIndex = (currentIndex + 1) % images.length;

  imageElement.src = images[currentIndex]
}

setInterval(changeImage, 2000)
