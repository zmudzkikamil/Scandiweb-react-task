import { Query } from '@apollo/client/react/components';
import { Component } from 'react';
import ReactDom from 'react-dom';
import { CURRENCIES } from '../../Features/fetchCurrency';
import ErrorBox from '../Components/ErrorBox';
import LoadingBox from '../Components/LoadingBox';
import { CurrencyOption } from './Components/CurrencyOption';
import styles from './CurrencyPopover.module.scss';
export class CurrencyPopover extends Component {
  render() {
    if (!this.props.isOpen) return null;
    return ReactDom.createPortal(
      <>
        <div
          className={`${styles['currency-overlay']} ${styles.overlay}`}
          onClick={this.props.setModal}>
          <div className={styles['overlay-container']}>
            <div onClick={(e) => e.stopPropagation()} className={styles['currency-popover']}>
              <Query query={CURRENCIES}>
                {({ loading, error, data }) => {
                  if (loading) return <LoadingBox className="currency" />;
                  if (error) return <ErrorBox className="currency" />;
                  return (
                    <>
                      {data.currencies.map((currency) => (
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
                }}
              </Query>
            </div>
          </div>
        </div>
      </>,
      document.getElementById('popover')
    );
  }
}

export default CurrencyPopover;
