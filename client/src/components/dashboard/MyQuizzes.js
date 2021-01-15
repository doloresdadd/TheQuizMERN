import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Card } from "react-materialize";
import { getCurrentProfile } from "../../actions/profile";

const MyQuizzes = ({ getCurrentProfile, auth, profile }) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  return (
    <Fragment>
      <div className="row valign-wrapper" id="content-row">
        <div className="col s8">
          <Card className="white " textClassName="black-text">
            <div className="row">
              <span className="card-title">My Quizzes</span>
            </div>
            <div className="row">
              <table className="striped">
                <thead>
                  <tr>
                    <th>Quiz Name</th>
                    <th>Times Played</th>
                    <th>Average Score</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Alvin</td>
                    <td>Eclair</td>
                    <td>$0.87</td>
                  </tr>
                  <tr>
                    <td>Alan</td>
                    <td>Jellybean</td>
                    <td>$3.76</td>
                  </tr>
                  <tr>
                    <td>Jonathan</td>
                    <td>Lollipop</td>
                    <td>$7.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
        <div className="col s4">
          <div className="container">
            <Button className="indigo">Create New Quiz</Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

MyQuizzes.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(MyQuizzes);
