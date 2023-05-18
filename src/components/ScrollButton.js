import React, { useEffect, useRef } from 'react';
import "./scrollButton.css";

const ScrollButton = ({ buttonText, sectionId }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const scrollToSection = () => {
      const section = document.getElementById(sectionId);
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
    };

    const button = buttonRef.current;
    button.addEventListener("click", scrollToSection);

    return () => {
      button.removeEventListener("click", scrollToSection);
    };
  }, [sectionId]);

  return (
    <button ref={buttonRef} className="more-button">
      {buttonText}
    </button>
  );
};

export default ScrollButton;
