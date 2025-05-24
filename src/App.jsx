import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";
import Header from "./components/Header";
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <div className="app">
        <Header />
        <div className="main-container">
          <Sidebar />
          <DashboardMainContent />
        </div>
      </div>
    </>
  );
}

export default App;
