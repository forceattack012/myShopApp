const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

router.get('', userController.getUsers);
router.get('/:id', userController.getUserById);
router.post('',userController.createUser);
router.put('/:id', userController.updateUser);

module.exports = router;
