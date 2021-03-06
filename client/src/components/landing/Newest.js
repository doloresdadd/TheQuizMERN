import React, { Fragment } from "react";

import { Table } from "react-materialize";

const Newest = props => {
  return (
    <Fragment>
      <div className="col l4 m4 s12 ">
        <h3>Newest Quizzes</h3>
        <Table>
          <thead>
            <tr>
              <th data-field="name">Quiz Name</th>
              <th data-field="score">Average Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alvin</td>
              <td>Eclair</td>
            </tr>
            <tr>
              <td>Alan</td>
              <td>Jellybean</td>
            </tr>
            <tr>
              <td>Jonathan</td>
              <td>Lollipop</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
};

export default Newest;
