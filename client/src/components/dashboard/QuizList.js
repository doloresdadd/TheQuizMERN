import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Card, Button } from "react-materialize";
import { Link } from "react-router-dom";

const QuizList = ({
  auth: {
    loading,
    user: {
      data: { quizzes },
    },
  },
}) => {
  return (
    <Fragment>
      {loading ? (
        <h4>Loading</h4>
      ) : (
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

                  {quizzes.length > 0 ? (
                    quizzes.map(quiz => (
                      <tbody>
                        <tr key={quiz.id}>
                          <td>
                            <Link to="/quiz/{quiz.id}">{quiz.title}</Link>
                          </td>
                          <td>{quiz.timesPlayed}</td>
                          <td>{quiz.averageScore}</td>
                        </tr>
                      </tbody>
                    ))
                  ) : (
                    <Fragment>
                      <h4>You have not created any quizzes yet</h4>
                      <Button className="indigo">Create New Quiz</Button>
                    </Fragment>
                  )}
                </table>
              </div>
            </Card>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

QuizList.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(QuizList);
