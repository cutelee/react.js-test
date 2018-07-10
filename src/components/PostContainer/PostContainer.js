import React, { Component } from 'react';
import { PostList, Post, MyButton } from '../';
import * as service from '../../services/post';
import { render } from 'react-dom';

class PostContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      postId: 1,
      fetching: false,
      post: {
        title: null,
        body: null
      },
    };
  }

  fetchPostInfo = async (postId) => {
    this.setState({
      fetching: true
    });

    try {
      const info = await service.getPost(postId);
      const {title, body} = info.data;

      this.setState({
        postId,
        post: {
          title,
          body
        },
        fetching: false
      })
    } catch(e) {
      this.setState({
        fetching: false,
      })
      console.log('error occured', e);
    }
  }

  handleButtonClick = (type) => {
    const postId = this.state.postId;

    if(type==='NEXT') {
      this.fetchPostInfo(postId+1);
    } else {
      this.fetchPostInfo(postId-1);
    }
  }

  componentDidMount() {
    this.fetchPostInfo(1);
  }

  render() {
    const {postId, fetching, post} = this.state;
    return (
      <div>
        <MyButton
          postId={postId}
          disabled={fetching}
          onClick={this.handleButtonClick}
        />

        <Post
          title={post.title}
          body={post.body}
        />
      </div>
    );
  }
}

export default PostContainer;
