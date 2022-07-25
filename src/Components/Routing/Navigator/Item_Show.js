import React, { Component } from "react";
import { Link } from "react-router-dom";

class ShowSandwich extends Component {
  render() {
    console.log(this.props, "props");
    const { match, sandwiches } = this.props;
    const sandwich = sandwiches[match.params.id];
    return (
      <div>
        Show this sandwich:
        <div style={{ marginBottom: "20px" }}>
          {sandwich ? (
            <div>
              <li> {sandwich.meat} </li>
              <li> {sandwich.bread} </li>
            </div>
          ) : null}
        </div>
        <button>
          <Link to="/"> Home </Link>
        </button>
      </div>
    );
  }
}

export default ShowSandwich;
