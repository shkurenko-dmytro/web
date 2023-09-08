import Router from 'express'
import PostController from './PostController.js';
import path, { dirname } from "path"
import  fs from "fs"

const postRouter = new Router();

postRouter.post('/posts', PostController.create)
postRouter.get('/posts', PostController.getAll)
postRouter.get('/posts/:id', PostController.getOne)
postRouter.put('/posts', PostController.update)
postRouter.delete('/posts/:id', PostController.delete)
postRouter.get('/loadProducts', PostController.loadProducts )


export default postRouter;
