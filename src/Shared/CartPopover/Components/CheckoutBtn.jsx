import { Component } from "react";
import styles from "./ButtonsContainer.module.scss";
import { connect } from "react-redux";

export class CheckoutBtn extends Component {
  render() {
    return (
      <button
        disabled={!this.props.cart.length}
        className={`${styles.btn} ${styles.checkout}`}
      >
        checkout
      </button>
    );
  }
}
const mapStateToProps = (state) => {
  return { cart: state.cart.cartProducts };
};

export default connect(mapStateToProps)(CheckoutBtn);
