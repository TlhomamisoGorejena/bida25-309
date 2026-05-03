//
// SLIDESHOW
//
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slideshow .slides img');

function showSlide(index) {
    slides.forEach(function(slide) {
        slide.style.display ='none';
    });
    slides[index].style.display = 'block';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

//show first slide when page loads
showSlide(currentSlide);

// Automatically change slides every 4 seconds
setInterval(nextSlide, 4000);

//button controls
document.querySelector('.slide-btn.next').addEventListener('click', nextSlide);
document.querySelector('.slide-btn.prev').addEventListener('click', prevSlide);


//
// FEEDBACK FORM VALIDATION
//

document.querySelector('#feedback-form form').addEventListener('submit',function(e) {
    e.preventDefault();

    const comments = document.querySelector('#comments').value.trim();

    if (comments === '') {
        alert('Please write your comments before submitting.');
    } else {
        alert('Thank you for your feedback!');
        document.querySelector('#comments').value='';
    }
});