import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Words Game</h1>
            <p>Guess all the letters before running out of 6 turns!</p>
            <Link to={'/playscreen'}>
                <button>
                    Play
                </button>
            </Link>
        </div>
    )
}

export default Home