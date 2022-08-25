import { Component } from 'react';
import styles from './Brand.module.scss';
export class Brand extends Component {
  render() {
    return <h3 className={styles.brand}>{this.props.brand}</h3>;
  }
}

export default Brand;
