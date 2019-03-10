import React, { Component } from "react";
import "./Styles.css";
import axios from "axios";

export default class ProductList extends Component {
  state = {
    products: []
  };

  getProducts = () => {
    axios
      .get(
        'https://www.elroblemarket.com/laravelApp/eShopBackend/public/api/search/'+
        this.props.family
      )
      .then(res => {
        if (res.status > 199 && res.status < 300) {
          this.setState({ products: res.data });
          console.log(res.data);
        }
      });
  };

  componentWillReceiveProps() {
    this.getProducts();
  }

  render() {
    return <React.Fragment>List</React.Fragment>;
  }
}
