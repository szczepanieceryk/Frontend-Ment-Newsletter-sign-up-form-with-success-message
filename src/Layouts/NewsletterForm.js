import Button from "react-bootstrap/Button";
import "../styles/_Form.scss";
const NewsletterForm = () => {
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
          />
        </label>
        <Button type="submitt" className="btn-form-submit">
          Subscribe to monthly newsletter
        </Button>
      </form>
    </div>
  );
};

export default NewsletterForm;
