import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeLetters = event => {
    const {count} = this.state

    this.setState({count: length.(event.target.value)})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="text-container">
          <h1>Calculate the Letters you enter</h1>

          <label htmlFor="Enter the phrase">Enter the phrase</label>
          <input
            type="Enter the phrase"
            onChange="onChangeLetters"
            className="text"
          />
          <p className="count-bg">No.of letters: {count}</p>
        </div>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
