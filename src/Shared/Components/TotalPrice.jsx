import { Component } from "react";
import { connect } from "react-redux";
import { TotalPriceHandler } from "../helpers/TotalPriceHandler";
export class TotalPrice extends Component {
  render() {
    return <>{TotalPriceHandler(this.props.cart, this.props.label)}</>;
  }
}
const mapStateToProps = (state) => {
  return { cart: state.cart.cartProducts, label: state.currency.label };
};
export default connect(mapStateToProps)(TotalPrice);
