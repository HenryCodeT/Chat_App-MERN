const express = require('express');

const AuthRouter = express.Router();
const AuthController = require('../controllers/auth.controller');

console.log('*********************** 5-auth-routes ***********************');

AuthRouter.post('/register', AuthController.register);
AuthRouter.post('/login', AuthController.login);

module.exports = AuthRouter;
console.log('----------------------- 5-auth-routes -----------------------');
