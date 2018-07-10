import React, { Component } from 'react';
import { PostContainer } from '../../../components';

class Posts extends Component {
  render() {
    return(
      <div className='contents' flex>
        <div className='container'>
          <div className='row'>
            <PostContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
