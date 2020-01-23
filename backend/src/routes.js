import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import PostController from './controllers/PostController';
import LikeController from './controllers/LikeController';

const routes = Router();

routes.post('/boxes', PostController.index);
routes.get('/posts/:id/like', LikeController.store); // esse id é pego do usuario logado numa aplicação (middleware)

routes.post(
  '/posts',
  multer(multerConfig).single('image'), // enviar apenas um arquivo por ver (single('nomeDoCampo')) - varios (array(''))
  PostController.store
);

export default routes;
