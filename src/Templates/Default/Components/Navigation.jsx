import { Component } from 'react';
import Logo from '../../../Shared/assets/brand/Logo';
import styles from './Navigation.module.scss';
import appStyles from '../../../Templates/Default/App.module.scss';
import CurrencySwitch from './CurrencySwitch';
import CartBtn from './CartBtn';
import NavItemsBox from './NavItemsBox';

export default class Navigation extends Component {
  render() {
    return (
      <nav className={styles.nav}>
        <div className={appStyles.wrapper}>
          <div className={styles.nav__wrapper}>
            <NavItemsBox />
            <div className={`${styles['nav__logo']}`}>
              <Logo />
            </div>
            <div className={styles['nav__btns-box']}>
              <CurrencySwitch />
              <CartBtn />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
