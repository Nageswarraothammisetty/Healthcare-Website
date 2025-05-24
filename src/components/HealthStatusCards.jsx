import { healthData } from "../data/healthData";
import "../styles/Dashboard.css";

const HealthStatusCards = () => {
  return (
    <div className="health-status-cards">
      {healthData.map((item, index) => (
        <div key={index} className={`health-card ${item.status}`}>
          <h3 className="card-title">{item.name}</h3>
          <p className="card-date">{item.date}</p>
          <div className="status-indicator">
            {item.status === "healthy" ? "✓" : "⚠"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
