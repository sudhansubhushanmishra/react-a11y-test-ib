import { useState } from "react";
import { add } from "./stringCalculator";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError(null);
    } catch (e) {
      setError(e.message);
      setResult(null);
    }
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#fff", color: "#aaa" }}>
      <img
        src="https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={600}
        height={400}
      />

      <h2>String Calculator</h2>

      <h1 style={{ fontSize: "20px" }}>Enter numbers</h1>

      <textarea
        style={{ margin: "10px 0", color: "#aaa" }}
        placeholder="Enter numbers"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div
        onClick={handleCalculate}
        style={{
          padding: "10px",
          backgroundColor: "#008cba",
          color: "#fff",
          border: "none",
        }}
      >
        Calculate
      </div>

      {result !== null && <p style={{ color: "green" }}>Result: {result}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div role="alert">
        <p>Make sure you enter numbers correctly!</p>
      </div>
    </div>
  );
};

export default App;
