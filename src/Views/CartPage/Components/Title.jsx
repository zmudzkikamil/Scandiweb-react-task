import { Component } from 'react';
import styles from '../CartPage.module.scss';
export class Title extends Component {
  render() {
    return <h2 className={styles['cart__title']}>cart</h2>;
  }
}

export default Title;
