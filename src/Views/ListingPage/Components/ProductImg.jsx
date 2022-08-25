import { Component } from 'react';
import styles from '../ListingPage.module.scss';

export class ProductImg extends Component {
  render() {
    return (
      <div className={styles['listing__item-box']}>
        <img
          src={
            this.props.id === 'jacket-canada-goosee' ? this.props.gallery[5] : this.props.gallery[0]
          } // hardcoded, because gallery[0] on Jacket doesn't match the design of the webpage. I would suggest to add "thumbnail" to graphQL server to avoid hardcoding here.
          className={styles['listing__item-img']}
          alt={this.props.nameOfProduct}
        />
        <div className={styles['listing__item-shadow']}>
          {!this.props.inStock && <p className={styles['stock-info']}>OUT OF STOCK</p>}
        </div>
      </div>
    );
  }
}

export default ProductImg;
