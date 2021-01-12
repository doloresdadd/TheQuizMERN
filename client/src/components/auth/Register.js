import React, { Fragment } from "react";

const Register = () => {
  return (
    <Fragment>
      <div class="section center-align">
        <div class="row">
          <h3>Register</h3>
        </div>
      </div>
      <div class="section valign-wrapper center-align">
        <div class="row">
          <div class="col s12 m12 l12 center-align">
            <div class="card login-container center-align">
              <div class="card-content">
                <form action="">
                  <div class="row">
                    <div class="input-field col s12">
                      <input
                        placeholder="Username"
                        id="username"
                        type="text"
                        class="validate"
                      />
                      <label for="email">Username</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input
                        placeholder="Email"
                        id="email"
                        type="email"
                        class="validate"
                      />
                      <label for="email">Email</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input
                        placeholder="Password"
                        type="password"
                        class="validate"
                      />
                      <label for="password">Password</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="input-field col s12">
                      <input
                        placeholder="Confirm Password"
                        type="password"
                        class="validate"
                      />
                      <label for="password">Confirm Password</label>
                    </div>
                  </div>
                  <button
                    class="btn waves-effect waves-light btn-large center-align submitBtn deep-purple lighten-5 black-text"
                    type="submit"
                    name="action"
                    id="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
              <div class="card-action center-align">
                <a href="register.html">
                  Already registered? Click here to login.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
