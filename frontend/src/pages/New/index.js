import React, { useState } from 'react';

import api from '../../services/api';

import { Form } from './styles';

export default function New({ history }) {
  const [author, setAuthor] = useState('');
  const [place, setPlace] = useState('');
  const [description, setDescription] = useState('');
  const [hashtags, setHashtags] = useState('');
  const [image, setImage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post('posts', {
      author,
      place,
      description,
      hashtags,
      image,
    });

    history.push('/');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="file"
        onChange={e => setImage(e.target.files[0])}
        // value={image}
      />
      <input
        type="text"
        name="author"
        placeholder="Autor do post"
        onChange={e => setAuthor(e.target.value)}
        value={author}
      />
      <input
        type="text"
        name="place"
        placeholder="Local do post"
        onChange={e => setPlace(e.target.value)}
        value={place}
      />
      <input
        type="text"
        name="description"
        placeholder="Descrição do post"
        onChange={e => setDescription(e.target.value)}
        value={description}
      />
      <input
        type="text"
        name="hashtags"
        placeholder="Hashtags do post"
        onChange={e => setHashtags(e.target.value)}
        value={hashtags}
      />

      <button type="submit">Enviar</button>
    </Form>
  );
}
