// Button click handlers
prevButton.addEventListener('click', () => {
  if (currentSlide > 1) {
    document.getElementById(`slide-${currentSlide - 1}`).scrollIntoView({
      behavior: 'smooth'
    });
  }
});

nextButton.addEventListener('click', () => {
  if (currentSlide < totalSlides) {
    document.getElementById(`slide-${currentSlide + 1}`).scrollIntoView({
      behavior: 'smooth'
    });
  }
});

// Fullscreen toggle function
function toggleFullscreen() {
  if (!isFullscreen) {
    // Enable fullscreen
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
      document.documentElement.msRequestFullscreen();
    }
    fullscreenButton.querySelector('i').classList.remove('fa-expand');
    fullscreenButton.querySelector('i').classList.add('fa-compress');
  } else {
    // Disable fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
      document.msExitFullscreen();
    }
    fullscreenButton.querySelector('i').classList.remove('fa-compress');
    fullscreenButton.querySelector('i').classList.add('fa-expand');
  }
  isFullscreen = !isFullscreen;
}

// Fullscreen button click handler
fullscreenButton.addEventListener('click', toggleFullscreen);

// Monitor fullscreen changes
document.addEventListener('fullscreenchange', updateFullscreenButton);
document.addEventListener('webkitfullscreenchange', updateFullscreenButton);
document.addEventListener('mozfullscreenchange', updateFullscreenButton);
document.addEventListener('MSFullscreenChange', updateFullscreenButton);

function updateFullscreenButton() {
  isFullscreen = !!document.fullscreenElement;
  if (isFullscreen) {
    fullscreenButton.querySelector('i').classList.remove('fa-expand');
    fullscreenButton.querySelector('i').classList.add('fa-compress');
  } else {
    fullscreenButton.querySelector('i').classList.remove('fa-compress');
    fullscreenButton.querySelector('i').classList.add('fa-expand');
  }
}

// Source button functionality
const sourceButton = document.getElementById('source-button');
const backButton = document.getElementById('back-button');
const navigationHint = document.getElementById('navigation-hint');
let isAnalysisVisible = false;

// Function to toggle between presentation and analysis view
function toggleSourceView() {
  isAnalysisVisible = !isAnalysisVisible;
  
  if (isAnalysisVisible) {
    // Show analysis view
    document.body.classList.add('show-analysis');
    
    // Hide navigation elements
    document.getElementById('nav-dots').style.opacity = '0';
    document.getElementById('nav-dots').style.pointerEvents = 'none';
    document.querySelector('.nav-buttons').style.opacity = '0';
    document.querySelector('.nav-buttons').style.pointerEvents = 'none';
    document.getElementById('progress-bar').style.opacity = '0';
    
    // Show keyboard navigation hint
    navigationHint.classList.add('visible');
    setTimeout(() => {
      navigationHint.classList.remove('visible');
    }, 3000);
  } else {
    // Show presentation view
    document.body.classList.remove('show-analysis');
    
    // Show navigation elements
    document.getElementById('nav-dots').style.opacity = '1';
    document.getElementById('nav-dots').style.pointerEvents = 'auto';
    document.querySelector('.nav-buttons').style.opacity = '1';
    document.querySelector('.nav-buttons').style.pointerEvents = 'auto';
    document.getElementById('progress-bar').style.opacity = '1';
    
    // Hide hint when returning to presentation
    navigationHint.classList.remove('visible');
  }
}

// Source button click handler
sourceButton.addEventListener('click', toggleSourceView);

// Back button click handler
backButton.addEventListener('click', toggleSourceView);

// Scroll handling for slide changes
slidesContainer.addEventListener('scroll', () => {
  // Only process scroll events if not in analysis mode
  if (!isAnalysisVisible) {
    const containerHeight = slidesContainer.offsetHeight;
    const scrollPosition = slidesContainer.scrollTop;
    
    // Determine current slide based on scroll position
    const slideIndex = Math.round(scrollPosition / containerHeight) + 1;
    
    if (slideIndex !== currentSlide && slideIndex >= 1 && slideIndex <= totalSlides) {
      updateActiveSlide(slideIndex);
    }
  }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  // Slide navigation only if not in analysis mode
  if (!isAnalysisVisible) {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      if (currentSlide < totalSlides) {
        document.getElementById(`slide-${currentSlide + 1}`).scrollIntoView({
          behavior: 'smooth'
        });
      }
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      if (currentSlide > 1) {
        document.getElementById(`slide-${currentSlide - 1}`).scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }
  
  // Left/Right arrow keys to toggle between presentation and source
  if (e.key === 'ArrowLeft' && isAnalysisVisible) {
    toggleSourceView(); // Return to presentation
  } else if (e.key === 'ArrowRight' && !isAnalysisVisible) {
    toggleSourceView(); // Go to source analysis
  }
  
  // Toggle fullscreen with F key
  if (e.key === 'f' || e.key === 'F') {
    toggleFullscreen();
  }
  
  // Toggle source view with S key
  if (e.key === 's' || e.key === 'S') {
    toggleSourceView();
  }
  
  // Exit source view with Escape key
  if (e.key === 'Escape' && isAnalysisVisible) {
    toggleSourceView();
  }
});