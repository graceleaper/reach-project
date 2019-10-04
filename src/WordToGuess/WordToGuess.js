import React from "react"
import "./WordToGuess.css"

const WordToGuess = ({correctGuesses, lettersToGuess}) => {

  const letterCheck = (letter) => {
    if (!correctGuesses.includes(letter)) return "hidden"
  }

    return (
      <div className="container-letters">
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
