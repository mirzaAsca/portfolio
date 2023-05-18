import React, { useEffect, useRef } from "react";
import ScrollButton from "./ScrollButton";
import "../style.css";
import "./about.css";

const About = () => {
  const aboutSection = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // If you have some specific actions when 'about' section is in view, add it here.
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(aboutSection.current);

    return () => {
      observer.unobserve(aboutSection.current);
    };
  }, []);

  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
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
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    scrollToSection("contacts-section");
  };

  return (
    <section ref={aboutSection} id="about-section">
      <div>
        <div className="text-centered-content" id="about-section">
          <p>
            ABOUT ME
            <br />
            Welcome to my portfolio page! I'm currently a junior developer.
            However, don't let that fool you. Feel free to click around and
            explore a mere 2% of my potential that's showcased here! <br></br>{" "}
            <br></br>My skillset spans across both front-end and back-end
            technologies, complemented by a robust understanding of UI/UX design
            principles. I've had the opportunity to work on a range of projects,
            from e-commerce sites to automation tools and engaging visual
            experiences. My thirst for knowledge keeps me in pursuit of the
            latest trends in areas like Machine Learning and Artificial
            Intelligence. I am at ease with learning new technologies and taking
            the lead, as I find growth in environments that push my boundaries.
            <br></br>
            <br></br>
            <br></br>GOING BEYOND CODING<br></br>With a diverse background that
            includes 9 years in telecommunications, 5 years in both manual and
            algorithmic trading, and a lifelong immersion in digital marketing,
            photo/video editing, and copywriting, I bring a unique perspective
            to the table. My experience as an e-commerce store owner on Shopify
            for the past 4 successful years has provided me with invaluable
            insights into a variety of markets and niches. This has only fueled
            my passion for learning and sharing knowledge. As a natural
            extrovert, I find my stride in team environments, where I can
            contribute to a common goal. I am a firm believer in the power of
            collaboration and its ability to produce synergistic outcomes.{" "}
            <br></br>
            <br></br>
            <br></br>
            VALUE OVER COST, RIGHT?<br></br>
            Skip the fancy animations part and head straight to the{" "}
            <a
              href="#contacts-section"
              className="contact-link"
              onClick={handleContactClick}
            >
              Contacts{" "}
            </a>
            section to schedule a meeting with me!
          </p>
          <ScrollButton
            className="more-button"
            buttonText="I want to see more ⬇"
            sectionId="projects-section"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
