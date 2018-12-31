import express from 'express';
import testController from './testController';

export const testRouter = express.Router();

testRouter.post('/', testController.create);




/*
{
    "content": "admin1",
    "imageUrl": "hinh1",
    "likes" : ["5bb089ac27c7ed2ca81d90f1"],
    "postBy" : "5bb08a9827c7ed2ca81d90f2"
}
*/