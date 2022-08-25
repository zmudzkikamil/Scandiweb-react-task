import { Component } from 'react';
import styles from '../DescriptionPage.module.scss';
import AttributeBox from './AttributeBox';
import ColorBox from './ColorBox';
import PriceBox from './PriceBox';
import AddToCartBtn from './AddToCartBtn';
import InfoBox from './InfoBox';
import Brand from '../../../Shared/Components/Brand';
import ProductName from '../../../Shared/Components/ProductName';

export class DescriptionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.productId,
      productName: this.props.product.name,
      brand: this.props.product.brand,
      gallery: this.props.product.gallery,
      prices: this.props.product.prices,
      quantity: 1,
      allAttributes: this.props.product.attributes,
      selectedAttributes: {}
    };
  }
  setAttributesHandler = (selected) => {
    this.setState((prev) => ({
      ...prev,
      selectedAttributes: { ...prev.selectedAttributes, ...selected }
    }));
  };
  render() {
    return (
      <div className={styles['description__container']}>
        <Brand brand={this.props.product.brand} />
        <ProductName productName={this.props.product.name} />
        {this.props.product.attributes
          .filter((atr) => atr.id !== 'Color')
          .map((atr) => (
            <AttributeBox
              productId={this.props.productId}
              setAttributesHandler={this.setAttributesHandler}
              key={atr.id}
              atr={atr}
            />
          ))}
        {this.props.product.attributes
          .filter((atr) => atr.id === 'Color')
          .map((atr) => (
            <ColorBox
              productId={this.props.productId}
              setAttributesHandler={this.setAttributesHandler}
              key={atr.id}
              atr={atr}
            />
          ))}
        <PriceBox setPriceHandler={this.setPriceHandler} prices={this.props.product.prices} />
        <AddToCartBtn
          state={this.state}
          attributes={this.props.product.attributes}
          inStock={this.props.product.inStock}
        />
        <InfoBox description={this.props.product.description} />
      </div>
    );
  }
}

export default DescriptionContainer;
