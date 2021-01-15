import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "react-materialize";
import { Link } from "react-router-dom";
import { getQuizzes } from "../../actions/quizzes";
import Popularity from "./Popularity";
import Newest from "./Newest";
import Category from "./Category";

const Landing = ({ getQuizzes, quizzes }) => {
  useEffect(() => {
    getQuizzes();
  }, [getQuizzes]);
  return (
    <div>
      <div className="row">
        <h1>Welcome To The Quiz</h1>
      </div>
      <div className="row">
        <Popularity />
        <Newest />
        <Category />
      </div>
      <div className="row">
        <h5>Create your own quiz</h5>
        <br />
        <Link to="/createquiz">
          <Button className="indigo">Create Quiz</Button>
        </Link>
      </div>
    </div>
  );
};

Landing.propTypes = {
  getQuizzes: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  quizzes: state.quizzes,
});

export default connect(mapStateToProps, { getQuizzes })(Landing);
