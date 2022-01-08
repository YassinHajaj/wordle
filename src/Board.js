import GameRow from "./GameRow";

function Board({ board }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "repeat(6, 1fr)",
        gridGap: "5px",
        padding: "10px",
        boxSizing: "border-box",
        height: "420px",
        width: "350px",
      }}
    >
      <GameRow row={board[0]} />
      <GameRow row={board[1]} />
      <GameRow row={board[2]} />
      <GameRow row={board[3]} />
      <GameRow row={board[4]} />
      <GameRow row={board[5]} />
    </div>
  );
}

export default Board;
