import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AgentFork Test App",
  description: "A simple Next.js + Postgres app for testing AgentFork",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0, padding: "2rem", background: "#0a0a0a", color: "#ededed" }}>
        {children}
      </body>
    </html>
  );
}
