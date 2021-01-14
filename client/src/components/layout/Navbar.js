import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { Navbar } from "react-materialize";

const MyNavbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li>
        <Link to="/">Quizzes</Link>
      </li>
      <li>
        <Link to="/myQuizzes">Quiz Manager</Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          Logout
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li>
        <Link to="/">Quizzes</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <div>
      <nav className="indigo">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            <FontAwesomeIcon icon={faGraduationCap} />
            <span> The Quiz</span>
          </Link>
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(MyNavbar);
