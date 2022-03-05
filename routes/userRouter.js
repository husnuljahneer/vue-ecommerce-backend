const express = require('express');
const router = express.Router();
const {
    updateUser,
    deleteUser,
    getAllUsers,
    getUser,
} = require('../controllers/userController');
router.get('', getAllUsers);
router.get('/:id', getUser);
// router.get('/:id', getUser);
router.put('/updateUser/:id', updateUser);
router.delete('/deleteUser/:id', deleteUser);

module.exports = router;