import { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './ButtonsContainer.module.scss';
import CheckoutBtn from './CheckoutBtn';
import ViewBagBtn from './ViewBagBtn';
export class ButtonsContainer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Link to='/cart' >
          <ViewBagBtn setPopover={this.props.setPopover} />
        </Link>
        <CheckoutBtn />
      </div>
    );
  }
}

export default ButtonsContainer;
