import { Query } from '@apollo/client/react/components';
import React, { Component } from 'react';
import { CATEGORY_NAMES } from '../../../Features/fetchCategories';
import LoadingBox from '../../../Shared/Components/LoadingBox';
import styles from './Navigation.module.scss';
import NavItem from './NavItem';
export class NavItemsBox extends Component {
  render() {
    return (
      <ul className={styles['nav__categories-list']}>
        <Query query={CATEGORY_NAMES}>
          {({ loading, data }) => {
            if (loading) return <LoadingBox className="navigation" />;
            return (
              <>
                {data.categories.map((category) => (
                  <NavItem category={category.name} key={category.name} />
                ))}
              </>
            );
          }}
        </Query>
      </ul>
    );
  }
}

export default NavItemsBox;
