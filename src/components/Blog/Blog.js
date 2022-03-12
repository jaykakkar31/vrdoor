import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Blog = () => {
	return (
		<div>
			<Navbar />
			<div
				class="rt-header-menu mean-container position-relative"
				id="meanmenu"
			>
				<div class="mean-bar">
					<a href="index.html">
						<img src="img/logo_light2.svg" alt="logo" class="img-fluid" />
					</a>
					<div class="mean-bar--right">
						<div class="actions search">
							<a href="#template-search" class="item-icon" title="Search">
								<i class="fas fa-search"></i>
							</a>
						</div>
						<div class="actions user">
							<a href="account.html"><i class="flaticon-user"></i></a>
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
									<a class="animation" href="index.html">Home</a>
									<ul class="main-menu__dropdown sub-menu">
										<li><a href="index.html">Home 01</a></li>
										<li><a href="index2.html">Home 02</a></li>
										<li><a href="index3.html">Home 03</a></li>
										<li><a href="index4.html">Home 04</a></li>
										<li><a href="index5.html">Home 05</a></li>
									</ul>
								</li>
								<li class="list menu-item-parent menu-item-has-children">
									<a class="animation" href="with-sidebar2.html">Listing</a>
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
									<a class="animation" href="index.html">Pages</a>
									<ul class="main-menu__dropdown sub-menu">
										<li>
											<a
												href="https://www.radiustheme.com/demo/html/homlisti/about.html"
												>About Us</a
											>
										</li>
										<li><a href="404.html">Error page</a></li>
										<li>
											<a href="with-sidebar.html">Properties Grid</a>
										</li>
										<li>
											<a href="without-sidebar.html">Properties Full Width</a>
										</li>
										<li>
											<a href="single-agency1.html">Single Agency page</a>
										</li>
										<li><a href="single-agent1.html">Single-agent page</a></li>
										<li><a href="pricing-1.html">Pricing page</a></li>
									</ul>
								</li>
								<li class="list menu-item-parent menu-item-has-children">
									<a class="animation" href="index.html">Blog</a>
									<ul class="main-menu__dropdown sub-menu">
										<li><a href="blog1.html">Blog 1</a></li>
										<li><a href="blog2.html">Blog 2</a></li>
										<li><a href="blog-details1.html">Blog Details Page</a></li>
									</ul>
								</li>
								<li class="list menu-item-parent menu-item-has-children">
									<a class="animation" href="index.html">Agents</a>
									<ul class="main-menu__dropdown sub-menu">
										<li><a href="agency-lists1.html">Agency List page</a></li>
										<li><a href="agent-lists1.html">Agent List Page</a></li>
										<li>
											<a href="agent-reviews1.html">Agent Reviews Page</a>
										</li>
									</ul>
								</li>
								<li class="list menu-item-parent">
									<a class="animation" href="contact.html">Contact us</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
			{/* <!--=====================================--> */}
			{/* <!--=   Breadcrumb     Start            =--> */}
			{/* <!--=====================================--> */}

			<div class="breadcrumb-wrap">
				<div class="container">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item"><a href="index.html">Home</a></li>
							<li class="breadcrumb-item active" aria-current="page">Blog</li>
						</ol>
					</nav>
				</div>
			</div>
			{/* <!--=====================================--> */}
			{/* <!--=   Blog     Start                  =--> */}
			{/* <!--=====================================--> */}

			<section class="blog-wrap5">
				<div class="container">
					<div class="row gutters-40">
						<div class="col-lg-8">
							<div class="row">
								<div class="col-lg-6 col-md-6">
									<div
										class="blog-box1 blog-box2 wow fadeInUp"
										data-wow-delay=".4s"
									>
										<div class="item-img">
											<a href="blog1.html"
												><img
													src="img/blog/blog29.jpg"
													alt="blog"
													width="520"
													height="350"
											/></a>
										</div>
										<div class="thumbnail-date">
											<div class="popup-date">
												<span class="day">13</span
												><span class="month">Aug</span>
											</div>
										</div>
										<div class="item-content">
											<div class="entry-meta">
												<ul>
													<li><a href="blog2.html">Apartment, Room</a></li>
													<li><a href="blog2.html">5 min</a></li>
												</ul>
											</div>
											<div class="heading-title">
												<h3>
													<a href="blog1.html"
														>How To Do Market Research For to Sell Faster</a
													>
												</h3>
											</div>
											<div class="blog-button">
												<a href="blog2.html" class="item-btn"
													>Read More<i class="fas fa-arrow-right"></i
												></a>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-6">
									<div
										class="blog-box1 blog-box2 wow fadeInUp"
										data-wow-delay=".4s"
									>
										<div class="item-img">
											<a href="blog2.html"
												><img
													src="img/blog/blog30.jpg"
													alt="blog"
													width="520"
													height="350"
											/></a>
										</div>
										<div class="thumbnail-date">
											<div class="popup-date">
												<span class="day">13</span
												><span class="month">Aug</span>
											</div>
										</div>
										<div class="item-content">
											<div class="entry-meta">
												<ul>
													<li><a href="blog2.html">Building, Room</a></li>
													<li><a href="blog2.html">4 min</a></li>
												</ul>
											</div>
											<div class="heading-title">
												<h3>
													<a href="blog1.html"
														>Develop Relationships With Human Resource</a
													>
												</h3>
											</div>
											<div class="blog-button">
												<a href="blog1.html" class="item-btn"
													>Read More<i class="fas fa-arrow-right"></i
												></a>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-6">
									<div
										class="blog-box1 blog-box2 wow fadeInUp"
										data-wow-delay=".4s"
									>
										<div class="item-img">
											<a href="blog2.html"
												><img
													src="img/blog/blog31.jpg"
													alt="blog"
													width="520"
													height="350"
											/></a>
										</div>
										<div class="thumbnail-date">
											<div class="popup-date">
												<span class="day">13</span
												><span class="month">Aug</span>
											</div>
										</div>
										<div class="item-content">
											<div class="entry-meta">
												<ul>
													<li><a href="blog2.html">Entertainment, Room</a></li>
													<li><a href="blog2.html">3 min</a></li>
												</ul>
											</div>
											<div class="heading-title">
												<h3>
													<a href="blog1.html"
														>Unique Real Estate Marketing: Have A Tent Business
														Card</a
													>
												</h3>
											</div>
											<div class="blog-button">
												<a href="blog1.html" class="item-btn"
													>Read More<i class="fas fa-arrow-right"></i
												></a>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-6">
									<div
										class="blog-box1 blog-box2 wow fadeInUp"
										data-wow-delay=".4s"
									>
										<div class="item-img">
											<a href="blog2.html"
												><img
													src="img/blog/blog32.jpg"
													alt="blog"
													width="520"
													height="350"
											/></a>
										</div>
										<div class="thumbnail-date">
											<div class="popup-date">
												<span class="day">13</span
												><span class="month">Aug</span>
											</div>
										</div>
										<div class="item-content">
											<div class="entry-meta">
												<ul>
													<li><a href="blog2.html">Apartment, Room</a></li>
													<li><a href="blog2.html">5 min</a></li>
												</ul>
											</div>
											<div class="heading-title">
												<h3>
													<a href="blog2.html"
														>How To Do Market Research For to Sell Faster</a
													>
												</h3>
											</div>
											<div class="blog-button">
												<a href="blog2.html" class="item-btn"
													>Read More<i class="fas fa-arrow-right"></i
												></a>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-6">
									<div
										class="blog-box1 blog-box2 wow fadeInUp"
										data-wow-delay=".4s"
									>
										<div class="item-img">
											<a href="blog2.html"
												><img
													src="img/blog/blog33.jpg"
													alt="blog"
													width="520"
													height="350"
											/></a>
										</div>
										<div class="thumbnail-date">
											<div class="popup-date">
												<span class="day">13</span
												><span class="month">Aug</span>
											</div>
										</div>
										<div class="item-content">
											<div class="entry-meta">
												<ul>
													<li><a href="blog2.html">Building, Room</a></li>
													<li><a href="blog2.html">4 min</a></li>
												</ul>
											</div>
											<div class="heading-title">
												<h3>
													<a href="blog1.html"
														>Develop Relationships With Human Resource</a
													>
												</h3>
											</div>
											<div class="blog-button">
												<a href="blog1.html" class="item-btn"
													>Read More<i class="fas fa-arrow-right"></i
												></a>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-6">
									<div
										class="blog-box1 blog-box2 wow fadeInUp"
										data-wow-delay=".4s"
									>
										<div class="item-img">
											<a href="blog2.html"
												><img
													src="img/blog/blog34.jpg"
													alt="blog"
													width="520"
													height="350"
											/></a>
										</div>
										<div class="thumbnail-date">
											<div class="popup-date">
												<span class="day">13</span
												><span class="month">Aug</span>
											</div>
										</div>
										<div class="item-content">
											<div class="entry-meta">
												<ul>
													<li><a href="blog2.html">Entertainment, Room</a></li>
													<li><a href="blog2.html">3 min</a></li>
												</ul>
											</div>
											<div class="heading-title">
												<h3>
													<a href="blog1.html"
														>Unique Real Estate Marketing: Have A Tent Business
														Card</a
													>
												</h3>
											</div>
											<div class="blog-button">
												<a href="blog1.html" class="item-btn"
													>Read More<i class="fas fa-arrow-right"></i
												></a>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-6">
									<div
										class="blog-box1 blog-box2 wow fadeInUp"
										data-wow-delay=".4s"
									>
										<div class="item-img">
											<a href="blog2.html"
												><img
													src="img/blog/blog29.jpg"
													alt="blog"
													width="520"
													height="350"
											/></a>
										</div>
										<div class="thumbnail-date">
											<div class="popup-date">
												<span class="day">13</span
												><span class="month">Aug</span>
											</div>
										</div>
										<div class="item-content">
											<div class="entry-meta">
												<ul>
													<li><a href="blog2.html">Building, Room</a></li>
													<li><a href="blog2.html">4 min</a></li>
												</ul>
											</div>
											<div class="heading-title">
												<h3>
													<a href="blog1.html"
														>Develop Relationships With Human Resource</a
													>
												</h3>
											</div>
											<div class="blog-button">
												<a href="blog1.html" class="item-btn"
													>Read More<i class="fas fa-arrow-right"></i
												></a>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-md-6">
									<div
										class="blog-box1 blog-box2 wow fadeInUp"
										data-wow-delay=".4s"
									>
										<div class="item-img">
											<a href="blog2.html"
												><img
													src="img/blog/blog30.jpg"
													alt="blog"
													width="520"
													height="350"
											/></a>
										</div>
										<div class="thumbnail-date">
											<div class="popup-date">
												<span class="day">13</span
												><span class="month">Aug</span>
											</div>
										</div>
										<div class="item-content">
											<div class="entry-meta">
												<ul>
													<li><a href="blog2.html">Apartment, Room</a></li>
													<li><a href="blog2.html">5 min</a></li>
												</ul>
											</div>
											<div class="heading-title">
												<h3>
													<a href="blog2.html"
														>How To Do Market Research For to Sell Faster</a
													>
												</h3>
											</div>
											<div class="blog-button">
												<a href="blog2.html" class="item-btn"
													>Read More<i class="fas fa-arrow-right"></i
												></a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="pagination-style-1">
								<ul class="pagination">
									<li class="page-item">
										<a
											class="page-link"
											href="with-sidebar2.html"
											aria-label="Previous"
										>
											<span aria-hidden="true">&laquo;</span>
											<span class="sr-only">Previous</span>
										</a>
									</li>
									<li class="page-item">
										<a class="page-link active" href="with-sidebar2.html">1</a>
									</li>
									<li class="page-item">
										<a class="page-link" href="with-sidebar2.html">2</a>
									</li>
									<li class="page-item">
										<a class="page-link" href="with-sidebar2.html">3</a>
									</li>
									<li class="page-item">
										<a class="page-link" href="with-sidebar2.html">4</a>
									</li>
									<li class="page-item">
										<a
											class="page-link"
											href="with-sidebar2.html"
											aria-label="Next"
										>
											<span aria-hidden="true">&raquo;</span>
											<span class="sr-only">Next</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div class="col-lg-4 widget-break-lg sidebar-widget">
							<div class="widget widget-search-box">
								<h3 class="widget-subtitle">Search</h3>
								<div class="widget-form-box">
									<input
										class="form-control"
										type="text"
										placeholder="What are you looking for?"
									/>
									<div class="item-search"><i class="fas fa-search"></i></div>
								</div>
							</div>
							<div class="widget widget-categoery-box">
								<h3 class="widget-subtitle">Categories</h3>
								<ul class="categoery-list">
									<li>
										<a href="single-listing1.html"
											>Apartments<span class="categoery-count">03</span></a
										>
									</li>
									<li>
										<a href="single-listing1.html"
											>Corporate Building<span class="categoery-count"
												>05</span
											></a
										>
									</li>
									<li>
										<a href="single-listing1.html"
											>Home Land<span class="categoery-count">01</span></a
										>
									</li>
									<li>
										<a href="single-listing1.html"
											>Family House<span class="categoery-count">05</span></a
										>
									</li>
									<li>
										<a href="single-listing1.html"
											>Real Homes<span class="categoery-count">08</span></a
										>
									</li>
									<li>
										<a href="single-listing1.html"
											>Realty Space<span class="categoery-count">09</span></a
										>
									</li>
								</ul>
							</div>
							<div class="widget widget-listing-box1">
								<h3 class="widget-subtitle">Latest Listing</h3>
								<div class="widget-listing">
									<div class="item-img">
										<a href="single-listing1.html"
											><img
												src="img/blog/widget2.jpg"
												alt="widget"
												width="120"
												height="102"
										/></a>
									</div>
									<div class="item-content">
										<h5 class="item-title">
											<a href="single-listing1.html"
												>House Highland Ave Los Angeles</a
											>
										</h5>
										<div class="location-area">
											<i class="flaticon-maps-and-flags"></i>California
										</div>
										<div class="item-price">$3,000<span>/mo</span></div>
									</div>
								</div>
								<div class="widget-listing">
									<div class="item-img">
										<a href="single-listing1.html"
											><img
												src="img/blog/widget3.jpg"
												alt="widget"
												width="120"
												height="102"
										/></a>
									</div>
									<div class="item-content">
										<h5 class="item-title">
											<a href="single-listing1.html"
												>House Highland Ave Los Angeles</a
											>
										</h5>
										<div class="location-area">
											<i class="flaticon-maps-and-flags"></i>California
										</div>
										<div class="item-price">$1,200<span>/mo</span></div>
									</div>
								</div>
								<div class="widget-listing no-brd">
									<div class="item-img">
										<a href="single-agent1.html"
											><img
												src="img/blog/widget4.jpg"
												alt="widget"
												width="120"
												height="102"
										/></a>
									</div>
									<div class="item-content">
										<h5 class="item-title">
											<a href="single-listing1.html"
												>House Highland Ave Los Angeles</a
											>
										</h5>
										<div class="location-area">
											<i class="flaticon-maps-and-flags"></i>California
										</div>
										<div class="item-price">$1,900<span>/mo</span></div>
									</div>
								</div>
							</div>
							<div class="widget widget-taglist">
								<h3 class="widget-subtitle">Popular Tags</h3>
								<ul class="tag-list">
									<li><a href="single-listing1.html">apartment</a></li>
									<li><a href="single-listing1.html">building</a></li>
									<li><a href="single-listing1.html">modern</a></li>
									<li><a href="single-listing1.html">luxarious</a></li>
									<li><a href="single-listing1.html">real estate</a></li>
									<li><a href="single-listing1.html">Villa</a></li>
									<li><a href="single-listing1.html">apartment</a></li>
									<li><a href="single-listing1.html">building</a></li>
									<li><a href="single-listing1.html">modern</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
	

			<section class="newsletter-wrap1">
				<div class="shape-img1">
					<img
						src="img/figure/shape13.png"
						alt="figure"
						width="356"
						height="130"
					/>
				</div>
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-5">
							<div class="newsletter-layout1">
								<div class="item-heading">
									<h2 class="item-title">Sign up for newsletter</h2>
									<h3 class="item-subtitle">Get latest news and update</h3>
								</div>
							</div>
						</div>
						<div class="col-lg-7">
							<div class="newsletter-form">
								<div class="input-group">
									<input
										type="text"
										class="form-control"
										placeholder="Enter e-mail addess"
									/>
									<div class="input-group-append">
										<button class="btn btn-outline-secondary" type="button">
											Subscribe
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<Footer />
		</div>
	);
};

export default Blog;
