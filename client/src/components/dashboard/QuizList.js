import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Card } from "react-materialize";

const QuizList = ({ auth, quizzes }) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

QuizList.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  quizzes: state.quizzes,
});

export default connect(mapStateToProps, {})(QuizList);
