// new Swipe(slider, {
//     speed: 600,
//     auto: 3000,
//     continuous: true
//   })

document.getElementById('submitBtn').addEventListener('click', function() {
    var bgImageUrl = document.getElementById('backgroundImageURL').value;
    var h1Text = document.getElementById('h1Text').value;
    var h2Text = document.getElementById('h2Text').value;
    var h3Text = document.getElementById('h3Text').value;

    var newDiv = document.createElement('div');
    newDiv.style.backgroundImage = 'url(' + bgImageUrl + ')';
    newDiv.innerHTML = '<h1>' + h1Text + '</h1>' +
                       '<h2>' + h2Text + '</h2>' +
                       '<h3>' + h3Text + '</h3>';

    var swipeWrap = document.querySelector('.swipe-wrap');
    swipeWrap.appendChild(newDiv);

    // Update active slide
    updateActiveSlide(newDiv);
});

function updateActiveSlide(newActiveSlide) {
    var slides = document.querySelectorAll('.swipe-wrap > div');
    slides.forEach(function(slide) {
        slide.classList.remove('active');
    });
    newActiveSlide.classList.add('active');
}

function nextSlide() {
    var slides = document.querySelectorAll('.swipe-wrap > div');
    var activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
    var nextIndex = (activeIndex + 1) % slides.length;

    slides[activeIndex].classList.remove('active');
    slides[nextIndex].classList.add('active');
}

setInterval(nextSlide, 3000); // Change slides every 3 seconds

new Swipe(slider, {
    speed: 600,
    auto: 3000,
    continuous: true
  })