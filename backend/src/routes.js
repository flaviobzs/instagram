import { Router } from 'express';
import multer from 'multer';
import multerConfig from '../src/config/multer';

import PostController from './app/controllers/PostController';
import LikeController from './app/controllers/LikeController';

const routes = Router();

routes.get('/posts', PostController.index);
routes.post('/posts/:id/like', LikeController.store); // esse id é pego do usuario logado numa aplicação (middleware)

routes.post(
  '/posts',
  multer(multerConfig).single('image'), // enviar apenas um arquivo por ver (single('nomeDoCampo')) - varios (array(''))
  PostController.store
);

export default routes;
