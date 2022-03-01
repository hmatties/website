const tracks = document.querySelectorAll('.carousel-track');

const nextButtons = document.querySelectorAll('.carousel-button--right');
const prevButtons = document.querySelectorAll('.carousel-button--left');
const navs = document.querySelectorAll('.carousel-nav');
// const dots = Array.from(navs.children);

// console.log(dots);

let currentSlides = [0, 0, 0, 0];
let currentDots = [0, 0, 0, 0];


//arrange slides next to one another

const setSlidePosition = (slide, index, width) => {
    slide.style.left = width * index + 'px';
}


tracks.forEach(track => {
    
    const slides = Array.from(track.children);
    const slideWidth = slides[0].getBoundingClientRect().width;
    slides.forEach((slide, i) => {
        setSlidePosition(slides[i], i, slideWidth);
    })
    
})






//functions (reusable)

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShow = (slides, prevButton, nextButton, targetIndex) => {
    if(targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}



//next button arrays

nextButtons.forEach( (button, i) => {

    const track = tracks[i];
    const slides = Array.from(track.children);

    const slideSize = slides[0].getBoundingClientRect();
    const slideWidth = slideSize.width;

    const prevButton = prevButtons[i];
    const nextButton = nextButtons[i];

    const nav = navs[i];
    const dots = Array.from(nav.children);


    button.addEventListener('click', e => {

        const currentSlideIndex = currentSlides[i];
        const currentSlide = slides[currentSlideIndex];
        const nextSlide = currentSlide.nextElementSibling;

        const currentDotIndex = currentDots[i];
        const currentDot = dots[currentDotIndex];

        const nextDot = currentDot.nextElementSibling;


        currentSlides[i]++;
        currentDots[i]++;


        nextIndex = (currentSlideIndex + 1) % slides.length;
    
        //move to the next slide
    
        moveToSlide(track, currentSlide, nextSlide);
        updateDots(currentDot, nextDot);
        hideShow(slides, prevButton, nextButton, nextIndex);
    
    });

})



//when i click right, move slides to the right

prevButtons.forEach( (button, i) => {

    const track = tracks[i];
    const slides = Array.from(track.children);
    const slideSize = slides[0].getBoundingClientRect();
    const slideWidth = slideSize.width;

    const prevButton = prevButtons[i];
    const nextButton = nextButtons[i];

    const nav = navs[i];
    const dots = Array.from(nav.children);

    button.addEventListener('click', e  => {

        const currentSlideIndex = currentSlides[i];
        const currentSlide = slides[currentSlideIndex];

        const prevSlide = currentSlide.previousElementSibling;

        const currentDotIndex = currentDots[i];
        const currentDot = dots[currentDotIndex];

        const prevDot = currentDot.previousElementSibling;


        currentSlides[i]--;
        currentDots[i]--;


        prevIndex = (currentSlideIndex - 1) % slides.length;
        
        moveToSlide(track, currentSlide, prevSlide);
        updateDots(currentDot, prevDot);
        hideShow(slides, prevButton, nextButton, prevIndex);

    })

})






//indicator functions 








// nav.addEventListener('click', e => {

//     //what indicator was pressed
//     const targetDot = e.target.closest('button');

//     if (!targetDot) return;

//     const currentSlide = track.querySelector('.current-slide');
//     const currentDot = nav.querySelector('.current-slide');
//     const targetIndex = dots.findIndex(dot => dot === targetDot);
//     const targetSlide = slides[targetIndex];

//     moveToSlide(track, currentSlide, targetSlide);
//     updateDots(currentDot, targetDot);
//     hideShow(slides, prevButton, nextButton, targetIndex);

// })


