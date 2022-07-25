import React from "react";
import ReactDOM from "react-dom";
import TreeContainer from "./tree.jsx";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { newTreeReducerWithProvider } from "./reducer/tree-reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { TreeProvider } from "./ix-tree";

import "./styles.css";

const store = createStore(
  newTreeReducerWithProvider(new TreeProvider()),
  applyMiddleware(thunk, logger)
);

function Resource() {
  return (
    <Provider store={store}>
      <div className="Resource">
        <h1>Tree Tra Trallala</h1>
        <hr />
        <TreeContainer rootId="uid:jdoe" />
        <hr />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Resource />, rootElement);
