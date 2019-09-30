import React from 'react'
import './GameStatus.css'

const GameStatus = ({guessesLeft, incorrectGuesses}) => {
    return (
        <div>
            <p>Tries left: {guessesLeft}</p>
            {incorrectGuesses.map((incorrectGuess, index) => {
                return (
                    <div className="incorrect-letter" key={index}>
                        {incorrectGuess}
                    </div>
                )
            })}
        </div>
    )
}

export default GameStatus