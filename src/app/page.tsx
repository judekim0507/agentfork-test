import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function Home() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main>
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Blog Posts</h1>
      <p style={{ color: "#888", marginBottom: "2rem" }}>
        Next.js 15 + Postgres + Prisma — {posts.length} posts
      </p>

      <div style={{ display: "grid", gap: "1rem", maxWidth: "600px" }}>
        {posts.length === 0 ? (
          <p style={{ color: "#666" }}>No posts yet. Run `bun db:seed` to add some.</p>
        ) : (
          posts.map((post) => (
            <article
              key={post.id}
              style={{
                padding: "1.5rem",
                border: "1px solid #222",
                borderRadius: "8px",
                background: "#111",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <h2 style={{ fontSize: "1.1rem", margin: 0 }}>{post.title}</h2>
                {post.published ? (
                  <span style={{ fontSize: "0.7rem", padding: "2px 6px", borderRadius: "4px", background: "#1a3a1a", color: "#4ade80" }}>
                    Published
                  </span>
                ) : (
                  <span style={{ fontSize: "0.7rem", padding: "2px 6px", borderRadius: "4px", background: "#3a3a1a", color: "#facc15" }}>
                    Draft
                  </span>
                )}
              </div>
              {post.content && <p style={{ color: "#999", margin: 0, fontSize: "0.9rem" }}>{post.content}</p>}
            </article>
          ))
        )}
      </div>

      <footer style={{ marginTop: "3rem", color: "#444", fontSize: "0.8rem" }}>
        Built to test AgentFork
      </footer>
    </main>
  );
}
