import Spinner from "react-bootstrap/Spinner";

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Spinner animation="border" variant="success" />
    </div>
  );
}

export default Loader;
