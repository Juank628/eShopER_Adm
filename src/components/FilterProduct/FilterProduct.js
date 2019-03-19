import React, { Component } from "react";
import "./Styles.css";
import { NavLink } from "react-router-dom";
import Modal from "../Modal/Modal";
import EditProduct from "../EditProduct/EditProduct";

export default class FilterProduct extends Component {
  state = {
    searchFamily: "todos",
    searchSale: "todos",
    searchStock: "todos",
    SearchProduct: "todos",
    showModal: false
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
    if(e.target.value == ""){
      this.setState({ SearchProduct: "todos" });
    } else {
      this.setState({ SearchProduct: e.target.value });
    }
  };

  closeModal=()=>{
    this.setState({
      showModal: false
    })
  }

  openModal=()=>{
    this.setState({
      showModal: true
    })
  }

  render() {
    const {searchFamily,searchSale,searchStock,SearchProduct} = this.state
    return (
      <React.Fragment>
        <form className="form-inline my-2 fromFont">
          <div className="form-group mx-3">
            <label className="mr-2">Familia</label>
            <select className="form-control" onChange={this.setSearchFamily}>
              <option value="todos">Todos</option>
              <option value="tragos">Tragos</option>
              <option value="cigarros">Cigarros</option>
              <option value="bebidas">Bebidas</option>
              <option value="golosinas">Golosinas</option>
            </select>
          </div>

          <div className="form-group mx-3">
            <label className="mr-2">Oferta</label>
            <select className="form-control" onChange={this.setSearchSale}>
              <option value="todos">Todos</option>
              <option value="1">En oferta</option>
            </select>
          </div>

          <div className="form-group mx-3">
            <label className="mr-2">Stock</label>
            <select className="form-control" onChange={this.setSearchStock}>
              <option value="todos">Todos</option>
              <option value="alerta">Alerta</option>
            </select>
          </div>

          <div className="form-group mx-3">
            <label className="mr-2">Producto</label>
            <input
              className="form-control"
              type="text"
              defaultValue="todos"
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

          <div className="form-group mx-3">
            <button className="btn btn-danger" type="button" onClick={this.openModal}>
              +
            </button>
          </div>

        </form>

        <Modal show={this.state.showModal} closeModal={this.closeModal} title="">
          <EditProduct
            id={0}
            product={""}
            cost={0}
            price={0}
            quantity={0}
            sale={0}
            family={""}
            subfamily={""}
            isEdit={false}
            writeSuccess={this.closeModal}
          />
        </Modal>

      </React.Fragment>
    );
  }
}
