import { Component } from 'react';
import styles from './CartPage.module.scss';
import { connect } from 'react-redux';
import Title from './Components/Title';
import ProductInfo from '../../Shared/Components/ProductInfo';
import QuantityChanger from '../../Shared/Components/QuantityChanger';
import ProductGallery from './Components/ProductGallery';
import OrderBtn from './Components/OrderBtn';
import OrderSummary from './Components/OrderSummary';
export class CartPage extends Component {
  render() {
    return (
      <div className={styles['cart__container']}>
        <Title />
        <hr></hr>
        {this.props.cart.length > 0 ? (
          this.props.cart.map((product, index) => (
            <div key={index}>
              <div className={styles['cart__product']}>
                <ProductInfo className={'cart-page'} product={product} />
                <QuantityChanger
                  className={'cart-page'}
                  product={product}
                  quantity={product.quantity}
                />
                <ProductGallery
                  id={product.id}
                  productName={product.productName}
                  gallery={product.gallery}
                />
              </div>
              <hr></hr>
            </div>
          ))
        ) : (
          <p className={styles['cart__empty']}>Cart is empty!</p>
        )}
        <OrderSummary />
        <OrderBtn />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { cart: state.cart.cartProducts };
};

export default connect(mapStateToProps)(CartPage);
