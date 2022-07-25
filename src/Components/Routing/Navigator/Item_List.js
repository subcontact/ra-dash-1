import React, { Component } from "react";
import { Link } from "react-router-dom";

export default ({ sandwiches }) => {
  const list = sandwiches.map((sandwich, i) => (
    <div>
      <li key={i}>
        Meat: {sandwich.meat}, bread: {sandwich.bread}
      </li>
      <button>
        <Link to={`/edit/${i}`}> Edit </Link>
      </button>
      <button>
        <Link to={`/show/${i}`}> Show </Link>
      </button>
    </div>
  ));
  return <ul>{list}</ul>;
};
