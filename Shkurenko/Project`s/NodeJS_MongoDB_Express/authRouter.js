import Router from 'express'
import authController from './authController.js';
import { check } from 'express-validator';
const authRouter = new Router();
import roleMiddleware from "./middleware/roleMiddleware.js"

authRouter.post('/registration', [
    check('username', 'The username should not be empty').notEmpty(),
    check('password', 'The password should be from 4 to 10 characters').isLength({ min: 4, max: 10 })
], authController.registration);
authRouter.post('/login', authController.login);
authRouter.get('/users', roleMiddleware("ADMIN"), authController.getUsers);

export default authRouter;