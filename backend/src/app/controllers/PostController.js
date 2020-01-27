import sharp from 'sharp'; //TODO redimencionar img
import path from 'path'; //TODO mapear diretorios
import fs from 'fs'; // filesystem

import Post from '../schemas/Post';

class PosController {
  async index(req, res) {
    const posts = await Post.find().sort('-createdAt'); //TODO buscar e ordenar posts por mais recentes

    return res.json(posts); //TODO retornar todos os posts
  }

  async store(req, res) {
    const { author, place, description, hashtags } = req.body; // TODO pegar dados do corpo da requisição
    const { filename: image } = req.file; //TODO pegar arquivo e renomear a propriedade filename para image da requisição

    const [name] = image.split('.'); //TODO separar o nome da imagem
    const fileName = `${name}.jpg`; //TODO adicionar a extensão de .jpg

    await sharp(req.file.path) //TODO encontar o diretorio que o arquivo foi upado
      .resize(500) //TODO redimensionar largura do arquivo para 500px
      .jpeg({ quality: 70 }) //TODO definir a qualidade da imagem para 70%
      .toFile(
        //TODO exportar o arquivo modificado para outro diretorio
        path.resolve(req.file.destination, 'resizeds', fileName) //TODO caminho até o diretorio para armazenar o arquivo modificado (resizes)
      );

    fs.unlinkSync(req.file.path); //TODO deletar img original do diretorio uploads

    //TODO criar um post
    const post = await Post.create({
      author,
      place,
      description,
      hashtags,
      image: fileName, // renomear a imagem com formato .jpg
    });

    // req.io.emit('post', post); // envia uma mensagem com o nome post com todos os dados para io

    return res.json(post); //TODO retornar o post
  }
}

export default new PosController();
