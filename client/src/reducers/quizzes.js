import { GET_QUIZZES, QUIZ_ERROR } from "../actions/types";

const initialState = {
  quizzes: null,
  loading: true,
  error: {},
};

function fetchQuizzes(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_QUIZZES:
      return {
        ...state,
        quizzes: payload,
        loading: false,
      };
    case QUIZ_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default fetchQuizzes;
