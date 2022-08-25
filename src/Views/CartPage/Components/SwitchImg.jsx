import { Component } from 'react';
import ArrowLeft from '../../../Shared/assets/svg/ArrowLeft';
import ArrowRight from '../../../Shared/assets/svg/ArrowRight';
import styles from '../CartPage.module.scss';
export class SwitchImg extends Component {
  prevImg = () => {
    let indexOfThumbnail = this.props.gallery.indexOf(this.props.thumbnail);
    if (indexOfThumbnail === 0) {
      return this.props.setThumbnail(this.props.gallery[this.props.gallery.length - 1]);
    }
    this.props.setThumbnail(this.props.gallery[indexOfThumbnail - 1]);
  };
  nextImg = () => {
    let indexOfThumbnail = this.props.gallery.indexOf(this.props.thumbnail);
    if (indexOfThumbnail === this.props.gallery.length - 1) {
      return this.props.setThumbnail(this.props.gallery[0]);
    }
    this.props.setThumbnail(this.props.gallery[indexOfThumbnail + 1]);
  };
  render() {
    return (
      <div className={styles['cart__gallery-switch']}>
        <button onClick={this.prevImg} className={styles['switch-btn']}>
          <ArrowLeft />
        </button>
        <button onClick={this.nextImg} className={styles['switch-btn']}>
          <ArrowRight />
        </button>
      </div>
    );
  }
}

export default SwitchImg;
