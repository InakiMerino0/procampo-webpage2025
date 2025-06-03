document.addEventListener('DOMContentLoaded', function() {
    const sliderTrack = document.querySelector('.slider-track');
    if (!sliderTrack) return;

    // Clone the slides for infinite scrolling
    const slides = Array.from(sliderTrack.children);
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        sliderTrack.appendChild(clone);
    });
}); 