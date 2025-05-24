import "../styles/Dashboard.css";

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <h2 className="section-title">Activity</h2>
      <ul className="activity-list">
        <li>Healthy Heart</li>
        <li>Healthy Log</li>
        <li>Bone</li>
        <li>Date: 26 Oct 2021</li>
      </ul>
      <div className="activity-chart">
        <div className="chart-bar" style={{ height: "60%" }}></div>
        <div className="chart-bar" style={{ height: "40%" }}></div>
        <div className="chart-bar" style={{ height: "80%" }}></div>
        <div className="chart-bar" style={{ height: "30%" }}></div>
        <div className="chart-bar" style={{ height: "50%" }}></div>
      </div>
    </div>
  );
};

export default ActivityFeed;
