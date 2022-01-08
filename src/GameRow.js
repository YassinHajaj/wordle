import GameCell from "./GameCell";

function GameRow({ row }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gridGap: "5px",
      }}
    >
      <GameCell value={row[0]} />
      <GameCell value={row[1]} />
      <GameCell value={row[2]} />
      <GameCell value={row[3]} />
      <GameCell value={row[4]} />
    </div>
  );
}

export default GameRow;
