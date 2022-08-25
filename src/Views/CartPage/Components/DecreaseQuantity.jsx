import { Component } from "react";
import { connect } from "react-redux";
import styles from "../CartPage.module.scss";
import { removeProduct } from "../../../ContextManager/CartSlice";
export class DecreaseQuantity extends Component {
  removeProductHandler = () => {
    this.props.dispatch(removeProduct(this.props.product));
  };
  render() {
    return (
      <button
        onClick={this.removeProductHandler}
        className={styles["cart__changer-btn"]}
      >
        <div className={styles["cart__changer-decrease"]}></div>
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  return { cart: state.cart.cartProducts };
};

export default connect(mapStateToProps)(DecreaseQuantity);
