import React from 'react';
import { Button, Row, Col } from 'reactstrap';

const MyButton = ({onClick, postId, disabled}) => (
  <div className='Navigate-Button' style={{paddingBottom: 10}}>
    <span className='position-relative left' style={{left: 'auto'}}>
      <Row className='align-item-center'>
        <Col><Button block color='primary' onClick={() => onClick('PREV')}>
          <i className='cui-chevron-left' style={{marginRight: 10}}></i>Prev</Button></Col>
          <Col />
          <Col />
        <Col><Button block color='primary' onClick={() => onClick('NEXT')}>
          Next<i className='cui-chevron-right' style={{marginLeft: 10}}></i></Button></Col>
      </Row>
    </span>
  </div>
);

export default MyButton;
