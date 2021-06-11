import React from 'react';
import './Feed.css';
import Post from './Post';
import Authors from './Authors';

const Feed = () => {
  return (
    <div className="feed">
      <h1>Feed</h1>
      <Authors />
      <Post title="<Post Title>" body="<Post body>" authorName="<Author name>" />
    </div>
  );
};

export default Feed;