import { Component } from "react";
import { connect } from "react-redux";
import styles from "../CartPage.module.scss";
export class OrderBtn extends Component {
  render() {
    return (
      <button
        disabled={!this.props.cart.length}
        className={styles["order-btn"]}
      >
        order
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  return { cart: state.cart.cartProducts };
};

export default connect(mapStateToProps)(OrderBtn);
