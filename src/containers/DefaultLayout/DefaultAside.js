import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Progress, TabContent, TabPane, ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AppSwitch } from '@coreui/react'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultAside extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink className={classNames({ active: this.state.activeTab === '1' })}
                     onClick={() => {
                       this.toggle('1');
                     }}>
              <i className="cui-list"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classNames({ active: this.state.activeTab === '2' })}
                     onClick={() => {
                       this.toggle('2');
                     }}>
              <i className="cui-speech"></i>
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <ListGroup className="list-group-accent">
              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Today</ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-warning list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src="assets/img/avatars/7.jpg" alt="admin@bootstrapmaster.com"></img>
                </div>
                <div>오늘의 할 일 <strong>#1</strong> </div>
                <small className="text-muted mr-3">
                  <i className="cui-calendar"></i>&nbsp; 시간 12:00
                </small>
                <small className="text-muted">
                  <i className="cui-location-pin"></i> 장소, Seoul
                </small>
              </ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-info list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src="assets/img/avatars/4.jpg" alt="admin@bootstrapmaster.com"></img>
                </div>
                <div>오늘의 할 일 <strong>#2</strong></div>
                <small className="text-muted mr-3">
                  <i className="cui-calendar"></i>&nbsp; 시간 12:00
                </small>
                <small className="text-muted">
                  <i className="cui-social-skype"></i> 장소, Seoul
                </small>
              </ListGroupItem>
              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Tomorrow</ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-danger list-group-item-divider">
                <div>내일의 할 일 <strong>#1</strong></div>
                <small className="text-muted mr-3"><i className="cui-calendar"></i>&nbsp; 10 - 11pm</small>
                <small className="text-muted"><i className="cui-home"></i>&nbsp; creativeLabs HQ</small>
                <div className="avatars-stack mt-2">
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-success list-group-item-divider">
                <div><strong>내일의 할 일</strong> #2</div>
                <small className="text-muted mr-3"><i className="cui-calendar"></i>&nbsp; 1 - 3pm</small>
                <small className="text-muted"><i className="cui-location-pin"></i>&nbsp; Palo Alto, CA</small>
              </ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-primary list-group-item-divider">
                <div><strong>내일의 할 일</strong> #3</div>
                <small className="text-muted mr-3"><i className="cui-calendar"></i>&nbsp; 4 - 6pm</small>
                <small className="text-muted"><i className="cui-home"></i>&nbsp; creativeLabs HQ</small>
                <div className="avatars-stack mt-2">
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/8.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                </div>
              </ListGroupItem>
            </ListGroup>
          </TabPane>
          <TabPane tabId="2" className="p-3">
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">작성자 이름</small>
                <small className="text-muted float-right mt-1">1:00 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">이것은 제목입니다.</div>
              <small className="text-muted">이것은 내용입니다. 이것은 내용입니다. 이것은 내용입니다.
                이것은 내용입니다. 이것은 내용입니다. 이것은 내용입니다. 이것은 내용입니다.
              </small>
            </div>
            <hr />

            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">작성자 이름</small>
                <small className="text-muted float-right mt-1">1:00 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">이것은 제목입니다.</div>
              <small className="text-muted">이것은 내용입니다. 이것은 내용입니다. 이것은 내용입니다.
                이것은 내용입니다. 이것은 내용입니다. 이것은 내용입니다. 이것은 내용입니다.
              </small>
            </div>
            <hr />
          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

export default DefaultAside;
