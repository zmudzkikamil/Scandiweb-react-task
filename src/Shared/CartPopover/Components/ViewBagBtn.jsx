import { Component } from 'react';
import styles from './ButtonsContainer.module.scss';

export class ViewBagBtn extends Component {
  render() {
    return (
      <button onClick={this.props.setPopover} className={`${styles.btn} ${styles.bag}`}>
        View Bag
      </button>
    );
  }
}

export default ViewBagBtn;
