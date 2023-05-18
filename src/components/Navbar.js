import React, { useState, useEffect } from "react";
import "../style.css";
import "./navbar.css";

const Navbar = () => {
  const [isHome, setIsHome] = useState(true);

  const checkIfHome = () => {
    setIsHome(window.pageYOffset === 0);
  };

  useEffect(() => {
    const nav = document.querySelector("nav");
    let hideTimeout;
    setTimeout(() => {
      checkIfHome();
    }, 0);

    window.addEventListener("scroll", checkIfHome);

    function hideNav() {
      if (hideTimeout) clearTimeout(hideTimeout);
      hideTimeout = setTimeout(function () {
        if (window.scrollY === 0) return;
        nav.classList.add("hidden");
      }, 5000);
    }

    hideNav();

    nav.addEventListener("mouseover", function () {
      if (hideTimeout) clearTimeout(hideTimeout);
      nav.classList.remove("hidden");
    });

    nav.addEventListener("mouseout", hideNav);

    window.addEventListener("scroll", function () {
      if (window.scrollY === 0) {
        nav.classList.remove("hidden");
      } else {
        hideNav();
      }
    });

    return () => {
      nav.removeEventListener("mouseover", function () {
        if (hideTimeout) clearTimeout(hideTimeout);
        nav.classList.remove("hidden");
      });
      nav.removeEventListener("mouseout", hideNav);
      window.removeEventListener("scroll", function () {
        if (window.scrollY === 0) {
          nav.classList.remove("hidden");
        } else {
          hideNav();
        }
      });
      window.removeEventListener("scroll", checkIfHome);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const startPosition = window.pageYOffset;
      const targetPosition = section.getBoundingClientRect().top;
      const distance = targetPosition;
      const duration = 3000;
      let startTime = null;

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

  const scrollToTop = () => {
    const duration = 3000;
    const startPosition = window.pageYOffset;
    const distance = -startPosition;
    let startTime = null;

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

  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  return (
    <nav className={isHome ? "" : "blurred"}>
      <div
        className="menu"
        style={isHome ? {} : { backdropFilter: "blur(10px)" }}
      >
        <p className="website_name" onClick={scrollToTop}>
          <span className="mirza">MIRZA</span>
          <span className="asceric">ASCERIC</span>
        </p>{" "}
        <div className="menu_links">
          <a
            href="#about"
            className="link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about-section");
            }}
          >
            about
          </a>
          <a
            href="#projects"
            className="link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects-section");
            }}
          >
            projects
          </a>
          <a
            href="#tech"
            className="link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("tech-section");
            }}
          >
            tech
          </a>
          <a
            href="#biz"
            className="link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("biz-section");
            }}
          >
            biz
          </a>

          <a
            href="#contacts"
            className="link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contacts-section");
            }}
          >
            contacts
          </a>
        </div>
        <div className="menu_icon">
          <span className="icon"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
