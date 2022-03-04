const bcrypt = require("bcrypt");
const saltRounds = 10;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const _ = require("lodash");
const CreateError = require("http-errors");
require("dotenv").config();

exports.createUser = async({ username, email, password }) => {
    try {
        const userExist = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (userExist) {
            throw CreateError(400, "User already exists");
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = await prisma.user.create({
            data: {
                username,
                password: hashedPassword,
                email,
            },
        });
        return user;
    } catch (err) {
        logger.error(err);
        throw err;
    }
};

exports.loginUser = async({ email, password }) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                email,
            },
        });

        if (!user) {
            throw CreateError(400, "Invalid Email or Password");
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            throw CreateError(401, "Invalid Email or Password");
        }
        return user;
    } catch (err) {
        logger.error(err);
        throw CreateError(400, err.message);
    }
};