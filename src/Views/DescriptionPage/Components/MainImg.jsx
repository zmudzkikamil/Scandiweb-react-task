import { Component } from 'react';
import styles from '../DescriptionPage.module.scss';

export class MainImg extends Component {
  render() {
    return (
      <div className={styles['description__main']}>
        <img
          className={styles['description__main-img']}
          src={this.props.state}
          alt={this.props.productName}
        />
        <div className={styles['shadow']}></div>
      </div>
    );
  }
}

export default MainImg;
