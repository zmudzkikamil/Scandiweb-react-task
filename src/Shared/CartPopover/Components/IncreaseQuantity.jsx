import React, { Component } from "react";
import styles from "./QuantityChanger.module.scss";
import { addNewProduct } from "../../../ContextManager/CartSlice";
import { connect } from "react-redux";
export class IncreaseQuantity extends Component {
  addNewProductHandler = () => {
    this.props.dispatch(addNewProduct(this.props.product));
  };
  render() {
    return (
      <button onClick={this.addNewProductHandler} className={styles.btn}>
        <div className={styles["increase-vertical"]}></div>
        <div className={styles["increase-horizontal"]}></div>
      </button>
    );
  }
}
const mapStateToProps = (state) => {
  return { cart: state.cart.cartProducts };
};

export default connect(mapStateToProps)(IncreaseQuantity);
