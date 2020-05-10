import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class CustomButton extends Component {
  state = {};
  render() {
    const id = this.props.id;
    return (
      <div>
        <h4>
          <span className="badge badge-success m-2">
            {this.props.operator === "+" ? this.props.operator : null}
            {this.props.intValue}
          </span>
        </h4>

        <button
          className="btn btn-primary"
          value={this.props.value}
          id={this.props.id}
          onClick={() => this.props.clickHandler(id)}
        >
          {this.props.count}
        </button>
      </div>
    );
  }
}

export default CustomButton;
