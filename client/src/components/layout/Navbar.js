import React from "react";
import { Navbar, Icon, NavItem } from "react-materialize";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const MyNavbar = () => {
  return (
    <div>
      <nav>
        <Navbar
          alignLinks="right"
          brand={
            <Link to="/" className="brand-logo">
              <FontAwesomeIcon icon={faGraduationCap} />
              <span> The Quiz</span>
            </Link>
          }
          className="indigo"
          id="mobile-nav"
          menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: "left",
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true,
          }}
          sidenav={<li>Custom node!</li>}
        >
          <NavItem>
            <Link to="/">Quizzes</Link>
          </NavItem>
          <NavItem>
            <Link to="/login">Login</Link>
          </NavItem>
        </Navbar>
      </nav>
    </div>
  );
};

export default MyNavbar;
