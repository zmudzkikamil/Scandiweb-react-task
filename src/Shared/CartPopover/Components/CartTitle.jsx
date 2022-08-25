import { Component } from 'react';
import styles from './CartTitle.module.scss';

export class CartTitle extends Component {
  render() {
    return (
      <>
        {this.props.totalQuantity ? (
          <h2 className={styles.title}>
            My Bag,{' '}
            <span className={styles.quantity}>
              {this.props.totalQuantity} {this.props.totalQuantity > 1 ? 'items' : 'item'}
            </span>
          </h2>
        ) : (
          <p className={styles.info}>Cart is empty!</p>
        )}
      </>
    );
  }
}

export default CartTitle;
