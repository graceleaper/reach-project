import React from "react"
import './AllLetterChoices.css'

class AllLetterChoices extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            alphabet: [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z"
        ]
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
                            className="single-letter-choice"
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
