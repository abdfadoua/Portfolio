import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.admin.create({
    data: {
      email: 'abdelhakfadwa8@gmail.com',
      password: 'abd22419*', // Use a hashed password in production with bcrypt
    },
  });
  console.log('Admin account seeded successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });