import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'

const Contact = () => {
  return (
 <div><Navbar/>
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
							<li class="breadcrumb-item active" aria-current="page">
								Contact Page
							</li>
						</ol>
					</nav>
				</div>
			</div>
			{/* <!--=====================================--> */}
			{/* <!--=   contact    Start                =--> */}
			{/* <!--=====================================--> */}

			<section class="contact-wrap">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="contact-box1">
								<div class="contact-img">
									<img
										src="img/blog/contact1.jpg"
										alt="contact"
										height="502"
										width="607"
									/>
								</div>
								<div class="contact-content">
									<h3 class="contact-title">Office Information</h3>
									<div class="contact-list">
										<ul>
											<li>VRDOOR Real Estate Agency</li>
											<li>Indra vihar</li>
											<li>Delhi- 110009</li>
											
										</ul>
									</div>
									<div class="phone-box">
										<div class="item-lebel">Emergency Call :</div>
										<div class="phone-number">+91 8826024495</div>
										<div class="item-icon">
											<i class="fas fa-phone-alt"></i>
										</div>
									</div>
									<div class="social-box">
										<div class="item-lebel">Social Share :</div>
										<ul class="item-social">
											<li>
												<a href="https://www.facebook.com/" target="_blank"  rel="noreferrer" >
													<i class="fab fa-facebook-f"></i
												></a>
											</li>
											<li>
												<a href="https://twitter.com/" target="_blank"  rel="noreferrer">
													<i class="fab fa-twitter"></i
												></a>
											</li>
											<li>
												<a href="https://vimeo.com/" target="_blank"  rel="noreferrer">
													<i class="fab fa-vimeo-v"></i
												></a>
											</li>
											<li>
												<a href="https://www.pinterest.com/" target="_blank"  rel="noreferrer">
													<i class="fab fa-pinterest-p"></i
												></a>
											</li>
											<li>
												<a href="https://web.whatsapp.com/" target="_blank"  rel="noreferrer">
													<i class="fab fa-whatsapp"></i
												></a>
											</li>
										</ul>
										<div class="item-icon">
											<i class="fas fa-share-alt"></i>
										</div>
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="contact-box2">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6998.823767550665!2d77.21048107384051!3d28.707234379553313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfde65a68e83b%3A0xb63f7396b9658b6!2sIndra%20Vihar%2C%20Mukherjee%20Nagar%2C%20Delhi%2C%20110009!5e0!3m2!1sen!2sin!4v1647420906004!5m2!1sen!2sin"
									width="600"
                                    title='map'
									height="550"
									style={{border: "0"}}
									allowfullscreen=""
									loading="lazy"
								></iframe>
								<div class="contact-content">
									<h3 class="contact-title">Quick Contact</h3>
									<p>
										Contact for quick resolution of your doubts
									</p>
									<form class="contact-box rt-contact-form">
										<div class="row">
											<div class="form-group col-lg-6">
												<label>Name *</label>
												<input
													type="text"
													class="form-control"
													name="fname"
													placeholder="First Name*"
													data-error="First Name is required"
													required
												/>
												<div class="help-block with-errors"></div>
											</div>
											<div class="form-group col-lg-6">
												<label>Phone *</label>
												<input
													type="text"
													class="form-control"
													name="phone"
													placeholder="Phone*"
													data-error="Phone is required"
													required
												/>
												<div class="help-block with-errors"></div>
											</div>
											<div class="form-group col-lg-12">
												<label>Message *</label>
												<textarea
													name="comment"
													id="message"
													class="form-text"
													placeholder="Message"
													cols="30"
													rows="5"
													data-error="Message Name is required"
													required
												></textarea>
												<div class="help-block with-errors"></div>
											</div>
											<div class="form-group col-lg-12">
												<button type="submit" class="item-btn">
													Send message
												</button>
											</div>
										</div>
										<div class="form-response"></div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

 <Footer/></div>
  )
}

export default Contact