import { useState, useEffect } from "react";
import InfoList from "../Components/InfoList";
import Header from "../Components/Header";
import NewsletterForm from "../Layouts/NewsletterForm";

import bgcImageMobile from "../images/illustration-sign-up-mobile.svg";
import bgcImageDesktop from "../images/illustration-sign-up-desktop.svg";

import "../styles/_MainPage.scss";

const MainPage = ({ setUserMail, setIsMailSubmitted }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const getImageSize = () => {
    if (windowWidth < 768) {
      return bgcImageMobile;
    } else {
      return bgcImageDesktop;
    }
  };

  const headerTitle = "Stay updated!";
  const headerBanner =
    "Join 60,000+ product managers receiving monthly updates on:";

  const infoPoints = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  return (
    <div className="main-wrapper">
      <div className="design-wrapper">
        <img src={getImageSize()} alt="colorful design" />
      </div>
      <div className="main-body">
        <Header title={headerTitle} banner={headerBanner} />
        <InfoList points={infoPoints} />
        <NewsletterForm
          setUserMail={setUserMail}
          setIsMailSubmitted={setIsMailSubmitted}
        />
      </div>
    </div>
  );
};

export default MainPage;
