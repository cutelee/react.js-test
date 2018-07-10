import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';

const Post = ({title, body}) => {
  return (
    <Card className="position-static">
      <CardHeader>
        <strong>{title}</strong>
      </CardHeader>
      <CardBody>
        <p>{body}</p>
      </CardBody>
    </Card>
  );
};

export default Post;
