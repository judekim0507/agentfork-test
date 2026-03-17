import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.post.createMany({
    data: [
      { title: "Hello World", content: "This is the first post.", published: true },
      { title: "Draft Post", content: "This is a draft.", published: false },
      { title: "Next.js is great", content: "Building with Next.js and Postgres.", published: true },
    ],
  });
  console.log("Seeded 3 posts");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
