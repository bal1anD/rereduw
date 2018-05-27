import React, {Component} from 'react'

class Button extends Component {
  handleClick () {
    this.props.changeDisplay('I have changed!')
  }

  render () {
    return (
      <button type={this.props.type} onClick={this.handleClick.bind(this)}>{this.props.displayText}</button>
    )
  }
}

export default Button
