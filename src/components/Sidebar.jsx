import React from 'react';
import '../styles/Sidebar.css';
import logo from '../assets/bitlearnslogo.jpg';
import { NavLink } from 'react-router-dom';
// importing icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChalkboardTeacher,
    faUsers,
    faBook,
    faChartPie,
    faBell,
    faGear,
    faPerson,
    faBeer,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <img src={logo} alt="Bitlearns Logo" />
      </div>

      {/* Navigation Menu */}
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/lectures" className={({ isActive }) => (isActive ? 'active' : '')}>
            <FontAwesomeIcon icon={faChalkboardTeacher} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/classes" className={({ isActive }) => (isActive ? 'active' : '')}>
            <FontAwesomeIcon icon={faUsers} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/courses" className={({ isActive }) => (isActive ? 'active' : '')}>
            <FontAwesomeIcon icon={faBook} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/analytics" className={({ isActive }) => (isActive ? 'active' : '')}>
            <FontAwesomeIcon icon={faChartPie} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/notifications" className={({ isActive }) => (isActive ? 'active' : '')}>
            <FontAwesomeIcon icon={faBell} />
          </NavLink>
          </li>
        <li>
          <NavLink to="/settings" className={({ isActive }) => (isActive ? 'active' : '')}>
            <FontAwesomeIcon icon={faGear} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/students" className={({ isActive }) => (isActive ? 'active' : '')}>
            <FontAwesomeIcon icon={faPerson} />
          </NavLink>
          </li>
        <li>
          <NavLink to="/analyticChart" className={({ isActive }) => (isActive ? 'active' : '')}>
            <FontAwesomeIcon icon={faBeer} />
          </NavLink>
        </li>
      </ul>

      {/* Profile Section */}
      <div className="sidebar-profile">
        <img src="/path-to-your-profile-pic.png" alt="Profile" />
      </div>
    </div>
  );
};

export default Sidebar;
