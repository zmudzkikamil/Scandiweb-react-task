import { Component } from 'react';
import styles from '../DescriptionPage.module.scss';
import MainImg from './MainImg';
export class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { mainImg: this.props.gallery[0] };
  }
  setMainImg(img) {
    this.setState((prev) => ({ ...prev, mainImg: img }));
  }
  render() {
    return (
      <>
        <div className={`${styles['description__scroll']} ${styles['scroll']}`}>
          <ul className={styles['description__gallery']}>
            {this.props.gallery.map((img) => (
              <li
                onClick={() => this.setMainImg(img)}
                key={this.props.gallery.indexOf(img)}
                className={styles['description__gallery-photo-box']}
              >
                <img
                  className={styles['description__gallery-photo']}
                  src={img}
                  alt={this.props.productName}
                />
                <div className={styles['shadow']}></div>
              </li>
            ))}
          </ul>
        </div>
        <MainImg state={this.state.mainImg} productName={this.props.productName} />
      </>
    );
  }
}

export default Gallery;
