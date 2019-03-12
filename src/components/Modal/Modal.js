import React, { Component } from 'react'
import "./Styles.css";

class Modal extends Component {

  clickOutside=()=>{
    this.props.closeModal();
  }

  render() {
    const { show, title, children } = this.props
    return (
      <div>
        {show ? (
          <div className="modal"  onClick={this.clickOutside.bind(this)}>
            <div
              className="modal-dialog"
              onClick={ev => {
                ev.stopPropagation();
              }}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{title}</h5>
                </div>
                <div className="modal-body">{children}</div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}

export default Modal;