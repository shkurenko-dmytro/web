import Router from 'express'
import authController from './authController.js';
import { check } from 'express-validator';
const authRouter = new Router();


authRouter.post('/registration',[
    check('username', 'Имя пользователя не должно быть пустым').notEmpty(),
    check('password', 'Пароль должен быть от 4 до 10 символов').isLength({min:4, max:10})
], authController.registration);
authRouter.post('/login', authController.login);
authRouter.get('/users', authController.getUsers);

export default authRouter;