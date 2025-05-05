import React, { useState } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';



const Navigation = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <a href="#" className="nav-logo" style={{fontWeight:"bold"}}>Rajdeep</a>
        <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
         
          <li className="nav-item"> <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
          <li className="nav-item"> <Link to="/test"  className="nav-link" onClick={closeMenu}>Test</Link></li>
          <li className="nav-item"><Link to="/nasa"  className="nav-link" onClick={closeMenu}>Nasa API</Link></li>
          <li className="nav-item"><Link to="/astor"  className="nav-link" onClick={closeMenu}>Aesteroid</Link></li>
          <li className="nav-item"><Link to="/hooks"  className="nav-link" onClick={closeMenu}>Hooks</Link></li>
          <li className="nav-item"><Link to="/dashboard"  className="nav-link" onClick={closeMenu}>Dashboard</Link></li>
          <li className="nav-item"><Link to="/crudmysql" className="nav-link" onClick={closeMenu}>CRUD</Link></li>
        
        
        </ul>
        <div
          className={`hamburger ${menuActive ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
