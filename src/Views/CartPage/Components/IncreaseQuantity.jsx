import { Component } from "react";
import styles from "../CartPage.module.scss";
import { addNewProduct } from "../../../ContextManager/CartSlice";
import { connect } from "react-redux";
export class IncreaseQuantity extends Component {
  addNewProductHandler = () => {
    this.props.dispatch(addNewProduct(this.props.product));
  };
  render() {
    return (
      <button
        onClick={this.addNewProductHandler}
        className={styles["cart__changer-btn"]}
      >
        <div className={styles["cart__changer-increase-vertical"]}></div>
        <div className={styles["cart__changer-increase-horizontal"]}></div>
      </button>
    );
  }
}
const mapStateToProps = (state) => {
  return { cart: state.cart.cartProducts };
};

export default connect(mapStateToProps)(IncreaseQuantity);
