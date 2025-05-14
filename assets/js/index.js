 document.addEventListener('DOMContentLoaded', function() {
        // Mobile menu functionality
        const hamburger = document.querySelector('.hamburger');
        const mobileNav = document.querySelector('.sections');
        const menuCloseBtn = document.querySelector('.menu-close-btn');
        const sectionLink = document.querySelectorAll('.sections .section-link');


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
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        }
        
        // Function to close the mobile menu
        function closeMobileMenu() {
            hamburger.classList.remove('open');
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
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
    });