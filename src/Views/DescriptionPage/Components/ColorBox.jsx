import { Component } from 'react';
import styles from '../DescriptionPage.module.scss';

export class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor:
        localStorage.getItem([`${this.props.productId} ${this.props.atr.id}`]) ||
        this.props.atr.items[0].value
    };
  }
  componentDidMount() {
    this.props.setAttributesHandler({
      [this.props.atr.id]:
        localStorage.getItem([`${this.props.productId} ${this.props.atr.id}`]) ||
        this.props.atr.items[0].value
    });
  }
  stateHandler(color) {
    this.setState((prev) => ({ ...prev, selectedColor: color }));
    this.props.setAttributesHandler({ [this.props.atr.id]: color });
    localStorage.setItem([`${this.props.productId} ${this.props.atr.id}`], color);
  }
  render() {
    return (
      <div className={styles['description__atr-box']} key={this.props.atr.id}>
        <p className={styles['description__atr-title']}>{this.props.atr.name}:</p>
        <div className={styles['description__value-box-color']}>
          {this.props.atr.items.map((item) => (
            <button
              key={item.id}
              onClick={() => this.stateHandler(item.value)}
              className={`${styles['description__value']} ${
                item.id === 'White' ? styles['color-white'] : styles['color']
              } ${this.state.selectedColor === item.value && styles['selected-color']}`}
              style={{ backgroundColor: `${item.value}` }}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorBox;
