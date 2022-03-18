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
					<Link to="/">
						<img src="img/logo.svg" alt="logo" class="img-fluid" />
					</Link>
					<div class="mean-bar--right">
						<div class="actions search">
							<Link  to="#template-search" class="item-icon" title="Search">
								<i class="fas fa-search"></i>
							</Link>
						</div>
						<div class="actions user">
							<Link  to="/profile"><i class="flaticon-user"></i></Link>
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
									<Link  class="animation" to="index.html">Home</Link>
									<ul class="main-menu__dropdown sub-menu">
										<li><Link  to="/">Home</Link></li>
										
									</ul>
								</li>
								<li class="list menu-item-parent menu-item-has-children">
									<Link  class="animation" to="with-sidebar2.html">Listing</Link>
									<ul class="main-menu__dropdown sub-menu">
										<li>
											<Link  to="half-map1.html">Properties Map Grid</Link>
										</li>
										<li>
											<Link  to="half-map2.html">Properties Map List</Link>
										</li>
										<li>
											<Link  to="without-sidebar.html">Properties Full Width</Link>
										</li>
										<li>
											<Link  to="with-sidebar.html">Properties Grid</Link>
										</li>
										<li>
											<Link  to="single-listing1.html">Single Property 1</Link>
										</li>
										<li>
											<Link  to="single-listing2.html">Single Property 2</Link>
										</li>
										<li>
											<Link  to="single-listing3.html">Single Property 3</Link>
										</li>
									</ul>
								</li>
								<li class="list menu-item-parent menu-item-has-children">
									<Link  class="animation" to="index.html">Pages</Link>
									<ul class="main-menu__dropdown sub-menu">
										<li>
											<Link 
												to="https://www.radiustheme.com/demo/html/homlisti/about.html"
												>About Us</Link>
										</li>
										<li><Link  to="404.html">Error page</Link></li>
										<li>
											<Link  to="with-sidebar.html">Properties Grid</Link>
										</li>
										<li>
											<Link  to="without-sidebar.html">Properties Full Width</Link>
										</li>
										<li>
											<Link  to="single-agency1.html">Single Agency page</Link>
										</li>
										<li><Link  to="single-agent1.html">Single-agent page</Link></li>
										<li><Link  to="pricing-1.html">Pricing page</Link></li>
									</ul>
								</li>
								<li class="list menu-item-parent menu-item-has-children">
									<Link  class="animation" to="index.html">Blog</Link>
									<ul class="main-menu__dropdown sub-menu">
										<li><Link  to="blog1.html">Blog 1</Link></li>
										<li><Link  to="blog2.html">Blog 2</Link></li>
										<li><Link  to="blog-details1.html">Blog Details Page</Link></li>
									</ul>
								</li>
								<li class="list menu-item-parent menu-item-has-children">
									<Link  class="animation" to="index.html">Agents</Link>
									<ul class="main-menu__dropdown sub-menu">
										<li><Link  to="agency-lists1.html">Agency List page</Link></li>
										<li><Link  to="agent-lists1.html">Agent List Page</Link></li>
										<li>
											<Link  to="agent-reviews1.html">Agent Reviews Page</Link>
										</li>
									</ul>
								</li>
								<li class="list menu-item-parent">
									<Link  class="animation" to="contact.html">Contact us</Link>
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
							<li class="breadcrumb-item"><Link  to="index.html">Home</Link></li>
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
												<Link  to="https://www.facebook.com/" target="_blank"  rel="noreferrer" >
													<i class="fab fa-facebook-f"></i
												></Link>
											</li>
											<li>
												<Link  to="https://twitter.com/" target="_blank"  rel="noreferrer">
													<i class="fab fa-twitter"></i
												></Link>
											</li>
											<li>
												<Link  to="https://vimeo.com/" target="_blank"  rel="noreferrer">
													<i class="fab fa-vimeo-v"></i
												></Link>
											</li>
											<li>
												<Link  to="https://www.pinterest.com/" target="_blank"  rel="noreferrer">
													<i class="fab fa-pinterest-p"></i
												></Link>
											</li>
											<li>
												<Link  to="https://web.whatsapp.com/" target="_blank"  rel="noreferrer">
													<i class="fab fa-whatsapp"></i
												></Link>
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