import { Component } from 'react';
import styles from './ListingPage.module.scss';
import { Query } from '@apollo/client/react/components';
import { fetchProducts } from '../../Features/fetchAllProducts';
import Product from './Components/Product';
import Spinner from '../../Shared/assets/svg/Spinner';

export class ListingPage extends Component {
  queryHandler = ({ loading, error, data }) => {
    if (loading)
      return (
        <div className={styles['loading-box']}>
          <Spinner />
        </div>
      );
    if (error)
      return (
        <div className={styles['error-box']}>
          <p className={styles.error}>Oops, something went wrong. Try again later.</p>
        </div>
      );
    const { products } = data.category;
    return (
      <>
        {products.map((product) => (
          <Product
            key={product.name}
            id={product.id}
            nameOfProduct={product.name}
            prices={product.prices}
            gallery={product.gallery}
            attributes={product.attributes}
            inStock={product.inStock}
            brand={product.brand}
          />
        ))}
      </>
    );
  };
  render() {
    return (
      <>
        <h1 className={styles.title}>{this.props.state.category}</h1>
        <div className={styles.listing}>
          <Query query={fetchProducts(this.props.state.category)}>{this.queryHandler}</Query>
        </div>
      </>
    );
  }
}

export default ListingPage;
