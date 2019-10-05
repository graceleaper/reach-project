import React from "react"
import './AllLetterChoices.css'
import choices from './choices'

class AllLetterChoices extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      alphabet: choices
    }
  }

  styleClickedAndUnclicked = letter => {
    if ((this.props.correctGuesses).concat(this.props.incorrectGuesses).includes(letter)) {
        return "single-letter-choice-deactive"
    } else {
        return "single-letter-choice-active"
    }
  }

  render() {
    return (
      <div className="letters-container">
        <div className="letters-board">
          {this.state.alphabet.map((letter, index) => {
            return (
              <div className="single-letter-container" key={index}>
                <div
                  onClick={() => this.props.correctionCheck(letter)}
                  className={this.styleClickedAndUnclicked(letter)}
                >
                  {letter}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default AllLetterChoices
