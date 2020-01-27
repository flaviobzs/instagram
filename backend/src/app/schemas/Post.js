import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true } // armazena a data de criação e alteração de dados
);

export default mongoose.model('Post', PostSchema);
