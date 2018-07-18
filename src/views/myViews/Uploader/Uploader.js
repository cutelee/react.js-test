import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import axios, { post } from 'axios';
import { Modal, Button, Card, CardBody, CardFooter, CardHeader, Col, Row } from 'reactstrap';

class Uploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    }
  }

  AddFile(accepted, rejected) {
    console.log(accepted);
    if(this.state.files.length != 0) {
      if(this.state.files.indexOf(accepted) != -1) {
        console.log('중복!');
        return ;
      }
    }

    this.setState({
      files: this.state.files.concat(accepted)
    });

    if(rejected.length != 0) {
      window.alert('이미지 파일만 업로드가 가능합니다!');
    }
  }

  DeleteFile(file) {
    let idx = this.state.files.indexOf(file)
    if(idx > -1) {
      console.log(this.state.files.indexOf(file))
      let newFiles = this.state.files;
      newFiles.splice(idx, 1);
      this.setState({
        files: newFiles
      });
      console.log(this.state.files);
    } else {
      console.log('해당 파일 없음.');
    }
  }

  DeleteAskAgain = (file) => {
    console.log('Hello');
    return (
      <div className='modal' tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className='modal-content'>
            <div className='modal-body'>
              <p>정말 삭제하시겠습니까?</p>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-primary" onClick={this.DeleteFile.bind(this, file)}>삭제</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">취소</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onDrop(accepted, rejected) {
    console.log(this.state.files);
    this.AddFile(accepted, rejected);
    console.log(this.state.files);
  }

  onFormSubmit(e) {
    e.preventDefault();
    if(this.state.files.length != 0) {
      this.uploadImageFiles(this.state.files)
        .then((response) => {
          if(response.request.status==200) {
            console.log('성공');
            window.alert('업로드 완료!');
          }
        })
        .catch((error) => {
          console.log('fail');
          window.alert('실패!');
        })
    } else {
      window.alert('업로드 할 사진이 없습니다.');
      console.log('보낼 사진이 없음!');
    }
  }

  uploadImageFiles(files) {
    let data = new FormData();
    let url = 'http://httpbin.org/post';
    this.state.files.map((file) => {
      return data.append(file.name, file);
    })
    // data.append('file', files);
    const config = {
      header: {
        'content-type': 'multipart/form-data'
      }
    }

    return post(url, data, config);
  }

  printPreview() {
    if(this.state.files.length == 0)
      return (<div>업로드 할 사진이 없습니다.</div>);
  }

  m_lr_10 = {
    marginLeft: '5px',
    marginRight: '5px',
  }
  m_lr_3 = {
    marginLeft: '1px',
    marginRight: '1px',
  }
  m_td_10 = {
    marginTop: '10px',
    marginBottom: '10px',
  }

  render() {
    return (
      <div className='container animated fadeIn'>
        <Card>
          <CardHeader>
            <strong>Image Uploader</strong>
          </CardHeader>
          <CardBody className='container text-center align-items-center'>
            <div className="dropzone">
              <Dropzone
                className="card w-100 border border-primary "
                accept="image/jpeg, image/png"
                maxSize={100000000}
                onDrop={this.onDrop.bind(this)}>
                <div className='p-3 m-2'>
                  <h6 className='text-primary'><strong>.jpeg, .png 파일만 업로드가 가능합니다.</strong></h6>
                  <h5><strong>여기</strong>로 파일을 드래그하거나 클릭해주세요.</h5>
                </div>
              </Dropzone>
            </div>

            <Card className='align-items-center'>
              <h4 className='card-title' style={this.m_td_10}><strong>업로드한 사진</strong></h4>
              {this.state.files.length==0 && <div style={this.m_td_10}>업로드 할 사진이 없습니다.</div>}
              <div className='flex-row'>
                {
                  this.state.files.map(f =>
                    <div key={f.name}>
                      <figure className='figure animated fadeIn p-2'  style={this.m_lr_3}>
                        <img src={f.preview} className="img-fluid rounded" alt="업로드 한 이미지"></img>
                      </figure>
                      <Button
                        className='btn btn-danger'
                        onClick={this.DeleteFile.bind(this, f)}>x</Button>
                    </div>)
                  }
              </div>
            </Card>

            <div className="w-50 mx-auto clearfix">
              <form onSubmit={this.onFormSubmit.bind(this)}>
                <input className="btn btn-pill btn-primary float-left" type='submit' value='전송' />
              </form>
              <Button className="btn btn-pill btn-danger float-right" onClick={() => (console.log(this.state.files))}>갱신</Button>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Uploader;
