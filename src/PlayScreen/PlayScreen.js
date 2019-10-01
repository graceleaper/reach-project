import React from "react"
import { Link } from 'react-router-dom'

import Diagram from "../Diagram/Diagram"
import WordToGuess from "../WordToGuess/WordToGuess"
import AllLetterChoices from "../AllLetterChoices/AllLetterChoices"
import GameStatus from "../GameStatus/GameStatus"

import "./PlayScreen.css"
import winImage from './images/win.png'
import loseImage from './images/lose.png'

class PlayScreen extends React.Component {
  state = {
    lettersToGuess: [],
    lettersToGuessNonRepeating: [],
    correctGuesses: [],
    incorrectGuesses: [],
    guessesLeft: 6
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/http://app.linkedin-reach.io/words"
      )
      const wordList = await response.text()
      const wordsArray = JSON.stringify(wordList).split("\\n")
      const randomWord = this.getRandomWord(wordsArray)
      this.setState({ lettersToGuess: randomWord.split("") })
      this.nonRepeatingLettersToGuess(this.state.lettersToGuess)
      console.log(this.state.lettersToGuess)
    } catch (err) {
      console.log(err)
    }
  }

  getRandomWord = array => {
    const randomIndex = Math.floor(Math.random() * (array.length + 1))
    return array[randomIndex]
  }

  nonRepeatingLettersToGuess = array => {
    let hashTable = []
    array.forEach(letter => {
      if (!hashTable.includes(letter)) hashTable.push(letter)
    })
    this.setState({lettersToGuessNonRepeating: hashTable})
  }

  correctionCheck = letter => {
    if (this.state.lettersToGuess.includes(letter)) {
      this.setState({
        correctGuesses: [...this.state.correctGuesses, letter]
      })
    } else {
      this.setState({
        guessesLeft: this.state.guessesLeft - 1,
        incorrectGuesses: [...this.state.incorrectGuesses, letter]
      })
    }
  }

  render() {
    const {
      lettersToGuess,
      correctGuesses,
      incorrectGuesses,
      guessesLeft,
      lettersToGuessNonRepeating
    } = this.state

    const stillPlaying = (
      <div>
        <GameStatus
          guessesLeft={guessesLeft}
          incorrectGuesses={incorrectGuesses}
        />
        <Diagram guessesLeft={guessesLeft} />
        <WordToGuess
          lettersToGuess={lettersToGuess}
          correctGuesses={correctGuesses}
          incorrectGuesses={incorrectGuesses}
        />
        <AllLetterChoices correctionCheck={this.correctionCheck} />
      </div>
    )

    const currentView = () => {
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
      }
      if (this.state.guessesLeft > 0) {
        return stillPlaying
      }
      return (
        <div>
          <img className="game-end-image" alt="bitten apple" src={loseImage} width={"25%"} />
          <p>You lose.</p>
          <Link to={'/'}>
              <button width={"25%"}>
                  Start again
              </button>
          </Link>
        </div>
      )
    }

    return (
      <div>
        {currentView()}
        {console.log(this.state.guessesLeft)}
        {console.log('NON-REPEATING:', lettersToGuessNonRepeating.length)}
        {console.log('CORRECT GUESSES SO FAR:', correctGuesses.length)}
      </div>
    )
  }
}

export default PlayScreen
