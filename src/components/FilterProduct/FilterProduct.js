import React, { Component } from "react";
import "./Styles.css";
import { NavLink } from "react-router-dom";

export default class FilterProduct extends Component {
  state = {
    searchFamily: "todos",
    searchSale: "todos",
    searchStock: "todos",
    SearchProduct: "todos"
  };

  setSearchFamily = e => {
    this.setState({ searchFamily: e.target.value });
  };

  setSearchSale = e => {
    this.setState({ searchSale: e.target.value });
  };

  setSearchStock = e => {
    this.setState({ searchStock: e.target.value });
  };

  setSearchProduct = e => {
    this.setState({ SearchProduct: e.target.value });
  };

  render() {
    const {searchFamily,searchSale,searchStock,SearchProduct} = this.state
    return (
      <React.Fragment>
        <form className="form-inline my-2">
          <div className="form-group mx-3">
            <label className="mr-2">Familia</label>
            <select className="form-control" onChange={this.setSearchFamily}>
              <option value="%">Todos</option>
              <option value="tragos">Tragos</option>
              <option value="cigarros">Cigarros</option>
            </select>
          </div>

          <div className="form-group mx-3">
            <label className="mr-2">Oferta</label>
            <select className="form-control" onChange={this.setSearchSale}>
              <option value="%">Todos</option>
              <option value="enoferta">En oferta</option>
            </select>
          </div>

          <div className="form-group mx-3">
            <label className="mr-2">Stock</label>
            <select className="form-control" onChange={this.setSearchStock}>
              <option value="%">Todos</option>
              <option value="alerta">Alerta</option>
            </select>
          </div>

          <div className="form-group mx-3">
            <label className="mr-2">Producto</label>
            <input
              className="form-control"
              type="text"
              defaultValue="%"
              onChange={this.setSearchProduct}
            />
          </div>

          <div className="form-group mx-3">
            <NavLink to={`/products/${searchFamily}/${searchSale}/${searchStock}/${SearchProduct}`}>
              <button className="btn btn-success" type="button">
                Buscar
              </button>
            </NavLink>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
