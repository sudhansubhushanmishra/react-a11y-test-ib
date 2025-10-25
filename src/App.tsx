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
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "An error occurred");
      setResult(null);
    }
  };

  return (
    <main style={{ padding: "20px", backgroundColor: "#fff", color: "#333" }}>
      <header>
        <img
          src="https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={600}
          height={400}
          alt="A ball of yarn"
        />
        <h1>String Calculator</h1>
      </header>

      <section>
        <label
          htmlFor="numberInput"
          style={{ fontSize: "20px", display: "block", margin: "10px 0" }}
        >
          Enter numbers
        </label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <textarea
            id="numberInput"
            style={{ margin: "10px 0", color: "#333", marginRight: "10px" }}
            placeholder="e.g., 1,2,3"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            onClick={handleCalculate}
            style={{
              padding: "10px",
              backgroundColor: "#005f8c",
              color: "#fff",
              border: "none",
            }}
          >
            Calculate
          </button>
        </div>

        {result !== null && (
          <p role="alert" style={{ color: "green" }}>
            Result: {result}
          </p>
        )}
        {error && (
          <p role="alert" style={{ color: "red" }}>
            Error: {error}
          </p>
        )}
      </section>

      <footer>
        <p>Make sure you enter numbers correctly!</p>
      </footer>
    </main>
  );
};

export default App;
