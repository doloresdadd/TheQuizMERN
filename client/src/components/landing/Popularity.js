import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";

import { connect } from "react-redux";

const Popularity = ({
  quiz: {
    quizzes: { count, data },
  },
  loading,
}) => {
  console.log(count);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div className="col s12 ">
          <h3>Most Popular</h3>
          <table className="striped">
            <thead>
              <tr>
                <th>Quiz Name</th>

                <th>Average Score</th>
                <th>Times Played</th>
              </tr>
            </thead>
            <tbody>
              {count > 0 ? (
                data.map(quiz => (
                  <tr key={quiz._id}>
                    <td>
                      <Link to="/quiz/{quiz._id}">{quiz.title}</Link>
                    </td>

                    <td>{quiz.averageScore}</td>
                    <td>{quiz.timesPlayed}</td>
                  </tr>
                ))
              ) : (
                <Fragment> Not Working</Fragment>
              )}
            </tbody>
          </table>
        </div>
      )}
    </Fragment>
  );
};

Popularity.propTypes = {
  quiz: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
  quiz: state.quiz,
});

export default connect(mapStateToProps, {})(Popularity);
