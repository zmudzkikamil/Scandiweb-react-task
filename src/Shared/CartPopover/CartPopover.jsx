import { Component } from 'react';
import ReactDom from 'react-dom';
import styles from './CartPopover.module.scss';
import Container from './Components/Container';

export class CartPopover extends Component {
  render() {
    if (!this.props.open) return null;
    return ReactDom.createPortal(
      <>
        <div
          className={`${styles['cart-overlay']} ${styles.overlay}`}
          onClick={this.props.setPopover}
        >
          <div className={styles['overlay-container']}>
            <div onClick={(e) => e.stopPropagation()} className={styles['cart-popover']}>
              <Container
                setPopover={this.props.setPopover}
                totalQuantity={this.props.totalQuantity}
              />
            </div>
          </div>
        </div>
      </>,
      document.getElementById('popover')
    );
  }
}

export default CartPopover;
