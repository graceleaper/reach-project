import React from "react";
import "./WordToGuess.css";

class WordToGuess extends React.Component {

      letterCheck = (letter) => {
          if (this.props.guessedLetters.includes(letter)) return "single-letter shown"
          else return "single-letter hidden"
      }

  render() {

    return (
      <div className="container-letters">
          {console.log(this.props.guessedLetters)}
          {this.props.lettersToGuess.map((letter, index) => {
          return (
            <div className="slot" key={index}>
                <div className={this.letterCheck(letter)}>
                    {letter}
                </div>
            </div>
          )
          })}
      </div>
    );
  }
}

export default WordToGuess;
