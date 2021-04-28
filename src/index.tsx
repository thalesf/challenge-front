import React from "react";
import ReactDom from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "@/app/pages/home";
import Person from "@/app/pages/person";
import "@/app/styles/global.scss";
import store from '@/app/redux/store';

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/person" component={Person} exact />
        <Route component={() => <div> 404</div>} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("main"))
