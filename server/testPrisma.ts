import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: "test@example.com",
      password: "securepassword",
    },
  });

  const task = await prisma.task.create({
    data: {
      title: "Test Task",
      description: "This is a test task",
      priority: "High",
      dueDate: new Date(),
      userId: user.id,
    },
  });

  console.log("User:", user);
  console.log("Task:", task);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
