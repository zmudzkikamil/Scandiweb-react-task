import { Component } from 'react';
import styles from './NotFound.module.scss';
export class NotFound extends Component {
  render() {
    return (
      <div>
        <h3 className={styles.title}>404 page not found.</h3>
        <p className={styles.error}>Please check if the entered URL is correct.</p>
      </div>
    );
  }
}

export default NotFound;
