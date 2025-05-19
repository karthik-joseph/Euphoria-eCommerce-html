 document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.sections');
    const menuCloseBtn = document.querySelector('.menu-close-btn');
    const sectionLink = document.querySelectorAll('.sections .section-link');
    const headerRight = document.querySelector('.header-styles .right');

    // Add event listeners to each section link 
    sectionLink.forEach(function(link) {
        link.addEventListener('click', function() {
                // Remove 'active' class from all links
                sectionLink.forEach(function(link) {
                        link.classList.remove('active');
                    }
                );
                // Add 'active' class to the clicked link
                this.classList.add('active');
            }
        );
    });
    
    // Create overlay element for closing the menu when clicking outside
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);
    
    // Function to open the mobile menu
    function openMobileMenu() {
        hamburger.classList.add('open');
        mobileNav.classList.add('active');
        overlay.classList.add('active');
        headerRight.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    }
    
    // Function to close the mobile menu
    function closeMobileMenu() {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        headerRight.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    }
    
    // Toggle menu when hamburger is clicked
    hamburger.addEventListener('click', function() {
        if (mobileNav.classList.contains('active')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });
    
    // Close menu when close button is clicked
    menuCloseBtn.addEventListener('click', closeMobileMenu);
    
    // Close menu when clicking outside
    overlay.addEventListener('click', closeMobileMenu);
    
    // Close menu when clicking on a menu link
    const menuLinks = mobileNav.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Close menu when ESC key is pressed
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Apply the saved theme or preferred color scheme
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Toggle theme when the button is clicked
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 480 && mobileNav.classList.contains('active')) {
            closeMobileMenu();
        }
    });


    // Smooth scrolling for anchor links
    const smoothScrollLinks = document.querySelectorAll('.section-link');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });


    // popup message for components when clicking using data-info attribute
    const infoButtons = document.querySelectorAll('[data-info]');
    infoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const message = this.getAttribute('data-info');
            alert(message);
        });
    });


     // Get all category containers
    const categoryContainers = document.querySelectorAll('.category-container');
    
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is in the viewport
            if (entry.isIntersecting) {
                // Add the animation class
                entry.target.classList.add('animate');
                // Stop observing the element after it's animated
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, // viewport
        threshold: 0.1, // 10% of the item visible
        rootMargin: '0px 0px -50px 0px' // trigger a bit before the element enters the viewport
    });
    
    // Start observing each category container
    categoryContainers.forEach(container => {
        observer.observe(container);
    });
    
    // Fallback for browsers that don't support Intersection Observer
    if (!('IntersectionObserver' in window)) {
        categoryContainers.forEach((container, index) => {
            setTimeout(() => {
                container.classList.add('animate');
            }, 100 * index); // Staggered timing based on index
        });
    }

    // scroll animation for the sections
    const scrollAnimation = document.querySelectorAll('.scroll-animation');


    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }

    // Function to add the 'active' class to elements in the viewport
    function handleScrollAnimation() {
        scrollAnimation.forEach(function(el) {
            if (isElementInViewport(el)) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        });
    }


    // Initial check for scroll animation
    handleScrollAnimation();
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);

    // Trigger once on load to check for elements already in viewport
    window.addEventListener('load', handleScrollAnimation);
});