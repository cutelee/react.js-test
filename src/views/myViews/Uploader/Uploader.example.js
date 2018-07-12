import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import ImageUploader from 'react-images-upload';

class Uploader extends Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop = (picture) => {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    })

    console.log('Handle Drop');
    let formData = new FormData();

    this.pictures.forEach(function(file) {
      formData.append('avatar', file);
    });

    console.log('Send fetch request');
    fetch('/talent/uploadUserAvatar', {
      method: 'POST',
      credentials: 'include',
      body: formData
    });
  }

  render() {
    return (
      <ImageUploader
        withIcon={true}
        buttonText='이미지를 선택하세요.'
        onChange={this.onDrop}
        imgExtension={['.jpg','.gif','.png']}
        maxFileSize={5242880}
        withPreview={true}
        withLabel={true}
      />
    );
  }
}




export default Uploader;
