import { check } from 'express-validator';
import validationErrorHandler from '../middlewares/validationErrorHandler.middleware';

const validateUsername = check('username')
  .isLength({min: 5})
  .withMessage('Minimum 5 characters required!')
  .bail();

const validateEmail = check('email')
  .isEmail()
  .withMessage('Invalid email address!')
  .not().isEmpty()
  .withMessage('Can not be empty!')
  .bail();

const validatePassword = check('password')
  .isLength({min: 5})
  .withMessage('Minimum 5 characters required!')
  .bail();

export const create = [
  validateUsername,
  validateEmail,
  validatePassword,
  validationErrorHandler,
];

export const update = [
  validateUsername,
  validateEmail,
  validatePassword.optional().bail(),
  validationErrorHandler,
];


