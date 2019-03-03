import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import { Provider } from "./context";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Navbar />
        </div>
      </Provider>
    );
  }
}

export default App;
