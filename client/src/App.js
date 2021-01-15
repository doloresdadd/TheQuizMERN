import React, { Fragment, useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/landing/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Quiz from "./components/quiz/Quiz";
import CreateQuiz from "./components/quiz/CreateQuiz";
import FindQuiz from "./components/quiz/FindQuiz";
import MyQuizzes from "./components/dashboard/MyQuizzes";
import PrivateRoute from "./components/routing/PrivateRoute";

import Alert from "./components/layout/Alert";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";

import "./App.scss";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <section className="container center-align">
            <Route exact path="/" component={Landing} />
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/quiz" component={Quiz} />
              <PrivateRoute exact path="/createquiz" component={CreateQuiz} />
              <Route exact path="/quizzes" component={FindQuiz} />
              <PrivateRoute exact path="/myquizzes" component={MyQuizzes} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
