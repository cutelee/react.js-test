import React, { Component } from 'react';
import { CommentList, MyButton } from '../'
import * as service from '../../services/comment';
import { render } from 'react-dom';

class CommentContainer extends Component {
  constructor(props) {
    super();

    this.state = {
      postId: 1,
      fetching: false,
      comments: [],
    };
  }

  fetchCommentInfo = async (postId) => {
    this.setState({
        fetching: true    // requesting...
    });

    try {
        const info = await service.getComments(postId);
        const comments = info.data;

        this.setState({
            postId,
            comments,
            fetching: false   // done!
        });
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
      this.fetchCommentInfo(postId+1);
    } else {
      this.fetchCommentInfo(postId-1);
    }
  }

  componentDidMount() {
    this.fetchCommentInfo(this.state.postId);
  }

  render() {
    const { postId, fetching, comments } = this.state;
    return (
      <div>
        <MyButton
          postId={postId}
          disabled={fetching}
          onClick={this.handleButtonClick}
        />

        <CommentList
          postId={postId}
          disabled={fetching}
          comments={comments}
        />
      </div>
    );
  }
}

export default CommentContainer;
