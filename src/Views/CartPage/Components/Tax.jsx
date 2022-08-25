import { Component } from 'react';
import { connect } from 'react-redux';
import { TotalPriceHandler } from '../../../Shared/helpers/TotalPriceHandler';
import { TAX_VALUE } from '../../../Shared/constants/constants';
export class Tax extends Component {
  render() {
    return (
      <>
        {this.props.symbol}{' '}
        {(TotalPriceHandler(this.props.cart, this.props.label) * TAX_VALUE).toFixed(2)}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cartProducts,
    label: state.currency.label,
    symbol: state.currency.symbol
  };
};

export default connect(mapStateToProps)(Tax);
