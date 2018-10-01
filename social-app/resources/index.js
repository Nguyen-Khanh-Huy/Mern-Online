import express from 'express';
import { userRouter } from './user';
import { messageRouter } from './message';
import { postRouter } from './posts/post.router';

export const restRouter = express.Router();

restRouter.use('/users', userRouter);
restRouter.use('/posts', postRouter);
restRouter.use('/messages', messageRouter); 