import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "amityadav@gmail.com",
      name: "Amit Yadav",
      posts: {
        create: [
          {
            title: "Title For Auto Post1",
            published: false,
          },
          {
            title: "Title For Auto Post2",
            published: true,
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
