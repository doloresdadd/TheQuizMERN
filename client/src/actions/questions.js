import { ITERATE_QUIZ_QUESTIONS, GAME_OVER } from "./types";

export const iterateQuizQuestions = () => dispatch => {
  dispatch({ type: ITERATE_QUIZ_QUESTIONS });
};

export const gameOver = () => dispatch => {
  dispatch({ type: GAME_OVER })
}
