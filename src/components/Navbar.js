import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
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
									<Link href="/" class="temp-logo">
										<img
											src="img/logo.svg"
											width="157"
											height="40"
											alt="logo"
											class="img-fluid"
										/>
									</Link>
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
													<Link href="/">Home Page 1</Link>
												</li>
												<li>
													<Link href="index2.html">Home Page 2</Link>
												</li>
												<li>
													<Link href="index3.html">Home Page 3</Link>
												</li>
												<li>
													<Link href="index4.html">Home Page 4</Link>
												</li>
												<li>
													<Link href="index5.html">Home Page 5</Link>
												</li>
											</ul> */}
										</li>
										<li>
											<Link to="/about">About</Link>
										</li>
										<li>
											<Link>Property</Link>
											<ul class="dropdown-menu-col-1">
												<li>
													<Link href="/properties?category=buy">Buy</Link>
												</li>
												<li>
													<Link href="/properties?category=rent">Rent</Link>
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
											<Link
												href="compare.html"
												data-bs-toggle="tooltip"
												data-bs-placement="bottom"
												title="Compare"
											>
												<i class="flaticon-left-and-right-arrows icon-round"></i>
												<div class="item-count">0</div>
											</Link>
										</li>
										<li class="action-item-style wish-btn">
											<Link
												href="favourite.html"
												data-bs-toggle="tooltip"
												data-bs-placement="bottom"
												title="Favourites"
											>
												<i class="flaticon-heart icon-round"></i>
												<div class="item-count">0</div>
											</Link>
										</li>
										<li class="action-item-style my-account">
											<Link
												href="Login"
												data-bs-toggle="tooltip"
												data-bs-placement="bottom"
												title="Sign In"
											>
												<i class="flaticon-user-1 icon-round"></i>
											</Link>
										</li>
										<li class="listing-button">
											<Link href="AddPost" class="listing-btn">
												<span>
													<i class="fas fa-plus-circle"></i>
												</span>
												<span class="item-text">Add Property</span>
											</Link>
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
					<Link href="/">
						<img src="img/logo.svg" alt="logo" class="img-fluid" />
					</Link>
					<div class="mean-bar--right">
						<div class="actions search">
							<Link href="#template-search" class="item-icon" title="Search">
								<i class="fas fa-search"></i>
							</Link>
						</div>
						<div class="actions user">
							<Link href="account.html">
								<i class="flaticon-user"></i>
							</Link>
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
									<Link class="animation" href="/">
										Home
									</Link>
									<ul class="main-menu__dropdown sub-menu">
										<li>
											<Link href="/">Home </Link>
										</li>
									
									</ul>
								</li>
								<li class="list menu-item-parent menu-item-has-children">
									<Link class="animation" href="with-sidebar2.html">
										Listing
									</Link>
									<ul class="main-menu__dropdown sub-menu">
										<li>
											<Link href="Properties">Properties Map Grid</Link>
										</li>
										
										<li>
											<Link href="SingleProperty">Single Property 1</Link>
										</li>
										
									</ul>
								</li>
								<li class="list menu-item-parent menu-item-has-children">
									<Link class="animation" href="/">
										Pages
									</Link>
									<ul class="main-menu__dropdown sub-menu">
										<li>
											<Link href="https://www.radiustheme.com/demo/html/homlisti/about.html">
												About Us
											</Link>
										</li>
								
									</ul>
								</li>
								<li class="list menu-item-parent menu-item-has-children">
									<Link class="animation" href="/">
										Blog
									</Link>
									<ul class="main-menu__dropdown sub-menu">
										<li>
											<Link href="Blog">Blog 1</Link>
										</li>
										<li>
											<Link href="Blog">Blog 2</Link>
										</li>
										<li>
											<Link href="BlogDetail">Blog Details Page</Link>
										</li>
									</ul>
								</li>
								<li class="list menu-item-parent menu-item-has-children">
									<Link class="animation" href="/">
										Agents
									</Link>
									<ul class="main-menu__dropdown sub-menu">
										
									</ul>
								</li>
								<li class="list menu-item-parent">
									<Link class="animation" href="ConactUs">
										Contact us
									</Link>
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
