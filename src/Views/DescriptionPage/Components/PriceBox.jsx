import { Component } from "react";
import Price from "../../../Shared/Components/Price";
import styles from "../DescriptionPage.module.scss";

export class PriceBox extends Component {
  render() {
    return (
      <div className={styles["description__price"]}>
        <p className={styles["description__atr-title"]}>Price:</p>
        <div className={styles["description__price-amount"]}>
          <Price prices={this.props.prices} />
        </div>
      </div>
    );
  }
}

export default PriceBox;
