import sharp from 'sharp'; // para redimencionar img
import path from 'path';
import fs from 'fs'; // filesystem

import Post from '../schemas/Post';

class PosController {
  async index(req, res) {
    const posts = await Post.find().sort('-createdAt'); // ordenar pelos mais recentes

    return res.json(posts);
  }

  async store(req, res) {
    const { author, place, description, hashtags } = req.body;
    const { filename: image } = req.file; // nome da propriedade do arquivo será renomeada para image

    const [name] = image.split('.');
    const fileName = `${name}.jpg`;

    await sharp(req.file.path) // redimensiona a imagem para 500px
      .resize(500) // dimensões do arquivo 500px de largura
      .jpeg({ quality: 70 }) // qualidade de 70%
      .toFile(
        // exporta para um novo arquivo
        path.resolve(req.file.destination, 'resizeds', fileName) // resolve para chegar na pasta resize
      );

    fs.unlinkSync(req.file.path); // deletar img original do path uploads

    const post = await Post.create({
      author,
      place,
      description,
      hashtags,
      image: fileName, // renomear a imagem com formato .jpg
    });

    req.io.emit('post', post); // envia uma mensagem com o nome post com todos os dados para io

    return res.json(post);
  }
}

export default new PosController();
