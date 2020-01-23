import cors from 'cors';
import express from 'express';
import path from 'path';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(
      '/files', // toda vez que a rota /files for acessada
      express.static(path.resolve(__dirname, '..', 'uploads', 'resizeds')) // será buscado os arquivos do diretorio resizeds
    );
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
