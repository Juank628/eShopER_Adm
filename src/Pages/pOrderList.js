import React, { Component } from "react";
import OrderList from "../components/OrderList/OrderList";

export default class pOrderList extends Component {

  render() {
    return (
      <div className="row">
      <div className="col-12">
        <OrderList />
        </div>
      </div>
    );
  }
}
