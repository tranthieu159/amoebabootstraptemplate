const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let img_block = $$('.portfolio_details-img')
let line_item = $$('.portfolio_details-line-item')

let imgActive = $('.portfolio_details-img.portfolio_details-active')
let lineActive = $('.portfolio_details-line-item.portfolio_details-line-active')

// select line and  image

line_item.forEach((line, index) => {
    let img = img_block[index]

    line.onclick = function() {
        $('.portfolio_details-line-item.portfolio_details-line-active').classList.remove('portfolio_details-line-active')
        $('.portfolio_details-img.portfolio_details-active').classList.remove('portfolio_details-active')


        this.classList.add('portfolio_details-line-active')
        img.classList.add('portfolio_details-active')
    }
})

let i = 1

setInterval( () => {
    $('.portfolio_details-line-item.portfolio_details-line-active').classList.remove('portfolio_details-line-active')
    $('.portfolio_details-img.portfolio_details-active').classList.remove('portfolio_details-active')

    line_item[i].classList.add('portfolio_details-line-active');
    img_block[i].classList.add('portfolio_details-active');

    ++i;
    if( i >= img_block.length) {
        i = 0;
    }
}, 4000);