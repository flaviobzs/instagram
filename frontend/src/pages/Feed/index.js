import React, { useEffect, useState } from 'react';

import { PostList } from './styles';

import api from '../../services/api';

import Post from '../../components/Post';

export default function Feed() {
  const [posts = [], setPosts] = useState([]);

  useEffect(() => {
    async function loadFeed() {
      const response = await api.get('/posts');
      setPosts(response.data);
    }

    loadFeed();
  }, posts);

  return (
    <PostList>
      {posts.map(post => (
        <Post key={post._id} post={post} />
      ))}
    </PostList>
  );
}
