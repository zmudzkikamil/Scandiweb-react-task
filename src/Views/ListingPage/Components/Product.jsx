import { Component } from 'react';
import styles from '../ListingPage.module.scss';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';
import ProductImg from './ProductImg';
import ProductTitle from './ProductTitle';
import ProductPrice from './ProductPrice';

export class Product extends Component {
  render() {
    const { id, prices, gallery, attributes, inStock, brand } = this.props.product;
    return (
      <div className={styles['listing__container']}>
        <Link to={`/product/${id}`}>
          <div className={`${styles.listing__item} ${!inStock && styles.disabled}`}>
            <ProductImg
              id={id}
              inStock={inStock}
              gallery={gallery}
              nameOfProduct={this.props.nameOfProduct}
            />
            <ProductTitle brand={brand} nameOfProduct={this.props.nameOfProduct} />
            <ProductPrice prices={prices} />
          </div>
        </Link>
        {attributes.length === 0 && (
          <CartButton
            prices={prices}
            gallery={gallery}
            id={id}
            nameOfProduct={this.props.nameOfProduct}
            inStock={inStock}
            brand={brand}
            attributes={attributes}
          />
        )}
      </div>
    );
  }
}

export default Product;
