import InfoList from "../Components/InfoList";
import Header from "../Components/Header";

import bgcImageoMobile from "../images/illustration-sign-up-mobile.svg";
import NewsletterForm from "./NewsletterForm";

import "../styles/_Main.scss";

const Main = () => {
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
        <img src={bgcImageoMobile} alt="colorful design icon" />
      </div>
      <div className="main-info">
        <Header title={headerTitle} banner={headerBanner} />
        <InfoList points={infoPoints} />
        <NewsletterForm />
      </div>
    </div>
  );
};

export default Main;
