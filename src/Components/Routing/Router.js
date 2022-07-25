import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../Layouts/Drawer";
import { NotFound } from "./Errors";
import Router from "./Router";
import Errors from "./Errors/error";
import Parties from "../BizLogic/Party/mainParty";
import Sales from "../BizLogic/Boards/salesBoard";
import HomeBoard from "../BizLogic/Boards/homeBoard";
import Accounts from "../BizLogic/Boards/accountBoard";
import Subscriptions from "../BizLogic/Boards/subscriptionBoard";
import SalesProc from "../BizLogic/SalesProc/Checkout";
import MyList from "../BizLogic/ListHandler/MyList";
import MyListShow from "../BizLogic/Individuals/TabShowForm";
import Individuals from "../BizLogic/Individuals/Individuals";
import IndividualEdit from "../BizLogic/Individuals/IndividualEdit";
import Quote from "../BizLogic/Quote/quote";
import SalesOrder from "../BizLogic/SalesOrder/salesStepper";
import SalesOrderHor from "../BizLogic/SalesOrder/horSalesStepper";

export default class extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" render={() => <HomeBoard />} />
            <Route path="/Accounts" render={() => <Accounts />} />
            <Route path="/Sales" render={() => <Sales />} />
            <Route path="/Subscriptions" render={() => <Subscriptions />} />
            <Route path="/MyList" render={() => <MyList />} />
            <Route path="/MyListEdit" render={() => <MyListEdit />} />

            <Route path="/Individuals" render={() => <Individuals />} />
            <Route path="/IndividualEdit" render={() => <IndividualEdit />} />

            <Route path="/Quote" render={() => <Quote />} />
            <Route path="/SalesOrder" render={() => <SalesOrderHor />} />
            <Route path="/SalesProc" render={() => <SalesOrder />} />
            <Route path="/Party" render={() => <Parties />} />
            <Route path="/Error" render={() => <error />} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}
