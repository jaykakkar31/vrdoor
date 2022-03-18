import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./Blog.css";
const Blog = () => {
	return (
		<div>
			<Navbar />

			{/* <!--=====================================--> */}
			{/* <!--=   Breadcrumb     Start            =--> */}
			{/* <!--=====================================--> */}

			<div class="breadcrumb-wrap">
				<div class="container">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">
								<Link to ="index.html">Home</Link>
							</li>
							<li class="breadcrumb-item active" aria-current="page">
								Blog
							</li>
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
											<Link to ="blog1.html">
												<img
													src="img/blog/blog29.jpg"
													alt="blog"
													width="520"
													height="350"
												/>
											</Link>
										</div>
										<div class="thumbnail-date">
											<div class="popup-date">
												<span class="day">13</span>
												<span class="month">Aug</span>
											</div>
										</div>
										<div class="item-content">
											<div class="entry-meta">
												<ul>
													<li>
														<Link to ="blog2.html">Apartment, Room</Link>
													</li>
													<li>
														<Link to ="blog2.html">5 min</Link>
													</li>
												</ul>
											</div>
											<div class="heading-title">
												<h3>
													<span className="head-blog">
														How To Do Market Research For to Sell Faster
													</span>
												</h3>
											</div>
											<div class="blog-button">
												<Link to ="blog2.html" class="item-btn">
													Read More<i class="fas fa-arrow-right"></i>
												</Link>
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
											<Link to ="blog2.html">
												<img
													src="img/blog/blog30.jpg"
													alt="blog"
													width="520"
													height="350"
												/>
											</Link>
										</div>
										<div class="thumbnail-date">
											<div class="popup-date">
												<span class="day">13</span>
												<span class="month">Aug</span>
											</div>
										</div>
										<div class="item-content">
											<div class="entry-meta">
												<ul>
													<li>
														<Link to ="blog2.html">Building, Room</Link>
													</li>
													<li>
														<Link to ="blog2.html">4 min</Link>
													</li>
												</ul>
											</div>
											<div class="heading-title">
												<h3>
													<span className="head-blog">
														Develop Relationships With Human Resource
													</span>
												</h3>
											</div>
											<div class="blog-button">
												<Link to ="blog1.html" class="item-btn">
													Read More<i class="fas fa-arrow-right"></i>
												</Link>
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
											<Link to ="blog2.html">
												<img
													src="img/blog/blog31.jpg"
													alt="blog"
													width="520"
													height="350"
												/>
											</Link>
										</div>
										<div class="thumbnail-date">
											<div class="popup-date">
												<span class="day">13</span>
												<span class="month">Aug</span>
											</div>
										</div>
										<div class="item-content">
											<div class="entry-meta">
												<ul>
													<li>
														<Link to ="blog2.html">Entertainment, Room</Link>
													</li>
													<li>
														<Link to ="blog2.html">3 min</Link>
													</li>
												</ul>
											</div>
											<div class="heading-title">
												<h3>
													<span className="head-blog">
														Unique Real Estate Marketing: Have A Tent Business
														Card
													</span>
												</h3>
											</div>
											<div class="blog-button">
												<Link to ="blog1.html" class="item-btn">
													Read More<i class="fas fa-arrow-right"></i>
												</Link>
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
											<Link to ="blog2.html">
												<img
													src="img/blog/blog32.jpg"
													alt="blog"
													width="520"
													height="350"
												/>
											</Link>
										</div>
										<div class="thumbnail-date">
											<div class="popup-date">
												<span class="day">13</span>
												<span class="month">Aug</span>
											</div>
										</div>
										<div class="item-content">
											<div class="entry-meta">
												<ul>
													<li>
														<Link to ="blog2.html">Apartment, Room</Link>
													</li>
													<li>
														<Link to ="blog2.html">5 min</Link>
													</li>
												</ul>
											</div>
											<div class="heading-title">
												<h3>
													<span className="head-blog">
														How To Do Market Research For to Sell Faster
													</span>
												</h3>
											</div>
											<div class="blog-button">
												<Link to ="blog2.html" class="item-btn">
													Read More<i class="fas fa-arrow-right"></i>
												</Link>
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
											<Link to ="blog2.html">
												<img
													src="img/blog/blog33.jpg"
													alt="blog"
													width="520"
													height="350"
												/>
											</Link>
										</div>
										<div class="thumbnail-date">
											<div class="popup-date">
												<span class="day">13</span>
												<span class="month">Aug</span>
											</div>
										</div>
										<div class="item-content">
											<div class="entry-meta">
												<ul>
													<li>
														<Link to ="blog2.html">Building, Room</Link>
													</li>
													<li>
														<Link to ="blog2.html">4 min</Link>
													</li>
												</ul>
											</div>
											<div class="heading-title">
												<h3>
													<span className="head-blog">
														Develop Relationships With Human Resource
													</span>
												</h3>
											</div>
											<div class="blog-button">
												<Link to ="blog1.html" class="item-btn">
													Read More<i class="fas fa-arrow-right"></i>
												</Link>
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
											<Link to ="blog2.html">
												<img
													src="img/blog/blog34.jpg"
													alt="blog"
													width="520"
													height="350"
												/>
											</Link>
										</div>
										<div class="thumbnail-date">
											<div class="popup-date">
												<span class="day">13</span>
												<span class="month">Aug</span>
											</div>
										</div>
										<div class="item-content">
											<div class="entry-meta">
												<ul>
													<li>
														<Link to ="blog2.html">Entertainment, Room</Link>
													</li>
													<li>
														<Link to ="blog2.html">3 min</Link>
													</li>
												</ul>
											</div>
											<div class="heading-title">
												<h3>
													<span className="head-blog">
														Unique Real Estate Marketing: Have A Tent Business
														Card
													</span>
												</h3>
											</div>
											<div class="blog-button">
												<Link to ="blog1.html" class="item-btn">
													Read More<i class="fas fa-arrow-right"></i>
												</Link>
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
											<Link to ="blog2.html">
												<img
													src="img/blog/blog29.jpg"
													alt="blog"
													width="520"
													height="350"
												/>
											</Link>
										</div>
										<div class="thumbnail-date">
											<div class="popup-date">
												<span class="day">13</span>
												<span class="month">Aug</span>
											</div>
										</div>
										<div class="item-content">
											<div class="entry-meta">
												<ul>
													<li>
														<Link to ="blog2.html">Building, Room</Link>
													</li>
													<li>
														<Link to ="blog2.html">4 min</Link>
													</li>
												</ul>
											</div>
											<div class="heading-title">
												<h3>
													<span className="head-blog">
														Develop Relationships With Human Resource
													</span>
												</h3>
											</div>
											<div class="blog-button">
												<Link to ="blog1.html" class="item-btn">
													Read More<i class="fas fa-arrow-right"></i>
												</Link>
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
											<Link to ="blog2.html">
												<img
													src="img/blog/blog30.jpg"
													alt="blog"
													width="520"
													height="350"
												/>
											</Link>
										</div>
										<div class="thumbnail-date">
											<div class="popup-date">
												<span class="day">13</span>
												<span class="month">Aug</span>
											</div>
										</div>
										<div class="item-content">
											<div class="entry-meta">
												<ul>
													<li>
														<Link to ="blog2.html">Apartment, Room</Link>
													</li>
													<li>
														<Link to ="blog2.html">5 min</Link>
													</li>
												</ul>
											</div>
											<div class="heading-title">
												<h3>
													<span className="head-blog">
														How To Do Market Research For to Sell Faster
													</span>
												</h3>
											</div>
											<div class="blog-button">
												<Link to ="blog2.html" class="item-btn">
													Read More<i class="fas fa-arrow-right"></i>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="pagination-style-1">
								<ul class="pagination">
									<li class="page-item">
										<Link
											class="page-link"
											href="with-sidebar2.html"
											aria-label="Previous"
										>
											<span aria-hidden="true">&laquo;</span>
											<span class="sr-only">Previous</span>
										</Link>
									</li>
									<li class="page-item">
										<Link class="page-link active" href="with-sidebar2.html">
											1
										</Link>
									</li>
									<li class="page-item">
										<Link class="page-link" href="with-sidebar2.html">
											2
										</Link>
									</li>
									<li class="page-item">
										<Link class="page-link" href="with-sidebar2.html">
											3
										</Link>
									</li>
									<li class="page-item">
										<Link class="page-link" href="with-sidebar2.html">
											4
										</Link>
									</li>
									<li class="page-item">
										<Link
											class="page-link"
											href="with-sidebar2.html"
											aria-label="Next"
										>
											<span aria-hidden="true">&raquo;</span>
											<span class="sr-only">Next</span>
										</Link>
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
									<div class="item-search">
										<i class="fas fa-search"></i>
									</div>
								</div>
							</div>
							<div class="widget widget-categoery-box">
								<h3 class="widget-subtitle">Categories</h3>
								<ul class="categoery-list">
									<li>
										<Link to ="single-listing1.html">
											Apartments<span class="categoery-count">03</span>
										</Link>
									</li>
									<li>
										<Link to ="single-listing1.html">
											Corporate Building<span class="categoery-count">05</span>
										</Link>
									</li>
									<li>
										<Link to ="single-listing1.html">
											Home Land<span class="categoery-count">01</span>
										</Link>
									</li>
									<li>
										<Link to ="single-listing1.html">
											Family House<span class="categoery-count">05</span>
										</Link>
									</li>
									<li>
										<Link to ="single-listing1.html">
											Real Homes<span class="categoery-count">08</span>
										</Link>
									</li>
									<li>
										<Link to ="single-listing1.html">
											Realty Space<span class="categoery-count">09</span>
										</Link>
									</li>
								</ul>
							</div>
							<div class="widget widget-listing-box1">
								<h3 class="widget-subtitle">Latest Listing</h3>
								<div class="widget-listing">
									<div class="item-img">
										<Link to ="single-listing1.html">
											<img
												src="img/blog/widget2.jpg"
												alt="widget"
												width="120"
												height="102"
											/>
										</Link>
									</div>
									<div class="item-content">
										<h5 class="item-title">
											<Link to ="single-listing1.html">
												House Highland Ave Los Angeles
											</Link>
										</h5>
										<div class="location-area">
											<i class="flaticon-maps-and-flags"></i>California
										</div>
										<div class="item-price">
											$3,000<span>/mo</span>
										</div>
									</div>
								</div>
								<div class="widget-listing">
									<div class="item-img">
										<Link to ="single-listing1.html">
											<img
												src="img/blog/widget3.jpg"
												alt="widget"
												width="120"
												height="102"
											/>
										</Link>
									</div>
									<div class="item-content">
										<h5 class="item-title">
											<Link to ="single-listing1.html">
												House Highland Ave Los Angeles
											</Link>
										</h5>
										<div class="location-area">
											<i class="flaticon-maps-and-flags"></i>California
										</div>
										<div class="item-price">
											$1,200<span>/mo</span>
										</div>
									</div>
								</div>
								<div class="widget-listing no-brd">
									<div class="item-img">
										<Link to ="single-agent1.html">
											<img
												src="img/blog/widget4.jpg"
												alt="widget"
												width="120"
												height="102"
											/>
										</Link>
									</div>
									<div class="item-content">
										<h5 class="item-title">
											<Link to ="single-listing1.html">
												House Highland Ave Los Angeles
											</Link>
										</h5>
										<div class="location-area">
											<i class="flaticon-maps-and-flags"></i>California
										</div>
										<div class="item-price">
											$1,900<span>/mo</span>
										</div>
									</div>
								</div>
							</div>
							<div class="widget widget-taglist">
								<h3 class="widget-subtitle">Popular Tags</h3>
								<ul class="tag-list">
									<li>
										<Link to ="single-listing1.html">apartment</Link>
									</li>
									<li>
										<Link to ="single-listing1.html">building</Link>
									</li>
									<li>
										<Link to ="single-listing1.html">modern</Link>
									</li>
									<li>
										<Link to ="single-listing1.html">luxarious</Link>
									</li>
									<li>
										<Link to ="single-listing1.html">real estate</Link>
									</li>
									<li>
										<Link to ="single-listing1.html">Villa</Link>
									</li>
									<li>
										<Link to ="single-listing1.html">apartment</Link>
									</li>
									<li>
										<Link to ="single-listing1.html">building</Link>
									</li>
									<li>
										<Link to ="single-listing1.html">modern</Link>
									</li>
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
