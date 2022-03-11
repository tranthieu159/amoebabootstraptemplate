let images = document.querySelectorAll('.portfolio_img')
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let close = document.querySelector('.close')
let gallery = document.querySelector('.gallery')
let galleryImg = document.querySelector('.gallery_inner img')
let portfolioLightboxs = document.querySelectorAll('.portfolio_lightbox')


let currentIndex = 0;

function galleryShow() {
    if(currentIndex == 0) {
        prev.classList.add('hide')
    } else {
        prev.classList.remove('hide')
    }

    if(currentIndex == images.length -1) {
        next.classList.add('hide')
    } else {
        next.classList.remove('hide')

    }

    // display
    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show')
}

portfolioLightboxs.forEach((item, index) => {
    item.addEventListener('click', function(e) {
        e.preventDefault()
        currentIndex = index
        galleryShow()
        return false;
    })
})

close.addEventListener('click', function() {
    gallery.classList.remove('show')
})

prev.addEventListener('click', function() {
    if(currentIndex > 0) {
        currentIndex--
        galleryShow()
    }
})

next.addEventListener('click', function() {
    if(currentIndex < images.length -1) {
        currentIndex++
        galleryShow()
    }
})


