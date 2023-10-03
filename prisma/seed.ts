import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'alexeyk500@yandex.ru' },
    update: {},
    create: {
      email: 'alexeyk500@yandex.ru',
      name: 'alexeyk500',
      password: `a500_password`
    },
  })
  console.log({ user })
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })