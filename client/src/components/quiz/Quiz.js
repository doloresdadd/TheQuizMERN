import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";

import { getQuizById } from "../../actions/quizzes";

import Question from "./Question";
import GameOver from "./GameOver";

const Quiz = ({ getQuizById, quiz, iterate }) => {
  const { _Id } = useParams();

  useEffect(() => {
    getQuizById(_Id);
  }, [_Id, getQuizById]);

  let currentQuestion = iterate.currentQuestion;
  let quizLength = iterate.noOfQuestions;
  console.log(currentQuestion, quizLength);

  return (
    <Fragment>
      {quiz.quizzes === null ? (
        <Spinner />
      ) : (
        <Fragment>
          {currentQuestion > quizLength ? <GameOver /> : <Question />}
        </Fragment>
      )}
    </Fragment>
  );
};

Quiz.propTypes = {
  getQuizById: PropTypes.func.isRequired,

  quiz: PropTypes.object.isRequired,
  iterate: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  quiz: state.quiz,
  iterate: state.questions,
});

export default connect(mapStateToProps, { getQuizById })(Quiz);
