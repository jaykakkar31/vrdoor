import React, { useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useDispatch } from "react-redux";
import { userRgister } from "../../store/actions/userActions";
import { Link } from "react-router-dom";

const Profile = () => {
	const [details, setDetails] = useState({
		name: "",
		email: "",
		phoneno: "",
		dob: "",
		userpass: "",
		gender: "",
		confirmpass: "",
	});

    
	const dispatch = useDispatch();

	const ProfileHandle = (e) => {
		e.preventDefault();
		console.log(details);
		dispatch(userRgister(details));
	};

	return (
		<div>
			<Navbar />
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
										id="rtcl-Profile-form"
										class="form-horizontal"
										method="post"
										novalidate="novalidate"
										onSubmit={ProfileHandle}
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
												required
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
												required
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
												required
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
											<input
												type="radio"
												name="gender"
												value={details.gender}
												onChange={(e) => {
													setDetails((prev) => {
														return { ...prev, gender: "Male" };
													});
												}}
											/>{" "}
											Male
										</div>
										<div class="form-check form-check-inline">
											<input
												type="radio"
												name="gender"
												value={details.gender}
												onChange={(e) => {
													setDetails((prev) => {
														return { ...prev, gender: "Female" };
													});
												}}
											/>{" "}
											Female
										</div>
										<div class="form-check form-check-inline">
											<input
												type="radio"
												name="gender"
												value={details.gender}
												onChange={(e) => {
													setDetails((prev) => {
														return { ...prev, gender: "Other" };
													});
												}}
											/>{" "}
											Other
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
												required
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
												required
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
												required
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
												name="Profile"
												class="btn btn-primary"
												value="Profile"
												onClick={ProfileHandle}
											>
												Sign Up
											</button>
										</div>
										<div class="form-group">
											<p class="rtcl-forgot-password">
												Already have an account?{" "}
												<Link to="/login">Log in </Link>
											</p>{" "}
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
export default Profile;
