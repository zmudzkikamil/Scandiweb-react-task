import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./QuantityChanger.module.scss";
import { removeProduct } from "../../../ContextManager/CartSlice";
export class DecreaseQuantity extends Component {
  removeProductHandler = () => {
    this.props.dispatch(removeProduct(this.props.product));
  };
  render() {
    return (
      <button onClick={this.removeProductHandler} className={styles.btn}>
        <div className={styles.decrease}></div>
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  return { cart: state.cart.cartProducts };
};

export default connect(mapStateToProps)(DecreaseQuantity);
