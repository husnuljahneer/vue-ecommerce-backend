const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const _ = require("lodash");
const CreateError = require("http-errors");
const logger = require("../utils/logger");
require("dotenv").config();

exports.createOrder = async({
    first_name,
    last_name,
    address,
    town,
    pincode,
    cart,
    phone,
    customer_id,
    email,
    grand_total,
}) => {
    const dataArray = cart.map((item) => {
        return {
            product_id: item.id,
            product_name: item.name,
            price: item.price,
            qty: item.qty.toString(),
        };
    });

    const order = await prisma.orders.create({
        data: {
            first_name: first_name,
            last_name: last_name,
            address: address,
            town: town,
            pincode: pincode,
            customer_id: customer_id,
            phone: phone.toString(),
            email: email,
            grand_total: grand_total.toString(),
            order_details: {
                createMany: {
                    data: dataArray,
                },
            },
        },
    });
    return order;
};

exports.createProduct = async({ name, price, description, image }) => {
    const product = await prisma.products.create({
        data: {
            name: name,
            price: price,
            description: description,
            image: image,
        },
    });
    return product;
};

exports.userProducts = async({ id }) => {
    const userId = parseInt(id);
    // console.log(userId);
    const product = await prisma.orders.findMany({
        where: {
            customer_id: userId,
        },
        include: {
            order_details: true,
        },
    });
    return product;
};

exports.getProducts = async() => {
    const products = await prisma.products.findMany();
    if (!products) {
        throw new CreateError(400, "No products found");
    }
    return products;
};

exports.getProductsById = async({ id }) => {
    const productId = parseInt(id);
    const product = await prisma.products.findUnique({
        where: {
            id: productId,
        },
    });
    if (!product) {
        throw new CreateError(400, "Product not found");
    }
    return product;
};

exports.updateProduct = async({
    productId,
    name,
    price,
    description,
    image,
}) => {
    const id = parseInt(productId);
    const product = await prisma.products.update({
        where: {
            id: id,
        },
        data: {
            name: name,
            price: price,
            description: description,
            image: image,
        },
    });
    if (!product) {
        throw new CreateError(400, "Product not found");
    }
    return product;
};

exports.deleteProduct = async({ productId }) => {
    const id = parseInt(productId);
    const product = await prisma.products.delete({
        where: {
            id: id,
        },
    });
    if (!product) {
        throw new CreateError(400, "Product not found");
    }
    return product;
};