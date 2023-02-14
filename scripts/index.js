const header = document.querySelector('.header')
const navToggle = document.querySelector('.nav__toggle')
const navList = document.querySelector('.nav__links')

navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded')
    if (expanded == 'false') {
        navToggle.setAttribute('aria-expanded', 'true')
        header.setAttribute('data-expanded-before', 'true')
        navList.setAttribute('aria-expanded', 'true')
    } else {
        navToggle.setAttribute('aria-expanded', 'false')
        header.setAttribute('data-expanded-before', 'false')
        navList.setAttribute('aria-expanded', 'false')
    }
})

const arrowRight = document.querySelector('.arrow-right')
const arrowLeft = document.querySelector('.arrow-left')
const allImages = document.querySelectorAll('.image')

arrowRight.addEventListener('click', () => {
    showNextImage()
})
arrowLeft.addEventListener('click', () => {
    showPreviousImage()
})


const showNextImage = () => {
    const currentImage = document.querySelector('[data-hidden="false"]')
    const nextImage = currentImage.nextElementSibling
    if (nextImage != null) {
        allImages.forEach(image => {
            image.setAttribute('data-hidden', 'true')
        })
    } else {
        return
    }
    nextImage.setAttribute('data-hidden', 'false')
}

const showPreviousImage = () => {
    const currentImage = document.querySelector('[data-hidden="false"]')
    const previousImage = currentImage.previousElementSibling
    if (previousImage != null) {
        allImages.forEach(image => {
            image.setAttribute('data-hidden', 'true')
        }) 
    } else {
        return
    }
    previousImage.setAttribute('data-hidden', 'false')
}