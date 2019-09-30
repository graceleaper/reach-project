import React from "react"
import "./WordToGuess.css"

const WordToGuess = ({ correctGuesses, lettersToGuess, incorrectGuesses }) => {

  const letterCheck = (letter) => {
    if (correctGuesses.includes(letter)) return "single-letter shown"
    else return "single-letter hidden"
  }

    return (
      <div className="container-letters">
          {console.log(correctGuesses)}
          {console.log(incorrectGuesses)}
          {lettersToGuess.map((letter, index) => {
          return (
            <div className="slot" key={index}>
                <div className={letterCheck(letter)}>
                    {letter}
                </div>
            </div>
          )
          })}
      </div>
    )
}

export default WordToGuess
