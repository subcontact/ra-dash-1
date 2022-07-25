import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import A from "./Item_List";
import B from "./Item_Edit";
import C from "./Item_Show";

const styles = {
  textAlign: "center"
};

class Navigator extends Component {
  state = {
    sandwiches: []
  };

  componentDidMount() {
    // () => { some ajax call }.then
    //parse results and set state->
    this.setState({
      sandwiches: [
        {
          meat: "prosciutto",
          bread: "focaccia"
        },
        {
          meat: "smoked salmon",
          bread: "rye"
        }
      ]
    });
  }

  render() {
    //extract sandwiches from state
    const { sandwiches } = this.state;

    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <A sandwiches={sandwiches} />} />

          <Route
            path="/edit/:id"
            render={props => <B sandwiches={sandwiches} {...props} />}
          />

          <Route
            path="/show/:id"
            render={props => <C sandwiches={sandwiches} {...props} />}
          />
        </div>
      </Router>
    );
  }
}

render(<Navigator />, document.getElementById("root"));
