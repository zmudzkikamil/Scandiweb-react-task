import { Component } from 'react';
import styles from '../CartPage.module.scss';
import SwitchImg from './SwitchImg';
export class ProductGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbnail:
        this.props.id === 'jacket-canada-goosee' ? this.props.gallery[5] : this.props.gallery[0]
    }; // hardcoded, because gallery[0] on Jacket doesn't match the design of the webpage. I would suggest to add "thumbnail" to graphQL server to avoid hardcoding here.
  }
  setThumbnail = (img) => {
    this.setState((prev) => ({ ...prev, thumbnail: img }));
  };
  render() {
    return (
      <div className={styles['cart__gallery-box']}>
        <img
          src={this.state.thumbnail}
          className={`${styles['cart__gallery-img']} ${
            this.props.id === 'jacket-canada-goosee' && styles.jacket
          }`}
          alt={this.props.productName}
        />
        <div className={styles['cart__gallery-shadow']}></div>
        {this.props.gallery.length > 1 && (
          <SwitchImg
            setThumbnail={this.setThumbnail}
            thumbnail={this.state.thumbnail}
            gallery={this.props.gallery}
          />
        )}
      </div>
    );
  }
}

export default ProductGallery;
