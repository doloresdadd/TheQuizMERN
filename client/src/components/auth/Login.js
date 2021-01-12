import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-materialize";

const Login = () => {
  return (
    <Fragment>
      <div className="section center-align">
        <div className="row">
          <h3>Login</h3>
        </div>
      </div>

      <div className="section valign-wrapper center-align">
        <div className="row">
          <div className="col s12 m12 l12 center-align">
            <div className="card login-container center-align">
              <div className="card-content">
                <form action="">
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="email" type="email" className="validate" />
                      <label for="email">Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input type="password" className="validate" />
                      <label for="password">Password</label>
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
                <Link className="indigo-text" to="/register">
                  Don't have a login? Click here to register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
