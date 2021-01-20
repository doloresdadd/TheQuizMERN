import { GAME_OVER, ITERATE_QUIZ_QUESTIONS } from "../actions/types";

const initialState = {
  currentQuestion: 1,
  noOfQuestions: 0,
  userScore: 0,
  loading: true,
  error: {},
};

function iterateQuestions(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case ITERATE_QUIZ_QUESTIONS:
    case GAME_OVER:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export default iterateQuestions;
