import React from 'react'
import './GameStatus.css'

const GameStatus = ({guessesLeft, incorrectGuesses}) => {
    return (
        <div className="game-status-container">
            <div className="game-stats">
            <p>Tries left: {guessesLeft}</p>
            <div className="incorrect-letters-container">
            <p>Incorrect letters:</p>
            {incorrectGuesses.map((incorrectGuess, index) => {
                return (
                        <p key={index} className="incorrect-letter">{incorrectGuess}</p>
                )
            })}
            </div>
            </div>
        </div>
    )
}

export default GameStatus