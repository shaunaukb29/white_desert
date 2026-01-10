"use client";

export default function Home() {
  return (
    <main
      style={{
        margin: 0,
        padding: 0,
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0f1117",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          height: "100%",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 12px 32px rgba(0,0,0,0.35)",
        }}
      >
        <gradio-app src="https://huggingface.co/spaces/CastBison/golden_seas"></gradio-app>
      </div>

      {/* Load Gradio JS */}
      <script
        type="module"
        src="https://gradio.s3-us-west-2.amazonaws.com/5.38.0/gradio.js"
      ></script>
    </main>
  );
}
