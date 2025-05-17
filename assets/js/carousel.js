// New Arrivals Carousel - Fixed Version
document.addEventListener('DOMContentLoaded', function() {
    // Select correct elements
    const showcaseContainer = document.querySelector('#new-arrivals .showcase-container');
    const prevBtn = document.querySelector('#new-arrivals .nav-arrow.prev');
    const nextBtn = document.querySelector('#new-arrivals .nav-arrow.next');
    const groups = document.querySelectorAll('#new-arrivals .group');
    
    // Check if elements exist
    if (!showcaseContainer || !prevBtn || !nextBtn || groups.length === 0) {
        console.error('Carousel elements not found');
        return;
    }
    
    // Log found elements for debugging for testing
    // console.log('Showcase container found:', showcaseContainer);
    // console.log('Previous button found:', prevBtn);
    // console.log('Next button found:', nextBtn);
    // console.log('Found', groups.length, 'product groups');
    
    // Variables
    let currentIndex = 0;
    let groupWidth = 0;
    let visibleGroups = 0;
    let maxIndex = 0;
    let containerWidth = 0;
    
    // Ensure necessary CSS styles are directly applied
    showcaseContainer.style.transform = 'translateX(0)';
    showcaseContainer.style.transition = 'transform 0.4s ease';
    showcaseContainer.style.display = 'flex';
    showcaseContainer.style.flexWrap = 'nowrap';
    
    // Set initial width to all groups
    groups.forEach(group => {
        group.style.flex = '0 0 auto';
    });
    
    // Calculate how many items are visible based on screen width
    function calculateVisibleItems() {
        containerWidth = showcaseContainer.parentElement.clientWidth - 80; // Account for margins
        const firstGroup = groups[0];
        
        // Get computed style of first group to include margins, padding, etc.
        const style = window.getComputedStyle(firstGroup);
        const marginRight = parseInt(style.marginRight) || 0;
        const marginLeft = parseInt(style.marginLeft) || 0;
        
        // Calculate full width including margins
        const fullWidth = firstGroup.offsetWidth + marginRight + marginLeft + 20; // Add gap
        groupWidth = fullWidth;
        
        // console.log('Group width calculated as:', groupWidth, 'px');
        // console.log('Container width calculated as:', containerWidth, 'px');
        
        // Calculate how many groups can fit in the container
        visibleGroups = Math.floor(containerWidth / groupWidth);
        // Ensure at least one group is shown
        visibleGroups = Math.max(1, visibleGroups);
        
        // console.log('Visible groups calculated as:', visibleGroups);
        
        // Update the max index
        maxIndex = Math.max(0, groups.length - visibleGroups);
        
        // console.log('Maximum index calculated as:', maxIndex);
        
        // Reset position if current index is now invalid
        if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
            updateCarouselPosition();
        }
    }
    
    // Update carousel position
    function updateCarouselPosition() {
        const position = -currentIndex * groupWidth;
        // console.log('Moving carousel to position:', position, 'px (index:', currentIndex, ')');
        
        // Apply transform directly to the element
        showcaseContainer.style.transform = `translateX(${position}px)`;
        
        // Update button states
        updateButtonStates();
    }
    
    // Update button states (enabled/disabled)
    function updateButtonStates() {
        const atStart = currentIndex <= 0;
        const atEnd = currentIndex >= maxIndex;
        
        // console.log('Carousel position:', currentIndex === 0 ? 'at start' : 
        //                                   currentIndex === maxIndex ? 'at end' : 'middle');
        
        if (atStart) {
            prevBtn.classList.add('disabled');
        } else {
            prevBtn.classList.remove('disabled');
        }
        
        if (atEnd) {
            nextBtn.classList.add('disabled');
        } else {
            nextBtn.classList.remove('disabled');
        }
    }
    
    // Handle next button click
    function handleNextClick() {
        console.log('Next button clicked');
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarouselPosition();
        }
    }
    
    // Handle previous button click
    function handlePrevClick() {
        console.log('Previous button clicked');
        if (currentIndex > 0) {
            currentIndex--;
            updateCarouselPosition();
        }
    }
    
    // Add event listeners
    nextBtn.addEventListener('click', handleNextClick);
    prevBtn.addEventListener('click', handlePrevClick);
    
    // Add touch swipe functionality
    let touchStartX = 0;
    let touchEndX = 0;
    
    showcaseContainer.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    showcaseContainer.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50; // Minimum pixels to be considered a swipe
        
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left - go to next
            handleNextClick();
        }
        
        if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right - go to previous
            handlePrevClick();
        }
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        // Recalculate on resize
        calculateVisibleItems();
        updateCarouselPosition();
    });
    
    // Initialize the carousel
    calculateVisibleItems();
    updateButtonStates();
    
    console.log('Carousel initialization complete');
    
    // Expose methods for debugging
    window.carouselDebug = {
        next: handleNextClick,
        prev: handlePrevClick,
        getState: function() {
            return {
                currentIndex,
                maxIndex,
                visibleGroups,
                groupWidth,
                containerWidth
            };
        }
    };
});