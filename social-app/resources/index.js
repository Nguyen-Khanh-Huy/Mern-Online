import express from 'express';
import { userRouter } from './user';
import { messageRouter } from './message';
import { postRouter } from './posts/post.router';
import { chatRouter } from './chat/chat';

import { testRouter } from './test/testRouter';

export const restRouter = express.Router();

restRouter.use('/users', userRouter);
restRouter.use('/posts', postRouter);
restRouter.use('/messages', messageRouter);
restRouter.use('/chat', chatRouter);

restRouter.use('/bla', testRouter);