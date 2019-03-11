import React, { Component } from "react";
import EditProduct from "../components/EditProduct/EditProduct";

export default class pEditProduct extends Component {
  render() {
    const { id, product, cost, price, quantity, sale, family, subfamily } = this.props.match.params;
    return (
      <div className="row">
        <div className="col-5 mx-auto">
          <EditProduct
            id={id}
            product={product}
            cost={cost}
            price={price}
            quantity={quantity}
            sale={sale}
            family={family}
            subfamily={subfamily}
          />
        </div>
      </div>
    );
  }
}
