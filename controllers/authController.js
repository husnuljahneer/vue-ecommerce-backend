const {
    createUser,
    loginUser,
} = require("../services/authService");
const authValidator = require("../middlewares/authValidator");
const _ = require("lodash");
require("dotenv").config();

exports.signup = async(req, res, next) => {
    try {
        const validateData = _.pick(req.body, ["username", "email", "password"]);

        //validator
        const userSchema = authValidator.signup;
        const validateResult = userSchema.validate(req.body, validateData);
        if (validateResult.error) {
            return res.status(400).json({
                message: validateResult.error.details[0].message,
            });
        }

        const user = await createUser(req.body);
        return res.status(200).json({
            status: true,
            message: "User has been created successfully",
            user
        });
    } catch (err) {
        next(err);
    }
};

exports.login = async(req, res, next) => {
    try {
        if (req.body.email == "" || req.body.password == "") {
            return res.status(400).json({
                message: "Please enter email and password",
            });
        }

        const user = await loginUser(req.body);
        return res.status(200).json({
            status: true,
            user,
            id,
            message: "User has been logged in successfully",
        });
    } catch (err) {
        next(err);
    }
};

exports.getUserByUserId = async(req, res, next) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: req.user.id,
            },
        });
        return res.status(200).json({
            status: true,
            message: "User has been fetched successfully",
            user,
        });
    } catch (err) {
        next(err);
    }
};

// exports.logout = async(req, res, next) => {
//     try {
//         return res.status(200).json({
//             status: true,
//             message: "User has been logged out successfully",
//         });
//     } catch (err) {
//         next(err);
//     }
// };