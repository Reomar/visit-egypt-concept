const carouselSlide = document.querySelector('.carousel-slider');
const carouselImg = document.querySelectorAll('.carousel-img');
const slide = document.querySelectorAll('.slide');
// Buttons
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');


// Counter to track carousel postion
let counter = 1;

// Get the width of our img
let size = carouselImg[0].clientWidth;

// Hide the #lastclone img to the left
carouselSlide.style.transform = `translateX(${-size * counter}px)`;

// Button Lestener
nextBtn.addEventListener('click', ()=>{
    if (counter >= carouselImg.length - 1) return ;
    size = carouselImg[counter].clientWidth;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out'
    counter++;
    carouselSlide.style.transform = `translateX(${-size * counter - 3 * counter}px)`;
})


prevBtn.addEventListener('click', ()=>{
    if (counter <= 0) return ;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out'
    counter--;
    carouselSlide.style.transform = `translateX(${-size * counter  - 3 * counter}px)`;
})

// Restart the slides when it reach the end
carouselSlide.addEventListener('transitionend', ()=>{
    if(slide[counter].id === "last-clone"){
        carouselSlide.style.transition = 'none'
        counter = carouselImg.length -  2
        carouselSlide.style.transform = `translateX(${-size * counter - 3 * counter}px)`
    }

    if(slide[counter].id === "first-clone"){
        carouselSlide.style.transition = 'none'
        counter = carouselImg.length -  counter
        carouselSlide.style.transform = `translateX(${-size * counter - 3 * counter}px)`
    }
})