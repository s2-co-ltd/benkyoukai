import { useState } from "react";
import convertKanji from "./convert-kanji";
import aiueoOrder from "./aiueo";

function App() {
  const [nameInputValue, setNameInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [names, setNames] = useState([]);

  async function updateNames(newName) {
    let newNames = [...[{ original: newName }], ...names];
    newNames = await convertKanji(newNames);
    newNames = aiueoOrder(newNames);
    setNames(newNames);
    setLoading(false);
  }

  return (
    <main>
      <div className="input-bar">
        <input
          value={nameInputValue}
          disabled={loading}
          onChange={(e) => {
            setNameInputValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              setLoading(true);
              updateNames(nameInputValue);
              setNameInputValue("");
            }
          }}
          className="input is-rounded"
          type="text"
          id="new-word"
        />
        <button
          disabled={loading}
          onClick={() => {
            setLoading(true);
            updateNames(nameInputValue);
            setNameInputValue("");
          }}
          className="left-margin button is-primary is-rounded"
          id="add"
        >
          追加
        </button>
      </div>
      <ul id="list">
        {loading ? (
          <p>考えています...</p>
        ) : (
          names.map((n, i) => <li key={`list-item-${i}`}>{n.original}</li>)
        )}
      </ul>
    </main>
  );
}

export default App;
