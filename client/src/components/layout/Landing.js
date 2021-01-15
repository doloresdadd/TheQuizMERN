import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "react-materialize";
import { Link } from "react-router-dom";
import { getQuizzes } from "../../actions/quizzes";

const Landing = ({ getQuizzes, quizzes }) => {
  useEffect(() => {
    getQuizzes();
  }, []);
  return (
    <div>
      <div className="row">
        <h1>Welcome To The Quiz</h1>
      </div>
      <div className="row">
        <div className="col l4 m4 s12 ">
          <h3>Quizzes by popularity</h3>
          <p>
            <span>Quiz name</span> <span> Average score</span>
          </p>
        </div>

        <div className="col l4 m4 s12">
          <h3>Newest quizzes</h3>
          <p>
            <span>Quiz name</span> <span> Average score</span>
          </p>
        </div>
        <div className="col l4 m4 s12">
          <h3>Quizzes by category</h3>
          <p>
            <span>Category name</span>
          </p>
        </div>
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
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  quizzes: state.quizzes,
});

export default connect(mapStateToProps, { getQuizzes })(Landing);
