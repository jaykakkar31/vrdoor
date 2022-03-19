import React, { useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useDispatch } from "react-redux";
import { userRgister } from "../../store/actions/userActions";
import { useEffect } from "react";
const AddPost = () => {
	const [formErrors, setFormErrors] =useState({});
		
	const [propDetails, setpropDetails] = useState({
		title:"",
		propertyImage:"",
		overview:"",
		price:"",
		beds:"",
		baths:"",
		sqft:"",
		type:"",
		category:"",
		builtYear:"",
		parkingSpaces:"",
		roomCount:"",
		location:"",
		tvCable:0,
		barbeque:0,
		ac:0,
		lawn:0,
		laundry:0,
		ccCam:0,
		feel_360:"",
	});

	const dispatch = useDispatch();

	const addPostHandler = (e) => {
		e.preventDefault();
		setFormErrors(validate(propDetails));
		console.log(propDetails);
		dispatch(userRgister(propDetails));
		
	};
	useEffect(()=>{
		console.log(formErrors);

	},[formErrors]);
	const validate = (values) => {
		const errors ={}
		if(!values.title){
			errors.title="Title is required!";
		}
		if(!values.overview){
			errors.overview="Overview is required!";
		}
		if(!values.price){
			errors.price="Price is required!";
		} 
		if(!values.beds){
			errors.beds="No. of Beds is required!";
		}
		if(!values.baths){
			errors.baths="No. of Bathrooms is required!";
		}
		if(!values.sqft){
			errors.sqft="Area is required!";
		}
		if(!values.builtYear){
			errors.builtYear="Built Year is required!";
		}
		if(!values.parkingSpaces){
			errors.parkingSpaces="No. of Parking Spaces is required!";
		}
		if(!values.roomCount){
			errors.roomCount="Room Count is required!";
		}
		if(!values.location){
			errors.location="Address is required!";
		}
		return errors;
	};

	
	return (
		<div>
			<Navbar />
			

			<div class="breadcrumb-wrap">
				<div class="breadcrumb-wrap">
					<div class="container">
						<nav aria-label="breadcrumb">
							<ol class="breadcrumb">
								<li class="breadcrumb-item">
									<a href="index.html">Home</a>
								</li>
								<li class="breadcrumb-item active" aria-current="page">
									Post Property
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
										
										
										
										
										<h2>Post An Add</h2>
										<form
											id="postadd"
											class="form-horizontal"
											method="post"
											onSubmit={addPostHandler}
											
										>
											<div class="form-group">
												<label for="addtype" class="control-label">
													Select Property Add Type
													<strong class="rtcl-required">*</strong>
												</label>
												<select class="form-select" aria-label="addtype" 
												onChange={(e) => {
													setpropDetails((prev) => {
														return { ...prev, type: e.target.value };
													});
												}}>
													<option value="0">Rent</option>
													<option value="1">Sale</option>
												</select>
											</div>
											<div class="form-group">
												<label for="title" class="control-label">
													Title
													<strong class="rtcl-required">*</strong>
												</label>
												<input
													type="text"
													name="title"
													id="title"
													class="form-control"
													required=""
													value={propDetails.title}
												onChange={(e) => {
													setpropDetails((prev) => {
														return { ...prev, title: e.target.value };
													});
												}}
												/>
											</div>
											<p style={{color:'red'}}>{formErrors.title}</p>
											<div class="form-group">
												<label for="overview" class="control-label">
													Overview
													<strong class="rtcl-required">*</strong>
												</label>
												<input
													type="textarea"
													name="overview"
													id="overview"
													class="form-control"
													required=""
													value={propDetails.overview}
													onChange={(e) => {
														setpropDetails((prev) => {
															return { ...prev, overview: e.target.value };
														});
													}}
												/>
											</div>
											<p style={{color:'red'}}>{formErrors.overview}</p>
											<div class="form-group">
												<label for="address" class="control-label">
													Address
													<strong class="rtcl-required">*</strong>
												</label>
												<input
													type="text"
													name="address"
													id="address"
													class="form-control"
													required=""
													value={propDetails.location}
													onChange={(e) => {
														setpropDetails((prev) => {
															return { ...prev, location: e.target.value };
														});
													}}
												/>
											</div>
											<p style={{color:'red'}}>{formErrors.location}</p>
											<div class="form-group">
												<label for="price" class="control-label">
													Price
													<strong class="rtcl-required">*</strong>
												</label>
												<input
													type="number"
													name="price"
													id="price"
													class="form-control"
													required=""
													value={propDetails.price}
													onChange={(e) => {
														setpropDetails((prev) => {
															return { ...prev, price: e.target.value };
														});
													}}
												/>
											</div>
											<p style={{color:'red'}}>{formErrors.price}</p>
											<div class="container">
											<div class="row">
												<div class="col-sm">
												<div class="form-check form-switch">
												<input
													class="form-check-input"
													type="checkbox"
													id="tvcable"
													value={propDetails.tvCable}
													onChange={(e) => {
														setpropDetails((prev) => {
															return { ...prev, tvCable: 1 };
														});
													}}
												/>
												<label class="form-check-label" for="tvcable">
													TV Cable
												</label>
											</div>
												</div>
												<div class="col-sm">
												<div class="form-check form-switch">
												<input
													class="form-check-input"
													type="checkbox"
													id="barbeque"
													value={propDetails.barbeque}
													onChange={(e) => {
														setpropDetails((prev) => {
															return { ...prev, barbeque: 1 };
														});
													}}
												/>
												<label class="form-check-label" for="barbeque">
													Barbeque
												</label>
											</div>
												</div>
												<div class="col-sm">
												<div class="form-check form-switch">
												<input
													class="form-check-input"
													type="checkbox"
													id="ac"
													value={propDetails.ac}
													onChange={(e) => {
														setpropDetails((prev) => {
															return { ...prev, ac: 1 };
														});
													}}
												/>
												<label class="form-check-label" for="ac">
													AC
												</label>
											</div>
												</div>
											</div>
											</div>
											<div class="container">
											<div class="row">
												<div class="col-sm">
												<div class="form-check form-switch">
												<input
													class="form-check-input"
													type="checkbox"
													id="lawn"
													value={propDetails.lawn}
													onChange={(e) => {
														setpropDetails((prev) => {
															return { ...prev, lawn: 1 };
														});
													}}
												/>
												<label class="form-check-label" for="lawn">
													Lawn
												</label>
											</div>
												</div>
												<div class="col-sm">
												<div class="form-check form-switch">
												<input
													class="form-check-input"
													type="checkbox"
													id="laundry"
													value={propDetails.laundry}
													onChange={(e) => {
														setpropDetails((prev) => {
															return { ...prev, laundry: 1 };
														});
													}}
												/>
												<label class="form-check-label" for="laundry">
													Laundry
												</label>
											</div>
												</div>
												<div class="col-sm">
												<div class="form-check form-switch">
												<input
													class="form-check-input"
													type="checkbox"
													id="cctv"
													value={propDetails.ccCam}
													onChange={(e) => {
														setpropDetails((prev) => {
															return { ...prev, ccCam: 1 };
														});
													}}
												/>
												<label class="form-check-label" for="cctv">
													CCTV
												</label>
											</div>
												</div>
											</div>
											</div>
											
											<div class="container">
											<div class="row">
												<div class="col-sm">
												<div class="form-group">
												<label for="beds" class="control-label">
													No. of Bedrooms <strong class="rtcl-required">*</strong>
												</label>
												<input
													type="number"
													name="beds"
													id="beds"
													class="form-control"
													required=""
													value={propDetails.beds}
													onChange={(e) => {
														setpropDetails((prev) => {
															return { ...prev, beds: e.target.value };
														});
													}}
												/>
											</div>
											<p style={{color:'red'}}>{formErrors.beds}</p>
												</div>
												<div class="col-sm">
												<div class="form-group">
												<label for="baths" class="control-label">
													No. of Bathrooms <strong class="rtcl-required">*</strong>
												</label>
												<input
													type="number"
													name="baths"
													id="baths"
													class="form-control"
													required=""
													value={propDetails.baths}
													onChange={(e) => {
														setpropDetails((prev) => {
															return { ...prev, baths: e.target.value };
														});
													}}
												/>
											</div>
											<p style={{color:'red'}}>{formErrors.baths}</p>
												</div>
											</div>
											<div class="row">
												<div class="col-sm">
												<div class="form-group">
												<label for="roomCount" class="control-label">
													No. of Rooms <strong class="rtcl-required">*</strong>
												</label>
												<input
													type="number"
													name="roomCount"
													id="roomCount"
													class="form-control"
													required=""
													value={propDetails.roomCount}
													onChange={(e) => {
														setpropDetails((prev) => {
															return { ...prev, roomCount: e.target.value };
														});
													}}
												/>
											</div>
											<p style={{color:'red'}}>{formErrors.roomCount}</p>
												</div>
												<div class="col-sm">
												<div class="form-group">
												<label for="parkingSpaces" class="control-label">
													No. of Parking Space <strong class="rtcl-required">*</strong>
												</label>
												<input
													type="number"
													name="parkingSpaces"
													id="parkingSpaces"
													class="form-control"
													required=""
													value={propDetails.parkingSpaces}
													onChange={(e) => {
														setpropDetails((prev) => {
															return { ...prev, parkingSpaces: e.target.value };
														});
													}}
												/>
											</div>
											<p style={{color:'red'}}>{formErrors.parkingSpaces}</p>
												</div>
											</div>
											<div class="row">
												<div class="col-sm">
												<div class="form-group">
												<label for="sqft" class="control-label">
													Area (in sqft) <strong class="rtcl-required">*</strong>
												</label>
												<input
													type="number"
													name="sqft"
													id="sqft"
													class="form-control"
													required=""
													value={propDetails.sqft}
													onChange={(e) => {
														setpropDetails((prev) => {
															return { ...prev, sqft: e.target.value };
														});
													}}
												/>
											</div>
											<p style={{color:'red'}}>{formErrors.sqft}</p>
												</div>
												<div class="col-sm">
												<div class="form-group">
												<label for="builtyear" class="control-label">
													Built Year <strong class="rtcl-required">*</strong>
												</label>
												<input
													type="number"
													name="builtyear"
													id="builtyear"
													class="form-control"
													required=""
													value={propDetails.builtYear}
													onChange={(e) => {
														setpropDetails((prev) => {
															return { ...prev, builtYear: e.target.value };
														});
													}}
												/>
											</div>
											<p style={{color:'red'}}>{formErrors.builtYear}</p>
												</div>
											</div>
											</div>
											
											
											

											
											
											

											<div class="form-group d-flex align-items-center">
												<button
													type="submit"
													name="signup"
													class="btn btn-primary"
													value="signup"
													onClick={addPostHandler}
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
		</div>
	);
};
export default AddPost;
