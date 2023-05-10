const slides = document.querySelectorAll('.slide');
const btnR = document.querySelector('.slider--btn__right')
const btnL = document.querySelector('.slider--btn__left')
const maxSlide = slides.length;
let curSlide = 0;

toSlide(0)

btnR.addEventListener('click', nextSlide)
btnL.addEventListener('click', previousSlide)
document.addEventListener('keydown', (e) => {
    e.key === 'ArrowRight' && nextSlide(); //short-circuiting
    e.key === 'ArrowLeft' && previousSlide();

})

function nextSlide() {
    if (curSlide === maxSlide -1) {
        curSlide = 0;
    } else {
        curSlide++;
    }
    toSlide(curSlide)
}

function previousSlide() {
    if (curSlide === 0) {
        curSlide = maxSlide - 1;
    } else {
        curSlide--;
    }
    toSlide(curSlide)

}

function toSlide(curSlide) {    
    slides.forEach((s, i) => {
        s.style.transform = `translateX(${100 * (i - curSlide)}%)`
    })   
}