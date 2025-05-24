import { healthData } from "../data/healthData";
import "../styles/Dashboard.css";
import Anotomy from "../assets/images/anotomy.jpg";
const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-image">
        {/* Placeholder for human body image */}
        <img src={Anotomy} alt="Human body outline" className="body-image" />
        {healthData.map((item, index) => (
          <div
            key={index}
            className={`health-indicator ${item.status}`}
            style={{
              top: `${item.position.top}%`,
              left: `${item.position.left}%`,
            }}
          >
            <div className="indicator-dot"></div>
            <span className="indicator-text">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;
