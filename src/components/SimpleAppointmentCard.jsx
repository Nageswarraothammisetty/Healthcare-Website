import "../styles/Dashboard.css";

const SimpleAppointmentCard = ({ title, time }) => {
  return (
    <div className="appointment-card">
      <h4 className="appointment-title">{title}</h4>
      <p className="appointment-time">{time}</p>
    </div>
  );
};

export default SimpleAppointmentCard;
