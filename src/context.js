import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    ordersData: []
  };

  intervalID = setInterval(() => {
    this.getOrdersData();
    this.checkNewOrder();
  }, 10000);

  getOrdersData = () => {
    axios
      .get(
        `https://www.elroblemarket.com/laravelApp/eShopBackend/public/api/getorderlist`
      )
      .then(res => {
        if (res.status > 199 && res.status < 300) {
          this.setState({ ordersData: res.data });
        }
      });
  };

  checkNewOrder = () => {
    let sendAlert = false;
    let newOrderAlert = new Audio("sound/alert.mp3");

    this.state.ordersData.forEach(item => {
      if (item.status == 0) {
        sendAlert = true;
      }
    });

    if (sendAlert) {
      newOrderAlert.play();
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
