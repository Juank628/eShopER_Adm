import React, { Component } from "react";
import { Consumer } from "../../context";
import axios from "axios";
import "./Styles.css";

export default class OrderList extends Component {
  setData = (name, value) => {
    const data = {
      id: name,
      ordStatus: value
    };
    axios
      .post(
        "https://www.elroblemarket.com/laravelApp/eShopBackend/public/api/orderstate",
        { data }
      )
      .then(res => {
        if (res.status > 199 && res.status < 300) {
          this.getData();
        }
      });
  };

  setOrderStatus = event => {
    this.setData(event.target.name, event.target.value);
  };

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Fecha/Hora</th>
                    <th scope="col">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {value.ordersData.map((item, i) => (
                    <tr
                      key={i}
                      className={
                        item.id % 2 > 0 ? "cStripping1" : "cStripping2"
                      }
                    >
                      <th scope="row">{item.id}</th>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price}</td>
                      <td>{item.created_at}</td>
                      <td>
                        <select
                          value={item.status}
                          name={item.id}
                          className={"cStatus_" + item.status}
                          onChange={this.setOrderStatus}
                        >
                          <option value="0" className="bg-light text-dark">
                            Pendiente
                          </option>
                          <option value="1" className="bg-light text-dark">
                            En proceso
                          </option>
                          <option value="2" className="bg-light text-dark">
                            En camino
                          </option>
                          <option value="3" className="bg-light text-dark">
                            Entregado
                          </option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
