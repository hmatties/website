const tracks = document.querySelectorAll('.carousel-track');
// const track2 = document.querySelector('.carousel-track-2');
// const track3 = document.querySelector('.carousel-track-3');

// const slides = Array.from(track.children);
// const slides2 = Array.from(track2.children);
// const slides3 = Array.from(track3.children);

const nextButtons = document.querySelectorAll('.carousel-button--right');
const prevButtons = document.querySelectorAll('.carousel-button--left');
const navs = document.querySelectorAll('.carousel-nav');
// const dots = Array.from(navs.children);



console.log(navs);

let currentSlides = [0, 0, 0];

// const slideSize = slides[0].getBoundingClientRect();
// const slideWidth = slideSize.width;

// const slideSize2 = slides2[0].getBoundingClientRect();
// const slideWidth2 = slideSize2.width;

// const slideSize3 = slides3[0].getBoundingClientRect();
// const slideWidth3 = slideSize3.width;




// console.log(slides);
// console.log(slides2);
// console.log(slides3);

//arrange slides next to one another

const setSlidePosition = (slide, index, width) => {
    slide.style.left = width * index + 'px';
}

// const setSlidePosition2 = (slide, index) => {
//     slide.style.left = slideWidth2 * index + 'px';
// }

// const setSlidePosition3 = (slide, index) => {
//     slide.style.left = slideWidth3 * index + 'px';
// }



// slides.forEach(setSlidePosition);
// slides2.forEach(setSlidePosition);
// slides3.forEach(setSlidePosition);

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

// hideShow.forEach( (button, i) => {

//     const prevButton = prevButtons[i];
//     const nextButton = nextButtons[i];
//     const slides = Array.from(track.children);

// })



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

    console.log(dots);
    

    button.addEventListener('click', e => {

        // const currentSlide = track.querySelector('.current-slide');
        // const nextSlide = currentSlide.nextElementSibling;
        // const currentDot = nav.querySelectorAll('.current-slide');
        // const nextDot = currentDot[i].nextElementSibling;
        // const nextIndex = slides.findIndex(slide => slide === nextSlide);
        const currentSlideIndex = currentSlides[i];
        const currentSlide = slides[currentSlideIndex];
        const nextSlide = currentSlide.nextElementSibling;

        const currentDotIndex = dots[i];
        const currentDot = nav[currentDotIndex];
        // const nextDot = currentDot.nextElementSibling;

        console.log(currentDot);
        // console.log(nextDot);

        currentSlides[i]++;


        nextIndex = (currentSlideIndex + 1) % slides.length;
    
        //move to the next slide
    
        moveToSlide(track, currentSlide, nextSlide);
        // updateDots(currentDot, nextDot);
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

    button.addEventListener('click', e  => {

        const currentSlideIndex = currentSlides[i];
        const currentSlide = slides[currentSlideIndex];

        const prevSlide = currentSlide.previousElementSibling;
        currentSlides[i]--;

        prevIndex = (currentSlideIndex - 1) % slides.length;
        
        moveToSlide(track, currentSlide, prevSlide);
        hideShow(slides, prevButton, nextButton, prevIndex);

    })

})



//nextButton.addEventListener('click', e => {

    // const currentSlide = track.querySelector('.current-slide');
    // const nextSlide = currentSlide.nextElementSibling;
    // const currentDot = nav.querySelector('.current-slide');
    // const nextDot = currentDot.nextElementSibling;
    // const nextIndex = slides.findIndex(slide => slide === nextSlide);


    //move to the next slide

    // moveToSlide(track, currentSlide, nextSlide);
    // updateDots(currentDot, nextDot);


// });


//when i click left, move slides to the left 

// prevButton.addEventListener('click', e => {
//     const currentSlide = track.querySelector('.current-slide');
//     const prevSlide = currentSlide.previousElementSibling;
//     const currentDot = nav.querySelector('.current-slide');
//     const prevDot = currentDot.previousElementSibling;
//     const prevIndex = slides.findIndex(slide => slide === prevSlide);


//     moveToSlide(track, currentSlide, prevSlide);
//     updateDots(currentDot, prevDot);
//     hideShow(slides, prevButton, nextButton, prevIndex);

// });


// //indicator functions 

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


