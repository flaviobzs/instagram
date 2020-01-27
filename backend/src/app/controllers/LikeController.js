import Post from '../schemas/Post';

class LikeController {
  async store(req, res) {
    const post = await Post.findById(req.params.id); //TODO buscar o post pelo id

    post.likes += 1; //TODO incrementar a contagem do post

    await post.save(); //TODO salvar informações do post

    // req.io.emit('like', post);

    return res.json(post); //TODO retornar o post
  }
}

export default new LikeController();
