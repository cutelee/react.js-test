import React, { Component } from 'react';
import { Card, CardBody, CardFooter, CardHeader, Col, Row } from 'reactstrap';
import Dropzone from 'react-dropzone'

class Uploader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      acceptedFiles: [],
      rejectedFiles: [],
    }
  }

  onDrop = ({acceptedFiles, rejectedFiles}) => {

  }

  render() {
    return (

    );
  }
}

export default Uploader;
