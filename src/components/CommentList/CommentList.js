import React from 'react';
import { Comment } from '../';

const CommentList = ({comments}) => {
  const commentList = comments.map(
      (comment, index) => (
        <Comment
          name={comment.email.split('@')[0]}
          body={comment.body}
          key={index}
        />
      )
  );

  return (
    <div>
      {commentList}
    </div>
  );
}

export default CommentList;
