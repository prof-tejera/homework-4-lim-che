import { Component } from "react";

import Number from "./Number";
import Operator from "./Operator";
import Screen from "./Screen";
import './Calculator.css';

class Calculator extends Component {
  state = {
    first: null,
    operator: null,
    second: null,
  };

  handleNumberClick = (number) => {
    if (!this.state.operator) {
      this.setState({ first: `${this.state.first || ""}${number}` });
    } else {
      this.setState({ second: `${this.state.second || ""}${number}` });
    }
  };

  handleOperatorClick = (operator) => {
    if (operator === "=") {
      const first = parseInt(this.state.first);
      const second = parseInt(this.state.second);

      if (this.state.operator === "+") {
        this.setState({ operator: null, first: first + second, second: null });
      } else if (this.state.operator === "/") {
        this.setState({ operator: null, first: first / second, second: null });
      } else if (this.state.operator === "-") {
        this.setState({ operator: null, first: first - second, second: null });
      } else if (this.state.operator === "x") {
        this.setState({ operator: null, first: first * second, second: null });
      }
    } else if (operator === "clear") {
      this.setState({ first: 0, second: null, operator: null });
    } else {
      this.setState({ operator });
    }
  };

  getScreenValue = () => this.state.second || this.state.first;

  render() {
    return (
      <div className="calculators">
        <Screen value={this.getScreenValue()} />
        <div className="button">
          <div className="buttons">
            <div className="numbers">
              <div className="row">
                <Number value={7} onClick={this.handleNumberClick} />
                <Number value={8} onClick={this.handleNumberClick} />
                <Number value={9} onClick={this.handleNumberClick} />
                <Operator value="/" onClick={this.handleOperatorClick} />
              </div>
              <div className="row">
                <Number value={4} onClick={this.handleNumberClick} />
                <Number value={5} onClick={this.handleNumberClick} />
                <Number value={6} onClick={this.handleNumberClick} />
                <Operator value="x" onClick={this.handleOperatorClick} />
              </div>
              <div className="row">
                <Number value={1} onClick={this.handleNumberClick} />
                <Number value={2} onClick={this.handleNumberClick} />
                <Number value={3} onClick={this.handleNumberClick} />
                <Operator value="+" onClick={this.handleOperatorClick} />
              </div>
              <div className="row">
                <Number value={0} onClick={this.handleNumberClick} />
                <Operator value="." onClick={this.handleOperatorClick} />
                <Operator value="=" onClick={this.handleOperatorClick} />
                <Operator value="-" onClick={this.handleOperatorClick} />
              </div>
              <Operator value="clear" onClick={this.handleOperatorClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
