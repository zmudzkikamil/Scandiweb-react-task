import React, { Component } from 'react';
import NavCart from '../../../Shared/assets/svg/NavCart';
import styles from './Navigation.module.scss';
import { connect } from 'react-redux';
import CartPopover from '../../../Shared/CartPopover/CartPopover';
export class CartBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      totalQuantity:
        JSON.parse(localStorage.getItem('cart'))?.reduce((acc, curr) => acc + curr.quantity, 0) || 0
    };
  }
  setPopover = () => {
    this.setState((prev) => ({ ...prev, isOpen: !prev.isOpen }));
  };
  componentDidUpdate = () => {
    if (
      this.state.totalQuantity !== this.props.cart.reduce((acc, curr) => acc + curr.quantity, 0)
    ) {
      this.setState((prev) => ({
        ...prev,
        totalQuantity: this.props.cart.reduce((acc, curr) => acc + curr.quantity, 0)
      }));
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.setPopover} className={`${styles.nav__btn} ${styles.cart}`}>
          <NavCart />
          <div className={`${styles.quantity} ${this.props.cart.length > 0 && styles.show}`}>
            {this.state.totalQuantity}
          </div>
        </button>
        <CartPopover
          totalQuantity={this.state.totalQuantity}
          setPopover={this.setPopover}
          open={this.state.isOpen}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { cart: state.cart.cartProducts };
};
export default connect(mapStateToProps)(CartBtn);
