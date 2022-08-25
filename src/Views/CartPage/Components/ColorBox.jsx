import { Component } from 'react';
import styles from './ColorBox.module.scss';
export class ColorBox extends Component {
  render() {
    return (
      <div className={styles['atr-box']} key={this.props.atr.id}>
        <p className={styles['atr-title']}>{this.props.atr.name}:</p>
        <div className={styles['value-box-color']}>
          {this.props.atr.items.map((item) => (
            <div
              key={item.id}
              className={`${styles['value']} ${
                item.id === 'White' ? styles['color-white'] : styles['color']
              } ${this.props.selectedAttributeId === item.value && styles['selected-color']}`}
              style={{ backgroundColor: `${item.value}` }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorBox;
