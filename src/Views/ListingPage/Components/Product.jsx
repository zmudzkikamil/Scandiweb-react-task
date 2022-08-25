import { Component } from 'react';
import styles from '../ListingPage.module.scss';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';
import ProductImg from './ProductImg';
import ProductTitle from './ProductTitle';
import ProductPrice from './ProductPrice';

export class Product extends Component {
  render() {
    return (
      <div className={styles['listing__container']}>
        <Link
          to={{
            pathname: '/description-page',
            state: { productId: this.props.id }
          }}
        >
          <div className={`${styles.listing__item} ${!this.props.inStock && styles.disabled}`}>
            <ProductImg
              id={this.props.id}
              inStock={this.props.inStock}
              gallery={this.props.gallery}
              nameOfProduct={this.props.nameOfProduct}
            />
            <ProductTitle brand={this.props.brand} nameOfProduct={this.props.nameOfProduct} />
            <ProductPrice prices={this.props.prices} />
          </div>
        </Link>
        {this.props.attributes.length === 0 && (
          <CartButton
            prices={this.props.prices}
            gallery={this.props.gallery}
            id={this.props.id}
            nameOfProduct={this.props.nameOfProduct}
            inStock={this.props.inStock}
            brand={this.props.brand}
            attributes={this.props.attributes}
          />
        )}
      </div>
    );
  }
}

export default Product;
