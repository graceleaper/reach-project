import React from 'react'
import { Link } from 'react-router-dom'

import winImage from './images/win.png'
import loseImage from './images/lose.png'

import './GameEnd.css'

const GameEnd = ({correctGuesses, lettersToGuessNonRepeating, lettersToGuess}) => {
    if (correctGuesses.length === lettersToGuessNonRepeating.length && lettersToGuessNonRepeating.length !== 0) {
        return (
          <div>
              <img className="game-end-image" alt="apples" src={winImage} width={"25%"} />
            <h1>You win!</h1>
            <p>Correct! The word is:</p>
            <p className="word-reveal">{lettersToGuess.join('')}</p>
            <Link to={'/'}>
                <button width={"15%"}>
                    Start again
                </button>
            </Link>
          </div>
        )
      }
        return (
            <div className="message">
            <img className="game-end-image" alt="bitten apple" src={loseImage} width={"25%"} />
            <h1>Game Over.</h1>
            <p>Sorry, you lose. The word was:</p>
            <p className="word-reveal">{lettersToGuess.join('')}</p>
            <Link to={'/'}>
                <button width={"25%"}>
                    Start again
                </button>
            </Link>
          </div>
        )
}

export default GameEnd