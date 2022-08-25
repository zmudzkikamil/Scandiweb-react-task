import { Component } from 'react';
import styles from './ProductName.module.scss';
export class ProductName extends Component {
  render() {
    return <h2 className={styles.title}>{this.props.productName}</h2>;
  }
}

export default ProductName;
