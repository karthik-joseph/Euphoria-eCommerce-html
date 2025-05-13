document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.sections');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('open');
        mobileNav.classList.toggle('active');
    });
     // Theme toggle functionality
        const themeToggle = document.getElementById('themeToggle');
        
        // Check for saved theme preference or use preferred color scheme
        const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        
        // Apply the saved theme or preferred color scheme
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        // Update toggle position if dark mode
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        
        // Toggle theme when the button is clicked
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
});