import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';
import { randomUUID } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import slugify from 'slugify';

const prisma = new PrismaClient();

const TEMP_DIR = path.resolve(process.cwd(), 'temp');
const IMAGES = [
  path.resolve(__dirname, './images/camiseta.jpeg'),
  path.resolve(__dirname, './images/carro.jpeg'),
  path.resolve(__dirname, './images/liquidificador.jpg'),
  path.resolve(__dirname, './images/moto.jpg'),
  path.resolve(__dirname, './images/sofa.jpg'),
];

async function main() {
  const tempFiles = await fs.readdir(TEMP_DIR);

  if (tempFiles.length) {
    console.log('Deleting temp files...');
    await Promise.all(tempFiles.map((file) => fs.unlink(path.join(TEMP_DIR, file))));
  }

  await prisma.view.deleteMany();
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();
  await prisma.category.deleteMany();
  await prisma.attachment.deleteMany();

  const categories = await prisma.category.createManyAndReturn({
    data: [
      { title: 'Eletrodomésticos' },
      { title: 'Eletrônicos' },
      { title: 'Informática' },
      { title: 'Móveis' },
      { title: 'Decoração' },
      { title: 'Moda' },
      { title: 'Esportes' },
      { title: 'Brinquedos' },
      { title: 'Livros' },
      { title: 'Alimentos' },
    ].map((category) => {
      return {
        id: randomUUID(),
        title: category.title,
        slug: slugify(category.title, { lower: true }),
      };
    }),
  });

  const seller = await prisma.user.create({
    data: {
      id: randomUUID(),
      name: 'Seller',
      email: 'seller@mba.com',
      password: await hash('123456', 8),
      phone: faker.phone.number(),
    },
  });

  const viewers = await prisma.user.createManyAndReturn({
    data: Array.from({ length: faker.number.int({ min: 1, max: 15 }) }).map(() => ({
      id: randomUUID(),
      name: faker.person.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      phone: faker.phone.number(),
    })),
  });

  await Promise.all(
    Array.from({ length: faker.number.int({ min: 5, max: 20 }) }).map(async () => {
      const productViewers = faker.helpers.arrayElements(viewers);

      const fileId = randomUUID();
      const filename = `${fileId}.png`;

      await fs.copyFile(
        faker.helpers.arrayElement(IMAGES),
        path.join(TEMP_DIR, filename),
      );

      return prisma.product.create({
        data: {
          id: randomUUID(),
          title: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          priceInCents: faker.number.int({ min: 1000, max: 100000 }),
          ownerId: seller.id,
          status: faker.helpers.arrayElement(['available', 'cancelled', 'sold']),
          categoryId: faker.helpers.arrayElement(categories).id,
          views: {
            createMany: {
              data: productViewers.map((viewer) => ({
                id: randomUUID(),
                viewerId: viewer.id,
                createdAt: faker.date.recent({ days: 50 }),
              })),
            },
          },
          attachments: {
            create: {
              id: fileId,
              path: filename,
            },
          },
        },
      });
    }),
  );
}

main();
