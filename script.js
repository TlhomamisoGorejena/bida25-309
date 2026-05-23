//
// SLIDESHOW
//
const slides = document.querySelectorAll('.hero-slideshow .slides img');

if (slides.length > 0) {
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(function(slide) {
            slide.style.display = 'none';
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

    showSlide(currentSlide);
    setInterval(nextSlide, 4000);
    document.querySelector('.slide-btn.next').addEventListener('click', nextSlide);
    document.querySelector('.slide-btn.prev').addEventListener('click', prevSlide);
}


//
// FEEDBACK FORM VALIDATION
//

const form = document.querySelector('#feedback-form form');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const comments = document.querySelector('#comments').value.trim();
        const errorMsg = document.getElementById('error-msg');
        const successMsg = document.getElementById('success-msg');

        if (comments === '') {
            errorMsg.style.display = 'block';
            successMsg.style.display = 'none';
        } else {
            successMsg.style.display = 'block';
            errorMsg.style.display = 'none';
            document.querySelector('#comments').value = '';
        }
    });
}