import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

export class NavItem extends Component {
  changeCategory = () => {
    this.props.changeCategoryHandler(this.props.category);
  };
  render() {
    return (
      <Link to={{ pathname: '/' }}>
        <li
          onClick={this.changeCategory}
          className={`${styles.nav__category} ${
            this.props.state.category === this.props.category && styles.selected
          }`}
        >
          {this.props.category}
        </li>
      </Link>
    );
  }
}

export default NavItem;
