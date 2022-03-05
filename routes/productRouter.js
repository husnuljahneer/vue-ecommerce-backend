const express = require("express");
const router = express.Router();
const {
    createProduct,
    getProducts,
    getProductsById,
    updateProduct,
    deleteProduct,
    createOrder,
    userProducts
} = require("../controllers/productController");

router.post("/createProduct", createProduct);
router.post("/createOrder", createOrder);
router.get("", getProducts);
router.get("/:id", getProductsById);
router.get("/userProducts/:id", userProducts);
router.put("/updateproduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);


module.exports = router;