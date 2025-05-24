import { navigationLinks } from "../data/navigation";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-content">
        <h3 className="sidebar-heading">General</h3>
        <ul className="sidebar-links">
          {navigationLinks.map((link) => (
            <li key={link.text} className="sidebar-link">
              <span className="link-icon">{link.icon}</span>
              <span className="link-text">{link.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
