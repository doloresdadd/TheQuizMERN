import axios from "axios";
import { setAlert } from "./alert";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from "./types";

//Load User
export const loadUser = () => async dispatch => {
  try {
    const res = await axios.get("/api/v1/auth/me", { withCredentials: true });

    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

// Register User
export const register = ({ username, email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ username, email, password });
  try {
    const res = await axios.post("/api/v1/auth/register", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.error.split(",");

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error, "danger")));
      console.log(errors);
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post("/api/v1/auth/login", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.error.split(",");

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error, "danger")));
      console.log(errors);
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout User
export const logout = (email, password) => async dispatch => {
  try {
    const res = await axios.get("/api/v1/auth/logout");

    dispatch({
      type: LOGOUT_SUCCESS,
    });
  } catch (err) {
    const errors = err.response.data.error.split(",");

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error, "danger")));
      console.log(errors);
    }
    dispatch({
      type: LOGOUT_FAIL,
    });
  }
};
