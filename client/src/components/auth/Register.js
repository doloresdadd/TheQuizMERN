import React, { Fragment, useState } from "react";
import { connect } from "react-redux";

import { Button } from "react-materialize";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const { username, email, password, password2 } = formData;

  const onchange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ username, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <div className="section center-align">
        <div className="row">
          <h3>Register</h3>
        </div>
      </div>
      <div className="section valign-wrapper center-align">
        <div className="row">
          <div className="col s12 m12 l12 center-align">
            <div className="card login-container center-align">
              <div className="card-content">
                <form
                  className="form"
                  action="create-profile"
                  onSubmit={e => onSubmit(e)}
                >
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        name="username"
                        type="text"
                        value={username}
                        onChange={e => onchange(e)}
                      />
                      <label htmlFor="username">Username</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={e => onchange(e)}
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        name="password"
                        type="password"
                        value={password}
                        onChange={e => onchange(e)}
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        name="password2"
                        type="password"
                        value={password2}
                        onChange={e => onchange(e)}
                      />
                      <label htmlFor="password2">Confirm Password</label>
                    </div>
                  </div>
                  <Button
                    className="btn waves-effect waves-light btn-large center-align submitBtn indigo white-text"
                    type="submit"
                    name="action"
                    id="submit"
                  >
                    Submit
                  </Button>
                </form>
              </div>
              <div className="card-action center-align">
                <Link className="indigo-text" to="/login">
                  Already registered? Click here to login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
