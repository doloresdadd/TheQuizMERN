import axios from "axios";

// import { setAlert } from "./alert";

import { GET_QUIZZES, GET_QUIZZES_BY_PROFILE, QUIZ_ERROR } from "./types";

export const getQuizzes = () => async dispatch => {
  try {
    const res = await axios.get("/api/v1/quizzes");
    dispatch({
      type: GET_QUIZZES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: QUIZ_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getQuizzesByProfile = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/quizzes?user=${userId}`);
    dispatch({
      type: GET_QUIZZES_BY_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: QUIZ_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
