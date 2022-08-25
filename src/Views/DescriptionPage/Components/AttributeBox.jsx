import { Component } from 'react';
import styles from '../DescriptionPage.module.scss';

export class AttributeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      atrSelected:
        localStorage.getItem([`${this.props.productId} ${this.props.atr.id}`]) ||
        this.props.atr.items[0].id
    };
  }
  componentDidMount() {
    this.props.setAttributesHandler({
      [this.props.atr.id]:
        localStorage.getItem([`${this.props.productId} ${this.props.atr.id}`]) ||
        this.props.atr.items[0].id
    });
  }
  handleClick = (id) => {
    this.setState((prev) => ({ ...prev, atrSelected: id }));
    this.props.setAttributesHandler({
      [this.props.atr.id]: id
    });
    localStorage.setItem([`${this.props.productId} ${this.props.atr.id}`], id);
  };
  render() {
    return (
      <div className={styles['description__atr-box']} key={this.props.atr.id}>
        <p className={styles['description__atr-title']}>{this.props.atr.name}:</p>
        <div className={styles['description__value-box']}>
          {this.props.atr.items.map((item) => (
            <button
              onClick={() => this.handleClick(item.id)}
              key={item.id}
              id={item.id}
              className={`${styles['description__value']} ${
                this.state.atrSelected === item.id && styles.selected
              }`}
            >
              {item.value}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default AttributeBox;
