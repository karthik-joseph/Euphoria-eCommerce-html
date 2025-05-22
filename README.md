# Euphoria - Premium eCommerce Website

![Euphoria Logo](/assets/images/Logo.svg)

A modern, responsive eCommerce website built with HTML, CSS, and JavaScript featuring a clean design, smooth animations, and mobile-first approach.

## 🌐 Live Demo

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=github)](https://karthik-joseph.github.io/Euphoria-eCommerce-html/)

**🔗 Quick Access:** <a href="https://karthik-joseph.github.io/Euphoria-eCommerce-html" target="blank">Open Euphoria Website</a>

## 🚀 Features

- **Responsive Design**: Mobile-first approach with seamless adaptation across all devices
- **Theme Toggle**: Dark/Light mode with persistent user preference
- **Interactive Navigation**: Smooth scrolling and mobile hamburger menu
- **Product Carousel**: Dynamic New Arrivals showcase with navigation arrows and touch support
- **Feedback Slider**: Customer testimonials with auto-play, dot navigation, and mobile scroll
- **Brand Partnerships**: Featured brand deals section
- **Category Filtering**: Organized product categories for Men, Women, and featured items
- **Scroll Animations**: Engaging entrance animations for sections
- **SEO Optimized**: Comprehensive meta tags and semantic HTML structure

## 📁 Project Structure

```
euphoria/
├── assets/
│   ├── css/
│   │   └── index.css          # Main stylesheet
│   ├── js/
│   │   ├── index.js           # Main JavaScript functionality
│   │   ├── carousel.js        # ✅ New Arrivals carousel functionality
│   │   └── slider.js          # ✅ Feedback testimonial slider
│   └── images/
│       ├── Logo.svg
│       ├── bg-1.jpg to bg-5.jpg
│       ├── img-1.jpg to img-19.jpg
│       └── [various icons and assets]
├── index.html                 # Main HTML file
└── README.md                  # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with Flexbox, Grid, and CSS Variables
- **Vanilla JavaScript**: Interactive functionality without dependencies
- **CSS Animations**: Smooth transitions and scroll-triggered animations
- **Local Storage**: Theme preference persistence

## 🎨 Design Features

### Color Scheme
- **Light Theme**: Clean whites with purple accents (`#8A33FD`)
- **Dark Theme**: Dark backgrounds with enhanced contrast
- **Responsive Colors**: CSS variables for seamless theme switching

### Typography
- **Font Family**: Poppins for modern, readable text
- **Hierarchy**: Proper heading structure with consistent sizing
- **Responsive Text**: Scales appropriately across devices

### Layout
- **CSS Grid**: Four-column footer layout with responsive breakdown
- **Flexbox**: Navigation and content alignment
- **Mobile-First**: Progressive enhancement for larger screens

## 📱 Responsive Breakpoints

- **Mobile**: 360px - 480px
- **Large Mobile**: 481px - 660px
- **Tablet**: 661px - 970px
- **Desktop**: 971px - 1440px
- **Large Desktop**: 1441px+

## ✅ JavaScript Components

### `/assets/js/carousel.js` - New Arrivals Carousel
**Implemented Functionality:**
- **Responsive Navigation**: Automatic calculation of visible items based on screen size
- **Arrow Controls**: Previous/Next navigation with disabled states at boundaries
- **Touch Support**: Swipe gestures for mobile devices with configurable threshold
- **Smooth Transitions**: CSS transform-based sliding with easing
- **Dynamic Sizing**: Automatic adjustment on window resize
- **Accessibility**: Keyboard navigation and proper ARIA states

**Key Features:**
```javascript
// Auto-calculates visible items per viewport
function calculateVisibleItems()

// Smooth carousel positioning
function updateCarouselPosition()

// Touch gesture support
function handleSwipe()

// Responsive resize handling
window.addEventListener('resize', recalculate)
```

### `/assets/js/slider.js` - Feedback Testimonial Slider
**Implemented Functionality:**
- **Dual Mode Operation**: Desktop auto-play slider and mobile horizontal scroll
- **Auto-Play**: 4-second intervals with pause on hover (desktop only)
- **Dot Navigation**: Interactive indicators for direct slide access
- **Mobile Optimization**: Native scroll with snap points and touch handling
- **Keyboard Support**: Arrow key navigation for accessibility
- **Dynamic Detection**: Automatic switching between mobile/desktop modes

**Key Features:**
```javascript
// Responsive mode detection
this.isMobile = window.innerWidth <= 768;

// Auto-play with hover pause
startAutoPlay() / stopAutoPlay()

// Mobile scroll synchronization
updateActiveCardOnScroll()

// Smooth scrolling to specific cards
scrollToCard(index)
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd euphoria
   ```

2. **All files are now included** - No missing dependencies!

3. **Open in browser**
   ```bash
   # Using Live Server (VS Code extension) or
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

## 🔧 Current Functionality

### ✅ Fully Working Features
- **Responsive Navigation**: Mobile hamburger menu with smooth transitions
- **Theme Toggle**: Light/Dark mode with localStorage persistence
- **New Arrivals Carousel**: 
  - Responsive product showcase
  - Touch/swipe support
  - Arrow navigation with smart disable states
  - Automatic viewport calculation
- **Feedback Slider**: 
  - Auto-playing testimonials (desktop)
  - Mobile-optimized horizontal scroll
  - Dot navigation indicators
  - Hover pause functionality
- **Smooth Scrolling**: Between navigation sections
- **Scroll Animations**: Intersection Observer-based reveal effects
- **Interactive Product Cards**: Hover effects and transitions
- **Mobile-First Layout**: Optimized for all device sizes
- **Accessible Forms**: Proper ARIA labels and keyboard navigation

### 🔄 Advanced Interactions

#### Carousel Controls
- **Smart Navigation**: Buttons automatically disable at start/end positions
- **Touch Gestures**: 50px swipe threshold for reliable mobile interaction
- **Resize Handling**: Real-time recalculation of visible items and positioning
- **Smooth Transitions**: 0.4s ease timing for professional feel

#### Slider Features  
- **Context-Aware**: Automatically switches between desktop slider and mobile scroll
- **Performance Optimized**: RequestAnimationFrame for smooth scroll detection
- **User Experience**: Maintains scroll position and active states across mode changes

## 🎯 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance Features

- **Efficient DOM Queries**: Cached element references for optimal performance
- **Event Delegation**: Minimal event listeners with proper cleanup
- **Passive Touch Events**: Smooth scrolling on mobile devices
- **RequestAnimationFrame**: Smooth animations and transitions
- **CSS Hardware Acceleration**: Transform-based animations for 60fps performance

## 📋 Future Enhancements

- [ ] Implement banner image carousel with auto-rotation
- [ ] Add shopping cart functionality with local storage
- [ ] Create product search and filtering system
- [ ] Implement lazy loading for product images
- [ ] Add user authentication and account management
- [ ] Create wishlist functionality
- [ ] Add product detail modal/pages
- [ ] Implement payment integration
- [ ] Add loading states and error handling
- [ ] Create admin panel for content management

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Code Style Guidelines

- Use consistent indentation (2 spaces)
- Follow semantic HTML structure
- Use CSS custom properties for theming
- Write self-documenting JavaScript with meaningful variable names
- Add JSDoc comments for complex functionality
- Implement error handling and edge cases
- Use modern ES6+ syntax where supported

## 🔧 Development Notes

### Carousel Implementation Details
```javascript
// Example of responsive calculation
const containerWidth = showcaseContainer.parentElement.clientWidth - 80;
const visibleGroups = Math.floor(containerWidth / groupWidth);
const maxIndex = Math.max(0, groups.length - visibleGroups);
```

### Slider Mode Detection
```javascript
// Automatic mobile/desktop detection
const isMobile = window.innerWidth <= 768;
if (isMobile) {
    // Enable scroll-based navigation
    this.handleMobileScroll();
} else {
    // Enable auto-play slider
    this.startAutoPlay();
}
```

## 📄 License

None

---

**Status**: ✅ **Fully Functional** - All carousel and slider components are now implemented and working across all device types with comprehensive mobile and desktop optimizations.
