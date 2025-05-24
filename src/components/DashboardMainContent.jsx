import DashboardOverview from "./DashboardOverview";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import "../styles/Dashboard.css";

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main">
      <DashboardOverview />
      <div className="dashboard-grid">
        <CalendarView />
        <UpcomingSchedule />
        <ActivityFeed />
      </div>
    </main>
  );
};

export default DashboardMainContent;
