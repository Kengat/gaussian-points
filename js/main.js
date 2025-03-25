// Slide management
const slidesContainer = document.getElementById('slides-container');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentSlide = 1;
const progressBar = document.getElementById('progress-bar');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const navDots = document.getElementById('nav-dots');
const themeToggle = document.getElementById('theme-toggle');
const fullscreenButton = document.getElementById('fullscreen-button');
let isFullscreen = false;

// Create navigation dots
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('div');
  dot.className = 'nav-dot';
  if (i === 0) dot.classList.add('active');
  dot.dataset.slide = i + 1;
  dot.addEventListener('click', () => {
    document.getElementById(`slide-${i + 1}`).scrollIntoView({
      behavior: 'smooth'
    });
  });
  navDots.appendChild(dot);
}

// Create a custom event to signal slide changes
function createSlideChangeEvent() {
  const slideChanged = new CustomEvent('slideChanged', {
    detail: { slideNumber: currentSlide }
  });
  document.dispatchEvent(slideChanged);
}

// Function to update active slide
function updateActiveSlide(slideNumber) {
  const dots = document.querySelectorAll('.nav-dot');
  dots.forEach(dot => {
    dot.classList.remove('active');
  });
  dots[slideNumber - 1].classList.add('active');
  
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  document.getElementById(`slide-${slideNumber}`).classList.add('active');
  
  currentSlide = slideNumber;
  updateProgressBar();
  
  // Initialize charts based on active slide
  if (slideNumber === 4) {
    initializeMarketCharts();
  } else if (slideNumber === 7) {
    initializeCompetitorChart();
  } else if (slideNumber === 8) {
    initializeRevenueProjection();
  }
  
  // Dispatch a custom event for the language system
  createSlideChangeEvent();
}

// Update progress bar
function updateProgressBar() {
  const progress = (currentSlide - 1) / (totalSlides - 1) * 100;
  progressBar.style.width = `${progress}%`;
}

// Initialize first slide when page loads
window.addEventListener('load', () => {
  updateActiveSlide(1);
  
  // Handle touch swipes on mobile devices
  let touchStartY = 0;
  let touchEndY = 0;
  
  document.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  });
  
  document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].clientY;
    handleSwipe();
  });
  
  function handleSwipe() {
    const threshold = 50; // minimum distance for swipe
    if (touchStartY - touchEndY > threshold) {
      // Swipe up - go to next slide
      if (currentSlide < totalSlides) {
        document.getElementById(`slide-${currentSlide + 1}`).scrollIntoView({
          behavior: 'smooth'
        });
      }
    } else if (touchEndY - touchStartY > threshold) {
      // Swipe down - go to previous slide
      if (currentSlide > 1) {
        document.getElementById(`slide-${currentSlide - 1}`).scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }
});