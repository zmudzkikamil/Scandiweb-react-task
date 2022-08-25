import React, { Component } from "react";
import ListingCart from "../../../Shared/assets/svg/ListingCart";
import styles from "../ListingPage.module.scss";
import { connect } from "react-redux";
import { addNewProduct } from "../../../ContextManager/CartSlice";
export class CartButton extends Component {
  clickHandler = () => {
    this.props.dispatch(
      addNewProduct({
        id: this.props.id,
        productName: this.props.nameOfProduct,
        brand: this.props.brand,
        gallery: this.props.gallery,
        prices: this.props.prices,
        quantity: 1,
        allAttributes: this.props.attributes,
        selectedAttributes: {},
      })
    );
  };
  render() {
    return (
      <button
        onClick={this.clickHandler}
        disabled={!this.props.inStock}
        className={styles["listing__item-cart"]}
      >
        <ListingCart />
      </button>
    );
  }
}

export default connect()(CartButton);
