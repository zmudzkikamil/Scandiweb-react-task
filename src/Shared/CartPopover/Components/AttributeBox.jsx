import React, { Component } from "react";
import styles from "./AttributeBox.module.scss";
export class AttributeBox extends Component {
  render() {
    return (
      <div className={styles["atr-box"]} key={this.props.atr.id}>
        <p className={styles["atr-title"]}>{this.props.atr.name}:</p>
        <div className={styles["value-box"]}>
          {this.props.atr.items.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className={`${styles["value"]} ${
                this.props.selectedAttributeId === item.id && styles.selected
              }`}
            >
              {item.value}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AttributeBox;
