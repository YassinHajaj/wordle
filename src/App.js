import "./App.css";
import * as React from "react";
import words from "./words.json";
import Header from "./Header";
import BoardContainer from "./BoardContainer";
import Keyboard from "./Keyboard";

function Game() {
  const [gameBoard, setGameBoard] = React.useState(() =>
    Array(6)
      .fill()
      .map(() => Array(5).fill(null))
  );

  const [tries, setTries] = React.useState(0);
  const [lettersCount, setLettersCount] = React.useState(0);

  const [toGuess, setToGuess] = React.useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  function isFilled(row, col) {
    return gameBoard[row][col] !== null;
  }

  function buttonPressed(event) {
    console.log(toGuess);
    if (event.keyCode === 13) {
      enterFunction();
      return;
    }
    if (event.keyCode === 8) {
      eraseFunction();
      return;
    }
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      fillNextValue(event.key);
    }
  }

  function letterIsExcluded(letter) {
    let excluded = false;
    for (let i = 0; i < gameBoard.length; i++) {
      for (let j = 0; j < gameBoard[i].length; j++) {
        let curr = gameBoard[i][j];
        if (curr && curr.value.toUpperCase() === letter.toUpperCase()) {
          if (curr.color === "#3A3A3C") {
            excluded = true
          } else {
            return false;
          }
        }
      }
    }
    return excluded;
  }

  function fillNextValue(value) {
    let maxChars = (1 + tries) * 5;
    if (lettersCount >= maxChars) {
      return;
    }
    if (letterIsExcluded(value)) {
      return;
    }

    const boardCopy = [...gameBoard];

    for (let row = 0; row < boardCopy.length; row++) {
      for (let col = 0; col < boardCopy[row].length; col++) {
        if (!isFilled(row, col)) {
          boardCopy[row][col] = {
            value: value,
            color: "#121213",
          };
          setLettersCount(lettersCount + 1);
          setGameBoard(boardCopy);
          return;
        }
      }
    }
  }

  function eraseFunction() {
    if (lettersCount === tries * 5) {
      return;
    }

    for (let row = gameBoard.length - 1; row >= 0; row--) {
      for (let col = gameBoard[row].length - 1; col >= 0; col--) {
        if (isFilled(row, col)) {
          const boardCopy = [...gameBoard];
          boardCopy[row][col] = null;
          setLettersCount(lettersCount - 1);
          setGameBoard(boardCopy);
          return;
        }
      }
    }
  }

  function enterFunction() {
    if (lettersCount === (1 + tries) * 5) {
      let word = gameBoard[tries].map((x) => x.value.toUpperCase()).join("");
      if (!words.includes(word)) {
        alert("Word does not exist !");
        return;
      }
      var modifiedToGuess = toGuess.split("");
      let correctGuesses = 0;
      MAIN_LOOP: for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < modifiedToGuess.length; j++) {
          if (word[i] === modifiedToGuess[j]) {
            gameBoard[tries][i] = {
              value: word[i],
              color: i === j ? "#538D4E" : "#B59F3B",
            };
            if (i === j) {
              correctGuesses++;
            }
            modifiedToGuess[j] = "";
            continue MAIN_LOOP;
          }
        }
        gameBoard[tries][i] = {
          value: word[i],
          color: "#3A3A3C",
        };
      }
      setTries(tries + 1);

      if (correctGuesses === word.length) {
        alert("You won !");
        return;
      }

      if (tries === 6) {
        alert("You lost ! Click on refresh to play again !");
      }
    }
  }

  function refresh() {
    setTries(0);
    setLettersCount(0);
    setGameBoard(
      Array(6)
        .fill()
        .map(() => Array(5).fill(null))
    );
    setToGuess(words[Math.floor(Math.random() * words.length)]);
    alert("Refreshed !");
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "500px",
        minWidth: "500px",
        alignContent: "center",
        justifyContent: "center",
      }}
      onKeyDown={(e) => buttonPressed(e)}
      tabIndex="0"
    >
      <Header refresh={refresh} />
      <BoardContainer board={gameBoard} />
      <Keyboard
        gameBoard={gameBoard}
        fillNextValue={fillNextValue}
        eraseFunction={eraseFunction}
        enterFunction={enterFunction}
      />
    </div>
  );
}

function GameApp() {
  return (
    <div
      style={{
        backgroundColor: "#121213",
        minHeight: "100vh",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Game />
    </div>
  );
}

function App() {
  return <GameApp />;
}

export default App;
