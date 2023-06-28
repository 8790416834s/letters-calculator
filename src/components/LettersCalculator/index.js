import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeLetters = event => {
    const {count} = this.state

    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="text-container">
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="Enter the phrase">Enter the phrase</label>
          <input
            type="text"
            placeholder="Enter the phrase"
            onChange={this.onChangeLetters}
            className="Enter the phrase"
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
