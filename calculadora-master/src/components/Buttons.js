import React from 'react';
import './Buttons.css';


export default class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons">
        <button id="parenthesis-open" onClick={this.props.onParenthesis}>(</button>
        <button id="parenthesis-close" onClick={this.props.onParenthesis}>)</button>
        <button id="retroceso" onClick={this.props.onBackspace}>C</button>
        <button id="clear" onClick={this.props.onClear}>AC</button>

        <button id="7" onClick={this.props.onDigit}>7</button>
        <button id="8" onClick={this.props.onDigit}>8</button>
        <button id="9" onClick={this.props.onDigit}>9</button>
        <button id="divide" onClick={this.props.onOperator}>/</button>

        <button id="4" onClick={this.props.onDigit}>4</button>
        <button id="5" onClick={this.props.onDigit}>5</button>
        <button id="6" onClick={this.props.onDigit}>6</button>
        <button id="multiply" onClick={this.props.onOperator}>*</button>

        <button id="1" onClick={this.props.onDigit}>1</button>
        <button id="2" onClick={this.props.onDigit}>2</button>
        <button id="3" onClick={this.props.onDigit}>3</button>
        <button id="subtract" onClick={this.props.onOperator}>-</button>

        <button id="0" onClick={this.props.onDigit}>0</button>
        <button id="decimal" onClick={this.props.onDecimal}>.</button>
        <button id="igual" onClick={this.props.onEqual}>=</button>
        <button id="add" onClick={this.props.onOperator}>+</button>

        <button id="seno" onClick={this.props.onOperator}>sin</button>
        <button id="coseno" onClick={this.props.onOperator}>cos</button>
        <button id="tangente" onClick={this.props.onOperator}>tan</button>
       

      </div>
    )
  }
}