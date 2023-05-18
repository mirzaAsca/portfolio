export const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const startPosition = window.pageYOffset;
      const targetPosition = section.getBoundingClientRect().top;
      const distance = targetPosition;
      const duration = 3000;
      let startTime = null;
  
      const easeInOutQuad = (t) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      };
  
      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
  
        window.scrollTo({
          top: startPosition + distance * easeInOutQuad(progress),
        });
  
        if (elapsedTime < duration) {
          requestAnimationFrame(animation);
        }
      };
  
      requestAnimationFrame(animation);
    }
  };
  