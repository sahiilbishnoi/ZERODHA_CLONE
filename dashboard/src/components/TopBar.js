import React from "react";

import Menu from "./Menu";
import axios from "axios";

const TopBar = () => {
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3002/logout", {}, { withCredentials: true });
      window.location.href = "http://localhost:3001/login";
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>

      <Menu />
    </div>
  );
};

export default TopBar;