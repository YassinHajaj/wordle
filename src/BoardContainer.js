import Board from "./Board";

function BoardContainer({ board }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: "1",
        overflow: "hidden",
      }}
    >
      <Board board={board} />
    </div>
  );
}

export default BoardContainer;
