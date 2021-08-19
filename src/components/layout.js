import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
	<div className="body">
		<title>{pageTitle} | {data.site.siteMetadata.title}</title>
		<header id="header" className="header-effect-shrink bg-color-tertiary custom-header" data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyChangeLogo': true, 'stickyStartAt': 100, 'stickyHeaderContainerHeight': 83}">
			<div className="header-body border-0 box-shadow-none">
				<div className="header-container container-fluid bg-secondary px-0">
					<div className="header-row">
						<div className="header-column bg-color-primary flex-grow-0 px-3 px-lg-5">
							<div className="header-row">
								<div className="header-logo">
									<Link to="/">
										<img alt="Porto" className="img-logo" width="91.4" height="80" src="img/systemiphus/logo-skinny.png"></img>
									</Link>
								</div>
							</div>
						</div>
						<div className="header-column justify-content-end justify-content-lg-start px-lg-5">
							<div className="header-row pe-3">
								<div className="header-nav header-nav-links order-2 order-lg-1 header-nav-light-text flex-grow-0 justify-content-start">
									<div className="header-nav-main header-nav-main-square header-nav-main-effect-2 header-nav-main-sub-effect-1 ">
										<nav className="collapse">
											<ul className="nav nav-pills" id="mainNav">
												<li className="dropdown">
													<Link className="dropdown-item" activeClassName="active" to="/">
														Blog
													</Link>
												</li>
												<li className="dropdown">
													<Link className="dropdown-item" activeClassName="active" to="/about">
														About
													</Link>
												</li>
											</ul>
										</nav>
									</div>
									<button className="btn header-btn-collapse-nav" data-bs-toggle="collapse" data-bs-target=".header-nav-main nav">
										<i className="fas fa-bars"></i>
									</button>
								</div>
								
							</div>
						</div>
					</div>
					<div className="header-row d-none d-lg-inline-flex justify-content-end">
						<div className="order-1 order-lg-2 pe-4 d-none d-xl-block">
							<div>
								<div className="feature-box feature-box-style-2 align-items-center p-relative top-8 px-2">
									<div className="feature-box-info ps-0">
										<p className="text-color-light font-weight-black letter-spacing-minus-1 line-height-1 text-5 pb-0">Systemiphus Blog</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>

		{children}

		<footer id="footer" className="bg-color-secondary border-top-0 mt-0 custom-footer">
			<div className="container container-xl-custom">
				<div className="footer-copyright footer-copyright-style-2 bg-color-secondary">
					<div className="py-2">
						<div className="row py-4">
							<div className="col d-flex align-items-center justify-content-center mb-4 mb-lg-0">
								<p className="text-3 text-color-light opacity-7">Ben Elliot © 2021. All Rights Reserved</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</div>
    )
}

export default Layout