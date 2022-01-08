function KeyboardButton({
  buttonContent,
  fillNextValue,
  eraseFunction,
  enterFunction,
  backgroundColor
}) {
  switch (buttonContent) {
    case "1/2":
      return <div style={{ flex: 0.5 }}></div>;
    case "enter":
      return (
        <button
          style={{
            fontWeight: "bold",
            backgroundColor: "#818384",
            border: 0,
            margin: "0 6px 0 0",
            borderRadius: "4px",
            cursor: "pointer",
            color: "#d7dadc",
            flex: 1.5,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            userSelect: "none",
            height: "58px",
            textTransform: "uppercase",
          }}
          onClick={enterFunction}
        >
          ENTER
        </button>
      );
    case "erase":
      return (
        <button
          style={{
            fontWeight: "bold",
            backgroundColor: "#818384",
            border: 0,
            margin: "0 6px 0 0",
            borderRadius: "4px",
            cursor: "pointer",
            color: "#d7dadc",
            flex: 1.5,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            userSelect: "none",
            height: "58px",
            textTransform: "uppercase",
          }}
          onClick={eraseFunction}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path
              fill="#d7dadc"
              d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
            ></path>
          </svg>
        </button>
      );
    default:
      return (
        <button
          style={{
            fontWeight: "bold",
            backgroundColor: backgroundColor,
            border: 0,
            margin: "0 6px 0 0",
            borderRadius: "4px",
            cursor: "pointer",
            color: "#d7dadc",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            userSelect: "none",
            height: "58px",
            textTransform: "uppercase",
          }}
          onClick={() => fillNextValue(buttonContent)}
        >
          {buttonContent}
        </button>
      );
  }
}

export default KeyboardButton;
