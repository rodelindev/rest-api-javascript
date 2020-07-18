const express = require('express');

const router = express.Router();

const { UserValidator } = require('../validators');
const { UserController } = require('../controllers');
const { verifyToken } = require('../middlewares');

router.post('/users',
  verifyToken,
  UserValidator.create, UserController.create);

router.get('/users',
  UserController.findAll);

router.get('/users/:id',
  UserValidator.findOne, UserController.findOne);

router.patch('/users/:id',
  UserValidator.updateOne, UserController.updateOne);

router.delete('/users/:id',
  UserValidator.deleteOne, UserController.deleteOne);

module.exports = router;
