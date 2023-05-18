import React, { Component } from "react";
import "../style.css";
import "./biz.css";
import ScrollButton from "./ScrollButton";

class Biz extends Component {
  componentDidMount() {
    const panels = document.querySelectorAll(".panel");

    panels.forEach((panel) => {
      panel.addEventListener("click", () => {
        this.removeActiveClasses();
        panel.classList.add("active");
      });
    });
  }

  removeActiveClasses() {
    const panels = document.querySelectorAll(".panel");
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
  }

  render() {
    return (
      <section id="biz-section">
        <div className="container">
          <div className="panel active bg-image-1">
            <p className="vertical-text">E-COMMERCE BIZ</p>
            <div className="additional-text">
              Over the past four years, I've been running a successful Shopify
              dropshipping business as a side hustle, specializing in sneakers
              and clothes. Throughout this journey, I've tested and used a
              plethora of Shopify apps, including tools for automation like
              Zapier and IFTTT, as well as Instagram auto-post apps. This
              hands-on experience has allowed me to fine-tune my technical
              skills, and deepen my understanding of eCommerce strategies and
              market trends. This side venture is not just a business, but an
              ongoing commitment to learning, testing, and adapting in the
              evolving world of eCommerce.
            </div>
          </div>
          <div className="panel bg-image-2">
            <p className="vertical-text">SHOPIFY AUTOMATION</p>
            <div className="additional-text">
              The Automated Sneaker Data Scraper project began unintentionally
              when I couldn't find a programmer on Fiverr who could complete the
              task within a reasonable timeframe. Fueled by necessity, I took
              matters into my own hands and created my first-ever Python script:
              a multi-threaded program that efficiently scrapes sneaker product
              data from Yupoo albums. As my first foray into Python programming,
              this project demonstrates my ability to quickly learn new
              languages and technologies, create custom web scraping solutions,
              handle complex data structures, and implement concurrent
              programming techniques in Python. For more details, you can find
              the full documentation on my GitHub repository by clicking on this
              link. Additionally, you can watch a demo of the script in action
              in this video.
            </div>
          </div>
          
          <div className="panel bg-image-3">
            <p className="vertical-text">SPA DESIGN</p>
            <div className="additional-text">
              When I stepped into the wellness industry with "Reina," I saw an
              opportunity to bring cupping therapy, skincare, and spa services
              under one accessible brand. As a hands-on team member, I took part
              in designing a straightforward logo, crafting informative flyers,
              generating clear admission tickets, and conceptualizing the
              visuals for their glass portals. These efforts gave Reina a
              recognizable look and feel. Today, Reina stands as a reliable
              choice for folks looking for quality relaxation and wellness
              services. This project serves as a solid example of the impact of
              thoughtful, hands-on branding in the business world.
            </div>
          </div>
          <div className="panel bg-image-4">
            <p className="vertical-text">LOGO REBRANDING</p>
            <div className="additional-text">
              Tasked with rebranding a driving school with over 20 years of
              history, the goal was to freshen up the look while keeping its
              familiar feel. We had to strike a balance - the owner wanted to
              maintain the school's recognizable colors, shapes, and fonts. So,
              rather than a complete overhaul, we subtly updated its appearance.
              While it might not seem "modern" by current standards, it's a
              respectful nod to the school's long-standing tradition. Check out
              the before-and-after photos below to see the thoughtful
              transformation that celebrates the school's commitment to quality
              instruction. Rebranding isn't always about drastic change,
              sometimes it's about enhancing what's already there.
            </div>
          </div>
          <div className="panel bg-image-5">
            <p className="vertical-text">VIDEO PROD</p>
            <div className="additional-text">This is some dummy text.</div>
          </div>

        </div>
        <div className="biz-button">
        <ScrollButton
        className="more-button"
        buttonText="Contact Me ⬇"
        sectionId="contacts-section"
      /></div>
      </section>
    );
  }
}

export default Biz;
