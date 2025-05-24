import { calendarData } from "../data/calendar";
import "../styles/Dashboard.css";

const CalendarView = () => {
  return (
    <div className="calendar-view">
      <h2 className="section-title">October 2021</h2>
      <table className="calendar-grid">
        <thead>
          <tr>
            {["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {calendarData.days.map((day, index) => (
              <td key={index}>
                <div className="day-number">{day.day}</div>
                {day.times.map((time, timeIndex) => (
                  <div key={timeIndex} className="appointment-time">
                    {time}
                  </div>
                ))}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CalendarView;
