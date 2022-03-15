import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "./about.css"
const About = () => {
	return (
		<div>
			<Navbar />
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
			{/* <!--=====================================--> */}
			{/* <!--=   Breadcrumb     Start            =--> */}
			{/* <!--=====================================--> */}

			<div class="breadcrumb-wrap breadcrumb-wrap-2">
				<div class="container">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">
								<a href="index.html">Home</a>
							</li>
							<li class="breadcrumb-item active" aria-current="page">
								About Us
							</li>
						</ol>
					</nav>
				</div>
			</div>
			{/* <!--=====================================--> */}
			{/* <!--=   About     Start                 =--> */}
			{/* <!--=====================================--> */}

			<section class="about-wrap2">
				<div class="container">
					<div class="row flex-row-reverse flex-lg-row">
						<div class="col-xl-6 col-lg-6">
							<div class="about-img">
								<img
									src="img/blog/about8.jpg"
									alt="about"
									width="746"
									height="587"
								/>
							</div>
						</div>
						<div class="col-xl-6 col-lg-6">
							<div class="about-box3 wow fadeInUp" data-wow-delay=".2s">
								<span class="item-subtitle">About Us</span>
								<h2 class="item-title">
									We're on a Mission to Change View of RealEstate Field.
								</h2>
								<p>
									VRDOOR is a unique digital platform which offers 360 degree
									view solution to our customers for all their property needs.
									The portal is completely devoted to meet every requirement of
									the customer.
								</p>
								<div class="row">
									<div class="col-lg-6 col-md-6 col-sm-6">
										<div class="about-layout1">
											<div class="item-img">
												<img
													src="img/figure/shape14.svg"
													alt="shape"
													width="60"
													height="57"
												/>
											</div>
											<h3 class="item-sm-title">Modern Villa</h3>
											<p>
												we provide credible information with maximum properties
											</p>
										</div>
									</div>
									<div class="col-lg-6 col-md-6 col-sm-6">
										<div class="about-layout1">
											<div class="item-img">
												<img
													src="img/figure/shape15.svg"
													alt="shape"
													width="62"
													height="57"
												/>
											</div>
											<h3 class="item-sm-title">Secure Payment</h3>
											<p>a robust search mechanism with secured systems</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row flex-row flex-lg-row-reverse">
						<div class="col-xl-6 col-lg-6">
							<div class="about-layout3">
								<div class="item-img">
									<img
										src="img/blog/about9.jpg"
										alt="about"
										width="809"
										height="587"
									/>
									<div class="play-button">
										<div class="item-icon">
											<a
												href="http://www.youtube.com/watch?v=1iIZeIy7TqM"
												class="play-btn play-btn-big"
											>
												<span class="play-icon style-2">
													<i class="fas fa-play"></i>
												</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-6 col-lg-6">
							<div class="about-layout2">
								<span class="item-subtitle">Company Power</span>
								<h2 class="item-title">
									The Core Company Values Of Our main Goal.
								</h2>
								<p>
									We are not only focused to provide buy, sell and rent details
									but also help customers in post and pre buying the property.
								</p>
								<div class="skills-wrap-layout-2 counter-appear">
									<div class="single-skill">
										<div class="title-bar">
											<h4 class="title">Modern Technology</h4>
										</div>
										<div class="skill-bar">
											<div class="skill-per" data-per="59"></div>
										</div>
									</div>

									<div class="single-skill">
										<div class="title-bar">
											<h4 class="title">Tax Solution Area</h4>
										</div>
										<div class="skill-bar">
											<div class="skill-per" data-per="79"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!--=====================================--> */}
			{/* <!--=   Property Banner     Start       =--> */}
			{/* <!--=====================================--> */}

			<section
				class="property-banner-wrap1 parallaxie"
				data-bg-image="img/banner/banner3.jpg"
			>
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-5 col-md-12">
							<div class="property-box1 wow slideInUp" data-wow-delay="100">
								<div class="item-subtitle">Let’s Take a Tour</div>
								<h2 class="item-title">
									Search Property Smarter, Quicker & Anywhere
								</h2>
								<div class="play-button">
									<div class="item-icon">
										<a href="http://www.youtube.com/" class="play-btn">
											<span class="play-icon style-1">
												<i class="fas fa-play"></i>
											</span>
											<span class="play-text">Watch Video</span>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-7 col-md-12">
							<div class="property-img wow fadeInUp" data-wow-delay="100">
								<div class="bg-title-wrap" style={{ display: "block" }}>
									<span class="background-title solid">Property For All</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!--=====================================--> */}
			{/* <!--=   Team     Start                  =--> */}
			{/* <!--=====================================--> */}

			<section class="team-wrap1 team-wrap2">
				<div class="container">
					<div class="item-heading-center mb-20">
						<span class="section-subtitle">Expertise Is Here</span>
						<h2 class="section-title">Our Exclusive Team</h2>
						<div class="bg-title-wrap" style={{ display: "block" }}>
							<span class="background-title solid">Our Team</span>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-3 col-md-6 col-sm-6">
							<div
								class="team-box1 team-box2 wow fadeInUp"
								data-wow-delay=".6s"
							>
								<div class="item-img">
									<a href="agent-lists1.html">
										<img
											src="img/team/team21.jpg"
											alt="team"
											height="240"
											width="240"
											style={{ height: "240px", width: "240px" }}
										/>
									</a>
									<ul class="team-social-1">
										<li class="social-item">
											<a
												href="https://radiustheme.com/"
												target="_blank"
												rel="noreferrer"
												class="social-hover-icon social-link"
											>
												<i class="fas fa-share-alt"></i>
											</a>
											<ul class="team-social-dropdown">
												<li class="social-item">
													<a
														href="https://www.facebook.com/"
														target="_blank"
														rel="noreferrer"
														class="social-link"
													>
														<i class="fab fa-facebook-f"></i>
													</a>
												</li>
												<li class="social-item">
													<a
														href="https://twitter.com/"
														target="_blank"
														rel="noreferrer"
														class="social-link"
													>
														<i class="fab fa-twitter"></i>
													</a>
												</li>
												<li class="social-item">
													<a
														href="https://www.linkedin.com/"
														target="_blank"
														rel="noreferrer"
														class="social-link"
													>
														<i class="fab fa-linkedin-in"></i>
													</a>
												</li>
											</ul>
										</li>
									</ul>
									{/* <div class="category-box">
										<div class="item-category">
											<a href="single-agent1.html"></a>
										</div>
									</div> */}
								</div>
								<div class="item-content">
									<div class="item-title">
										<h3>
											<a href="agent-lists1.html">Chirag Seth</a>
										</h3>
										{/* <h4 class="item-subtitle">
											<a href="agency-lists1.html">Sunshine</a>
										</h4> */}
									</div>
									{/* <div class="item-contact">
										<div class="item-icon">
											<i class="fas fa-phone-alt"></i>
										</div>
										<div class="item-phn-no">Call: +123 699 7700</div>
									</div> */}
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6 col-sm-6">
							<div
								class="team-box1 team-box2 wow fadeInUp"
								data-wow-delay=".4s"
							>
								<div class="item-img">
									<a href="agent-lists1.html">
										<img
											src="img/team/team22.jpeg"
											alt="team"
											height="240"
											style={{ height: "240px", width: "240px" }}
											width="240"
										/>
									</a>
									<ul class="team-social-1">
										<li class="social-item">
											<a
												href="https://radiustheme.com/"
												target="_blank"
												rel="noreferrer"
												class="social-hover-icon social-link"
											>
												<i class="fas fa-share-alt"></i>
											</a>
											<ul class="team-social-dropdown">
												<li class="social-item">
													<a
														href="https://www.facebook.com/"
														target="_blank"
														rel="noreferrer"
														class="social-link"
													>
														<i class="fab fa-facebook-f"></i>
													</a>
												</li>
												<li class="social-item">
													<a
														href="https://twitter.com/"
														target="_blank"
														rel="noreferrer"
														class="social-link"
													>
														<i class="fab fa-twitter"></i>
													</a>
												</li>
												<li class="social-item">
													<a
														href="https://www.linkedin.com/"
														target="_blank"
														rel="noreferrer"
														class="social-link"
													>
														<i class="fab fa-linkedin-in"></i>
													</a>
												</li>
											</ul>
										</li>
									</ul>
									<div class="category-box">
										<div class="item-category">
											<a href="single-agent1.html">05 Listings</a>
										</div>
									</div>
								</div>
								<div class="item-content">
									<div class="item-title">
										<h3>
											<a href="agent-lists1.html">Polly Matzinger</a>
										</h3>
										<h4 class="item-subtitle">
											<a href="agency-lists1.html">Sweet Home</a>
										</h4>
									</div>
									<div class="item-contact">
										<div class="item-icon">
											<i class="fas fa-phone-alt"></i>
										</div>
										<div class="item-phn-no">Call: +123 699 7700</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6 col-sm-6">
							<div
								class="team-box1 team-box2 wow fadeInUp"
								data-wow-delay=".2s"
							>
								<div class="item-img">
									<a href="agent-lists1.html">
										<img
											src="img/team/team23.jpeg"
											alt="team"
											height="240"
											width="240"
											style={{ height: "240px", width: "240px" }}
										/>
									</a>
									<ul class="team-social-1">
										<li class="social-item">
											<a
												href="https://radiustheme.com/"
												target="_blank"
												rel="noreferrer"
												class="social-hover-icon social-link"
											>
												<i class="fas fa-share-alt"></i>
											</a>
											<ul class="team-social-dropdown">
												<li class="social-item">
													<a
														href="https://www.facebook.com/"
														target="_blank"
														rel="noreferrer"
														class="social-link"
													>
														<i class="fab fa-facebook-f"></i>
													</a>
												</li>
												<li class="social-item">
													<a
														href="https://twitter.com/"
														target="_blank"
														rel="noreferrer"
														class="social-link"
													>
														<i class="fab fa-twitter"></i>
													</a>
												</li>
												<li class="social-item">
													<a
														href="https://www.linkedin.com/"
														target="_blank"
														rel="noreferrer"
														class="social-link"
													>
														<i class="fab fa-linkedin-in"></i>
													</a>
												</li>
											</ul>
										</li>
									</ul>
									<div class="category-box">
										<div class="item-category">
											<a href="single-agent1.html">11 Listings</a>
										</div>
									</div>
								</div>
								<div class="item-content">
									<div class="item-title">
										<h3>
											<a href="agent-lists1.html">Patty Watson</a>
										</h3>
										<h4 class="item-subtitle">
											<a href="agency-lists1.html">Eco Builders</a>
										</h4>
									</div>
									<div class="item-contact">
										<div class="item-icon">
											<i class="fas fa-phone-alt"></i>
										</div>
										<div class="item-phn-no">Call: +123 699 7700</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6 col-sm-6">
							<div
								class="team-box1 team-box2 wow fadeInUp"
								data-wow-delay=".2s"
							>
								<div class="item-img">
									<a href="agent-lists1.html">
										<img
											src="img/team/team23.jpeg"
											alt="team"
											height="240"
											width="240"
											style={{ height: "240px", width: "240px" }}
										/>
									</a>
									<ul class="team-social-1">
										<li class="social-item">
											<a
												href="https://radiustheme.com/"
												target="_blank"
												rel="noreferrer"
												class="social-hover-icon social-link"
											>
												<i class="fas fa-share-alt"></i>
											</a>
											<ul class="team-social-dropdown">
												<li class="social-item">
													<a
														href="https://www.facebook.com/"
														target="_blank"
														rel="noreferrer"
														class="social-link"
													>
														<i class="fab fa-facebook-f"></i>
													</a>
												</li>
												<li class="social-item">
													<a
														href="https://twitter.com/"
														target="_blank"
														rel="noreferrer"
														class="social-link"
													>
														<i class="fab fa-twitter"></i>
													</a>
												</li>
												<li class="social-item">
													<a
														href="https://www.linkedin.com/"
														target="_blank"
														rel="noreferrer"
														class="social-link"
													>
														<i class="fab fa-linkedin-in"></i>
													</a>
												</li>
											</ul>
										</li>
									</ul>
									<div class="category-box">
										<div class="item-category">
											<a href="single-agent1.html">06 Listings</a>
										</div>
									</div>
								</div>
								<div class="item-content">
									<div class="item-title">
										<h3>
											<a href="agent-lists1.html">Andren Willium</a>
										</h3>
										<h4 class="item-subtitle">
											<a href="agency-lists1.html">Sarah Boysen</a>
										</h4>
									</div>
									<div class="item-contact">
										<div class="item-icon">
											<i class="fas fa-phone-alt"></i>
										</div>
										<div class="item-phn-no">Call: +123 699 7700</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div class="brand-wrap1 brand-wrap2">
				<div class="container">
					<div class="brand-layout swiper-container">
						<Swiper
							autoplay={{
								delay: 3000,
								disableOnInteraction: false,
							}}
							slidesPerView={4}
							spaceBetween={40}
							centeredSlides={true}
							loop={true}
							modules={[Autoplay]}
							class="swiper-wrapper"
						>
							<SwiperSlide class="swiper-slide">
								<div class="brand-box2 wow fadeInUp" data-wow-delay=".4s">
									<div class="item-img">
										<a href="index.html">
											<img src="img/brand/brand1.svg" alt="brand" />
										</a>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide class="swiper-slide">
								<div class="brand-box2 wow fadeInUp" data-wow-delay=".4s">
									<div class="item-img">
										<a href="index.html">
											<img src="img/brand/brand2.svg" alt="brand" />
										</a>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide class="swiper-slide">
								<div class="brand-box2 wow fadeInUp" data-wow-delay=".4s">
									<div class="item-img">
										<a href="index.html">
											<img src="img/brand/brand3.svg" alt="brand" />
										</a>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide class="swiper-slide">
								<div class="brand-box2 wow fadeInUp" data-wow-delay=".4s">
									<div class="item-img">
										<a href="index.html">
											<img src="img/brand/brand4.svg" alt="brand" />
										</a>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide class="swiper-slide">
								<div class="brand-box2 wow fadeInUp" data-wow-delay=".4s">
									<div class="item-img">
										<a href="index.html">
											<img src="img/brand/brand5.svg" alt="brand" />
										</a>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide class="swiper-slide">
								<div class="brand-box2 wow fadeInUp" data-wow-delay=".4s">
									<div class="item-img">
										<a href="index.html">
											<img src="img/brand/brand6.svg" alt="brand" />
										</a>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide class="swiper-slide">
								<div class="brand-box2 wow fadeInUp" data-wow-delay=".4s">
									<div class="item-img">
										<a href="index.html">
											<img src="img/brand/brand1.svg" alt="brand" />
										</a>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide class="swiper-slide">
								<div class="brand-box2 wow fadeInUp" data-wow-delay=".4s">
									<div class="item-img">
										<a href="index.html">
											<img src="img/brand/brand2.svg" alt="brand" />
										</a>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide class="swiper-slide">
								<div class="brand-box2 wow fadeInUp" data-wow-delay=".4s">
									<div class="item-img">
										<a href="index.html">
											<img src="img/brand/brand3.svg" alt="brand" />
										</a>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide class="swiper-slide">
								<div class="brand-box2 wow fadeInUp" data-wow-delay=".4s">
									<div class="item-img">
										<a href="index.html">
											<img src="img/brand/brand4.svg" alt="brand" />
										</a>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide class="swiper-slide">
								<div class="brand-box2 wow fadeInUp" data-wow-delay=".4s">
									<div class="item-img">
										<a href="index.html">
											<img src="img/brand/brand5.svg" alt="brand" />
										</a>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide class="swiper-slide">
								<div class="brand-box2 wow fadeInUp" data-wow-delay=".4s">
									<div class="item-img">
										<a href="index.html">
											<img src="img/brand/brand6.svg" alt="brand" />
										</a>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide class="swiper-slide">
								<div class="brand-box2 wow fadeInUp" data-wow-delay=".4s">
									<div class="item-img">
										<a href="index.html">
											<img src="img/brand/brand1.svg" alt="brand" />
										</a>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide class="swiper-slide">
								<div class="brand-box2 wow fadeInUp" data-wow-delay=".4s">
									<div class="item-img">
										<a href="index.html">
											<img src="img/brand/brand2.svg" alt="brand" />
										</a>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>

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

export default About;
