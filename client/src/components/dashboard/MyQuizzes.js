import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "react-materialize";
import { getCurrentProfile } from "../../actions/profile";
import { getQuizzesByProfile } from "../../actions/quizzes";
import QuizList from "./QuizList";

const MyQuizzes = ({
  getCurrentProfile,

  auth,
  profile,
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <Fragment>
      <div className="row valign-wrapper" id="content-row">
        <QuizList />
        <div className="col s4">
          <div className="container">
            <Button className="indigo">Create New Quiz</Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

MyQuizzes.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  getQuizzesByProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  getQuizzesByProfile,
})(MyQuizzes);
