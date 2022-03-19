import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Login = () => {
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
									<h2>Login</h2>
									<form
										id="rtcl-login-form"
										class="form-horizontal"
										method="post"
										noValidate="novalidate"
									>
										<div class="form-group">
											<label for="rtcl-user-login" class="control-label">
												Username or E-mail
												<strong class="rtcl-required">*</strong>
											</label>
											<input
												type="text"
												name="username"
												autocomplete="username"
												
												id="rtcl-user-login"
												class="form-control"
												required=""
											/>
										</div>
										<div class="form-group">
											<label for="rtcl-user-pass" class="control-label">
												Password <strong class="rtcl-required">*</strong>
											</label>
											<input
												type="password"
												name="password"
												id="rtcl-user-pass"
												autocomplete="current-password"
												class="form-control"
												required=""
											/>
										</div>
										<div class="form-group d-flex align-items-center">
											<button
												type="submit"
												name="rtcl-login"
												class="btn btn-primary"
												value="login"
											>
												Login
											</button>
										</div>
										<div class="d-flex justify-content-between">
											<div class="form-group">
												<p class="rtcl-forgot-password">
													Not registered yet?
													<Link to="/signup"> Create an Account</Link>
												</p>
											</div>
											<div class="form-group">
												<p class="rtcl-forgot-password">
													<a href="/">Forgot Your Password?</a>
												</p>
											</div>
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
export default Login;
