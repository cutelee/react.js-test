import React, { Component } from 'react';
import queryString from 'query-string';

class EditPortfolio extends Component {
  constructor(props) {
    super(props);

    const location = this.props.location;
    const match = this.props.match;
    const query = queryString.parse(location.search);
    console.log(query);

    this.state = {
      portfolioId: query.portfolioId
    }
  }

  componentDidMount() {
    // portfolioId를 서버로 보내서 입력되어있던 정보 가져오기
  }


  render() {
    return (
      <div className='card'>
        <div className='card-header'>
          <strong>{this.state.portfolioId}번 포트폴리오 내용 수정</strong>
        </div>

        <div className='card-body'>
          <form>
            <div className='form-group'>
              <label for='pf-name'>포트폴리오 이름</label>
              <input type='text' className='form-control' id='pf-name' placeholder='이름을 입력하세요.' />
            </div>

            <div className='card'>
              <div className='card-body'>
                <h5>체크박스, 체크하세요.</h5>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label className="form-check-label" for="defaultCheck1">
                    선택 가능한 항목
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled />
                  <label className="form-check-label" for="defaultCheck2">
                    선택 불가능한 항목
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" checked />
                  <label className="form-check-label" for="defaultCheck2">
                    미리 체크된 항목
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" checked disabled />
                  <label className="form-check-label" for="defaultCheck2">
                    미리 체크된 선택 불가능한 항목
                  </label>
                </div>
              </div>
            </div>

            <div className='card col-sm-6'>
              <div className='card-body'>
                <h5>라디오박스, 선택하세요.</h5>
                <div className='form-check'>
                  <input className='form-check-input' type='radio' name='radio-ex' id='radio-ex-1' value='option1' checked />
                  <label className='form-check-label' for='radio-ex-1'>선택 1번</label>
                </div>
                <div className='form-check'>
                  <input className='form-check-input' type='radio' name='radio-ex' id='radio-ex-2' value='option2' />
                  <label className='form-check-label' for='radio-ex-2'>선택 2번</label>
                </div>
                <div className='form-check'>
                  <input className='form-check-input' type='radio' name='radio-ex' id='radio-ex-3' value='option3' disabled />
                  <label className='form-check-label' for='radio-ex-3'>선택 3번</label>
                </div>
              </div>
            </div>

          </form>
        </div>

      </div>
    );
  }
}

export default EditPortfolio;
