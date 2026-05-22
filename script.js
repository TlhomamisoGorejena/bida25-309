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

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#feedback-form');
  const commentsBox = document.querySelector('#comments');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const comments = commentsBox.value.trim();

    if (comments === '') {
      alert('Please write your comment here...');
    } else {
      // remove old message if it exists
      const oldMsg = form.querySelector('p');
      if (oldMsg) oldMsg.remove();

      // create and show new message
      const msg = document.createElement('p');
      msg.textContent = 'Thank you for your feedback!';
      form.appendChild(msg);

      // clear the comment box
      commentsBox.value = '';
    }
  });
});