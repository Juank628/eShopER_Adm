import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import { Provider } from "./context";
import Navbar from "./components/Navbar/Navbar";
import { Route, HashRouter } from "react-router-dom";
import pOrderList from "./Pages/pOrderList";
import pProductList from "./Pages/pProductList";
import pEditProduct from "./Pages/pEditProduct";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Provider>
          <Navbar />
          <div className="container">
            <Route path="/orders" to component={pOrderList} />
            <Route
              path="/products/:family/:sale/:stock/:product"
              to
              component={pProductList}
            />
            <Route
              path="/editproduct/:id/:product/:cost/:price/:quantity/:sale/:family/:subfamily"
              to
              component={pEditProduct}
            />
          </div>
        </Provider>
      </HashRouter>
    );
  }
}

export default App;
