// Write your code here.

import './index.css'

import {Component} from 'react'

class LettersCalculator extends Component {
  state = {count: 0, inputValue: ''}

  searchInput = event => {
    this.setState({inputValue: event.target.value})
  }

  onCount = () => {
    const {inputValue} = this.state
    const {length} = inputValue.length
    this.setState(prevState => ({count: prevState.count + length}))
  }

  render() {
    const {count, inputValue} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="para" htmlFor="label">
            Enter the phrase
          </label>
          <input
            type="text"
            value={inputValue}
            className="input"
            onChange={this.searchInput}
            id="label"
            placeholder="Enter the phrase"
          />
          <div className="mini">
            <p className="p" onChange={this.onCount}>
              No.of letters: {count}
            </p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="img"
        />
      </div>
    )
  }
}

export default LettersCalculator
