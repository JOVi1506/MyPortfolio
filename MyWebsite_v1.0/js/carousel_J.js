document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    let previousScroll = window.pageYOffset;

    // Set the first slide as active when the page loads
    slides[currentIndex].classList.add('active');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        const triggerHeight = window.innerHeight /2; // Trigger when scrolled past 1/2 of the window

        slides.forEach((slide, index) => {
            const rect = slide.getBoundingClientRect();
            if (rect.top < triggerHeight && rect.bottom > triggerHeight) {
                if (currentScroll > previousScroll) {
                    // Scrolling down
                    if (index > currentIndex) {
                        slides[currentIndex].classList.add('leave-left');
                        slides[currentIndex].classList.remove('active');
                        slide.classList.add('active');
                        slide.classList.remove('leave-left');
                        currentIndex = index;
                    }
                } else if (currentScroll < previousScroll) {
                    // Scrolling up
                    if (index < currentIndex) {
                        slides[currentIndex].classList.remove('active');
                        slides[currentIndex].classList.add('leave-left');
                        slide.classList.add('active');
                        slide.classList.remove('leave-left');
                        currentIndex = index;
                    }
                }
            }
        });

        previousScroll = currentScroll; // Update previous scroll position
    });
});


