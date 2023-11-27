import { useState } from "react";
import Button from "react-bootstrap/Button";
import "../styles/_Form.scss";

const NewsletterForm = ({ setUserMail, setIsMailSubmitted }) => {
  // Regex to validate email input
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // Local state to store emal passed to input
  // To update global app state with email only when form is submitted
  const [email, setEmail] = useState("");
  const [isInputValid, setIsInputvalid] = useState(true);

  const handleUserMail = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isEmailInputValidated()) {
      setUserMail(email);
      setIsMailSubmitted(true);
    } else {
      setIsInputvalid(false);
      console.log("input not validated!");
    }
  };

  const isEmailInputValidated = () =>
    email.length > 0 && email.match(validRegex);

  return (
    <div className="form-wrapper">
      <form action="">
        <label htmlFor="newsletter-email-input-id" className="newsletter-label">
          Email address
          <input
            className={
              isInputValid ? "newsletter-input" : "newsletter-input error"
            }
            type="email"
            id="newsletter-email-input-id"
            placeholder="email@company.com"
            onChange={handleUserMail}
          />
          <small className="error-msg">
            {isInputValid ? "" : "Valid email required"}
          </small>
        </label>
        <Button
          onClick={handleFormSubmit}
          type="submit"
          className="btn-form-submit"
        >
          Subscribe to monthly newsletter
        </Button>
      </form>
    </div>
  );
};

export default NewsletterForm;
