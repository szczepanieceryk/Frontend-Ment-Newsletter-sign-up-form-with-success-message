import Button from "react-bootstrap/Button";

import successIcon from "../images/icon-success.svg";

import "../styles/_SuccessScreen.scss";

const SuccessScreen = ({ mail }) => {
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
          <strong>
            <a href="/">{mail}</a>
          </strong>
          . Please open it and click the button inside to confirm your
          subscription.
        </p>
        <Button className="btn-form-submit">Dismiss message</Button>
      </div>
    </div>
  );
};

export default SuccessScreen;
