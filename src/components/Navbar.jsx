// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'


const Navbar = ({ onUploadClick, onMyNotesClick }) => {
  // const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const userInfo = JSON.parse(localStorage.getItem("userInfo")); // ✅ Get logged-in user info
  const userId = userInfo?.id;

  // const toggleMenu = () => setMenuOpen(!menuOpen);  
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  return (
    <header id="nav-bar">
      <div id="nav-container">
        <div id="nav-bar-wrap">
          <NavLink to="/userHomePage">
            <img src={logo} alt="NoteShare" id="logo" />
          </NavLink>
      
          <div id="nav-links">
            <NavLink to="/userHomePage"><button id="nav-btn">Home</button></NavLink>
            <button id="nav-btn" onClick={onMyNotesClick}>My Notes</button>
            <button id="nav-btn" onClick={onUploadClick}>Upload</button>
            <NavLink to="/browse"><button id="nav-btn">Browse</button></NavLink>
          </div>

          {/* Mobile Avatar Toggle */}
          <div id="avatar-menu-mobile">
            <img src="/images/avatar.png" alt="User" onClick={toggleDropdown} />
            {dropdownOpen && (
              <div id="avatar-dropdown-mobile">
                <NavLink to="/userHomePage" onClick={() => setDropdownOpen(false)}>Home</NavLink>
                <button onClick={() => { onMyNotesClick(); setDropdownOpen(false); }}>My Notes</button>
                <button onClick={() => { onUploadClick(); setDropdownOpen(false); }}>Upload</button>
                <NavLink to="/browse" onClick={() => setDropdownOpen(false)}>Browse</NavLink>
                <NavLink to={`/userProfile/${userId}`} onClick={() => setDropdownOpen(false)}>My Profile</NavLink>
                <NavLink to="/settings" onClick={() => setDropdownOpen(false)}>Settings</NavLink>
                <NavLink to="/about" onClick={() => setDropdownOpen(false)}>About</NavLink>
                <button onClick={() => { handleLogout(); setDropdownOpen(false); }}>Logout</button>
              </div>
            )}
          </div>

          {/* Desktop User Section */}
          <div id="user-section">
            <img src="/images/avatar.png" alt="User" id="user-avatar" onClick={toggleDropdown} />
            {dropdownOpen && (
              <div id="dropdown">
                <span onClick={() => navigate(`/userProfile/${userId}`)}>My Profile</span>
                <span onClick={() => navigate('/settings')}>Settings</span>
                <span onClick={() => navigate('/about')}>About</span>
                <span onClick={handleLogout}>Logout</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
