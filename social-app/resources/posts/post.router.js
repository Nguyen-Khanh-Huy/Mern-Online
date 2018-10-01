import express from 'express';
import postController from './post.controller';

export const postRouter = express.Router();

postRouter.get('/', postController.getAll);
postRouter.get('/:id', postController.getById);
postRouter.post('/', postController.create);
postRouter.put('/:id', postController.updatePost);
postRouter.delete('/:id', postController.deletePost);



/*
{
    "content": "admin1",
    "imageUrl": "hinh1",
    "likes" : ["5bb089ac27c7ed2ca81d90f1"],
    "postBy" : "5bb08a9827c7ed2ca81d90f2"
}
*/