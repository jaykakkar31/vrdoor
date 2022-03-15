import React, {useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useDispatch } from "react-redux";
import { userRgister } from "../../store/actions/userActions";




const SignUp = () => {

    const [details, setDetails] = useState({
    name:"",
    email:"",
    phoneno:"",
    dob:"",
    userpass:"",
    confirmpass:""
    });
    const dispatch = useDispatch();
	

	const signUpHandle = (e) => {
		e.preventDefault();
		console.log(details);
		dispatch(userRgister(details));
	};



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
			<div class="breadcrumb-wrap">
				<div class="container">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">
								<a href="index.html">Home</a>
							</li>
							<li class="breadcrumb-item active" aria-current="page">
								My Account
							</li>
						</ol>
					</nav>
				</div>
			</div>

			<main class="site-main content-area">
				<div class="container">
					<div class="row">
						<div class="col-lg-12 col-sm-12 col-12">
							<div class="page-content-block">
								<div class="col-md-12 rtcl-login-form-wrap">
									<h2>Sign Up</h2>

									<form
										id="rtcl-signup-form"
										class="form-horizontal"
										method="post"
										novalidate="novalidate"
										onSubmit={signUpHandle}
									>
										<div class="form-group">
											<label for="name" class="control-label">
												Name
												<strong class="rtcl-required">*</strong>
											</label>
											<input
												type="text"
												name="name"
												id="name"
												class="form-control"
												required=""
												value={details.name}
												onChange={(e) => {
													setDetails((prev) => {
														return { ...prev, name: e.target.value };
													});
												}}
											/>
										</div>

										<div class="form-group">
											<label for="email" class="control-label">
												Email
												<strong class="rtcl-required">*</strong>
											</label>
											<input
												type="email"
												name="email"
												id="email"
												class="form-control"
												required=""
												value={details.email}
												onChange={(e) => {
													setDetails((prev) => {
														return { ...prev, email: e.target.value };
													});
												}}
											/>
										</div>

										<div class="form-group">
											<label for="phoneno" class="control-label">
												Phone Number <strong class="rtcl-required">*</strong>
											</label>
											<input
												type="tel"
												name="phoneno"
												id="phoneno"
												class="form-control"
												required=""
												value={details.phoneno}
												onChange={(e) => {
													setDetails((prev) => {
														return { ...prev, phoneno: e.target.value };
													});
												}}
											/>
										</div>

										<div>
											<label for="gender" class="control-label">
												Gender <strong class="rtcl-required">*</strong>
											</label>
										</div>
										<div class="form-check form-check-inline">
											<input type="radio" value="Male" name="gender" /> Male
										</div>
										<div class="form-check form-check-inline">
											<input type="radio" value="Female" name="gender" /> Female
										</div>
										<div class="form-check form-check-inline">
											<input type="radio" value="Other" name="gender" /> Other
										</div>

										<div class="form-group">
											<label for="dob" class="control-label">
												Date of Birth <strong class="rtcl-required">*</strong>
											</label>
											<input
												type="date"
												name="dob"
												id="dob"
												class="form-control"
												required=""
												value={details.dob}
												onChange={(e) => {
													setDetails((prev) => {
														return { ...prev, dob: e.target.value };
													});
												}}
											/>
										</div>

										<div class="form-group">
											<label for="userpass" class="control-label">
												Password <strong class="rtcl-required">*</strong>
											</label>
											<input
												type="password"
												name="password"
												id="userpass"
												class="form-control"
												required=""
												value={details.userpass}
												onChange={(e) => {
													setDetails((prev) => {
														return { ...prev, userpass: e.target.value };
													});
												}}
											/>
										</div>
										<div class="form-group">
											<label for="confirmpass" class="control-label">
												Confirm Password{" "}
												<strong class="rtcl-required">*</strong>
											</label>
											<input
												type="password"
												name="confirmpass"
												id="confirmpass"
												class="form-control"
												required=""
												value={details.confirmpass}
												onChange={(e) => {
													setDetails((prev) => {
														return { ...prev, confirmpass: e.target.value };
													});
												}}
											/>
										</div>

										<div class="form-group d-flex align-items-center">
											<button
												type="submit"
												name="signup"
												class="btn btn-primary"
												value="signup"
												onClick={signUpHandle}
											>
												Sign Up
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
};
export default SignUp;
