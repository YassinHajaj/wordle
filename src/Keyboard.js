import KeyboardRow from "./KeyboardRow";

function Keyboard({ gameBoard, fillNextValue, eraseFunction, enterFunction, excludedLetters }) {
  return (
    <div style={{ margin: "0 8px", userSelect: "none" }}>
      <KeyboardRow
        sequence="1"
        board={gameBoard}
        fillNextValue={fillNextValue}
        eraseFunction={eraseFunction}
        enterFunction={enterFunction}
        excludedLetters={excludedLetters}
      />
      <KeyboardRow
        sequence="2"
        board={gameBoard}
        fillNextValue={fillNextValue}
        eraseFunction={eraseFunction}
        enterFunction={enterFunction}
        excludedLetters={excludedLetters}
      />
      <KeyboardRow
        sequence="3"
        board={gameBoard}
        fillNextValue={fillNextValue}
        eraseFunction={eraseFunction}
        enterFunction={enterFunction}
        excludedLetters={excludedLetters}
      />
    </div>
  );
}

export default Keyboard;
