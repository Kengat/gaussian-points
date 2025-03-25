// Parallax effect on mouse movement
document.addEventListener('mousemove', (e) => {
    const icons = document.querySelectorAll('.icon');
    const shapes = document.querySelectorAll('.geometric-shape');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    // Apply to icon wrappers for text movement
    const iconWrappers = document.querySelectorAll('.icon-wrapper');
    iconWrappers.forEach(wrapper => {
      const offsetX = (x - 0.5) * 15;
      const offsetY = (y - 0.5) * 15;
      wrapper.style.transform = `translateX(${offsetX}px) translateY(${offsetY}px)`;
    });
    
    shapes.forEach((shape, index) => {
      const factorX = (index % 3 + 1) * 30;
      const factorY = (index % 2 + 1) * 40;
      const reverseX = (0.5 - x) * factorX;
      const reverseY = (0.5 - y) * factorY;
      
      shape.style.transform = `translate(${reverseX}px, ${reverseY}px)`;
    });
  });
  
  // Theme toggle
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    // Update charts when theme changes
    if (currentSlide === 4) {
      initializeMarketCharts();
    } else if (currentSlide === 7) {
      initializeCompetitorChart();
    } else if (currentSlide === 8) {
      initializeRevenueProjection();
    }
  });