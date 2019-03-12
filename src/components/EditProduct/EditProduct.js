import React, { Component } from "react";
import "./Styles.css";
import axios from "axios";

export default class EditProduct extends Component {
  state = {
    id: 0,
    product: "No product",
    cost: 0,
    price: 0,
    quantity: 0,
    sale: 0,
    family: "No family",
    subfamily: "No subfamily"
  };

  setField = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createData = () => {
    const data = this.state;
    axios
      .post(
        "https://www.elroblemarket.com/laravelApp/eShopBackend/public/api/createproduct",
        { data }
      )
      .then(res => {
        if (res.status > 199 && res.status < 300) {
          this.props.writeSuccess();
        }
      });
  };

  updateData = () => {
    const data = this.state;
    axios
      .post(
        "https://www.elroblemarket.com/laravelApp/eShopBackend/public/api/editproduct",
        { data }
      )
      .then(res => {
        if (res.status > 199 && res.status < 300) {
          this.props.writeSuccess();
        }
      });
  };

  componentDidMount() {
    this.setState({
      id: this.props.id,
      product: this.props.product,
      cost: this.props.cost,
      price: this.props.price,
      quantity: this.props.quantity,
      sale: this.props.sale,
      family: this.props.family,
      subfamily: this.props.subfamily
    });
  }

  render() {
    return (
      <form className="form border rounded px-5 pb-5 pt-3">
        {this.props.isEdit ? (
          <h3>Editar producto</h3>
        ) : (
          <h3>Agregar producto</h3>
        )}

        <p className="text-right">id: {this.props.id}</p>

        <div className="form-group mt-2">
          <label>Producto</label>
          <input
            type="text"
            className="form-control"
            name="product"
            defaultValue={this.props.product}
            onChange={this.setField}
          />
        </div>

        <div className="row">
          <div className="form-group col">
            <label>Familia</label>
            <input
              type="text"
              className="form-control"
              name="family"
              defaultValue={this.props.family}
              onChange={this.setField}
            />
          </div>

          <div className="form-group col">
            <label>Subfamilia</label>
            <input
              type="text"
              className="form-control"
              name="subfamily"
              defaultValue={this.props.subfamily}
              onChange={this.setField}
            />
          </div>
        </div>

        <div className="row">
          <div className="form-group col">
            <label>Costo</label>
            <input
              type="number"
              className="form-control"
              name="cost"
              defaultValue={this.props.cost}
              onChange={this.setField}
            />
          </div>

          <div className="form-group col">
            <label>Precio</label>
            <input
              type="number"
              className="form-control"
              name="price"
              defaultValue={this.props.price}
              onChange={this.setField}
            />
          </div>
        </div>

        <div className="row">
          <div className="form-group col">
            <label>Cantidad</label>
            <input
              type="number"
              className="form-control"
              name="quantity"
              defaultValue={this.props.quantity}
              onChange={this.setField}
            />
          </div>

          <div className="form-group col">
            <label>Oferta</label>
            <select
              className="form-control"
              name="sale"
              defaultValue={this.props.sale}
              onChange={this.setField}
            >
              <option value="0">No</option>
              <option value="1">Si</option>
            </select>
          </div>
        </div>

        {this.props.isEdit ? (
          <button
            type="button"
            className="btn btn-success btn-block mt-3"
            onClick={this.updateData}
          >
            Aceptar
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-danger btn-block mt-3"
            onClick={this.createData}
          >
            Agregar
          </button>
        )}
      </form>
    );
  }
}
