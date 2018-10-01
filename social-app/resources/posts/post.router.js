import express from 'express';
import postController from './post.controller';

export const postRouter = express.Router();

postRouter.get('/', postController.getAll);
postRouter.get('/:id', postController.getById);
postRouter.post('/', postController.create);
postRouter.put('/:id', postController.updatePost);
postRouter.delete('/:id', postController.deletePost);
