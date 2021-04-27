import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "@/app/pages/home";
import Person from "@/app/pages/person";
import "@/app/styles/global.scss";

ReactDom.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/person" component={Person} exact />
      <Route component={() => <div> 404</div>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("main"))
