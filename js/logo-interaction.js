document.addEventListener('DOMContentLoaded', () => {
  const logoContainer = document.querySelector('.logo-container');
  const slide1 = document.getElementById('slide-1');
  const slideContent = slide1.querySelector('.slide-content');
  const body = document.body;

  if (!logoContainer || !slide1 || !slideContent) {
    console.log('Required elements for logo interaction not found.');
    return;
  }

  let isDragging = false;
  let animationFrameId = null;

  const originalCenter = {
    x: logoContainer.offsetLeft + logoContainer.offsetWidth / 2,
    y: logoContainer.offsetTop + logoContainer.offsetHeight / 2,
  };

  let currentPos = { x: 0, y: 0 };
  let targetPos = { x: 0, y: 0 };
  let velocity = { x: 0, y: 0 };

  const stiffness = 0.05;
  const damping = 0.75;

  function startDrag(e) {
    if (e.button !== 0 || !slide1.classList.contains('active')) {
      return;
    }
    isDragging = true;
    logoContainer.style.transition = 'none';
    updateTargetPos(e);
    if (!animationFrameId) {
      animationFrameId = requestAnimationFrame(animate);
    }
  }

  function drag(e) {
    if (isDragging) {
      updateTargetPos(e);
    }
  }

  function endDrag() {
    if (isDragging) {
      isDragging = false;
      targetPos = { x: 0, y: 0 };
    }
  }

  function updateTargetPos(e) {
    const rect = slideContent.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    targetPos.x = mouseX - originalCenter.x;
    targetPos.y = mouseY - originalCenter.y;
  }

  function animate() {
    if (!isDragging && Math.abs(currentPos.x) < 0.1 && Math.abs(currentPos.y) < 0.1 && Math.abs(velocity.x) < 0.1 && Math.abs(velocity.y) < 0.1) {
      logoContainer.style.transform = 'translate(0px, 0px)';
      animationFrameId = null;
      return;
    }

    let forceX = (targetPos.x - currentPos.x) * stiffness;
    let forceY = (targetPos.y - currentPos.y) * stiffness;

    velocity.x = (velocity.x + forceX) * damping;
    velocity.y = (velocity.y + forceY) * damping;

    currentPos.x += velocity.x;
    currentPos.y += velocity.y;

    logoContainer.style.transform = `translate(${currentPos.x}px, ${currentPos.y}px)`;

    animationFrameId = requestAnimationFrame(animate);
  }

  function resetState() {
    isDragging = false;
    targetPos = { x: 0, y: 0 };
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
      logoContainer.style.transition = 'transform 0.5s cubic-bezier(0.2, 1, 0.3, 1)';
      logoContainer.style.transform = 'translate(0, 0)';
    }
  }

  logoContainer.addEventListener('mousedown', startDrag);
  window.addEventListener('mousemove', drag);
  window.addEventListener('mouseup', endDrag);
  window.addEventListener('mouseleave', endDrag);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.target.id === 'slide-1') {
        if (entry.isIntersecting) {
          body.classList.add('slide-1-active');
        } else {
          body.classList.remove('slide-1-active');
          resetState();
        }
      }
    });
  }, { threshold: 0.5 });

  observer.observe(slide1);

  if (slide1.classList.contains('active')) {
    body.classList.add('slide-1-active');
  }
});