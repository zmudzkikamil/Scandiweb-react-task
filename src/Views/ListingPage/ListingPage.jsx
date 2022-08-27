import { Component } from 'react';
import styles from './ListingPage.module.scss';
import { Query } from '@apollo/client/react/components';
import { fetchProducts } from '../../Features/fetchAllProducts';
import Product from './Components/Product';
import LoadingBox from '../../Shared/Components/LoadingBox';
import ErrorBox from '../../Shared/Components/ErrorBox';
import NotFound from '../../Shared/Components/NotFound';
import { connect } from 'react-redux';
import { changeCategory } from '../../ContextManager/CurrentCategorySlice';
export class ListingPage extends Component {
  componentDidMount = () => {
    this.props.dispatch(changeCategory(this.props.match.params.category));
  };
  render() {
    return (
      <>
        <Query query={fetchProducts(this.props.match.params.category)}>
          {({ loading, error, data }) => {
            if (loading) return <LoadingBox className="listing-page" />;
            if (error) return <ErrorBox />;
            if (!data.category) return <NotFound />;
            const { products } = data.category;
            return (
              <>
                <h1 className={styles.title}>{this.props.match.params.category}</h1>
                <div className={styles.listing}>
                  {products.map((product) => (
                    <Product product={product} key={product.name} nameOfProduct={product.name} />
                  ))}
                </div>
              </>
            );
          }}
        </Query>
      </>
    );
  }
}

export default connect()(ListingPage);
