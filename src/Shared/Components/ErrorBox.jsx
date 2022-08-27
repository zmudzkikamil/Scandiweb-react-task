import { Component } from 'react';
import styles from './ErrorBox.module.scss';
export class ErrorBox extends Component {
  render() {
    return (
      <div className={`${styles['error-box']}`}>
        <p className={`${styles[this.props.className] || styles['error']}`}>
          Oops, something went wrong. Try again later.
        </p>
      </div>
    );
  }
}

export default ErrorBox;
