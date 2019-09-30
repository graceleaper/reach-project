import React from "react"

import WordToGuess from "../WordToGuess/WordToGuess"
import AllLetterChoices from "../AllLetterChoices/AllLetterChoices"
import GameStatus from "../GameStatus/GameStatus"

import "./PlayScreen.css"

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
        <WordToGuess
          lettersToGuess={lettersToGuess}
          correctGuesses={correctGuesses}
          incorrectGuesses={incorrectGuesses}
        />
        <AllLetterChoices correctionCheck={this.correctionCheck} />
        <GameStatus
          guessesLeft={guessesLeft}
          incorrectGuesses={incorrectGuesses}
        />
      </div>
    )

    const currentView = () => {
      if (correctGuesses.length === lettersToGuessNonRepeating.length) {
        return <p>You win! You can play again.</p>
      }
      if (this.state.guessesLeft > 0) {
        return stillPlaying
      }
        return <p>You lose. Play again.</p>
    }

    return (
      <div>
        <h1>Hangman</h1>
        {currentView()}
        {console.log(this.state.guessesLeft)}
        {console.log('NON-REPEATING:', lettersToGuessNonRepeating.length)}
        {console.log('CORRECT GUESSES SO FAR:', correctGuesses.length)}
      </div>
    )
  }
}

export default PlayScreen
