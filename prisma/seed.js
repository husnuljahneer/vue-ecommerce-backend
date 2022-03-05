const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const faker = require("@faker-js/faker");

for (let i = 0; i < 10; i++) {
    main();
}

async function main() {
    const product = await prisma.products.create({
        data: {
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            description: faker.commerce.productDescription(),
            image: "https://picsum.photos/200/300",
        },
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async() => {
        await prisma.$disconnect();
    });