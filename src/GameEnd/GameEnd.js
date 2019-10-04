import React from 'react'
import { Link } from 'react-router-dom'

import winImage from './images/win.png'
import loseImage from './images/lose.png'

import './GameEnd.css'

const GameEnd = ({correctGuesses, lettersToGuessNonRepeating}) => {

    if (correctGuesses.length === lettersToGuessNonRepeating.length && lettersToGuessNonRepeating.length !== 0) {
        return (
          <div>
              <img className="game-end-image" alt="apples" src={winImage} width={"25%"} />
            <p>You win!</p>
            <Link to={'/'}>
                <button width={"15%"}>
                    Start again
                </button>
            </Link>
          </div>
        )
      } else if (lettersToGuessNonRepeating.length === 0) {
        return <p>Loading...</p>
      }
        return (
            <div>
            <img className="game-end-image" alt="bitten apple" src={loseImage} width={"25%"} />
            <p>Game Over.</p>
            <Link to={'/'}>
                <button width={"25%"}>
                    Start again
                </button>
            </Link>
          </div>
        )
}

export default GameEnd