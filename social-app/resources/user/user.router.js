import express from 'express';
import userController from './user.controller';
import passport from 'passport';
export const userRouter = express.Router();

userRouter.post('/signup', userController.signUp);
userRouter.post('/login', userController.login);
userRouter.put('/updateSocket', userController.updateSocket);
userRouter.get(
    '/me',
    passport.authenticate('jwt', { session: false }),
    userController.authenticate
);