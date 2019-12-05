import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import imagesInfo from './imagesInfo'
import { difficultyObject } from './config'

const Home = () => {
    return (
        <div>
            <div className="game-intro">
            <h1>Falling for Words</h1>
            <p>Guess all the letters in the secret word before running out of 6 tries.</p>
            {Object.keys(difficultyObject).map(difficulty => {
                const difficultyNum = difficultyObject[difficulty]
                return (
                    <Link to={{pathname: '/playscreen', state: {difficultyNum}}}>
                    <button className="home-button">
                        {difficulty}
                    </button>
                </Link>
                )
            })}
        
            </div>
            <div className="falling-container">
                <img alt="leaf" src={imagesInfo[0]} className="fall-from-top object" width={"10%"} />
                <img alt="apple" src={imagesInfo[1]} className="fall-from-top-2 object" width={"20%"}/>
                <img alt="leaf" src={imagesInfo[2]} className="fall-from-top-3 object" width={"15%"}/>
            </div>
        </div>
    )
}

export default Home