import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ScrollButton from "../scrollToTop";
const BlogDetail = () => {
	const [scrollState, setScrollState] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", (e) => {
			var scroll = window.pageYOffset;
			if (scroll <= 100) {
				setScrollState(false);
			} else {
				setScrollState(true);
			}
		});
	});
	return (
		<div>
			<Navbar />

			<div
				class="rt-header-menu mean-container position-relative"
				id="meanmenu"
			>
				<div class="mean-bar">
					<Link to="/">
						<img src="img/logo.svg" alt="logo" class="img-fluid" />
					</Link>
					<div class="mean-bar--right">
						<div class="actions search">
							<Link to="#template-search" class="item-icon" title="Search">
								<i class="fas fa-search"></i>
							</Link>
						</div>
						<div class="actions user">
							<Link to="/profile">
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
			</div>
			<div class="breadcrumb-wrap">
				<div class="container">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">
								<Link to="/">Home</Link>
							</li>
							<li class="breadcrumb-item active" aria-current="page">
								Blogs
							</li>
						</ol>
					</nav>
				</div>
			</div>

			<section class="blog-wrap6">
				<div class="container">
					<div class="row gutters-40">
						<div class="col-lg-8">
							<div class="row">
								<div class="col-lg-12">
									<div
										class="blog-box1 blog-box3 wow fadeInUp"
										data-wow-delay=".4s"
									>
										<div class="item-img img-style-3">
											<Link to="/blog">
												<img
													src="img/blog/blog23.jpg"
													alt="blog"
													width="739"
													height="399"
												/>
											</Link>
										</div>
										<div class="item-content">
											<div class="entry-meta">
												<ul>
													<li class="theme-cat">
														<Link to="/blog">
															<img
																src="img/theme1.png"
																alt="theme"
																width="31"
																height="31"
															/>
															by radiustheme
														</Link>
													</li>
													<li class="calendar-icon">
														<Link to="/blog">
															<i class="far fa-calendar-alt"></i>February 28,
															2020
														</Link>
													</li>
													<li>
														<Link to="/blogdetail">Apartment, Room</Link>
													</li>
													<li>
														<Link to="/blogdetail">5 mins</Link>
													</li>
												</ul>
											</div>
											<div class="heading-title title-style-2">
												<h3>
													<Link to="/blogdetail">
														How To Do Market Research For to Sell Faster
													</Link>
												</h3>
												<p>
													Duis facilisis nibh qua sitamet
													interdtellsaesollicitudin tempor. Curabitur aliquis
													nibhquamamet intey rdum. when an unknown printer took
													a galley of type and scrambled it to make a type
													specimen are book has survived not only five
													centuries.Lorem ipsum dosectetur adipisicing elit, sed
													do.follow thing ipsum dolor sit amet, consectetur
													Nulla fringilla purus at leo dignissim congue. Mauris
													elementum accumsan leo vel te.sectetur Nulla
													fringillaey.
												</p>
											</div>
											<div class="quotation-style">
												<blockquote class="item-quotation">
													“ It was popularised in the 1960s with the release
													circumstances occur in which toil and pain can procure
													him some great pleasur To take atrivial example, which
													of us Nam libero tempore ”
												</blockquote>
											</div>
											<p class="style-2">
												Duis facilisis nibh qua sitamet
												interdtellsaesollicitudin tempor. Curabitur aliquis
												nibhquamamet intey rdum. when an unknown printer took a
												galley of type and scrambled it to make a type specimen
												are book has survived not only five centuries.Lorem
												ipsum dosectetur adipisicing elit, sed do.follow thing
												ipsum dolor sit amet, consectetur Nulla fringilla purus
												at leo dignissim congue. Mauris elementum accumsan leo
												vel te.sectetur Nulla fringillaey.
											</p>
											<div class="row gutters-10">
												<div class="col-lg-6 col-md-6 col-sm-6">
													<div class="single-blog-img">
														<img
															src="img/blog/blog26.jpg"
															alt="blog"
															width="363"
															height="240"
														/>
													</div>
												</div>
												<div class="col-lg-6 col-md-6 col-sm-6">
													<div class="single-blog-img">
														<img
															src="img/blog/blog27.jpg"
															alt="blog"
															width="363"
															height="240"
														/>
													</div>
												</div>
												<div class="col-lg-12">
													<div class="single-blog-img single-blog-img2">
														<img
															src="img/blog/blog28.jpg"
															alt="blog"
															width="739"
															height="370"
														/>
													</div>
												</div>
											</div>
											<div class="heading-title title-style-2">
												<h3>
													<Link to="/blogdetail">
														12 Walkable Cities Where You Can Live Affordably
													</Link>
												</h3>
												<p class="style-3">
													when an unknown printer took a galley of type and
													scrambled it to make a type specimen bookItea has
													survived not only five centuries, but also the leap
													into electronic typesetting, remaining essen tially
													unchanged.printer took a galley of type and scrambled
													it to make a type specimen bookh as survived not only
													five.
												</p>
											</div>
											<div class="single-blog-list">
												<ul>
													<li>Affordable housing</li>
													<li>List of housing statutes</li>
													<li>List of human habitation forms</li>
												</ul>
											</div>
											<p class="style-2 style-4">
												when an unknown printer took a galley of type and
												scrambled it to make a type specimen bookItea has
												survived not only five centuries, but also the leap into
												electronic typesetting, remaining essen tially
												unchanged.printer took a galley of type and scrambled it
												to make a type specimen bookh as survived not only five.
											</p>
										</div>
									</div>
								</div>
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
										<Link to="/blogdetail">
											Apartments<span class="categoery-count">03</span>
										</Link>
									</li>
									<li>
										<Link to="/blogdetail">
											Corporate Building
											<span class="categoery-count">05</span>
										</Link>
									</li>
									<li>
										<Link to="/blogdetail">
											Home Land<span class="categoery-count">01</span>
										</Link>
									</li>
									<li>
										<Link to="/blogdetail">
											Family House<span class="categoery-count">05</span>
										</Link>
									</li>
									<li>
										<Link to="/blogdetail">
											Real Homes<span class="categoery-count">08</span>
										</Link>
									</li>
									<li>
										<Link to="/blogdetail">
											Realty Space<span class="categoery-count">09</span>
										</Link>
									</li>
								</ul>
							</div>
							<div class="widget widget-listing-box1">
								<h3 class="widget-subtitle">Latest Listing</h3>
								<div class="widget-listing">
									<div class="item-img">
										<Link to="/blogdetail">
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
											<Link to="/blogdetail">
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
										<Link to="/blogdetail">
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
											<Link to="/blogdetail">
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
										<Link to="/">
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
											<Link to="/blogdetail">
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
										<Link to="/blogdetail">apartment</Link>
									</li>
									<li>
										<Link to="/blogdetail">building</Link>
									</li>
									<li>
										<Link to="/blogdetail">modern</Link>
									</li>
									<li>
										<Link to="/blogdetail">luxarious</Link>
									</li>
									<li>
										<Link to="/blogdetail">real estate</Link>
									</li>
									<li>
										<Link to="/blogdetail">Villa</Link>
									</li>
									<li>
										<Link to="/blogdetail">apartment</Link>
									</li>
									<li>
										<Link to="/blogdetail">building</Link>
									</li>
									<li>
										<Link to="/blogdetail">modern</Link>
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
						<div class="col-xl-5 col-lg-6">
							<div class="newsletter-layout1">
								<div class="item-heading">
									<h2 class="item-title">Sign up for newsletter </h2>
									<h3 class="item-subtitle">Get latest news and update</h3>
								</div>
							</div>
						</div>
						<div class="col-xl-7 col-lg-6">
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
			<ScrollButton scrollState={scrollState} />

			<Footer />
		</div>
	);
};
export default BlogDetail;
