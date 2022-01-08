import KeyboardButton from "./KeyboardButton";

function KeyboardRow({
  sequence,
  fillNextValue,
  eraseFunction,
  enterFunction,
  board,
}) {
  let content;

  switch (sequence) {
    case "1":
      content = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
      break;
    case "2":
      content = ["1/2", "a", "s", "d", "f", "g", "h", "j", "k", "l", "1/2"];
      break;
    case "3":
      content = ["enter", "z", "x", "c", "v", "b", "n", "m", "erase"];
      break;
    default:
      content = null;
  }

  function getColor(letter) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        let curr = board[i][j];
        if (curr && curr.value.toUpperCase() === letter.toUpperCase()) {
          return curr.color === '#121213' ? "#818384" : curr.color;
        }
      }
    }
    return "#818384";
  }

  let keyCount = 0;

  if (content) {
    return (
      <div style={{ display: "flex", width: "100%", margin: "0 auto 8px" }}>
        {content.map((key) => (
          <KeyboardButton
            key={keyCount++}
            buttonContent={key}
            fillNextValue={fillNextValue}
            eraseFunction={eraseFunction}
            enterFunction={enterFunction}
            backgroundColor={getColor(key)}
          />
        ))}
      </div>
    );
  }
  return <p>Unknown sequence number</p>;
}

export default KeyboardRow;
