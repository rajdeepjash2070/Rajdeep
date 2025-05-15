import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCode, faSoccerBall } from "@fortawesome/free-solid-svg-icons";


function Navigation() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span>Rajdeep</span>
            {/* <i className="fas fa-code"></i> */}
            <span className="icon">
            <FontAwesomeIcon icon={faCode} />
            </span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/test"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Test
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/nasa"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                NASA API1
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/astor"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                NASA API2
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/hooks"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                React Hooks
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/dashboard"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                React Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/crud"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                CRUD Ops
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <FontAwesomeIcon icon={faBars} />{" "}
              </span>
            ) : (
              <span className="icon">
                <FontAwesomeIcon icon={faBars} />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;