import { Query } from '@apollo/client/react/components';
import { Component } from 'react';
import ReactDom from 'react-dom';
import { CURRENCIES } from '../../Features/fetchCurrency';
import Spinner from '../assets/svg/Spinner';
import { CurrencyOption } from './Components/CurrencyOption';
import styles from './CurrencyPopover.module.scss';
export class CurrencyPopover extends Component {
  queryHandler = ({ loading, error, data }) => {
    if (loading)
      return (
        <div className={styles['loading-box']}>
          <Spinner />
        </div>
      );
    if (error)
      return (
        <div className={styles['error-box']}>
          <p className={styles.error}>Oops, something went wrong. Try again later.</p>
        </div>
      );
    const { currencies } = data;
    return (
      <>
        {currencies.map((currency) => (
          <CurrencyOption
            updateCurrency={this.props.updateCurrency}
            isSelected={this.props.isSelected}
            setModal={this.props.setModal}
            label={currency.label}
            symbol={currency.symbol}
            key={currency.label}
          />
        ))}
      </>
    );
  };
  render() {
    if (!this.props.isOpen) return null;
    return ReactDom.createPortal(
      <>
        <div
          className={`${styles['currency-overlay']} ${styles.overlay}`}
          onClick={this.props.setModal}
        >
          <div className={styles['overlay-container']}>
            <div onClick={(e) => e.stopPropagation()} className={styles['currency-popover']}>
              <Query query={CURRENCIES}>{this.queryHandler}</Query>
            </div>
          </div>
        </div>
      </>,
      document.getElementById('popover')
    );
  }
}

export default CurrencyPopover;
