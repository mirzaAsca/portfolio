import React, { useEffect, useRef } from "react";
import "./projects.css";
import "../style.css";
import ScrollButton from "./ScrollButton";

const Projects = () => {
  const cardsRef = useRef(null);
  let $cards;

  const closeCards = (excludeCard) => {
    $cards.forEach((card) => {
      if (card !== excludeCard && card.classList.contains("flip-in")) {
        card.classList.remove("flip-in");
        void card.offsetHeight;
        card.classList.add("flip-out");
      }
    });
  };

  const openCard = ($card) => {
    $card.classList.remove("flip-out");
    new Promise((resolve) => {
      void $card.offsetHeight;
      resolve();
    }).then(() => {
      $card.classList.add("flip-in");
    });
  };

  const flipCard = (event) => {
    event.preventDefault();

    const $btnFace = event.target.closest(".face");
    const $card = $btnFace.parentElement;

    if ($card.classList.contains("flip-in")) {
      closeCards($card); // Pass the clicked card to closeCards
    } else {
      closeCards();
      openCard($card);
    }
  };

  useEffect(() => {
    $cards = cardsRef.current.querySelectorAll(".card-object");
    const $faceButtons = cardsRef.current.querySelectorAll(".face");

    $faceButtons.forEach((faceButton) => {
      faceButton.addEventListener("click", flipCard);
    });

    return () => {
      $faceButtons.forEach((faceButton) => {
        faceButton.removeEventListener("click", flipCard);
      });
    };
  }, [flipCard]);

  return (
    <section id="projects-section">
      <div className="cards-wrapper" ref={cardsRef}>
        <div className="card-wrapper">
          <div className="card-1 card-object card-object-hf">
            <div className="face front" onClick={flipCard}>
              <div className="title-wrapper">
                <div className="title">Shopify App</div>
                <div className="subtitle">bulk product scraper + importer</div>
              </div>
            </div>
            <div className="face back">
              <div className="img-wrapper">
                <div className="avatar"></div>
                <div className="info-wrapper">
                  <div className="info-title">Shopify App</div>
                  <ul className="info-content">
                    <li className="info-content-item">
                      Tech <span>Python</span>
                    </li>
                    <li className="info-content-item">
                      Stage <span>dev</span>
                    </li>
                    <li className="info-content-item">
                      Github{" "}
                      <span
                        onClick={() =>
                          (window.location.href =
                            "https://github.com/mirzaAsca/country")
                        }
                      >
                        <a
                          href="https://github.com/mirzaAsca/country"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="https://i.ibb.co/qkVTVw4/github-mark.png"
                            alt="GitHub Mark"
                            width="30"
                            height="30"
                          />
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card-2 card-object card-object-hf">
            <div className="face front" onClick={flipCard}>
              <div className="title-wrapper">
                <div className="title">This Website</div>
                <div className="subtitle">my portfolio</div>
              </div>
            </div>
            <div className="face back">
              <div className="img-wrapper">
                <div className="avatar"></div>
                <div className="info-wrapper">
                  <div className="info-title">This Website</div>
                  <ul className="info-content">
                    <li className="info-content-item">
                      Tech <span>React</span>
                    </li>
                    <li className="info-content-item">
                      Stage <span>dev</span>
                    </li>
                    <li className="info-content-item">
                      Github{" "}
                      <span
                        onClick={() =>
                          (window.location.href =
                            "https://github.com/mirzaAsca/country")
                        }
                      >
                        <a
                          href="https://github.com/mirzaAsca/country"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="https://i.ibb.co/qkVTVw4/github-mark.png"
                            alt="GitHub Mark"
                            width="30"
                            height="30"
                          />
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card-3 card-object card-object-hf">
            <div className="face front" onClick={flipCard}>
              <div className="title-wrapper">
                <div className="title">Country Info</div>
                <div className="subtitle">
                  Simple App for country data retrieving
                </div>
              </div>
            </div>
            <div className="face back">
              <div className="img-wrapper">
                <div className="avatar"></div>
                <div className="info-wrapper">
                  <div className="info-title">Country Info</div>
                  <ul className="info-content">
                    <li className="info-content-item">
                      Tech <span>React</span>
                    </li>
                    <li className="info-content-item">
                      Stage <span>Dev</span>
                    </li>
                    <li className="info-content-item">
                      Github{" "}
                      <span
                        onClick={() =>
                          (window.location.href =
                            "https://github.com/mirzaAsca/country")
                        }
                      >
                        <a
                          href="https://github.com/mirzaAsca/country"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="https://i.ibb.co/qkVTVw4/github-mark.png"
                            alt="GitHub Mark"
                            width="30"
                            height="30"
                          />
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollButton
        className="more-button"
        buttonText="Check The Tech I Used ⬇"
        sectionId="tech-section"
      />
    </section>
  );
};

export default Projects;
