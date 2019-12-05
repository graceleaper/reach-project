import React from "react"

import Diagram from "../Diagram/Diagram"
import WordToGuess from "../WordToGuess/WordToGuess"
import AllLetterChoices from "../AllLetterChoices/AllLetterChoices"
import GameStatus from "../GameStatus/GameStatus"
import GameEnd from "../GameEnd/GameEnd"

import "./PlayScreen.css"

class PlayScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lettersToGuess: [],
      lettersToGuessNonRepeating: [],
      correctGuesses: [],
      incorrectGuesses: [],
      guessesLeft: 6,
      allWords: {
        easy: [],
        medium: []
      } 
    }
  }

  async componentDidMount() {
     console.log('PROPS:', this.props)
    try {
      // set object with difficulty (key/value pairs: difficulty setting/corresponding #)
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/http://app.linkedin-reach.io/words?difficulty=${this.props.location.state.difficultyNum}`
      )
      const wordList = await response.text()
      const wordsArray = JSON.stringify(wordList).split("\\n")
      const randomWord = this.getRandomWord(wordsArray)
      this.setState({ lettersToGuess: randomWord.split("") })
      this.nonRepeatingLettersToGuess(this.state.lettersToGuess)
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
      lettersToGuessNonRepeating,
      correctGuesses,
      incorrectGuesses,
      guessesLeft
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
        <AllLetterChoices
          correctionCheck={this.correctionCheck}
          correctGuesses={correctGuesses}
          incorrectGuesses={incorrectGuesses}
        />
      </div>
    )

    const currentView = () => {
      if (guessesLeft > 0 && correctGuesses.length !== lettersToGuessNonRepeating.length) {
        return stillPlaying
      } else if (lettersToGuessNonRepeating.length === 0) {
        return <p>Loading...</p>
      } else {
        return (
          <GameEnd
            correctGuesses={correctGuesses}
            lettersToGuessNonRepeating={lettersToGuessNonRepeating}
            lettersToGuess={lettersToGuess}
          />)
      }
    }

    return (
      <div>
        {currentView()}
      </div>
    )
  }
}

export default PlayScreen
