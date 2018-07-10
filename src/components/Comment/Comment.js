import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';

const Comment = ({name, body}) => {
  return (
    <Card className="position-relative">
      <CardHeader><strong>{name}의 댓글</strong></CardHeader>
      <CardBody><strong>{name}: </strong> {body}</CardBody>
    </Card>
  );
}

export default Comment;
