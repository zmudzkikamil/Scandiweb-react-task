import { Component } from 'react';
import styles from '../ListingPage.module.scss';

export class ProductTitle extends Component {
  render() {
    return (
      <h3
        className={styles['listing__title']}
      >{`${this.props.brand} ${this.props.nameOfProduct}`}</h3>
    );
  }
}

export default ProductTitle;
