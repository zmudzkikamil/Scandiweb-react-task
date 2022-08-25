import { Component } from 'react';
import { connect } from 'react-redux';
import TotalPrice from '../../../Shared/Components/TotalPrice';
export class PriceBox extends Component {
  render() {
    return (
      <>
        {this.props.symbol} <TotalPrice />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { symbol: state.currency.symbol };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PriceBox);
