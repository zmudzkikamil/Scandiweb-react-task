import { Component } from 'react';
import Price from './Price';
import AttributeBox from './AttributeBox';
import ColorBox from './ColorBox';
import styles from './ProductInfo.module.scss';
export class ProductInfo extends Component {
  render() {
    return (
      <div className={`${styles.box} ${styles[this.props.className]}`}>
        <h3 className={styles.brand}>{this.props.product.brand}</h3>
        <h3 className={styles.title}>{this.props.product.productName}</h3>
        <p className={styles.price}>
          <Price prices={this.props.product.prices} />
        </p>
        {this.props.product.allAttributes
          .filter((atr) => atr.id !== 'Color')
          .map((atr) => (
            <AttributeBox
              className={this.props.className}
              selectedAttributeId={this.props.product.selectedAttributes[atr.id]}
              key={atr.id}
              atr={atr}
            />
          ))}
        {this.props.product.allAttributes
          .filter((atr) => atr.id === 'Color')
          .map((atr) => (
            <ColorBox
              className={this.props.className}
              selectedAttributeId={this.props.product.selectedAttributes[atr.id]}
              key={atr.id}
              atr={atr}
            />
          ))}
      </div>
    );
  }
}

export default ProductInfo;
