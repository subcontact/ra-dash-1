import React from "react";
import { render } from "react-dom";
import SignIn from "../src/Components/Login/SignIn";
import Router from "../src/Components/Routing/Router";

import "./styles.css";

render(<Router />, document.getElementById("root"));

//render(<SignIn />, document.getElementById("root"));
