import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import "../styles/Dashboard.css";

const DashboardOverview = () => {
  return (
    <section className="dashboard-overview">
      <AnatomySection />
      <HealthStatusCards />
    </section>
  );
};

export default DashboardOverview;
