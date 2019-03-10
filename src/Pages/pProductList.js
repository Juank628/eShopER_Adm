import React, { Component } from "react";
import FilterProduct from "../components/FilterProduct/FilterProduct"
import ProductList from "../components/ProductList/ProductList";

export default class pProductList extends Component {
  render() {
    const {family, sale, stock, product} = this.props.match.params
  
    return (
      <div className="row">
        <div className="col-12">
          <FilterProduct />
          <ProductList family={family} sale={sale} stock={stock} product={product} />
        </div>
      </div>
    );
  }
}
