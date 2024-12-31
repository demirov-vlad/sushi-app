import { hashSync } from 'bcrypt'
import { prisma } from './prisma-client'
import { categories, ingredients, products } from './constants'
import { Prisma } from '@prisma/client'

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10
}

const generateProductVariant = ({
  productId,
  size,
}: {
  productId: number
  size?: 6 | 8
}) => {
  return {
    productId,
    price: randomDecimalNumber(190, 600),
    size,
  } as Prisma.ProductVariantUncheckedCreateInput
}

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User Test',
        email: 'jCg1S@example.com',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullName: 'Admin Admin',
        email: 'jadmin@example.com',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  })

  await prisma.category.createMany({
    data: categories,
  })

  await prisma.ingredient.createMany({
    data: ingredients,
  })

  await prisma.product.createMany({
    data: products,
  })

  const sushi1 = await prisma.product.create({
    data: {
      name: 'Philadelphia roll',
      imageUrl:
        'https://res.cloudinary.com/dzfvnm3it/image/upload/f_auto,q_auto/v1/sushi-app/u2pncyzcmtdweynavxgd',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
    },
  })

  const sushi2 = await prisma.product.create({
    data: {
      name: 'White Dragon',
      imageUrl:
        'https://res.cloudinary.com/dzfvnm3it/image/upload/f_auto,q_auto/v1/sushi-app/orhyyzs4rf3csrpaxqhy',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(5, 10),
      },
    },
  })

  const sushi3 = await prisma.product.create({
    data: {
      name: 'Daj Kiri',
      imageUrl:
        'https://res.cloudinary.com/dzfvnm3it/image/upload/f_auto,q_auto/v1/sushi-app/qujj2uzysmnhxk71qmr3',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(10, 40),
      },
    },
  })

  const sushi4 = await prisma.product.create({
    data: {
      name: 'California',
      imageUrl:
        'https://res.cloudinary.com/dzfvnm3it/image/upload/f_auto,q_auto/v1/sushi-app/l0thfnovsgs4au7qmbgp',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(10, 40),
      },
    },
  })

  const sushi5 = await prisma.product.create({
    data: {
      name: 'Texas',
      imageUrl:
        'https://res.cloudinary.com/dzfvnm3it/image/upload/f_auto,q_auto/v1/sushi-app/udzwxqpha7cpdik9zig3',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(10, 40),
      },
    },
  })

  const sushi6 = await prisma.product.create({
    data: {
      name: 'Okinawa',
      imageUrl:
        'https://res.cloudinary.com/dzfvnm3it/image/upload/f_auto,q_auto/v1/sushi-app/p1mxixmit2euzt6i4zec',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(10, 40),
      },
    },
  })

  const sushi7 = await prisma.product.create({
    data: {
      name: 'Banzai',
      imageUrl:
        'https://res.cloudinary.com/dzfvnm3it/image/upload/f_auto,q_auto/v1/sushi-app/molbi1whualbzyo61awz',
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(10, 40),
      },
    },
  })

  await prisma.productVariant.createMany({
    data: [
      //sushi
      generateProductVariant({ productId: sushi1.id, size: 6 }),
      generateProductVariant({ productId: sushi1.id, size: 8 }),

      generateProductVariant({ productId: sushi2.id, size: 6 }),
      generateProductVariant({ productId: sushi2.id, size: 8 }),

      generateProductVariant({ productId: sushi3.id, size: 6 }),
      generateProductVariant({ productId: sushi3.id, size: 8 }),

      generateProductVariant({ productId: sushi4.id, size: 6 }),
      generateProductVariant({ productId: sushi4.id, size: 8 }),

      generateProductVariant({ productId: sushi5.id, size: 6 }),
      generateProductVariant({ productId: sushi5.id, size: 8 }),

      generateProductVariant({ productId: sushi6.id, size: 6 }),
      generateProductVariant({ productId: sushi6.id, size: 8 }),

      generateProductVariant({ productId: sushi7.id, size: 6 }),
      generateProductVariant({ productId: sushi7.id, size: 8 }),

      // Remaining products
      generateProductVariant({ productId: 1 }),
      generateProductVariant({ productId: 2 }),
      generateProductVariant({ productId: 3 }),
      generateProductVariant({ productId: 4 }),
      generateProductVariant({ productId: 5 }),
      generateProductVariant({ productId: 6 }),
      generateProductVariant({ productId: 7 }),
      generateProductVariant({ productId: 8 }),
      generateProductVariant({ productId: 9 }),
      generateProductVariant({ productId: 10 }),
      generateProductVariant({ productId: 11 }),
      generateProductVariant({ productId: 12 }),
      generateProductVariant({ productId: 13 }),
      generateProductVariant({ productId: 14 }),
      generateProductVariant({ productId: 15 }),
      generateProductVariant({ productId: 16 }),
      generateProductVariant({ productId: 17 }),
    ],
  })

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: '11111',
      },
      {
        userId: 2,
        totalAmount: 0,
        token: '222222',
      },
    ],
  })

  await prisma.cartItem.create({
    data: {
      productVariantId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  })
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "ProductVariant" RESTART IDENTITY CASCADE`
}

async function main() {
  try {
    await down()
    await up()
  } catch (e) {
    console.error(e)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
