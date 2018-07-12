import React, { Component } from 'react';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        {/*

        <AppSidebarToggler className="d-md-down-none" display="lg" />
        */}
        <AppNavbarBrand><i className='cui-home' style={{marginRight: 5}}></i><strong>Test</strong> Page</AppNavbarBrand>


        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="/">
            <i className='cui-home' style={{marginRight: 5}}></i>메인페이지</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#/posts">
            <i className='cui-pencil' style={{marginRight: 5}}></i>게시글</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#/comments">
            <i className='cui-comment-square' style={{marginRight: 5}}></i>댓글</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="cui-bell"></i><Badge pill color="primary">알림</Badge></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="cui-list"></i></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="cui-location-pin"></i></NavLink>
          </NavItem>
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem header tag="div" className="text-center"><strong>소제목 #1</strong></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> 컨텐츠 #1<Badge color="info">알림개수</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> 컨텐츠 #2<Badge color="success">알림개수</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> 컨텐츠 #4<Badge color="warning">알림개수</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> 컨텐츠 #3<Badge color="danger">알림개수</Badge></DropdownItem>
              <DropdownItem header tag="div" className="text-center"><strong>소제목 #2</strong></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> 컨텐츠 #1</DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> 컨텐츠 #2</DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> 컨텐츠 #3<Badge color="secondary">알림개수</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> 컨텐츠 #4<Badge color="primary">알림개수</Badge></DropdownItem>
              <DropdownItem divider />
              <DropdownItem><i className="cui-account-logout"></i> 로그아웃</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>

        <AppAsideToggler className="d-lg-none" mobile />

        {/*<AppAsideToggler className="d-md-down-none" />
          */}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
