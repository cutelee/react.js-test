import React, { Component } from 'react';
import { CommentContainer } from '../../../components';

class Comments extends Component {
  render() {
    return(
      <div className='contents' flex>
        <div className='container'>
          <div className='row'>
            <CommentContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;
