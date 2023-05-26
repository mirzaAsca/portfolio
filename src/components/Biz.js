import React, { Component } from "react";
import "../style.css";
import "./biz.css";
import ScrollButton from "./ScrollButton";

class Biz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
    };
  }

  componentDidMount() {
    const panels = document.querySelectorAll(".panel");

    panels.forEach((panel) => {
      panel.addEventListener("click", () => {
        this.removeActiveClasses();
        panel.classList.add("active");
      });
    });

    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  removeActiveClasses() {
    const panels = document.querySelectorAll(".panel");
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
  }

  getContainerClass() {
    const { windowWidth } = this.state;
    return windowWidth <= 660 ? "container rotated-container" : "container";
  }

  render() {
    return (
      <section id="biz-section">
        <div className="container-wrapper">
        <div className={this.getContainerClass()}>
          <div className="panel active ">
            <h2 className="vertical-text">E-COMMERCE BIZ</h2>
            <div className="additional-text ">
              <p className="text">
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
              </p>
            </div>
          </div>
          <div className="panel bg-image-2">
            <h2 className="vertical-text">SHOPIFY AUTOMATION</h2>
            <div className="additional-text ">
              <p>
                The Automated Sneaker Data Scraper project began unintentionally
                when I couldn't find a programmer on Fiverr who could complete
                the task within a reasonable timeframe. Fueled by necessity, I
                took matters into my own hands and created my first-ever Python
                script: a multi-threaded program that efficiently scrapes
                sneaker product data from Yupoo albums. As my first foray into
                Python programming, this project demonstrates my ability to
                quickly learn new languages and technologies, create custom web
                scraping solutions, handle complex data structures, and
                implement concurrent programming techniques in Python. For more
                details, you can find the full documentation on my GitHub
                repository by clicking on this link. Additionally, you can watch
                a demo of the script in action in this video.
              </p>
            </div>
          </div>

          <div className="panel bg-image-3">
            <h2 className="vertical-text">SPA DESIGN</h2>
            <div className="additional-text ">
              <p>
                When I stepped into the wellness industry with "Reina," I saw an
                opportunity to bring cupping therapy, skincare, and spa services
                under one accessible brand. As a hands-on team member, I took
                part in designing a straightforward logo, crafting informative
                flyers, generating clear admission tickets, and conceptualizing
                the visuals for their glass portals. These efforts gave Reina a
                recognizable look and feel. Today, Reina stands as a reliable
                choice for folks looking for quality relaxation and wellness
                services. This project serves as a solid example of the impact
                of thoughtful, hands-on branding in the business world.
              </p>
            </div>
          </div>
          <div className="panel bg-image-4">
            <h2 className="vertical-text">LOGO REBRANDING</h2>
            <div className="additional-text ">
              <p>
                Tasked with rebranding a driving school with over 20 years of
                history, the goal was to freshen up the look while keeping its
                familiar feel. We had to strike a balance - the owner wanted to
                maintain the school's recognizable colors, shapes, and fonts.
                So, rather than a complete overhaul, we subtly updated its
                appearance. While it might not seem "modern" by current
                standards, it's a respectful nod to the school's long-standing
                tradition. Check out the before-and-after photos below to see
                the thoughtful transformation that celebrates the school's
                commitment to quality instruction. Rebranding isn't always about
                drastic change, sometimes it's about enhancing what's already
                there.
              </p>
            </div>
          </div>
          <div className="panel bg-image-5">
            <h2 className="vertical-text">VIDEO PROD</h2>
            <div className="additional-text ">
              <p>This is some dummy text.</p>
            </div>
          </div>
        </div>
        <div className="biz-button">
          <ScrollButton
            className="more-button"
            buttonText="Contact Me ⬇"
            sectionId="contacts-section"
          />
        </div>
        </div>
      </section>
    );
  }
}

export default Biz;
