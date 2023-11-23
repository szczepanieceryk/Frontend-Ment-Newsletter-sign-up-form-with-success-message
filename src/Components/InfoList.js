import "../styles/_MoreInfo.scss";
// How to use this Component
// It takes prop: points (Array of strings)
// Dynamically generates list elements based on passed Array
const InfoList = ({ points }) => {
  return (
    <div className="info-list-wrapper">
      <ul className="ul-element">
        {points.map((point, index) => (
          <li key={index} className="li-element">
            <span className="li-span-element">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoList;
