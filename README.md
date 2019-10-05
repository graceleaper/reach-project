# REACH Project

## Setup
Clone the repository and run:

```
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the project in the browser.

![Homepage](/readme_images/screenshot-1.gif)
![Play screen](/readme_images/screenshot-2.gif)

## Features

- The length of the secret word is displayed to the guesser (e.g. as a set of underscores)
- As the guesser makes correct guesses, occurrences of the guessed letter in the word
are shown while unknown letters are still hidden
- The number of guesses remaining is displayed
- A list of incorrect guesses are displayed
- A loading message will appear when retrieving a word from the word dictionary API
- A diagram is displayed and changed upon each incorrect guess
- Letters that have already been clicked on will be deactivated
- After each win or loss, users will see the secret word and can redirect to the homepage

## Notes
- All images are royalty-free from [https://www.shutterstock.com](https://www.shutterstock.com).
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).