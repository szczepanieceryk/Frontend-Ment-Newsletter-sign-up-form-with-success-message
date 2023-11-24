import InfoList from "../Components/InfoList";
import Header from "../Components/Header";

import bgcImageoMobile from "../images/illustration-sign-up-mobile.svg";

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
    <>
      <div className="design-wrapper">
        <img src={bgcImageoMobile} alt="colorful design icon" />
      </div>
      <div className="main-wrapper">
        <Header title={headerTitle} banner={headerBanner} />
        <InfoList points={infoPoints} />
      </div>
    </>
  );
};

export default Main;
