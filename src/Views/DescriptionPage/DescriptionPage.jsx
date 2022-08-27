import { Query } from '@apollo/client/react/components';
import { Component } from 'react';
import { fetchProduct } from '../../Features/fetchProduct';
import styles from './DescriptionPage.module.scss';
import Gallery from './Components/Gallery';
import DescriptionContainer from './Components/DescriptionContainer';
import LoadingBox from '../../Shared/Components/LoadingBox';
import ErrorBox from '../../Shared/Components/ErrorBox';
import NotFound from '../../Shared/Components/NotFound';

export class DescriptionPage extends Component {
  render() {
    return (
      <div className={styles.description}>
        <Query query={fetchProduct(this.props.match.params.id)} fetchPolicy="network-only">
          {({ loading, error, data }) => {
            if (loading) return <LoadingBox className="product-page" />;
            if (error) return <ErrorBox />;
            if (!data.product) return <NotFound />;
            const { product } = data;
            return (
              <>
                <Gallery id={product.id} gallery={product.gallery} productName={product.name} />
                <DescriptionContainer productId={this.props.match.params.id} product={product} />
              </>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default DescriptionPage;
