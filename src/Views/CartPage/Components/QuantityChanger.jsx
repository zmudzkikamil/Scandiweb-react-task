import { Component } from "react";
import DecreaseQuantity from "./DecreaseQuantity";
import IncreaseQuantity from "./IncreaseQuantity";
import styles from "../CartPage.module.scss";

export class QuantityChanger extends Component {
  render() {
    return (
      <div className={styles["cart__changer"]}>
        <IncreaseQuantity product={this.props.product} />
        <p className={styles["cart__changer-quantity"]}>
          {this.props.quantity}
        </p>
        <DecreaseQuantity product={this.props.product} />
      </div>
    );
  }
}

export default QuantityChanger;
