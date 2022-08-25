import { connect } from "react-redux";
import { Component } from "react";
import { changeCurrency } from "../../../ContextManager/CurrencySlice";
import ArrowDown from "../../../Shared/assets/svg/ArrowDown";
import ArrowUp from "../../../Shared/assets/svg/ArrowUp";
import CurrencyPopover from "../../../Shared/CurrencyPopover/CurrencyPopover";
import styles from "./Navigation.module.scss";

export class CurrencySwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isSelected: JSON.parse(localStorage.getItem("currency"))?.label || "USD",
    };
  }
  setModal = () => {
    this.setState((prev) => ({ ...prev, isOpen: !prev.isOpen }));
  };
  updateCurrency = (label, symbol) => {
    this.setState((prev) => ({ ...prev, isSelected: label }));
    this.props.dispatch(changeCurrency({ label: label, symbol: symbol }));
  };
  render() {
    return (
      <div>
        <button onClick={this.setModal} className={styles["nav__btn"]}>
          <p>{this.props.symbol}</p>
          <div>{this.state.isOpen ? <ArrowUp /> : <ArrowDown />}</div>
        </button>
        <CurrencyPopover
          setModal={this.setModal}
          isOpen={this.state.isOpen}
          isSelected={this.state.isSelected}
          updateCurrency={this.updateCurrency}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { symbol: state.currency.symbol };
};

export default connect(mapStateToProps)(CurrencySwitch);
