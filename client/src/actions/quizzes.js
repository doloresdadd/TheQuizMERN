import axios from "axios";

// import { setAlert } from "./alert";

import { GET_QUIZZES, QUIZ_ERROR, GET_QUIZ_BY_ID } from "./types";

export const getQuizzes = properties => async dispatch => {
  try {
    const res = await axios.get("/api/v1/quizzes" + properties);
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

export const getQuizById = id => async dispatch => {
  try {
    const res = await axios.get("/api/v1/quizzes/" + id);
    dispatch({
      type: GET_QUIZ_BY_ID,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: QUIZ_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
