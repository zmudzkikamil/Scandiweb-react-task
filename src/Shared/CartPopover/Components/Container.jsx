import { Component } from "react";
import styles from "./Container.module.scss";
import { connect } from "react-redux";
import ProductInfo from "./ProductInfo";
import ProductGallery from "./ProductGallery";
import QuantityChanger from "./QuantityChanger";
import CartTitle from "./CartTitle";
import ButtonsContainer from "./ButtonsContainer";
import TotalPriceBox from "./TotalPriceBox";

export class Container extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.scroll}>
          <div className={styles.products}>
            <CartTitle totalQuantity={this.props.totalQuantity} />
            {this.props.cart.map((product, index) => (
              <div className={styles.product} key={index}>
                <ProductInfo product={product} />
                <QuantityChanger
                  product={product}
                  quantity={product.quantity}
                />
                <ProductGallery
                  id={product.id}
                  productName={product.productName}
                  gallery={product.gallery}
                />
              </div>
            ))}
          </div>
        </div>
        <TotalPriceBox />
        <ButtonsContainer setPopover={this.props.setPopover} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { cart: state.cart.cartProducts };
};
export default connect(mapStateToProps)(Container);
