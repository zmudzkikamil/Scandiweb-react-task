import { Component } from 'react';
import Spinner from '../assets/svg/Spinner';
import styles from './LoadingBox.module.scss';
export class LoadingBox extends Component {
  render() {
    return (
      <div className={styles[this.props.className]}>
        <Spinner />
      </div>
    );
  }
}

export default LoadingBox;
