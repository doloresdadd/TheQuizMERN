import React, { Fragment } from "react";

const CreateQuiz = () => {
  return (
    <Fragment>
      <div className="row center-align">
        <h3>The Quiz</h3>
      </div>
      <div className="row center-align">
        <div className="col s10 offset-s1">
          <div className="card" id="quiz-container">
            <div className="card-content" id="cardForm">
              <form action="#" id="createQuiz" className="left-align">
                <div className="row">
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea
                        id="question"
                        className="materialize-textarea"
                      ></textarea>
                      <label htmlFor="question">Question</label>
                    </div>

                    <div className="input-field col s12">
                      <input id="upload_image" type="text" />
                      <label htmlFor="upload_image">Upload Image</label>
                    </div>
                    <div className="input-field col s12">
                      <input placeholder="Option 1" id="option1" type="text" />
                      <label htmlFor="option1">Option 1</label>
                    </div>
                    <div className="input-field col s12">
                      <input placeholder="Option 2" id="option2" type="text" />
                      <label htmlFor="option2">Option 2</label>
                    </div>
                    <div className="input-field col s12">
                      <input placeholder="Option 3" id="option3" type="text" />
                      <label htmlFor="option3">Option 3</label>
                    </div>
                    <div className="input-field col s12">
                      <input placeholder="Option 4" id="option4" type="text" />
                      <label htmlFor="option4">Option 4</label>
                    </div>
                  </div>
                </div>
              </form>

              <br />
              <div className="row">
                <div className="col s6">
                  <button
                    className="btn waves-effect waves-light btn-large center-align submitBtn indigo white-text"
                    type="submit"
                    name="action"
                    id="submit"
                  >
                    Add another question
                  </button>
                </div>
                <div className="col s6">
                  <button
                    className="btn waves-effect waves-light btn-large center-align submitBtn indigo white-text"
                    type="submit"
                    name="action"
                    id="submit"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateQuiz;
