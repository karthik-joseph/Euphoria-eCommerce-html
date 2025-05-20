 class FeedbackSlider {
    constructor() {
        this.slider = document.getElementById('feedbackSlider');
        this.cards = document.querySelectorAll('.feedback-card');
        this.dots = document.querySelectorAll('.dot');
        this.currentSlide = 0;
        this.isMobile = window.innerWidth <= 768;
        
        this.init();
    }

    init() {
        // Add click events to dots
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                if (this.isMobile) {
                    this.scrollToCard(index);
                } else {
                    this.goToSlide(index);
                }
            });
        });

        // Auto-play functionality (desktop only)
        if (!this.isMobile) {
            this.startAutoPlay();
        }

        // Handle mobile scroll detection
        if (this.isMobile) {
            this.handleMobileScroll();
        }

        // Handle window resize
        window.addEventListener('resize', () => {
            const wasMobile = this.isMobile;
            this.isMobile = window.innerWidth <= 768;
            
            if (wasMobile !== this.isMobile) {
                if (this.isMobile) {
                    this.stopAutoPlay();
                    this.handleMobileScroll();
                } else {
                    this.startAutoPlay();
                }
            }
        });

        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!this.isMobile) {
                if (e.key === 'ArrowLeft') {
                    this.prevSlide();
                } else if (e.key === 'ArrowRight') {
                    this.nextSlide();
                }
            }
        });
    }

    goToSlide(index) {
        this.currentSlide = index;
        this.updateSlider();
        this.updateDots();
        this.updateActiveCard();
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.cards.length;
        this.goToSlide(this.currentSlide);
    }

    prevSlide() {
        this.currentSlide = this.currentSlide === 0 ? this.cards.length - 1 : this.currentSlide - 1;
        this.goToSlide(this.currentSlide);
    }

    updateSlider() {
        if (!this.isMobile) {
            const translateX = -this.currentSlide * (100 / this.cards.length);
            this.slider.style.transform = `translateX(${translateX}%)`;
        }
    }

    updateDots() {
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }

    updateActiveCard() {
        this.cards.forEach((card, index) => {
            card.classList.toggle('active', index === this.currentSlide);
        });
    }

    startAutoPlay() {
        this.stopAutoPlay(); // Clear any existing interval
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 4000);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }

    handleMobileScroll() {
        const sliderWrapper = document.querySelector('.feedback-slider-wrapper');
        if (!sliderWrapper) return;

        let isScrolling = false;
        
        // Add smooth scroll behavior
        sliderWrapper.style.scrollBehavior = 'smooth';
        
        // Add scroll snap
        sliderWrapper.style.scrollSnapType = 'x mandatory';
        
        sliderWrapper.addEventListener('scroll', () => {
            if (!isScrolling) {
                requestAnimationFrame(() => {
                    this.updateActiveCardOnScroll();
                    isScrolling = false;
                });
                isScrolling = true;
            }
        });

        // Add touch handling for better mobile experience
        let startX = 0;
        let scrollStart = 0;
        
        sliderWrapper.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            scrollStart = sliderWrapper.scrollLeft;
        });

        sliderWrapper.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const currentX = e.touches[0].clientX;
            const diff = startX - currentX;
            sliderWrapper.scrollLeft = scrollStart + diff;
        });

        // Add dot navigation for mobile
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.scrollToCard(index);
            });
        });
    }

    scrollToCard(index) {
        const sliderWrapper = document.querySelector('.feedback-slider-wrapper');
        const cardWidth = 280; // card width
        const gap = 16; // gap between cards
        const padding = 20; // padding on sides
        const scrollPosition = (cardWidth + gap) * index + padding - (sliderWrapper.offsetWidth - cardWidth) / 2;
        
        sliderWrapper.scrollTo({
            left: Math.max(0, scrollPosition),
            behavior: 'smooth'
        });
        
        this.currentSlide = index;
        this.updateActiveCard();
        this.updateDots();
    }

    updateActiveCardOnScroll() {
        const sliderWrapper = document.querySelector('.feedback-slider-wrapper');
        const scrollLeft = sliderWrapper.scrollLeft;
        const cardWidth = 280; // card width
        const gap = 16; // gap between cards
        const padding = 20; // padding
        
        // Calculate which card is most centered in the viewport
        const viewportCenter = scrollLeft + sliderWrapper.offsetWidth / 2;
        const firstCardCenter = padding + cardWidth / 2;
        const activeIndex = Math.round((viewportCenter - firstCardCenter) / (cardWidth + gap));
        
        const clampedIndex = Math.max(0, Math.min(activeIndex, this.cards.length - 1));
        
        if (clampedIndex !== this.currentSlide) {
            this.currentSlide = clampedIndex;
            this.updateActiveCard();
            this.updateDots();
        }
    }
}

// Initialize the slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FeedbackSlider();
});

// Add hover pause functionality for desktop
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.feedback-container');
    const slider = new FeedbackSlider();
    
    container.addEventListener('mouseenter', () => {
        if (!slider.isMobile) {
            slider.stopAutoPlay();
        }
    });
    
    container.addEventListener('mouseleave', () => {
        if (!slider.isMobile) {
            slider.startAutoPlay();
        }
    });
});