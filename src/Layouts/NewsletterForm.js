import { useState } from "react";
import Button from "react-bootstrap/Button";
import "../styles/_Form.scss";

const NewsletterForm = ({ setUserMail, setIsMailSubmitted }) => {
  // Local state to store emal passed to input
  // To update global app state with email only when form is submitted
  const [email, setEmail] = useState();

  const handleUserMail = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUserMail(email);
    setIsMailSubmitted(true);
  };

  return (
    <div className="form-wrapper">
      <form action="">
        <label htmlFor="newsletter-email-input-id" className="newsletter-label">
          Email address
          <input
            className="newsletter-input"
            type="email"
            id="newsletter-email-input-id"
            placeholder="email@company.com"
            onChange={handleUserMail}
          />
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
