import { Component } from "react";
import styles from "./ProductGallery.module.scss";
export class ProductGallery extends Component {
  render() {
    return (
      <div className={styles.box}>
        <img
          src={
            this.props.id === "jacket-canada-goosee"
              ? this.props.gallery[5]
              : this.props.gallery[0]
          } // hardcoded, because gallery[0] on Jacket doesn't match the design of the webpage. I would suggest to add "thumbnail" to graphQL server to avoid hardcoding here.
          className={styles.img}
          alt={this.props.productName}
        />
        <div className={styles.shadow}></div>
      </div>
    );
  }
}

export default ProductGallery;
