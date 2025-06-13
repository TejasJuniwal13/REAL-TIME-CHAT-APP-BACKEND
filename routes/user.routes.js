const express = require('express');
const router = express.Router();
const { body } = require('express-validator')

const { userController } = require('../controllers/user.controller');



router.post('/register',
    body('email').isEmail().withMessage('Email address should be valid'),
    body('password').isLength({ min: 4 }).withMessage('password must be 4 characters long'),
    userController.createUserController);

router.post('/login', 
    body('email').isEmail().withMessage('Email address should be valid'),
    body('password').isLength({min:4}).withMessage('Password must be 4 characters long'),

    userController.loginController
)



module.exports = router