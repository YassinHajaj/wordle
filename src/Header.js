import Refresh from "./Refresh";
import Title from "./Title";
import Help from "./Help";

function Header({ refresh }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #3a3a3c",
      }}
    >
      <Help />
      <Title />
      <Refresh onClick={refresh} />
    </div>
  );
}

export default Header;
