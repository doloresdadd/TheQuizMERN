import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import quiz from "./quizzes";
import questions from "./questions";

export default combineReducers({
  alert,
  auth,
  profile,
  quiz,
  questions,
});
