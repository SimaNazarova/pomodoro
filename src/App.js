import "./App.css";

function App() {
  return (
    <div className="App">
      <h2 className="title">Pomodoro</h2>
      <h3 className="subtitle">let's do it</h3>
      <div className="timer">
        <span>30</span>
        <span>:</span>
        <span>40</span>
      </div>
      <div className="btns">
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}

export default App;
