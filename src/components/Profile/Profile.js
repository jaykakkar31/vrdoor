import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData, userRgister } from "../../store/actions/userActions";
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
	const [edit, setEdit] = useState(false);
	const dispatch = useDispatch();
	const userDataReducer = useSelector((state) => state.userDataReducer);
	const { userData, loading } = userDataReducer;
	console.log(userData);
	const id = JSON.parse(localStorage.getItem("userInfo"))._id;
	useEffect(() => {
		dispatch(fetchUserData(id));
	}, [dispatch, id]);
    const handleCancel=()=>{
        setEdit(false)
    }
	return (
		<div>
			<Navbar />
			<div class="breadcrumb-wrap">
				<div class="container">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">
								<Link to="/">Home</Link>
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
									<h2>Profile</h2>
									{loading ? (
										<div
											class="container-fluid"
											style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												marginTop: "20px",
												marginBottom: "40x",
											}}
										>
											<img src="img/preloader.gif" alt="load" />
										</div>
									) : (
										<form
										// id="rtcl-Profile-form"
										// class="form-horizontal"
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
													readOnly={!edit}
													style={{ textTransform: "capitalize" }}
													class="form-control"
													value={
														!edit ? userData && userData.name : details.name
													}
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
													readOnly={!edit}
													value={
														!edit ? userData && userData.email : details.name
													}
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
													readOnly={!edit}
													type="tel"
													name="phoneno"
													id="phoneno"
													class="form-control"
													value={
														!edit
															? userData && userData.phoneno
															: details.phoneno
													}
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
													readOnly={!edit}
													value={
														!edit ? userData && userData.gender : details.gender
													}
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
													readOnly={!edit}
													value={
														!edit ? userData && userData.gender : details.gender
													}
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
													readOnly={!edit}
													value={
														!edit ? userData && userData.gender : details.gender
													}
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
													readOnly={!edit}
													class="form-control"
													value={!edit ? userData && userData.dob : details.dob}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, dob: e.target.value };
														});
													}}
												/>
											</div>

											{!edit && (
												<div className="single-form">
													<button
														style={{ background: "#00c194", border: 0 }}
														className="btn btn-primary btn-hover-dark w-100"
														onClick={() => setEdit(true)}
													>
														Edit Your Details
													</button>
												</div>
											)}
											{edit && (
												<div className="single-form">
													<button
														style={{ background: "#00c194", border: 0 }}
														className="btn btn-primary btn-hover-dark w-100"
														// onClick={() => handleSubmit(true)}
													>
														Save Details
													</button>
													<button
														style={{ background: "#000", border: 0 }}
														className="btn btn-secondary btn-outline w-100 mt-4"
														onClick={() => handleCancel()}
													>
														Cancel
													</button>
												</div>
											)}
										</form>
									)}
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
