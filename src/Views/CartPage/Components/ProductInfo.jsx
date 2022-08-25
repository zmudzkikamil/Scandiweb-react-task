import { Component } from "react";
import AttributeBox from "./AttributeBox";
import ColorBox from "./ColorBox";
import styles from "../CartPage.module.scss";
import Price from "../../../Shared/Components/Price";
export class ProductInfo extends Component {
  render() {
    return (
      <div className={styles["cart__box"]}>
        <h3 className={styles["cart__brand"]}>{this.props.product.brand}</h3>
        <h3 className={styles["cart__product-name"]}>
          {this.props.product.productName}
        </h3>
        <p className={styles["cart__price"]}>
          <Price prices={this.props.product.prices} />
        </p>
        {this.props.product.allAttributes
          .filter((atr) => atr.id !== "Color")
          .map((atr) => (
            <AttributeBox
              selectedAttributeId={
                this.props.product.selectedAttributes[atr.id]
              }
              key={atr.id}
              atr={atr}
            />
          ))}
        {this.props.product.allAttributes
          .filter((atr) => atr.id === "Color")
          .map((atr) => (
            <ColorBox
              selectedAttributeId={
                this.props.product.selectedAttributes[atr.id]
              }
              key={atr.id}
              atr={atr}
            />
          ))}
      </div>
    );
  }
}

export default ProductInfo;
