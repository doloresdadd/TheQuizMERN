import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "react-materialize";
import { Link } from "react-router-dom";
import { getQuizzes } from "../../actions/quizzes";
import Popularity from "./Popularity";
import Spinner from "../layout/Spinner";

const Landing = ({ getQuizzes, loading }) => {
  useEffect(() => {
    getQuizzes("?sort=-timesPlayed");
  }, [getQuizzes]);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="row">
            <h1>Welcome To The Quiz</h1>
          </div>
          <div className="row">
            <Popularity />
          </div>
          <div className="row">
            <h5>Create your own quiz</h5>
            <br />
            <Link to="/createquiz">
              <Button className="indigo">Create Quiz</Button>
            </Link>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Landing.propTypes = {
  getQuizzes: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loading: state.quiz.loading,
});

export default connect(mapStateToProps, { getQuizzes })(Landing);
