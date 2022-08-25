import { Component } from 'react';
import { Markup } from 'interweave';
import styles from '../DescriptionPage.module.scss';

export class InfoBox extends Component {
  render() {
    return (
      <div className={`${styles['description__info']} ${styles['scroll']}`}>
        <Markup content={`${this.props.description}`} />
      </div>
    );
  }
}

export default InfoBox;
