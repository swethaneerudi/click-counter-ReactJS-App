// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="click-counter-bg">
        <h1 className="counter-heading">
          The Button has been clicked <br />
          <span className="counter-value">{count}</span> times
        </h1>
        <p className="text">Click the button to increase the count!</p>
        <div className="button-container">
          <button
            type="button"
            className="click-me-btn"
            onClick={this.onIncrement}
          >
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
