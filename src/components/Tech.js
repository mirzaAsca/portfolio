import React from "react";
import "./tech.css";
import ScrollButton from "./ScrollButton";

const Tech = () => {
  // Replace the image URLs with the ones you want to use
  const imageUrls = [
    "https://c4.wallpaperflare.com/wallpaper/453/129/282/html5-hyper-text-markup-language-html-wallpaper-preview.jpg",
    "https://w0.peakpx.com/wallpaper/583/455/HD-wallpaper-javascript-bts-coding-kod-kodlama-code-phone-lock-logo-locked.jpg",
    "https://i.ibb.co/2NkpLbR/f-3-Ix1i87-Tm-P4kqfl-Uj-GAt2-Xv-Kc-Bya-So-RC.png",
    "https://i.ibb.co/rbHCLCr/react-js-logo-no.jpg",
    "https://res.cloudinary.com/practicaldev/image/fetch/s--e_rqeB7o--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/2400/1*FPtQLT2Zk-baHficCz_mXQ.png",
    "https://img.freepik.com/free-icon/snakes_318-368381.jpg",
    "https://www.kindpng.com/picc/m/744-7444441_selenium-hd-png-download.png",
  ];

  const imageUrls2 = [
    "https://cloud7.news/wp-content/uploads/2020/12/GitHub-introduces-dark-mode-and-sponsors.jpg",
    "https://c.mql5.com/i/og/mql5-logo-fb-2.png",
    "https://digitalintheround.com/wp-content/uploads/2020/09/Shopify.jpg",
    "https://biglinden.com/wp-content/uploads/2022/12/WordPress-LOGO-LOGO-WORDPRESS-1024x901.webp",
    "https://downloadr2.apkmirror.com/wp-content/uploads/2023/02/56/63ecfd16c35ea.png",
    "data:image/png;base64,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",
    "https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png",
    "https://images.squarespace-cdn.com/content/v1/5cc22d6593a63233d214110c/1597710652025-QEY2UL92MLE1E2BX4WSJ/Vercel+%28Zeit%29.jpg",
    "https://wallpapers.com/images/hd/chatgpt-ec8vm1rk6a8wcx8d.jpg",
    "https://i.pinimg.com/originals/63/a7/b1/63a7b1894b3210d07e434e9d12170586.png",
  ];

  const codingText = [
    "HTML",
    "JavaScript",
    "CSS",
    "React",
    "Node.js",
    "Python",
    "Selenium"
  ];
  
  const nonCodingText = [
    "GitHub",
    "MQL5",
    "Shopify",
    "WordPress",
    "IFTTT",
    "Zapier",
    "Firebase",
    "Vercel",
    "ChatGPT",
    "Figma"
  ];

  const doubleImageUrls = imageUrls.concat(imageUrls);
  const doubleImageUrls2 = imageUrls2.concat(imageUrls2);

  {doubleImageUrls.map((url, index) => (
    <figure key={index} className="card tech-card">
      <img key={index} src={url} alt={`Coding Tech ${index + 1}`} title={codingText[index % codingText.length]} />
    </figure>
  ))}
  
  {doubleImageUrls2.map((url, index) => (
    <figure key={index} className="card tech-card">
      <img key={index} src={url} alt={`Non-Coding Tech ${index + 1}`} title={nonCodingText[index % nonCodingText.length]} />
    </figure>
  ))}

  const percentage1 = (imageUrls.length / doubleImageUrls.length) * 100;
  const percentage2 = (imageUrls2.length / doubleImageUrls2.length) * 100;

  return (
    <section id="tech-section">
      <div className="centered-container">
        <div className="text centered-content" id="about-section">
          <p>CODING TECH</p>
          <div className="tech_used">
            <div className="scrolling">
              {doubleImageUrls.map((url, index) => (
                <figure key={index} className="card tech-card">
                  {" "}
                  <img 
                    key={index} 
                    src={url} 
                    alt={`Coding Tech ${index + 1}`} 
                    title={codingText[index % codingText.length]} // Added title attribute
                  />
                </figure>
              ))}
            </div>
          </div>

          <p>NON-CODING TECH</p>
          <div className="tech_used">
            <div className="scrolling scrolling2">
              {doubleImageUrls2.map((url, index) => (
                <figure key={index} className="card tech-card">
                  <img
                    key={index}
                    src={url}
                    alt={`Non-Coding Tech ${index + 1}`}
                    title={nonCodingText[index % nonCodingText.length]} // Added title attribute
                  />
                </figure>
              ))}
            </div>
          </div>
          <ScrollButton
            className="more-button"
            buttonText="See my other experience ⬇"
            sectionId="biz-section"
          />
        </div>
      </div>
    </section>
  );
};

export default Tech;