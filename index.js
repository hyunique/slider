const createSlider = function() {

    const slides = document.querySelectorAll('.slide');
    const btnR = document.querySelector('.slider--btn__right')
    const btnL = document.querySelector('.slider--btn__left')
    const dotContainer = document.querySelector('.dotContainer')
    const maxSlide = slides.length;
    let curSlide = 0;

    const init = function () {
        toSlide(0);
        createDots();
        activateDot(0)
    }();


    //---- Event Handler ----//
    btnR.addEventListener('click', nextSlide)
    btnL.addEventListener('click', previousSlide)
    document.addEventListener('keydown', (e) => {
        e.key === 'ArrowRight' && nextSlide(); //short-circuiting
        e.key === 'ArrowLeft' && previousSlide();
    })
    dotContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('dots_dot')) {
            const slide = e.target.dataset.slide;
            toSlide(slide);
        }
    })


    //---- Functions ----//
    function nextSlide() {
        if (curSlide === maxSlide - 1) {
            curSlide = 0;
        } else {
            curSlide++;
        }
        toSlide(curSlide)
        activateDot(curSlide)
    }

    function previousSlide() {
        if (curSlide === 0) {
            curSlide = maxSlide - 1;
        } else {
            curSlide--;
        }
        toSlide(curSlide)
        activateDot(curSlide)
    }

    function toSlide(curSlide) {
        slides.forEach((s, i) => {
            s.style.transform = `translateX(${100 * (i - curSlide)}%)`
        })
    }

    function createDots() {
        slides.forEach(function (_, i) {
            dotContainer.insertAdjacentHTML('beforeend', `
        <button class="dots_dot" data-slide="${i}"></button`)
        })
    }


    function activateDot(slide) {
        document.querySelectorAll('.dots_dot')
            .forEach(dot => dot.classList.remove('active'));
        document.querySelector(`.dots_dot[data-slide='${slide}']`)
            .classList.add('active')
    }

};


createSlider()