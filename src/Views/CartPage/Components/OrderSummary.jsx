import { Component } from 'react';
import { connect } from 'react-redux';
import Tax from './Tax';
import TotalPriceBox from './TotalPriceBox';
import TotalQuantity from './TotalQuantity';

export class OrderSummary extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>Tax 21%:</td>
            <td>
              <Tax />
            </td>
          </tr>
          <tr>
            <td>Quantity:</td>
            <td>
              <TotalQuantity />
            </td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>
              <TotalPriceBox />
            </td>
          </tr>
        </tbody>
      </table>
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

export default connect(mapStateToProps)(OrderSummary);
