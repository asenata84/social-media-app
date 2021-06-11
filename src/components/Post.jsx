import React from 'react';
import './Post.css';
import PostComments from './PostComments';

const Post = ({title, body, authorName}) => {
  return (
    <div className="card">
      <div className="post-title">{authorName}: {title}</div>
      <div className="post-body">{body}</div>
      <PostComments />
    </div>
  );
};

export default Post;