// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onClickApply = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  onClickAccelarate = () => {
    const {count} = this.state

    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1>Speedometer</h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
        </div>
        <h2>Speed is {count}mph</h2>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button type="button" onClick={this.onClickAccelarate}>
            Accelerate
          </button>
          <button type="button" onClick={this.onClickApply}>
            Apply brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
