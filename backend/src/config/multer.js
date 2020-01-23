import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

export default {
  storage: multer.diskStorage({
    // metodo indica local para SALVAR arquivos (opções: banco, nuvem)
    destination: path.resolve(__dirname, '..', '..', 'uploads'), // diretorio para salvar imagem
    filename(req, file, cb) {
      cb(null, file.originalname);
    },
  }),
};
