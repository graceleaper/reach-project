import React from 'react'
import './Diagram.css'

import imagesInfo from './imagesInfo'

const Diagram = ({guessesLeft}) => {
    const setCurrentImage = () => {
        switch(guessesLeft) {
            case 5:
                return 1
            case 4:
                return 2
            case 3:
                return 3
            case 2:
                return 4
            case 1:
                return 5
            default:
                return 0
        }
    }
        return (
            <div className="diagram-container">
                <img className="current-image animation" alt="game-state" src={imagesInfo[setCurrentImage()]} />
            </div>
        )
}

export default Diagram