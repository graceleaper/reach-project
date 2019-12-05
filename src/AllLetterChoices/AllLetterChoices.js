import React from "react"
import './AllLetterChoices.css'
import choices from './choices'

const styleClickedAndUnclicked = (letter, guessedLetters) => {
  if (guessedLetters.has(letter)) {
      return "single-letter-choice-deactive"
  } else {
      return "single-letter-choice-active"
  }
}

const AllLetterChoices = (props) => {
  const guessedLetters = new Set(props.correctGuesses.concat(props.incorrectGuesses))
    return (
      <div className="letters-container">
        <div className="letters-board">
          {choices.map((letter, index) => {
            return (
              <div className="single-letter-container" key={index}>
                <div
                  onClick={() => props.correctionCheck(letter)}
                  className={styleClickedAndUnclicked(letter, guessedLetters)}
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

export default AllLetterChoices
