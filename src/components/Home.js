import React, { useRef, useEffect } from "react";
import "../style.css";
import Parallax from 'parallax-js';
import "./home.css";

const Home = () => {
  const buttonRef = useRef();
  const sceneRef = useRef();

  useEffect(() => {
    const scrollToAbout = () => {
      const aboutSection = document.getElementById("about-section");
      const startPosition = window.pageYOffset;
      const targetPosition = aboutSection.getBoundingClientRect().top;
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
    button.addEventListener("click", scrollToAbout);

    const scene = sceneRef.current;
    new Parallax(scene);

    return () => {
      button.removeEventListener("click", scrollToAbout);
    };
  }, []);


  return (
    <section className="wrapper">
      <div className="container">
        <div id="scene" className="scene" data-hover-only="false" ref={sceneRef}>
          <div className="circle" data-depth="1.2"></div>
  
          <div className="one" data-depth="0.9">
            <div className="content">
              <span className="piece"></span>
              <span className="piece"></span>
              <span className="piece"></span>
            </div>
          </div>
  
          <div className="two" data-depth="0.60">
            <div className="content">
              <span className="piece"></span>
              <span className="piece"></span>
              <span className="piece"></span>
            </div>
          </div>
  
          <div className="three" data-depth="0.40">
            <div className="content">
              <span className="piece"></span>
              <span className="piece"></span>
              <span className="piece"></span>
            </div>
          </div>
  
          <p className="p404" data-depth="0.50">Junior Dev</p>
          <p className="p404" data-depth="0.10">Junior Dev</p>
        </div>
  
        <div className="text">
          <article>
            <p>Need fresh perspective?<br />Be ready to move!</p>
            <button ref={buttonRef}>Bring it on! ⬇</button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Home;
