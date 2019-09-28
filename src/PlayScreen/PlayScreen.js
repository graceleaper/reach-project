import React from "react"
import WordToGuess from '../WordToGuess/WordToGuess'
import AllLetterChoices from '../AllLetterChoices/AllLetterChoices'
import './PlayScreen.css'

class PlayScreen extends React.Component {
  state = {
    lettersToGuess: [],
    guessedLetters: []
  }

  isCorrect = (letter) => {
    if (this.state.lettersToGuess.includes(letter)) {
      this.setState({
        guessedLetters: [...this.state.guessedLetters, letter],
      })
    }
  }

  getRandomWord = (array) => {
    const randomIndex = Math.floor(Math.random() * (array.length + 1))
    return array[randomIndex]
}

  async componentDidMount() {
    try {
      const response = await fetch(
        'https://cors-anywhere.herokuapp.com/http://app.linkedin-reach.io/words'
      )
      const wordList = await response.text()
      const wordsArray = JSON.stringify(wordList).split('\\n')
      const randomWord = this.getRandomWord(wordsArray)
      this.setState({lettersToGuess: randomWord.split('')})
      console.log(this.state.lettersToGuess)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const {lettersToGuess, guessedLetters} = this.state
    return (
      <div>
        <h1>Hangman</h1>
        <WordToGuess lettersToGuess={lettersToGuess} guessedLetters={guessedLetters} />
        <AllLetterChoices isCorrect={this.isCorrect} />
      </div>
    )
  }
}

export default PlayScreen
