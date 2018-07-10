import React from 'react';
import { Post } from '../';

const PostList = ({posts}) => {
  const postList = posts.map(
    (title, body) => (
      <Post
        title={title}
        body={body}
      />
    )
  );

  return (
    <ul>
      {postList}
    </ul>
  );
}

export default PostList;
