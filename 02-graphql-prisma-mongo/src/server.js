import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const createdUser = await prisma.user.create({
    data: {
      name: "Monica Geller",
      age: 22,
      email: "monica@test",
      password: "monica123",
      role: "ADMIN",
    },
  });
  console.log(createdUser);
}

main()
  .catch((err) => {
    console.error(err);
    prisma.$disconnect();
  })
  .finally(() => {
    prisma.$disconnect();
  });
