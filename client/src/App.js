import React, { Fragment } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Quiz from "./components/quiz/Quiz";
import CreateQuiz from "./components/quiz/CreateQuiz";
import FindQuiz from "./components/quiz/FindQuiz";

import Alert from "./components/layout/Alert";

//Redux
import { Provider } from "react-redux";
import store from "./store";

import "./App.scss";

const App = () => {
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
              <Route exact path="/createquiz" component={CreateQuiz} />
              <Route exact path="/quizzes" component={FindQuiz} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
