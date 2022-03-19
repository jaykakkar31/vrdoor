import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Dropdown } from "react-bootstrap";
const Navbar = () => {
	return (
		<div className="nav-head">
			{" "}
			<header class="rt-header sticky-on">
				<div id="sticky-placeholder"></div>
				<div
					id="navbar-wrap"
					class="header-menu menu-layout1 header-menu menu-layout2"
				>
					<div class="container nav-container">
						<div class="row d-flex align-items-center">
							<div class="col-xl-2 col-lg-2">
								<div class="logo-area">
									<a href="/" class="temp-logo">
										<img
											src="img/logo.svg"
											width="157"
											height="40"
											alt="logo"
											class="img-fluid"
										/>
									</a>
								</div>
							</div>
							<div class="col-xl-6 col-lg-6 d-flex justify-content-center position-static">
								<nav
									id="dropdown"
									class="template-main-menu template-main-menu-3"
								>
									<ul>
										<li>
											<Link to="/" class="active">
												Home
											</Link>
											{/* <ul class="dropdown-menu-col-1">
												<li>
													<a href="index.html">Home Page 1</a>
												</li>
												<li>
													<a href="index2.html">Home Page 2</a>
												</li>
												<li>
													<a href="index3.html">Home Page 3</a>
												</li>
												<li>
													<a href="index4.html">Home Page 4</a>
												</li>
												<li>
													<a href="index5.html">Home Page 5</a>
												</li>
											</ul> */}
										</li>
										<li>
											<Link to="/about">About</Link>
										</li>
										<li>
											<a>Property</a>
											<ul class="dropdown-menu-col-1">
												<li>
													<a href="/properties?category=buy">Buy</a>
												</li>
												<li>
													<a href="/properties?category=rent">Rent</a>
												</li>
											</ul>
										</li>

										<li>
											<Link to="/blog">Blog</Link>
										</li>
										<li>
											<Link to="/contactus">Contact</Link>
										</li>
									</ul>
								</nav>
							</div>
							<div class="col-xl-4 col-lg-4 d-flex justify-content-end">
								<div class="header-action-layout1">
									<ul class="action-list">
										<li class="action-item-style left-right-btn">
											<a
												href="compare.html"
												data-bs-toggle="tooltip"
												data-bs-placement="bottom"
												title="Compare"
											>
												<i class="flaticon-left-and-right-arrows icon-round"></i>
												<div class="item-count">0</div>
											</a>
										</li>
										<li class="action-item-style wish-btn">
											<a
												href="favourite.html"
												data-bs-toggle="tooltip"
												data-bs-placement="bottom"
												title="Favourites"
											>
												<i class="flaticon-heart icon-round"></i>
												<div class="item-count">0</div>
											</a>
										</li>
										<li class="action-item-style my-account">
											<Link
												to="/Login"
												data-bs-toggle="tooltip"
												data-bs-placement="bottom"
												title="Sign In"
											>
												<i class="flaticon-user-1 icon-round"></i>
											</Link>
										</li>
										<li class="listing-button">
											<a href="AddPost" class="listing-btn">
												<span>
													<i class="fas fa-plus-circle"></i>
												</span>
												<span class="item-text">Add Property</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<div
				class="rt-header-menu mean-container position-relative"
				id="meanmenu"
			>
				<div class="mean-bar">
					<a href="index.html">
						<img src="img/logo.svg" alt="logo" class="img-fluid" />
					</a>
					<div class="mean-bar--right">
						<div class="actions search">
							<a href="#template-search" class="item-icon" title="Search">
								<i class="fas fa-search"></i>
							</a>
						</div>
						<div class="actions user">
							<a href="account.html">
								<i class="flaticon-user"></i>
							</a>
						</div>
						<span class="sidebarBtn">
							<span class="bar"></span>
							<span class="bar"></span>
							<span class="bar"></span>
							<span class="bar"></span>
						</span>
					</div>
				</div>
				<div class="rt-slide-nav">
					<div class="offscreen-navigation">
						<nav class="menu-main-primary-container">
							<ul class="menu">
								<li class="list menu-item-parent menu-item-has-children">
									<a class="animation" href="index.html">
										Home
									</a>
									<ul class="main-menu__dropdown sub-menu">
										<li>
											<a href="index.html">Home 01</a>
										</li>
										<li>
											<a href="index2.html">Home 02</a>
										</li>
										<li>
											<a href="index3.html">Home 03</a>
										</li>
										<li>
											<a href="index4.html">Home 04</a>
										</li>
										<li>
											<a href="index5.html">Home 05</a>
										</li>
									</ul>
								</li>
								<li class="list menu-item-parent menu-item-has-children">
									<a class="animation" href="with-sidebar2.html">
										Listing
									</a>
									<ul class="main-menu__dropdown sub-menu">
										<li>
											<a href="half-map1.html">Properties Map Grid</a>
										</li>
										<li>
											<a href="half-map2.html">Properties Map List</a>
										</li>
										<li>
											<a href="without-sidebar.html">Properties Full Width</a>
										</li>
										<li>
											<a href="with-sidebar.html">Properties Grid</a>
										</li>
										<li>
											<a href="single-listing1.html">Single Property 1</a>
										</li>
										<li>
											<a href="single-listing2.html">Single Property 2</a>
										</li>
										<li>
											<a href="single-listing3.html">Single Property 3</a>
										</li>
									</ul>
								</li>
								<li class="list menu-item-parent menu-item-has-children">
									<a class="animation" href="index.html">
										Pages
									</a>
									<ul class="main-menu__dropdown sub-menu">
										<li>
											<a href="https://www.radiustheme.com/demo/html/homlisti/about.html">
												About Us
											</a>
										</li>
										<li>
											<a href="404.html">Error page</a>
										</li>
										<li>
											<a href="with-sidebar.html">Properties Grid</a>
										</li>
										<li>
											<a href="without-sidebar.html">Properties Full Width</a>
										</li>
										<li>
											<a href="single-agency1.html">Single Agency page</a>
										</li>
										<li>
											<a href="single-agent1.html">Single-agent page</a>
										</li>
										<li>
											<a href="pricing-1.html">Pricing page</a>
										</li>
									</ul>
								</li>
								<li class="list menu-item-parent menu-item-has-children">
									<a class="animation" href="index.html">
										Blog
									</a>
									<ul class="main-menu__dropdown sub-menu">
										<li>
											<a href="blog1.html">Blog 1</a>
										</li>
										<li>
											<a href="blog2.html">Blog 2</a>
										</li>
										<li>
											<a href="blog-details1.html">Blog Details Page</a>
										</li>
									</ul>
								</li>
								<li class="list menu-item-parent menu-item-has-children">
									<a class="animation" href="index.html">
										Agents
									</a>
									<ul class="main-menu__dropdown sub-menu">
										<li>
											<a href="agency-lists1.html">Agency List page</a>
										</li>
										<li>
											<a href="agent-lists1.html">Agent List Page</a>
										</li>
										<li>
											<a href="agent-reviews1.html">Agent Reviews Page</a>
										</li>
									</ul>
								</li>
								<li class="list menu-item-parent">
									<a class="animation" href="contact.html">
										Contact us
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
