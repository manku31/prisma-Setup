import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.post.create({
    data: {
      title: "Title of the post",
      content: "Rishikesh",
      published : true,
      author: {
        connect: {
          id: 4,
        },
      },
    },
  });
}

main();
