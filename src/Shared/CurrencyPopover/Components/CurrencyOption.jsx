import { Component } from "react";
import styles from "../CurrencyPopover.module.scss";

export class CurrencyOption extends Component {
  clickHandler = () => {
    this.props.setModal();
    this.props.updateCurrency(this.props.label, this.props.symbol);
  };
  render() {
    return (
      <button
        onClick={this.clickHandler}
        className={`${styles["currency-option"]} ${
          this.props.isSelected === this.props.label &&
          styles["selected-currency"]
        }`}
      >
        {this.props.symbol} {this.props.label} {this.props.currency}
      </button>
    );
  }
}

export default CurrencyOption;
