"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const res = await fetch("/api/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: [input] }), // adjust shape per your Space
    });
    const result = await res.json();
    setOutput(result.data);
    setLoading(false);
  };

  return (
    <main
      style={{
        margin: 0,
        padding: 20,
        minHeight: "100vh",
        backgroundColor: "#0f1117",
        color: "#fff",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h1>Golden Seas AI</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type input here"
        style={{ padding: 8, width: "80%", marginRight: 10 }}
      />
      <button onClick={handleSubmit} style={{ padding: 8 }}>
        {loading ? "Processing..." : "Submit"}
      </button>

      {output && (
        <div style={{ marginTop: 20, color: "#00c2ff" }}>
          <pre>{JSON.stringify(output, null, 2)}</pre>
        </div>
      )}
    </main>
  );
}
