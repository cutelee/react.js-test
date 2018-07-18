import React, { Component } from 'react';

let data = [
  {
    num: 1,
    name: '1번프로젝트공사',
  },
  {
    num: 2,
    name: '2번프로젝트공사',
  },
  {
    num: 3,
    name: '3번프로젝트공사',
  },
];

class Portfolio extends Component {
  constructor(props) {
    super(props);
  }

  DeletePortfolio(e) {
    e.preventDefault();
    return window.alert('삭제하시겠습니까');
  }

  render() {
    return(
      <div className='card'>
        <div className='card-body'>
          <table class='table text-center'>
            <thead className='thead-light'>
              <tr>
                <th scope='col-2'>#</th>
                <th scope='col-6'>프로젝트</th>
                <th scope='col-2'>내용1</th>
                <th scope='col-2'>내용2</th>
              </tr>
            </thead>

            <tbody>
                {
                  data.map(pj =>
                    <tr>
                      <th scope="row">{pj.num}</th>
                      <td>{pj.name}</td>
                      <td><button className='btn btn-primary btn-sm'>수정</button></td>
                      <td><button className='btn btn-danger btn-sm' onClick={this.DeletePortfolio.bind(this)}>삭제</button></td>
                    </tr>
                  )
                }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Portfolio;
