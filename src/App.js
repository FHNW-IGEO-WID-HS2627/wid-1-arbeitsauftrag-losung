import "./App.css";
import "./style.css";

function App() {
  return (
    <>
      {/** ------- Aufgabe 1 ----- */}
      <button>Klick mich</button>
      <button style={{ backgroundColor: "red", fontSize: "20px" }}>
        Klick mich
      </button>

      {/** ------- Aufgabe 2 ----- */}
      <div
        id="Elternelement"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "500px",
          justifyContent: "left",
          border: "2px dashed grey",
        }}
      >
        <div className="Kind" id="Kind1"></div>
        <div className="Kind" id="Kind2"></div>
        <div className="Kind" id="Kind3"></div>
        <span className="Kind">Span</span>
      </div>
    </>
  );
}

export default App;
