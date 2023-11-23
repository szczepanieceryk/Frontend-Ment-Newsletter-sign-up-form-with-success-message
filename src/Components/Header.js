import "../styles/_Header.scss";
// How to use this Component
// It takes props: title, banner - both are strings
// Dynamically generates h1 & span elements based on passed props
const Header = ({ title, banner }) => {
  return (
    <div className="header-wrapper">
      <h1 className="header-title">{title}</h1>
      <span className="header-banner">{banner}</span>
    </div>
  );
};

export default Header;
