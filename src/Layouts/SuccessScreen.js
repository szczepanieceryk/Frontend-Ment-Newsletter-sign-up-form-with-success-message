import Button from "react-bootstrap/Button";

import successIcon from "../images/icon-success.svg";

import "../styles/_SuccessScreen.scss";

const SuccessScreen = ({ userMail }) => {
  return (
    <div className="success-screen-wrapper">
      <div className="success-content">
        <img src={successIcon} alt="success icon" />
        <h1 className="success-title">
          Thanks for <br />
          subscribing!
        </h1>
        <p className="success-message">
          A confirmation email has been sent to{" "}
          <strong className="user-mail">{userMail}</strong>. Please open it and
          click the button inside to confirm your subscription.
        </p>
        <a href="/">
          <Button className="btn-form-submit">Dismiss message</Button>
        </a>
      </div>
    </div>
  );
};

export default SuccessScreen;
