import { Component } from "react";
import { connect } from "react-redux";

export class TotalQuantity extends Component {
  render() {
    return <>{this.props.cart.reduce((acc, curr) => acc + curr.quantity, 0)}</>;
  }
}

const mapStateToProps = (state) => {
  return { cart: state.cart.cartProducts };
};
export default connect(mapStateToProps)(TotalQuantity);
