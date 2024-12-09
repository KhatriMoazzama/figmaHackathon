import React from "react";
import { FiSearch, FiSettings } from "react-icons/fi";
import { AiOutlineBell } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header">
      {/* Left Section */}
      <div className="header-left">
        {/* Logo */}
        <h1 className="logo">MORENT</h1>
        </div>

        
      {/* Search Bar */}
<div className="search-bar">
  <span className="icon-search">
    <FiSearch size={20} />
  </span>
  <input
    type="text"
    placeholder="Search something here"
  />
</div>


      {/* Right Section */}
      <div className="header-right">
        <span className="icon">
        <FiSettings size={20}  /> {/* Settings Icon */}
        </span>
       
        <div className="notification">
          <span className="icon">
          <AiOutlineBell size={20}  />
          </span>
          
          <span className="notification-dot"></span>
        </div>
        <div className="profile">
          <div className="profile-placeholder"><img src="Profil.png"/></div>
        </div>
      </div>

    </div>
  );
};

export default Header;
