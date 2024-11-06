import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   await prisma.user.delete({
  //     where: {
  //       email: "sumit@test",
  //     },
  //   });
  //   const allUsers = await prisma.user.findMany();
  //   console.log(allUsers);
  //   const allUsers = await prisma.user.findMany({
  //     take: 1,
  //     skip: 1,
  //     orderBy: {
  //       name: "asc",
  //     },
  //   });
  //   console.log(allUsers);
  //   const createdUser = await prisma.user.create({
  //     data: {
  //       name: "Monica Geller",
  //       age: 22,
  //       email: "monica@test",
  //       password: "monica123",
  //       role: "ADMIN",
  //     },
  //   });
  //   console.log(createdUser);
}

main()
  .catch((err) => {
    console.error(err);
    prisma.$disconnect();
  })
  .finally(() => {
    prisma.$disconnect();
  });
