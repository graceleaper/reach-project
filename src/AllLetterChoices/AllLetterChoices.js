import React from "react"
import './AllLetterChoices.css'
import choices from './choices'

class AllLetterChoices extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            alphabet: []
    }
}

componentDidMount() {
    this.setState({alphabet: choices})
}

handleClick = (letter) => {
    this.props.correctionCheck(letter)
}

  render() {
    return (
        <div className="letters-container">
            <div className="letters-board">
            {this.state.alphabet.map((letter, index) => {

                return (
                    <div className="single-letter-container" key={index}>
                        <div
                            onClick={() => this.handleClick(letter)}
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
