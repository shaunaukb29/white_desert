export const metadata = {
  title: "Golden Seas",
  description: "Standalone app wrapping Hugging Face Space",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, height: "100vh", width: "100vw" }}>
        {children}
      </body>
    </html>
  );
}
