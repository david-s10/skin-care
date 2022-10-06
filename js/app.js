"use strict"

const slider = document.querySelector(".reviews__items");
const sliderBtn = document.querySelector(".items-reviews__slider")
let offset = 0;


function next() {
    let width = document.querySelectorAll('.item-reviews__item');
        width.forEach(itemWidth => {
        
            console.log(itemWidth.offsetWidth);
        });
        offset = offset + 590;
        if(offset > 590 * (width.length - 2)) {
            offset = 0;
        }
        slider.style.left = -offset + 'px';
}


sliderBtn.addEventListener('click', next);




