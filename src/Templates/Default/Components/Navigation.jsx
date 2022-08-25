import { Component } from 'react';
import Logo from '../../../Shared/assets/brand/Logo';
import styles from './Navigation.module.scss';
import appStyles from '../../../Templates/Default/App.module.scss';
import { Query } from '@apollo/client/react/components';
import { CATEGORY_NAMES } from '../../../Features/fetchCategories.js';
import NavItem from './NavItem';
import CurrencySwitch from './CurrencySwitch';
import CartBtn from './CartBtn';
import Spinner from '../../../Shared/assets/svg/Spinner';

export default class Navigation extends Component {
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
    return (
      <>
        {data.categories.map((category) => (
          <NavItem
            state={this.props.state}
            changeCategoryHandler={this.props.changeCategoryHandler}
            category={category.name}
            key={category.name}
          />
        ))}
      </>
    );
  };

  render() {
    return (
      <nav className={styles.nav}>
        <div className={appStyles.wrapper}>
          <div className={styles.nav__wrapper}>
            <ul className={styles['nav__categories-list']}>
              <Query query={CATEGORY_NAMES}>{this.queryHandler}</Query>
            </ul>
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
