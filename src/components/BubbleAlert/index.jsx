import { Component } from "react";
import PropTypes from "prop-types";

export class BubbleAlert extends Component {
  getNumber(n) {
    if (!n) {
      return " ";
    }
    return n > 9 ? "9+" : n;
  }
  render() {
    const { value } = this.props;
    return (
      <span className="badge badge-sm indicator-item bg-red-600">
        {this.getNumber(value)}
      </span>
    );
  }
}

BubbleAlert.propTypes = {
  value: PropTypes.number.isRequired,
};
