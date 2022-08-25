import { Component } from 'react';
import styles from '../DescriptionPage.module.scss';
import { connect } from 'react-redux';
import { addNewProduct } from '../../../ContextManager/CartSlice';
export class AddToCartBtn extends Component {
  handleClick = () => {
    this.props.dispatch(addNewProduct(this.props.state));
  };
  render() {
    return (
      <button
        onClick={this.handleClick}
        disabled={!this.props.inStock}
        className={styles['description__add-btn']}
      >
        Add to Cart
      </button>
    );
  }
}

export default connect()(AddToCartBtn);
