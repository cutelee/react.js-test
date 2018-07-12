class Uploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    }
  }
  handleDrop = (acceptedFiles) => {
    console.log('Handle Drop');
    let formData = new FormData();

    acceptedFiles.forEach(function(file) {
      formData.append('avatar', file);
    });

    console.log('Send fetch request');
    fetch('/talent/uploadUserAvatar', {
      method: 'POST',
      credentials: 'include',
      body: formData
    });
  }

  handleDropRejected = () => {
    console.log('File Upload Rejected');
  }

  render() {
    return (
      <Dropzone onDrop={this.handleDrop.bind(this)}>
        업로드 할 사진을 드래그하세요
      </Dropzone>
    );
  }
}


import React, { Component } from 'react';
import { Card, CardBody, CardFooter, CardHeader, Col, Row } from 'reactstrap';
import ReactDOM from 'react-dom';
import DropzoneComponent from 'react-dropzone-component';
import Dropzone from 'react-dropzone'
import ReactDOMServer from 'react-dom/server';
import ImageUploader from 'react-images-upload';

class Uploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    }

    this.djsConfig = {
        addRemoveLinks: true,
        acceptedFiles: "image/jpeg,image/png,image/gif",
        previewTemplate: ReactDOMServer.renderToStaticMarkup(
          <ImageUploader
            withIcon={true}
            buttonText='이미지를 선택하세요.'
            onChange={this.onDrop}
            imgExtension={['.jpg','.gif','.png']}
            maxFileSize={5242880}
            withPreview={true}
            withLabel={true}
          />
        )
    };

    this.componentConfig = {
        iconFiletypes: ['.jpg', '.png', '.gif'],
        showFiletypeIcon: true,
        postUrl: '/uploadHandler'
    };

     this.callbackArray = [() => console.log('Hi!'), () => console.log('Ho!')];

     // Simple callbacks work too, of course
     this.callback = () => console.log('Hello!');
     this.success = file => console.log('uploaded', file);
     this.removedfile = file => console.log('removing...', file);
     this.dropzone = null;
  }

  onDrop = (files) => {
    this.setState({
      files
    });
  }

  render() {
    const componentConfig = this.componentConfig;
    const djsConfig = this.djsConfig;
    const eventHandlers = {
      init: dz => this.dropzone = dz,
      drop: this.callbackArray,
      addedfile: this.callback,
      success: this.success,
      removedfile: this.removedfile
    }

    return(
      <React.Fragment>
        <Card>
          <CardHeader>
            <strong>Image Uploader</strong>
          </CardHeader>
          <CardBody>
            <DropzoneComponent config={componentConfig}
                               eventHandlers={eventHandlers}
                               djsConfig={djsConfig} />
            {/*

            */}
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <strong>Image Uploader</strong>
          </CardHeader>
          <CardBody>
            <div className="dropzone">
              <Dropzone onDrop={this.onDrop.bind(this)}>
                업로드 할 사진을 드래그하세요
              </Dropzone>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            사진 목록
          </CardHeader>
          <CardBody>
            <ul>
              {
                this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
              }
            </ul>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default Uploader;
