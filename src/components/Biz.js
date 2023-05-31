import React, { Component } from "react";
import "../style.css";
import "./biz.css";
import ScrollButton from "./ScrollButton";

class Biz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      isImageActive: [false, false], 
      isImageVisible: [true, true], // add this line
    };
    
  }
  handlePhotoClick = () => {
    this.setState({ isPhotoClicked: !this.state.isPhotoClicked });
  };

  handleImageClick = (index) => {
    let newIsImageActive = [...this.state.isImageActive];
    let newIsImageVisible = [...this.state.isImageVisible];
    newIsImageActive[index] = !newIsImageActive[index];
    newIsImageVisible[index] = true;
    this.setState({ isImageActive: newIsImageActive, isImageVisible: newIsImageVisible });
  };

  componentDidMount() {
    const panels = document.querySelectorAll(".panel");

    panels.forEach((panel) => {
      panel.addEventListener("click", () => {
        this.removeActiveClasses();
        panel.classList.add("active");
      });
    });

    window.addEventListener("resize", this.handleResize);
    const images = document.querySelectorAll(".image");
    images.forEach((image, index) => {
      image.addEventListener("click", () => {
        let newIsImageActive = [...this.state.isImageActive];
        newIsImageActive[index] = !newIsImageActive[index];
        this.setState({ isImageActive: newIsImageActive });
      });
    });
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
  
    // Set all images to inactive and invisible after 3 seconds when a new panel is clicked
    setTimeout(() => {
      this.setState({ isImageActive: [false, false], isImageVisible: [false, false] });
    }, 3000);
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
            <div
              className={`panel active ${
                this.state.isPhotoClicked ? "clicked" : ""
              }`}
            >
              <h2 className="vertical-text">E-COMMERCE BIZ</h2>
              <div className="additional-text ">
                <p className="text">
                  Over the past four years, I've been running a successful
                  Shopify dropshipping business as a side hustle, specializing
                  in sneakers and clothes. Throughout this journey, I've tested
                  and used a plethora of Shopify apps, including tools for
                  automation like Zapier and IFTTT, as well as Instagram
                  auto-post apps. This hands-on experience has allowed me to
                  fine-tune my technical skills and deepen my understanding of
                  eCommerce strategies and market trends. This side venture is
                  not just a business, but an ongoing commitment to learning,
                  testing, and adapting in the evolving world of eCommerce.
                  Website:{" "}
                  <a
                    href="https://collections-shop.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linked"
                  >
                    collections-shop.com/
                  </a>
                </p>
              </div>
              <div
                className={`image-container ${
                  this.state.isImageActive[0] ? "active" : ""
                }`}
              >
                <img
                  src="https://i.ibb.co/VqrM9Yr/logo-color.jpg"
                  alt="Essence-01"
                  className={`image unvisible ${
                    this.state.isImageActive[0] ? "active" : ""
                  }`}
                  onClick={() => this.handleImageClick(0)}
                />
                <img
                  src="https://i.ibb.co/kSqnfxc/logo.png"
                  alt="Essence-02"
                  className={`image unvisible ${
                    this.state.isImageActive[1] ? "active" : ""
                  }`}
                  onClick={() => this.handleImageClick(1)}
                />
              </div>
            </div>
            <div className="panel bg-image-2">
              <h2 className="vertical-text">SHOPIFY AUTOMATION</h2>
              <div className="additional-text ">
                <p>
                  The Automated Sneaker Data Scraper project began
                  unintentionally when I couldn't find a programmer on Fiverr
                  who could complete the task within a reasonable timeframe.
                  Fueled by necessity, I took matters into my own hands and
                  created my first-ever Python script: a multi-threaded program
                  that efficiently scrapes sneaker product data from Yupoo
                  albums. As my first foray into Python programming, this
                  project demonstrates my ability to quickly learn new languages
                  and technologies, create custom web scraping solutions, handle
                  complex data structures, and implement concurrent programming
                  techniques in Python. For more details, you can find the full
                  documentation on my GitHub repository by clicking on this{" "}
                  <a
                    href="https://github.com/mirzaAsca/yupoo-to-shopify-CSV-method"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linked"
                  >
                    link
                  </a>
                  . Additionally, you can watch a demo of the script in action
                  in this{" "}
                  <a
                    href="https://www.youtube.com/watch?v=jWGo6DZl4ng&ab_channel=mirzaasca7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linked"
                  >
                    video
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="panel bg-image-3">
              <h2 className="vertical-text">SPA DESIGN</h2>
              <div className="additional-text ">
                <p>
                  When I stepped into the wellness industry with "Reina," I saw
                  an opportunity to bring cupping therapy, skincare, and spa
                  services under one accessible brand. As a hands-on team
                  member, I took part in designing a straightforward logo,
                  crafting informative flyers, generating clear admission
                  tickets, and conceptualizing the visuals for their glass
                  portals. These efforts gave Reina a recognizable look and
                  feel. Today, Reina stands as a reliable choice for folks
                  looking for quality relaxation and wellness services. This
                  project serves as a solid example of the impact of thoughtful,
                  hands-on branding in the business world. Instagram:{" "}
                  <a
                    href="https://www.instagram.com/reina.sarajevo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linked"
                  >
                    reina.sarajevo
                  </a>
                </p>
              </div>
              <div
                className={`image-container ${
                  this.state.isImageActive[0] ? "active" : ""
                }`}
              >
                <img
                  src="https://i.ibb.co/jW0Gnfq/Essence-01.jpg"
                  alt="Essence-01"
                  className={`image ${
                    this.state.isImageActive[0] ? "active" : ""
                  }`}
                  onClick={() => this.handleImageClick(0)}
                />
                <img
                  src="https://i.ibb.co/wQRHMVP/288679466-1184419679013127-5853861956908273841-n.jpg"
                  alt="Essence-02"
                  className={`image ${
                    this.state.isImageActive[1] ? "active" : ""
                  }`}
                  onClick={() => this.handleImageClick(1)}
                />
              </div>
            </div>

            <div className="panel bg-image-4">
              <h2 className="vertical-text">LOGO REBRANDING</h2>
              <div className="additional-text ">
                <p>
                  Tasked with rebranding a driving school with over 20 years of
                  history, the goal was to freshen up the look while keeping its
                  familiar feel. We had to strike a balance - the owner wanted
                  to maintain the school's recognizable colors, shapes, and
                  fonts. So, rather than a complete overhaul, we subtly updated
                  its appearance. While it might not seem "modern" by current
                  standards, it's a respectful nod to the school's long-standing
                  tradition. Check out the before-and-after photos below to see
                  the thoughtful transformation that celebrates the school's
                  commitment to quality instruction. Rebranding isn't always
                  about drastic change, sometimes it's about enhancing what's
                  already there.
                </p>
              </div>
              <div
                className={`image-container ${
                  this.state.isImageActive[0] ? "active" : ""
                }`}
              >
                <img
                  src="https://i.ibb.co/0GBRVDP/30-05-2023-22-51-00-REC.png"
                  alt="Essence-01"
                  className={`image ${
                    this.state.isImageActive[0] ? "active" : ""
                  }`}
                  onClick={() => this.handleImageClick(0)}
                />
                <img
                  src="https://i.ibb.co/64T8hzr/JPG-Logo.jpg"
                  alt="Essence-02"
                  className={`image ${
                    this.state.isImageActive[1] ? "active" : ""
                  }`}
                  onClick={() => this.handleImageClick(1)}
                />
              </div>
            </div>
            <div className="panel bg-image-5">
              <h2 className="vertical-text">VIDEO PROD</h2>
              <div className="additional-text ">
                <p>
                  I created a driving guide{" "}
                  <a
                    href="https://www.youtube.com/watch?v=2Gam-53sMcE&ab_channel=senad.instruktor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linked"
                  >
                    video
                  </a>
                  , recording real traffic routes using a camera-mounted
                  vehicle. Edited with Sony Vegas Pro, the footage was
                  transformed into a clear and concise video. After rendering, I
                  uploaded the final product to YouTube, where it has garnered
                  over 50,000 views. This project is a testament to my ability
                  in producing educational content that resonates with the
                  intended audience – new drivers seeking practical learning
                  materials.
                </p>
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
