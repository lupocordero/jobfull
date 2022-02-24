import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import mainlogo from "../012-code-2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRocket, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

const tabs = [{
  route: "/home",
  icon: faRocket,
  label: "Home"
},{
  route: "/favorites",
  icon: faHeart,
  label: "Favs"
},{
  route: "/profile",
  icon: faUserAstronaut,
  label: "Login"
}]

function Navigation(props) {
  return (
    <div>
        {/*TOP NAV*/}
    <nav
      className="navbar navbar-expand-md navbar-light d-none d-lg-block sticky-top"
      role="navigation"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <div className="top">
            <img className="mainlogo" src={mainlogo} alt="main logo" />
            <h1 className="App-logo">JOBSS</h1>
          </div>
        </a>

        <Nav className="ml-auto">
          <NavItem>
            <NavLink to="/favorites" className="nav-link">
              Favorites
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profile" className="nav-link">
              Profile
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </nav>

    {/*MOBILE NAV*/}
    <nav className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav" role="navigation">
    <Nav className="w-100">
      <div className=" d-flex flex-row justify-content-around w-100">
        {
          tabs.map((tab, index) =>(
            <NavItem key={`tab-${index}`}>
              <NavLink to={tab.route} className="nav-link bottom-nav-link">
                <div className="row d-flex flex-column justify-content-center align-items-center">
                  <FontAwesomeIcon size="lg" icon={tab.icon}/>
                  <div className="bottom-tab-label">{tab.label}</div>
                </div>
              </NavLink>
            </NavItem>
          ))
        }
      </div>
    </Nav>
  </nav>
  </div>
  );
}

export { Navigation };
