import { upcomingAppointments } from "../data/appointments";
import SimpleAppointmentCard from "./SimpleAppointmentCard";
import "../styles/Dashboard.css";

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h2 className="section-title">The Upcoming Schedule</h2>

      {upcomingAppointments.map((dayAppointments, index) => (
        <div key={index} className="day-schedule">
          <h3 className="day-title">On {dayAppointments.day}</h3>
          {dayAppointments.appointments.map((appointment, apptIndex) => (
            <SimpleAppointmentCard
              key={apptIndex}
              title={appointment.title}
              time={appointment.time}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
