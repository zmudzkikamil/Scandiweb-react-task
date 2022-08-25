import { Query } from '@apollo/client/react/components';
import { Component } from 'react';
import { fetchProduct } from '../../Features/fetchProduct';
import Spinner from '../../Shared/assets/svg/Spinner';
import styles from './DescriptionPage.module.scss';

import Gallery from './Components/Gallery';

import DescriptionContainer from './Components/DescriptionContainer';

export class DescriptionPage extends Component {
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
          <p className={styles.error}>Oops, Something went wrong. Try again later.</p>
        </div>
      );
    const { product } = data;
    return (
      <>
        <Gallery gallery={product.gallery} productName={product.name} />
        <DescriptionContainer
          productId={this.props.location.state?.productId || 'huarache-x-stussy-le'}
          product={product}
        />
      </>
    );
  };
  render() {
    return (
      <div className={styles.description}>
        <Query
          query={fetchProduct(this.props.location.state?.productId || 'huarache-x-stussy-le')}
          fetchPolicy="network-only"
        >
          {this.queryHandler}
        </Query>
      </div>
    );
  }
}

export default DescriptionPage;
