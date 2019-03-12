import React, { Component } from "react";
import "./Styles.css";
import axios from "axios";
import Modal from "../Modal/Modal";
import EditProduct from "../EditProduct/EditProduct";

export default class ProductList extends Component {
  state = {
    products: [],
    totalStored: 0,
    totalProfit: 0,
    showModal: false,
    isEdit: false,
    selectedProduct: {
      id: 0,
      product: "",
      cost: 0,
      price: 0,
      quantity: 0,
      sale: 0,
      family: "",
      subfamily: ""
    }
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
          this.setState({
            products: res.data
          });
          this.calculateTotals()
        }
      });
  };

  openModal = (id, product, cost, price, quantity, sale, family, subfamily) => {
    this.setState({
      selectedProduct: {
        id,
        product,
        cost,
        price,
        quantity,
        sale,
        family,
        subfamily
      },
      showModal: true,
    });
  };

  closeModal=()=>{
    this.setState({
      showModal: false
    })
  }

  calculateTotals=()=>{
    let totalStored = 0;
    let totalProfit = 0;
    this.state.products.forEach((item)=>{
      totalStored += item.quantity * item.cost
      totalProfit += item.quantity * (item.price-item.cost)
    })
   this.setState({
      totalStored,
      totalProfit
   })
  }

  writeSuccess=()=>{
    this.getProducts();
    this.setState({
      showModal: false
    })
  }

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
              <th scope="col">Oferta</th>
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
                  <button
                    className="btn btn-info"
                    onClick={this.openModal.bind(
                      this,
                      item.id,
                      item.name,
                      item.cost,
                      item.price,
                      item.quantity,
                      item.sale,
                      item.family,
                      item.subfamily,
                    )}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="footer row">
          <div className="col">
          {`valor en stock: S/${Math.round(this.state.totalStored)}`}
          </div>
          <div className="col"> 
          {`utilidad en stock: S/${Math.round(this.state.totalProfit)}`}
          </div>
          <div className="col"> 
          {`margen promedio: ${(this.state.totalProfit/this.state.totalStored).toFixed(2)}`}
          </div>
        </div>

        <Modal show={this.state.showModal} closeModal={this.closeModal} title="">
          <EditProduct
            id={this.state.selectedProduct.id}
            product={this.state.selectedProduct.product}
            cost={this.state.selectedProduct.cost}
            price={this.state.selectedProduct.price}
            quantity={this.state.selectedProduct.quantity}
            sale={this.state.selectedProduct.sale}
            family={this.state.selectedProduct.family}
            subfamily={this.state.selectedProduct.subfamily}
            isEdit={true}
            writeSuccess={this.writeSuccess}
          />
        </Modal>
      </React.Fragment>
    );
  }
}
