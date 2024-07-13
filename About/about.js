const header = document.querySelector('header')

window.addEventListener('scroll', function () {
  header.classList.toggle('sticky', this.window.scrollY > 0)
})

let menu = document.querySelector('#menu-icon')
let navmenu = document.querySelector('.navmenu')



document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide')
  const prevButton = document.querySelector('.prev')
  const nextButton = document.querySelector('.next')
  let currentSlide = 0

  function showSlide (n) {
    slides[currentSlide].classList.remove('active')
    currentSlide = (n + slides.length) % slides.length
    slides[currentSlide].classList.add('active')
  }

  function nextSlide () {
    showSlide(currentSlide + 1)
  }

  function prevSlide () {
    showSlide(currentSlide - 1)
  }

  prevButton.addEventListener('click', prevSlide)
  nextButton.addEventListener('click', nextSlide)

  // Show the first slide initially
  showSlide(0)

  // Optional: Auto-slide every 5 seconds
  setInterval(nextSlide, 5000)
})

