import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { iterateQuizQuestions } from "../../actions/questions";

const Question = ({
  iterateQuizQuestions,
  iterate,
  quiz: {
    title,
    image,
    questions: { questions },
  },
}) => {
  useEffect(() => {
    iterateQuizQuestions();
  }, [iterateQuizQuestions]);

  let currentQuestion = iterate.currentQuestion - 1;

  let selectedOption;
  let correctAnswer;

  function onValueChange(e) {
    selectedOption = e.target.value;
    console.log(selectedOption);
  }

  function onSubmit(e) {
    e.preventDefault();

    let ans = selectedOption;
    // Find correct answer from State
    questions[currentQuestion].question.answers.answer.forEach(question => {
      if (question.isCorrect === true) {
        correctAnswer = question.answerText;
      }
    });
    //Check if answer is correct, if so add 1 to total correct
    if (correctAnswer === ans) {
      iterate.userScore++;
    }

    iterate.currentQuestion++;
    iterateQuizQuestions();
  }

  return (
    <Fragment>
      <div className="card" id="quiz-container">
        <div className="row">
          <div className="card-content" id="question">
            {questions[currentQuestion].question.questionText}
          </div>
        </div>
        <div className="row">
          <div className="card-image center-align" id="image">
            <img src={image} alt="" className="responsive-img" />
          </div>
        </div>
        <div className="row">
          <div className="card-content" id="cardForm">
            <form
              action="#"
              id="answerOptions"
              className="left-align"
              onSubmit={e => onSubmit(e)}
            >
              <p>
                <label>
                  <input
                    name="answers"
                    type="radio"
                    value={
                      questions[currentQuestion].question.answers.answer[0]
                        .answerText
                    }
                    onChange={onValueChange}
                  />
                  <span
                    id="option1"
                    className={
                      questions[currentQuestion].question.answers.answer[0]
                        .isCorrect === true
                        ? "correct"
                        : "incorrect"
                    }
                  >
                    {
                      questions[currentQuestion].question.answers.answer[0]
                        .answerText
                    }
                  </span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    name="answers"
                    type="radio"
                    value={
                      questions[currentQuestion].question.answers.answer[1]
                        .answerText
                    }
                    onChange={onValueChange}
                  />
                  <span
                    id="option2"
                    className={
                      questions[currentQuestion].question.answers.answer[1]
                        .isCorrect === true
                        ? "correct"
                        : "incorrect"
                    }
                  >
                    {
                      questions[currentQuestion].question.answers.answer[1]
                        .answerText
                    }
                  </span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    name="answers"
                    type="radio"
                    value={
                      questions[currentQuestion].question.answers.answer[2]
                        .answerText
                    }
                    onChange={onValueChange}
                  />
                  <span
                    id="option3"
                    className={
                      questions[currentQuestion].question.answers.answer[2]
                        .isCorrect === true
                        ? "correct"
                        : "incorrect"
                    }
                  >
                    {
                      questions[currentQuestion].question.answers.answer[2]
                        .answerText
                    }
                  </span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    name="answers"
                    type="radio"
                    value={
                      questions[currentQuestion].question.answers.answer[3]
                        .answerText
                    }
                    onChange={onValueChange}
                  />
                  <span
                    id="option4"
                    className={
                      questions[currentQuestion].question.answers.answer[3]
                        .isCorrect === true
                        ? "correct"
                        : "incorrect"
                    }
                  >
                    {
                      questions[currentQuestion].question.answers.answer[3]
                        .answerText
                    }
                  </span>
                </label>
              </p>
              <br />
              <button
                className="btn waves-effect waves-light btn-large center-align submitBtn indigo black-text"
                type="submit"
                name="action"
                id="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  quiz: state.quiz.quizzes.data,
  iterate: state.questions,
});

export default connect(mapStateToProps, { iterateQuizQuestions })(Question);
