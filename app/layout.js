export const metadata = {
  title: "Golden Seas",
  description: "AI app hosted via Hugging Face Space",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          height: "100vh",
          width: "100vw",
          fontFamily: "'Inter', sans-serif",
          backgroundColor: "#0f1117",
          color: "#ffffff",
        }}
      >
        {children}
      </body>
    </html>
  );
}
