# Core.ui 디자인 적용하기

## src > containers > DefaultLayout
* **DefaultLayouts.js**
	기본적인 구조는 app 내에 Header, body(sidebar, main), footer로 이루어져 있음.

	    render() {
		    return (
			    <div className="app">
				    <AppHeader>
					    ...
				    </AppHeader>

					<div className="app-body">
						<Appsidebar>
							<AppSidebarHeader />
							<AppSidebarForm />
				            <AppSidebarNav navConfig={navigation} {...this.props} />
				            <AppSidebarFooter />
				            <AppSidebarMinimizer />
						</Appsidebar>

						<main className="main">
							<AppBreadcrumb appRoutes={routes}/>		# 현재 위치 표시
							<Container>
								<Switch>
									{routes.map(...)}
									<Redirect from="/" to="/dashboard" />		# 없으면 기본 페이지(*)로
								</Switch>
							</Container>
						</main>

						<AppAside>
				            <DefaultAside />
				        </AppAside>
					</div>

					<AppFooter>
				        <DefaultFooter />
			        </AppFooter>
			    </div>
		    );
	    }

	\* 현재 설정된 기본페이지는 dashboard임.

* **DefaultHeader.js**

			render() {          // eslint-disable-next-line
				const { children, ...attributes } = this.props;
				return (
					<React.Fragment>
						<AppSidebarToggler ... />
						<AppNavbarBrand> ... </AppNavbarBrand>		# 로고 들어가는 곳
						<AppSidebarToggler ... />

						<Nav className="d-md-down-none" navbar>
							<NavItem className="px-3">
					            <NavLink href="/">
						            <i className='cui-home' style={{marginRight: 5}}></i>메인페이지
						        </NavLink>
							</NavItem>
						        ...					# 원하는 탭 개수만큼 NavItem 반복
						</Nav>
						.. 밑에 더 있는데..
					</React.Fragment>
				);
		  }

* **DefaultFooter.js**
React.Fragment 태그 안에 원하는 내용 집어넣으면 페이지 하단 Footer 자리에 위치함.

		render() {      // eslint-disable-next-line
			const { children, ...attributes } = this.props;
			return (
				<React.Fragment>
					...
			    </React.Fragment>
		    );
	  }

* **DefaultAside.js**

		render() {
			return (
				<React.Fragment>
					<Nav tabs>
						<NavItem>
							<NavLink> ... </NavLink>
						</NavItem>
					</Nav>
					...
					<TabContent>
						<TabPane tabId="1">			# 첫 번째 탭
							...
						</TabPane>
						...
					</TabContent>
				</React.Fragment>
			);
		}

---

## 탭 추가하기

> 1. views 폴더에 해당 view를 render 해 줄 js 파일 만들기
> 2. _nav.js 파일에 해당 카테고리 추가하기 (왼쪽 사이드바에 띄울 경우)
> 3. routes.js에 loader를 추가, routes에 추가하기

---

## Image Uploader

참고한 링크: https://github.com/felixrieseberg/React-Dropzone-Component#usage

### 설치

	$ npm install react-dropzone-component
