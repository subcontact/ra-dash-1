// Import default styles.
// This only needs to be done once; probably during bootstrapping process.
//import "react-select/dist/react-select.css";

import React from "react";
import ReactDOM from "react-dom";
import createFilterOptions from "react-select-fast-filter-options";
import Select from "react-select";

// Dummy array of test values.
const options = [
  { label: "Option One", value: 1 },
  { label: "Option Two", value: 2 }
];

// For more configuration options, see:
// https://github.com/bvaughn/react-select-fast-filter-options#configuration-options
const filterOptions = createFilterOptions({
  options
});

ReactDOM.render(
  <Select label="Name" filterOptions={filterOptions} options={options} />,
  document.getElementById("root")
);
