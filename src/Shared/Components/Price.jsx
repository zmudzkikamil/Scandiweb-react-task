import { Component } from 'react';
import { connect } from 'react-redux';
export class Price extends Component {
  render() {
    return (
      <>
        {this.props.prices.reduce(
          (acc, curr) =>
            curr.currency.label === this.props.label
              ? `${curr.currency.symbol} ${curr.amount.toFixed(2)}`
              : acc,
          ''
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { label: state.currency.label, symbol: state.currency.symbol };
};
export default connect(mapStateToProps)(Price);
