const header = document.querySelector('header')

window.addEventListener('scroll', function () {
  header.classList.toggle('sticky', this.window.scrollY > 0)
})

let menu = document.querySelector('#menu-icon')
let navmenu = document.querySelector('.navmenu')

document.addEventListener('DOMContentLoaded', function () {
  let lazyImages = document.querySelectorAll('.lazy-image')

  if ('IntersectionObserver' in window) {
    let lazyImageObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target
          lazyImage.src = lazyImage.dataset.src
          lazyImage.classList.remove('lazy-image')
          lazyImageObserver.unobserve(lazyImage)
        }
      })
    })

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage)
    })
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    lazyImages.forEach(function (lazyImage) {
      lazyImage.src = lazyImage.dataset.src
      lazyImage.classList.remove('lazy-image')
    })
  }
})
