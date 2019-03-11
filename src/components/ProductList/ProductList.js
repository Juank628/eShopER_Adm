import React, { Component } from "react";
import "./Styles.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class ProductList extends Component {
  state = {
    products: []
  };

  getProducts = () => {
    axios
      .get(
        "https://www.elroblemarket.com/laravelApp/eShopBackend/public/api/search/" +
          this.props.family +
          "/" +
          this.props.sale +
          "/" +
          this.props.stock +
          "/" +
          this.props.product
      )
      .then(res => {
        if (res.status > 199 && res.status < 300) {
          this.setState({ products: res.data });
        }
      });
  };

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.getProducts();
    }
  }

  render() {
    return (
      <React.Fragment>
        <table className="table table-striped">
          <thead>
            <tr className="text-center">
              <th scope="col">#</th>
              <th scope="col">Producto</th>
              <th scope="col">Costo</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Ofera</th>
              <th scope="col">Editar</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((item, i) => (
              <tr key={i}>
                <th scope="row" className="text-center">
                  {item.id}
                </th>
                <td>{item.name}</td>
                <td className="text-center">{item.cost}</td>
                <td className="text-center">{item.price}</td>
                <td className="text-center">{item.quantity}</td>
                <td className="text-center">{item.sale}</td>
                <td className="text-center">
                  <NavLink
                    to={
                      "/editproduct" +
                      "/" +
                      item.id +
                      "/" +
                      item.name +
                      "/" +
                      item.cost +
                      "/" +
                      item.price +
                      "/" +
                      item.quantity +
                      "/" +
                      item.sale +
                      "/" +
                      item.family +
                      "/" +
                      item.subfamily
                    }
                  >
                    <button className="btn btn-info">Editar</button>
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
