import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   const posts = await prisma.post.findMany({
  //     include: {
  //       author: true,
  //     },
  //   });

  /* 
  we get this output with above code
    {
        id: 4,
        title: 'Title of the post',
        content: 'Hello World',
        published: true,
        authorId: 1,
        author: { id: 1, email: 'prashant@gmail.com', name: 'Manku Singh' }
    },
*/

  const posts = await prisma.post.findMany({});

  console.log(posts);

  /*
  we get this output with above code
    {
        id: 6,
        title: 'Title of the post',
        content: 'Rishikesh',
        published: true,
        authorId: 4
    }
  */
}

main();
