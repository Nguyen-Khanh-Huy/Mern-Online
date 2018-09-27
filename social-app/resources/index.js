import express from 'express';
import { userRouter } from './user';
import { messageRouter } from './message';

export const restRouter = express.Router();

restRouter.use('/users', userRouter);
restRouter.use('/messages', messageRouter); 