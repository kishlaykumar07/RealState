import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import HomeV3 from "./components/home-v3";

import About from "./components/about";
import Service from "./components/service";
import ServiceDetails from "./components/service-details";

import Shop from "./components/shop";
import ShopGrid from "./components/shop-grid";
import ProdductDetails from "./components/product-details";
import ShopLeftSidebar from "./components/shop-left-sidebar";
import ShopRightSidebar from "./components/shop-right-sidebar";

import Contact from "./components/contact";

class Root extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <Switch>
            <Route exact path="/" component={HomeV3} />
            <Route path="/about" component={About} />
            <Route path="/service" component={Service} />
            <Route path="/service-details" component={ServiceDetails} />
            <Route path="/shop" component={Shop} />
            <Route path="/shop-grid" component={ShopGrid} />
            <Route path="/shop-left-sidebar" component={ShopLeftSidebar} />
            <Route path="/shop-right-sidebar" component={ShopRightSidebar} />
            <Route path="/product-details" component={ProdductDetails} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById("quarter"));
