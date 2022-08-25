import { Component } from 'react';
import styles from '../ListingPage.module.scss';
import Price from '../../../Shared/Components/Price';
export class ProductPrice extends Component {
  render() {
    return (
      <p className={styles['listing__price']}>
        <Price prices={this.props.prices} />
      </p>
    );
  }
}

export default ProductPrice;
