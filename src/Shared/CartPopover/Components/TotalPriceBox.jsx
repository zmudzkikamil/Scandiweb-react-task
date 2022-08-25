import { Component } from 'react';
import { connect } from 'react-redux';
import TotalPrice from '../../Components/TotalPrice';
import styles from './TotalPriceBox.module.scss';
export class TotalPriceBox extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.price}>Total</div>
        <div className={styles.price}>
          {this.props.symbol}
          <TotalPrice />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { symbol: state.currency.symbol };
};
export default connect(mapStateToProps)(TotalPriceBox);
