const buttonMinus = document.querySelector('.button__delete')
const buttonPlus = document.querySelector('.button__add')

const counter = document.querySelector('.counter')
let counterInnerValue = 0
counter.innerHTML = `${counterInnerValue}`


buttonMinus.addEventListener('click', () => {
    if (counterInnerValue == 0) {
        return
    }
    counterInnerValue = counterInnerValue - 1
    localStorage.setItem('numb', `${counterInnerValue}`)
    counter.innerHTML = localStorage.getItem('numb')
})
buttonPlus.addEventListener('click', () => {
    counterInnerValue += 1
    localStorage.setItem('numb', `${counterInnerValue}`)
    counter.innerHTML = localStorage.getItem('numb')
})

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

const cartButton = document.querySelector('.nav__cart-button')
const orderContainer = document.querySelector('.order-container')

cartButton.addEventListener('click', () => {
    const visibility = orderContainer.getAttribute('data-shown')
    if (visibility == 'false') {
        orderContainer.setAttribute('data-shown', 'true')
        localStorage.setItem('visibility', `${visibility}`)
    } else {
        orderContainer.setAttribute('data-shown', 'false')
        localStorage.setItem('visibility', `${visibility}`)
    }
})

const visibility = localStorage.getItem('visibility')
if (visibility == 'false') {
    orderContainer.setAttribute('data-shown', 'true')
}

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

const mainParent = document.querySelector('.order-container__order')
const toggleParagraph = document.getElementById('toggleParagraph')

const addToCart = document.getElementById('add-to-cart')
addToCart.addEventListener('click', () => {
    const cartPreview = document.querySelector('.cart-preview')
    if (counterInnerValue == 0 || mainParent.contains(cartPreview))  {
        return
    }
    mainParent.removeChild(toggleParagraph)
    appendPreview()
})

const appendPreview = () => {
    const cartPreview = document.createElement('div')
    cartPreview.classList.add('cart-preview', 'flex-align-center')

        const cartPreviewImage = document.createElement('div')
        cartPreviewImage.classList.add('cart-preview__image')

            const cartPreviewImageChild = document.createElement('img')
            cartPreviewImageChild.setAttribute('src', './images/image-product-1-thumbnail.jpg')

        cartPreviewImage.appendChild(cartPreviewImageChild)

        const pricingInformation = document.createElement('div')
        pricingInformation.classList.add('cart-preview__pricing-information')

            const titleParagraph = document.createElement('p')
            titleParagraph.classList.add('paragraph')
            titleParagraph.innerText = 'Fall Limited Edition Sneakers'

            const functionalParagraph = document.createElement('p')
            functionalParagraph.classList.add('paragraph')
            const numberStorage = localStorage.getItem('numb')
            const expression = 125 * parseInt(numberStorage)
            functionalParagraph.innerText = `$125.00 x ${numberStorage} $${expression}`
        
        pricingInformation.appendChild(titleParagraph)
        pricingInformation.appendChild(functionalParagraph)
            
        const deleteButton = document.createElement('button')
        deleteButton.classList.add('cart-preview__delete-button')

    cartPreview.appendChild(cartPreviewImage)
    cartPreview.appendChild(pricingInformation)
    cartPreview.appendChild(deleteButton)

    const checkoutButton = document.createElement('button')
    checkoutButton.classList.add('add-to-cart__button', 'flex-align-center')
    checkoutButton.innerText = 'Checkout'

    mainParent.appendChild(cartPreview)
    mainParent.appendChild(checkoutButton)

    deleteButton.addEventListener('click', () => {
        mainParent.removeChild(cartPreview)
        mainParent.removeChild(checkoutButton)
        mainParent.appendChild(toggleParagraph)

        localStorage.removeItem('numb')
    })
}

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

const numb = localStorage.getItem('numb')
if (numb != null) {
    mainParent.removeChild(toggleParagraph)
    counter.innerHTML = numb
    appendPreview()
}
