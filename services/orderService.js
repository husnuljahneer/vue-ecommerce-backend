const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const _ = require("lodash");
const CreateError = require("http-errors");
const logger = require("../utils/logger");
require("dotenv").config();


exports.getOrders = async() => {
    try {
        const orders = await prisma.orders.findMany({
            where: {
                user: {
                    id: req.user.id,
                },
            },
        });
        if (!orders) {
            throw new CreateError(400, "No orders found");
        }
        return orders;
    } catch (err) {
        next(err);
    }
};

exports.getOrderById = async() => {
    try {
        const order = await prisma.orders.findUnique({
            where: {
                id: req.params.id,
            },
        });
        if (!order) {
            throw new CreateError(400, "Order not found");
        }
        return order;
    } catch (err) {
        next(err);
    }
};

exports.updateOrder = async() => {
    try {
        const order = await prisma.orders.update({
            where: {
                id: req.params.id,
            },
            data: {
                status: req.body.status,
            },
        });
        if (!order) {
            throw new CreateError(400, "Order not found");
        }
        return order;
    } catch (err) {
        next(err);
    }
};

exports.deleteOrder = async() => {
    try {
        const order = await prisma.orders.delete({
            where: {
                id: req.params.id,
            },
        });
        if (!order) {
            throw new CreateError(400, "Order not found");
        }
        return order;
    } catch (err) {
        next(err);
    }
};