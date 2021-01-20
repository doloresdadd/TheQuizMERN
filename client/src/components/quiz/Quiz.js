import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";

import { getQuizById } from "../../actions/quizzes";
import Question from "./Question";

const Quiz = ({ getQuizById, quiz }) => {
  const { _Id } = useParams();

  useEffect(() => {
    getQuizById(_Id);
  }, [_Id, getQuizById]);

  return (
    <Fragment>
      {quiz.quizzes === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <Question />
        </Fragment>
      )}
    </Fragment>
  );
};

Quiz.propTypes = {
  getQuizById: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  quiz: state.quiz,
});

export default connect(mapStateToProps, { getQuizById })(Quiz);
