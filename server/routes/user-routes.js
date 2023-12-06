const express = require('express');
let userRouter = express.Router();

// import controllers
const signUp = require('../controllers/user-signup');
const login = require('../controllers/user-login');

// Different endpoints
userRouter.post('/sign-up', signUp);
userRouter.post('/login', login);

module.exports = userRouter;

