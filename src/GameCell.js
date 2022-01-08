function GameCell({ value }) {
  return (
    <div
      style={{
        color: "white",
        border: "2px solid #3a3a3c",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        fontWeight: "bold",
        boxSizing: "border-box",
        verticalAlign: "middle",
        textTransform: "uppercase",
        backgroundColor: value ? value.color : null,
      }}
    >
      <div>{value ? value.value : null}</div>
    </div>
  );
}

export default GameCell;
