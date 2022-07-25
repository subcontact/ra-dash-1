import React from "react";
import Typography from "@material-ui/core/Typography";
import ContactM from "../BizLogic/Party/ContactM";

import PartyList from "../BizLogic/Party/PartyList";
import PartyExpPanel from "../BizLogic/Party/PartyExpPanel";

import Footer from "../Layouts/Footer";
import Checkout from "../BizLogic/GestionC/Checkout";

export default props => (
  <div>
    <Typography variant="inherit" font="inherit">
      <PartyList />
      <div>
        <br />
        <PartyExpPanel />
      </div>
    </Typography>
  </div>
);
