import React, { useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Home = () => {
	const [isclick, setIsClick] = useState(false);
    console.log(isclick);
	return (
		<div style={{ width: "100%" }}>
			<Navbar />
			<div
				class="rt-header-menu mean-container position-relative"
				id="meanmenu"
			>
				<div class="mean-bar">
					<a href="index.html">
						<img src="img/logo_light2.svg" alt="logo" class="img-fluid" />
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
			<section class="main-banner-wrap1 main-banner-wrap6 motion-effects-wrap">
				<div class="shape-element">
					<ul>
						<li>
							<img
								class="wow fadeInLeft"
								data-wow-delay=".3s"
								src="img/figure/shape33.svg"
								height="296"
								width="408"
								alt="shape"
							/>
						</li>
						<li>
							<img
								src="img/figure/shape34.svg"
								height="426"
								width="319"
								alt="shape"
							/>
						</li>
						<li>
							<img
								class="motion-effects12"
								src="img/figure/shape35.svg"
								width="150"
								height="150"
								alt="shape"
							/>
						</li>
						<li>
							<img
								src="img/figure/shape36.svg"
								width="70"
								height="27"
								alt="shape"
							/>
						</li>
						<li>
							<img
								class="motion-effects13"
								src="img/figure/shape37.svg"
								width="191"
								height="178"
								alt="shape"
							/>
						</li>
						<li>
							<img
								src="img/figure/shape38.svg"
								width="719"
								height="196"
								alt="shape"
							/>
						</li>
					</ul>
					<div class="item-banner-thumb wow fadeInRight" data-wow-delay=".4s">
						<img
							src="img/banner/banner6.png"
							width="1204"
							height="1156"
							alt="banner"
						/>
					</div>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-xl-8">
							<div class="main-banner-box1 main-banner-box6">
								<h1 class="item-title wow fadeInUp" data-wow-delay=".4s">
									Find the perfect place to Live with your family
								</h1>
								<div class="bg-title-wrap" style={{ display: "block" }}>
									<span class="background-title solid">Properties</span>
								</div>
								<div class="ad-type-wrapper search-radio">
									<ul class="list-inline">
										<li>
											<label htmlFor="sell" class="active">
												<span>Sell</span>
												<input
													class="sr-only"
													type="radio"
													name="filters[ad_type]"
													id="sell"
													value="sell"
												/>
											</label>
										</li>
										<li>
											<label htmlFor="buy" class="">
												<span>Buy</span>
												<input
													class="sr-only"
													type="radio"
													name="filters[ad_type]"
													id="buy"
													value="buy"
												/>
											</label>
										</li>
										<li>
											<label htmlFor="rent" class="">
												<span>Rent</span>
												<input
													class="sr-only"
													type="radio"
													name="filters[ad_type]"
													id="rent"
													value="rent"
												/>
											</label>
										</li>
									</ul>
								</div>
								<div class="banner-search-wrap">
									<div class="rld-main-search">
										<div class="row">
											<div class="col-sm-12">
												<div class="box">
													<div class="box-top">
														<div class="rld-single-input item">
															<input
																type="text"
																placeholder="Enter Kewword here..."
															/>
														</div>
														<div class="rld-single-select ml-22">
															<select class="select single-select">
																<option value="1">Property Type</option>
																<option value="2">Family House</option>
																<option value="3">Apartment</option>
																<option value="3">Condo</option>
															</select>
														</div>
														<div class="rld-single-select item">
															<select class="select single-select mr-0">
																<option value="1">All Cities</option>
																<option value="2">Los Angeles</option>
																<option value="3">Chicago</option>
																<option value="3">Philadelphia</option>
															</select>
														</div>
														<div class="item rt-filter-btn">
															<div
																class="dropdown-filter item"
																onClick={() => setIsClick(!isclick)}
															>
																<span>
																	<i class="fas fa-sliders-h"></i>
																</span>
															</div>
															<div class="filter-button-area">
																<a class="filter-btn" href="with-sidebar.html">
																	<span>Search</span>
																	<i class="fas fa-search"></i>
																</a>
															</div>
														</div>
													</div>
													<div
														class={`explore__form-checkbox-list full-filter ${isclick&&"filter-block"}`}
													>
														<div class="row">
															<div class="col-lg-4 col-md-6 py-1 pr-30 pl-0">
																<div class="form-group bed">
																	<label class="item-bedrooms">Bedrooms</label>
																	<div
																		class="nice-select form-control wide"
																		tabIndex="0"
																	>
																		<span class="current">Any</span>
																		<ul class="list">
																			<li
																				data-value="1"
																				class="option selected"
																			>
																				For Sale
																			</li>
																			<li data-value="2" class="option">
																				For Rent
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
															<div class="col-lg-4 col-md-6 py-1 pr-30 pl-0">
																<div class="form-group bath">
																	<label class="item-bath">Bathrooms</label>
																	<div
																		class="nice-select form-control wide"
																		tabIndex="0"
																	>
																		<span class="current">Any</span>
																		<ul class="list">
																			<li
																				data-value="1"
																				class="option selected"
																			>
																				1
																			</li>
																			<li data-value="2" class="option">
																				2
																			</li>
																			<li data-value="3" class="option">
																				3
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
															<div class="col-lg-4 col-md-6 py-1 pl-0 pr-0">
																<div class="form-group garage">
																	<label class="item-garage">Garage</label>
																	<div
																		class="nice-select form-control wide"
																		tabIndex="0"
																	>
																		<span class="current">Any</span>
																		<ul class="list">
																			<li
																				data-value="1"
																				class="option selected"
																			>
																				1
																			</li>
																			<li data-value="2" class="option">
																				2
																			</li>
																			<li data-value="3" class="option">
																				3
																			</li>
																		</ul>
																	</div>
																</div>
															</div>
															<div class="main-search-field-2 col-12">
																<div class="row">
																	<div class="col-md-6 pl-0">
																		<div class="price-range-wrapper">
																			<div class="range-box">
																				<div class="price-label">
																					Flat Size:
																				</div>
																				<div
																					id="price-range-filter-3"
																					class="price-range-filter"
																				></div>
																				<div class="price-filter-wrap d-flex align-items-center">
																					<div class="price-range-select">
																						<div
																							class="price-range"
																							id="price-range-min-3"
																						></div>
																						<div class="price-range">-</div>
																						<div
																							class="price-range"
																							id="price-range-max-3"
																						></div>
																						<div class="price-range range-title">
																							sft
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div class="col-md-6 pl-0">
																		<div class="price-range-wrapper">
																			<div class="range-box">
																				<div class="price-label">Distance:</div>
																				<div
																					id="price-range-filter-2"
																					class="price-range-filter"
																				></div>
																				<div class="price-filter-wrap d-flex align-items-center">
																					<div class="price-range-select">
																						<div
																							class="price-range"
																							id="price-range-min-2"
																						></div>
																						<div class="price-range">-</div>
																						<div
																							class="price-range"
																							id="price-range-max-2"
																						></div>
																						<div class="price-range range-title">
																							km
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div class="row">
																<div class="col-lg-12 col-md-12 col-sm-12">
																	<h4 class="text-dark">Amenities</h4>
																	<ul class="no-ul-list third-row">
																		<li>
																			<input
																				id="a-1"
																				class="checkbox-custom"
																				name="a-1"
																				type="checkbox"
																			/>
																			<label
																				htmlFor="a-1"
																				class="checkbox-custom-label"
																			>
																				Air Condition
																			</label>
																		</li>
																		<li>
																			<input
																				id="a-2"
																				class="checkbox-custom"
																				name="a-2"
																				type="checkbox"
																			/>
																			<label
																				htmlFor="a-2"
																				class="checkbox-custom-label"
																			>
																				Bedding
																			</label>
																		</li>
																		<li>
																			<input
																				id="a-3"
																				class="checkbox-custom"
																				name="a-3"
																				type="checkbox"
																			/>
																			<label
																				htmlFor="a-3"
																				class="checkbox-custom-label"
																			>
																				Heating
																			</label>
																		</li>
																		<li>
																			<input
																				id="a-4"
																				class="checkbox-custom"
																				name="a-4"
																				type="checkbox"
																			/>
																			<label
																				htmlFor="a-4"
																				class="checkbox-custom-label"
																			>
																				Internet
																			</label>
																		</li>
																		<li>
																			<input
																				id="a-5"
																				class="checkbox-custom"
																				name="a-5"
																				type="checkbox"
																			/>
																			<label
																				htmlFor="a-5"
																				class="checkbox-custom-label"
																			>
																				Microwave
																			</label>
																		</li>
																		<li>
																			<input
																				id="a-6"
																				class="checkbox-custom"
																				name="a-6"
																				type="checkbox"
																			/>
																			<label
																				htmlFor="a-6"
																				class="checkbox-custom-label"
																			>
																				Smoking Allow
																			</label>
																		</li>
																		<li>
																			<input
																				id="a-7"
																				class="checkbox-custom"
																				name="a-7"
																				type="checkbox"
																			/>
																			<label
																				htmlFor="a-7"
																				class="checkbox-custom-label"
																			>
																				Terrace
																			</label>
																		</li>
																		<li>
																			<input
																				id="a-8"
																				class="checkbox-custom"
																				name="a-8"
																				type="checkbox"
																			/>
																			<label
																				htmlFor="a-8"
																				class="checkbox-custom-label"
																			>
																				Balcony
																			</label>
																		</li>
																		<li>
																			<input
																				id="a-9"
																				class="checkbox-custom"
																				name="a-9"
																				type="checkbox"
																			/>
																			<label
																				htmlFor="a-9"
																				class="checkbox-custom-label"
																			>
																				Balcony
																			</label>
																		</li>
																	</ul>
																</div>
															</div>
															<div class="filter-button">
																<a href="index.html" class="filter-btn1">
																	Apply Filter
																</a>
																<a
																	href="index.html"
																	class="filter-btn1 reset-btn"
																>
																	Reset Filter<i class="fas fa-redo-alt"></i>
																</a>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<p class="item-para wow fadeInUp" data-wow-delay=".4s">
										We’ve more than
										<span class="banner-p">54,000</span> apartments, place &
										plot.
										<span class="item-shape">
											<img
												src="img/figure/shape39.svg"
												width="79"
												height="16"
												alt="shape"
											/>
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="property-wrap1 property-wrap-10">
				<div class="container">
					<div class="item-heading-center">
						<span class="section-subtitle">OUR PROPERTIES</span>
						<h2 class="section-title">Our Featured Properties</h2>
						<div class="bg-title-wrap" style={{ display: "block" }}>
							<span class="background-title solid">Properties</span>
						</div>
					</div>
					<div class="row">
						<div class="col-xl-4 col-lg-6 col-md-6">
							<div
								class="property-box2 wow animated fadeInUp"
								data-wow-delay=".3s"
							>
								<div class="item-img">
									<a href="single-listing1.html">
										<img
											src="img/blog/blog4.jpg"
											alt="blog"
											width="510"
											height="340"
										/>
									</a>
									<div class="item-category-box1">
										<div class="item-category">For Sell</div>
									</div>
									<div class="rent-price">
										<div class="item-price">
											$15,000
											<span>
												<i>/</i>mo
											</span>
										</div>
									</div>
									<div class="react-icon">
										<ul>
											<li>
												<a
													href="favourite.html"
													data-bs-toggle="tooltip"
													data-bs-placement="top"
													title="Favourites"
												>
													<i class="flaticon-heart"></i>
												</a>
											</li>
											<li>
												<a
													href="compare.html"
													data-bs-toggle="tooltip"
													data-bs-placement="top"
													title="Compare"
												>
													<i class="flaticon-left-and-right-arrows"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div class="item-category10">
									<a href="single-listing1.html">Appartment</a>
								</div>
								<div class="item-content">
									<div class="verified-area">
										<h3 class="item-title">
											<a href="single-listing1.html">Family House For Sell</a>
										</h3>
									</div>
									<div class="location-area">
										<i class="flaticon-maps-and-flags"></i>Downey, California
									</div>
									<div class="item-categoery3">
										<ul>
											<li>
												<i class="flaticon-bed"></i>Beds: 03
											</li>
											<li>
												<i class="flaticon-shower"></i>Baths: 02
											</li>
											<li>
												<i class="flaticon-two-overlapping-square"></i>931 Sqft
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-4 col-lg-6 col-md-6">
							<div
								class="property-box2 wow animated fadeInUp"
								data-wow-delay=".2s"
							>
								<div class="item-img">
									<a href="single-listing1.html">
										<img
											src="img/blog/blog5.jpg"
											alt="blog"
											width="510"
											height="340"
										/>
									</a>
									<div class="item-category-box1">
										<div class="item-category">For Rent</div>
									</div>
									<div class="rent-price">
										<div class="item-price">
											$12,000
											<span>
												<i>/</i>mo
											</span>
										</div>
									</div>
									<div class="react-icon">
										<ul>
											<li>
												<a
													href="favourite.html"
													data-bs-toggle="tooltip"
													data-bs-placement="top"
													title="Favourites"
												>
													<i class="flaticon-heart"></i>
												</a>
											</li>
											<li>
												<a
													href="compare.html"
													data-bs-toggle="tooltip"
													data-bs-placement="top"
													title="Compare"
												>
													<i class="flaticon-left-and-right-arrows"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div class="item-category10">
									<a href="single-listing1.html">Villa</a>
								</div>
								<div class="item-content">
									<div class="verified-area">
										<h3 class="item-title">
											<a href="single-listing1.html">
												Countryside Modern Lake View
											</a>
										</h3>
									</div>
									<div class="location-area">
										<i class="flaticon-maps-and-flags"></i>Downey, California
									</div>
									<div class="item-categoery3">
										<ul>
											<li>
												<i class="flaticon-bed"></i>Beds: 03
											</li>
											<li>
												<i class="flaticon-shower"></i>Baths: 02
											</li>
											<li>
												<i class="flaticon-two-overlapping-square"></i>931 Sqft
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-4 col-lg-6 col-md-6">
							<div
								class="property-box2 wow animated fadeInUp"
								data-wow-delay=".1s"
							>
								<div class="item-img">
									<a href="single-listing1.html">
										<img
											src="img/blog/blog6.jpg"
											alt="blog"
											width="510"
											height="340"
										/>
									</a>
									<div class="item-category-box1">
										<div class="item-category">For Sell</div>
									</div>
									<div class="rent-price">
										<div class="item-price">
											$18,000
											<span>
												<i>/</i>mo
											</span>
										</div>
									</div>
									<div class="react-icon">
										<ul>
											<li>
												<a
													href="favourite.html"
													data-bs-toggle="tooltip"
													data-bs-placement="top"
													title="Favourites"
												>
													<i class="flaticon-heart"></i>
												</a>
											</li>
											<li>
												<a
													href="compare.html"
													data-bs-toggle="tooltip"
													data-bs-placement="top"
													title="Compare"
												>
													<i class="flaticon-left-and-right-arrows"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div class="item-category10">
									<a href="single-listing1.html">Office</a>
								</div>
								<div class="item-content">
									<div class="verified-area">
										<h3 class="item-title">
											<a href="single-listing1.html">
												Gorgeous Apartment Building
											</a>
										</h3>
									</div>
									<div class="location-area">
										<i class="flaticon-maps-and-flags"></i>Downey, California
									</div>
									<div class="item-categoery3">
										<ul>
											<li>
												<i class="flaticon-bed"></i>Beds: 03
											</li>
											<li>
												<i class="flaticon-shower"></i>Baths: 02
											</li>
											<li>
												<i class="flaticon-two-overlapping-square"></i>931 Sqft
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-4 col-lg-6 col-md-6">
							<div
								class="property-box2 wow animated fadeInUp"
								data-wow-delay=".3s"
							>
								<div class="item-img">
									<a href="single-listing1.html">
										<img
											src="img/blog/blog7.jpg"
											alt="blog"
											width="510"
											height="340"
										/>
									</a>
									<div class="item-category-box1">
										<div class="item-category">For Rent</div>
									</div>
									<div class="rent-price">
										<div class="item-price">
											$19,000
											<span>
												<i>/</i>mo
											</span>
										</div>
									</div>
									<div class="react-icon">
										<ul>
											<li>
												<a
													href="favourite.html"
													data-bs-toggle="tooltip"
													data-bs-placement="top"
													title="Favourites"
												>
													<i class="flaticon-heart"></i>
												</a>
											</li>
											<li>
												<a
													href="compare.html"
													data-bs-toggle="tooltip"
													data-bs-placement="top"
													title="Compare"
												>
													<i class="flaticon-left-and-right-arrows"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div class="item-category10">
									<a href="single-listing1.html">Commercial</a>
								</div>
								<div class="item-content">
									<div class="verified-area">
										<h3 class="item-title">
											<a href="single-listing1.html">
												Countryside Modern Lake View
											</a>
										</h3>
									</div>
									<div class="location-area">
										<i class="flaticon-maps-and-flags"></i>Downey, California
									</div>
									<div class="item-categoery3">
										<ul>
											<li>
												<i class="flaticon-bed"></i>Beds: 03
											</li>
											<li>
												<i class="flaticon-shower"></i>Baths: 02
											</li>
											<li>
												<i class="flaticon-two-overlapping-square"></i>931 Sqft
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-4 col-lg-6 col-md-6">
							<div
								class="property-box2 wow animated fadeInUp"
								data-wow-delay=".6s"
							>
								<div class="item-img">
									<a href="single-listing1.html">
										<img
											src="img/blog/blog8.jpg"
											alt="blog"
											width="510"
											height="340"
										/>
									</a>
									<div class="item-category-box1">
										<div class="item-category">For Sell</div>
									</div>
									<div class="rent-price">
										<div class="item-price">
											$30,000
											<span>
												<i>/</i>mo
											</span>
										</div>
									</div>
									<div class="react-icon">
										<ul>
											<li>
												<a
													href="favourite.html"
													data-bs-toggle="tooltip"
													data-bs-placement="top"
													title="Favourites"
												>
													<i class="flaticon-heart"></i>
												</a>
											</li>
											<li>
												<a
													href="compare.html"
													data-bs-toggle="tooltip"
													data-bs-placement="top"
													title="Compare"
												>
													<i class="flaticon-left-and-right-arrows"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div class="item-category10">
									<a href="single-listing1.html">Villa</a>
								</div>
								<div class="item-content">
									<div class="verified-area">
										<h3 class="item-title">
											<a href="single-listing1.html">Family House For Sell</a>
										</h3>
									</div>
									<div class="location-area">
										<i class="flaticon-maps-and-flags"></i>Downey, California
									</div>
									<div class="item-categoery3">
										<ul>
											<li>
												<i class="flaticon-bed"></i>Beds: 03
											</li>
											<li>
												<i class="flaticon-shower"></i>Baths: 02
											</li>
											<li>
												<i class="flaticon-two-overlapping-square"></i>931 Sqft
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-4 col-lg-6 col-md-6">
							<div
								class="property-box2 wow animated fadeInUp"
								data-wow-delay=".2s"
							>
								<div class="item-img">
									<a href="single-listing1.html">
										<img
											src="img/blog/blog9.jpg"
											alt="blog"
											width="510"
											height="340"
										/>
									</a>
									<div class="item-category-box1">
										<div class="item-category">For Rent</div>
									</div>
									<div class="rent-price">
										<div class="item-price">
											$25,000
											<span>
												<i>/</i>mo
											</span>
										</div>
									</div>
									<div class="react-icon">
										<ul>
											<li>
												<a
													href="favourite.html"
													data-bs-toggle="tooltip"
													data-bs-placement="top"
													title="Favourites"
												>
													<i class="flaticon-heart"></i>
												</a>
											</li>
											<li>
												<a
													href="compare.html"
													data-bs-toggle="tooltip"
													data-bs-placement="top"
													title="Compare"
												>
													<i class="flaticon-left-and-right-arrows"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div class="item-category10">
									<a href="single-listing1.html">Office</a>
								</div>
								<div class="item-content">
									<div class="verified-area">
										<h3 class="item-title">
											<a href="single-listing1.html">
												Countryside Modern Lake View
											</a>
										</h3>
									</div>
									<div class="location-area">
										<i class="flaticon-maps-and-flags"></i>Downey, California
									</div>
									<div class="item-categoery3">
										<ul>
											<li>
												<i class="flaticon-bed"></i>Beds: 03
											</li>
											<li>
												<i class="flaticon-shower"></i>Baths: 02
											</li>
											<li>
												<i class="flaticon-two-overlapping-square"></i>931 Sqft
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="property-button">
						<a href="single-listing2.html" class="item-btn">
							View All Properties
						</a>
					</div>
				</div>
			</section>
			<section class="about-wrap-5 counter-appear motion-effects-wrap">
				<div class="container">
					<div class="item-element-shape">
						<ul>
							<li>
								<img
									class="wow animated fadeInRight"
									data-wow-delay=".4s"
									src="img/figure/shape30.svg"
									width="312"
									height="295"
									alt="shape"
								/>
							</li>
							<li>
								<img
									class="motion-effects12"
									src="img/figure/shape31.svg"
									width="155"
									height="92"
									alt="shape"
								/>
							</li>
							<li>
								<img
									src="img/figure/shape32.svg"
									width="575"
									height="162"
									alt="shape"
								/>
							</li>
						</ul>
					</div>
					<div class="row">
						<div class="col-lg-6 col-md-12">
							<div
								class="about-box-9 wow animated fadeInLeft"
								data-wow-delay=".5s"
							>
								<div class="item-img">
									<img
										src="img/blog/about2.png"
										alt="shape"
										width="567"
										height="572"
									/>
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-md-12">
							<div
								class="about-box-10 wow animated fadeInRight"
								data-wow-delay=".3s"
							>
								<div class="item-heading-left mb-bottom">
									<span class="section-subtitle">WHO WE ARE</span>
									<h2 class="section-title">
										We are Offering The Best Real Estate Property For All
									</h2>
									<div class="bg-title-wrap" style={{ display: "block" }}>
										<span class="background-title solid">About</span>
									</div>
									<p>
										Make a type specimen book. It has survived not only five
										centuries, but also the leap into electronic typesetting,
										remaining essentially electronic typesettings pecimen book
									</p>
								</div>
								<div class="row">
									<div class="col-lg-6 col-md-6">
										<div class="about-svg-shape">
											<img src="img/figure/shape28.svg" alt="svg" />
											<div class="item-content">
												<div class="item-content">
													<div class="item-content__text">
														<div class="item-k">
															<span class="counterUp" data-counter="55">
																55
															</span>
															K
														</div>
													</div>
													<p>Satisfied People</p>
												</div>
											</div>
										</div>
									</div>
									<div class="col-lg-6 col-md-6">
										<div class="about-svg-shape">
											<img src="img/figure/shape29.svg" alt="svg" />
											<div class="item-content">
												<div class="item-content__text">
													<div class="item-k">
														<span class="counterUp" data-counter="11">
															11
														</span>
														K
													</div>
												</div>
												<p>Verified Property</p>
											</div>
										</div>
									</div>
								</div>
								<p>
									Make a type specimen book. It has survived not only five
									centuries, but also the leap into electronic typesetting,
									remaining essentially electronic typesettings pecimen book
								</p>
								<div class="banner-button about-button-2">
									<a href="contact.html" class="banner-btn">
										Contact With Us
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="location-wrap1">
				<div class="container">
					<div class="item-heading-center">
						<span class="section-subtitle">Top Areas</span>
						<h2 class="section-title">Find Your Neighborhood</h2>
						<div class="bg-title-wrap" style={{ display: "block" }}>
							<span class="background-title solid">Locations</span>
						</div>
					</div>
					<div class="row justify-content-center">
						<div class="col-lg-4 col-md-6">
							<div
								class="location-box3 location-box4 wow zoomIn"
								data-wow-delay=".3s"
							>
								<div class="item-img">
									<a href="single-listing1.html">
										<img
											src="img/blog/location-1.png"
											alt="location"
											width="424"
											height="280"
										/>
									</a>
								</div>
								<div class="item-content">
									<div class="content-body">
										<div class="item-title">
											<h3>
												<a href="single-listing2.html">California</a>
											</h3>
										</div>
										<div class="item-category">
											<span>03 properties</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div
								class="location-box3 location-box4 wow zoomIn"
								data-wow-delay=".4s"
							>
								<div class="item-img">
									<a href="single-listing1.html">
										<img
											src="img/blog/location-2.png"
											alt="location"
											width="424"
											height="280"
										/>
									</a>
								</div>
								<div class="item-content">
									<div class="content-body">
										<div class="item-title">
											<h3>
												<a href="single-listing2.html">Louisiana</a>
											</h3>
										</div>
										<div class="item-category">
											<span>0 properties</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div
								class="location-box3 location-box4 wow zoomIn"
								data-wow-delay=".5s"
							>
								<div class="item-img">
									<a href="single-listing1.html">
										<img
											src="img/blog/location-3.png"
											alt="location"
											width="424"
											height="280"
										/>
									</a>
								</div>
								<div class="item-content">
									<div class="content-body">
										<div class="item-title">
											<h3>
												<a href="single-listing2.html">Kansas</a>
											</h3>
										</div>
										<div class="item-category">
											<span>05 properties</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-4 col-md-4">
							<div
								class="location-box3 location-box4 wow zoomIn"
								data-wow-delay=".6s"
							>
								<div class="item-img">
									<a href="single-listing1.html">
										<img
											src="img/blog/location-4.png"
											alt="location"
											width="424"
											height="280"
										/>
									</a>
								</div>
								<div class="item-content">
									<div class="content-body">
										<div class="item-title">
											<h3>
												<a href="single-listing2.html">Abilene</a>
											</h3>
										</div>
										<div class="item-category">
											<span>08 properties</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-8 col-md-8">
							<div
								class="location-box3 location-box4 wow zoomIn"
								data-wow-delay=".7s"
							>
								<div class="item-img">
									<a href="single-listing1.html">
										<img
											src="img/blog/location-5.png"
											alt="location"
											width="846"
											height="280"
										/>
									</a>
								</div>
								<div class="item-content">
									<div class="content-body">
										<div class="item-title">
											<h3>
												<a href="single-listing2.html">New York</a>
											</h3>
										</div>
										<div class="item-category">
											<span>02 properties</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section
				class="property-banner-wrap1 parallaxie"
				data-bg-image="img/banner/banner3.jpg"
			>
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-5 col-md-12">
							<div class="property-box1 wow slideInUp" data-wow-delay="100">
								<div class="item-subtitle">Let’s Take a Tour</div>
								<h3 class="item-title">
									Search Property Smarter, Quicker & Anywhere
								</h3>
								<div class="play-button">
									<div class="item-icon">
										<a
											href="http://www.youtube.com/watch?v=1iIZeIy7TqM"
											class="play-btn"
										>
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
			<section class="team-wrap1 team-wrap3">
				<div class="container">
					<div class="item-heading-center mb-20">
						<span class="section-subtitle">Expertise Is Here</span>
						<h2 class="section-title">Our Exclusive Agetns</h2>
						<div class="bg-title-wrap" style={{ display: "block" }}>
							<span class="background-title solid">Our Agents</span>
						</div>
					</div>
					<div class="row">
						<div class="col-xl-6 col-lg-6 col-md-12">
							<div class="team-box-6 wow fadeInUp" data-wow-delay=".6s">
								<div class="item-img">
									<a href="agent-lists1.html">
										<img
											src="img/team/team28.png"
											alt="team"
											width="184"
											height="184"
										/>
									</a>
								</div>
								<div class="item-content">
									<div class="item-title">
										<h3>
											<a href="agent-lists1.html">Andren Willium</a>
										</h3>
										<h4 class="item-subtitle">
											<a href="agency-lists1.html">Sunshine</a>
										</h4>
									</div>
									<div class="item-category">
										<a href="agent-lists1.html">07 Listings</a>
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
						<div class="col-xl-6 col-lg-6 col-md-12">
							<div class="team-box-6 wow fadeInUp" data-wow-delay=".6s">
								<div class="item-img">
									<a href="agent-lists1.html">
										<img
											src="img/team/team29.png"
											alt="team"
											width="184"
											height="184"
										/>
									</a>
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
									<div class="item-category">
										<a href="agent-lists1.html">08 Listings</a>
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
						<div class="col-xl-6 col-lg-6 col-md-12">
							<div class="team-box-6 wow fadeInUp" data-wow-delay=".6s">
								<div class="item-img">
									<a href="agent-lists1.html">
										<img
											src="img/team/team30.png"
											alt="team"
											width="184"
											height="184"
										/>
									</a>
								</div>
								<div class="item-content">
									<div class="item-title">
										<h3>
											<a href="agent-lists1.html">Sarah Boysen</a>
										</h3>
										<h4 class="item-subtitle">
											<a href="agency-lists1.html">Mark Street</a>
										</h4>
									</div>
									<div class="item-category">
										<a href="agent-lists1.html">11 Listings</a>
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
						<div class="col-xl-6 col-lg-6 col-md-12">
							<div class="team-box-6 wow fadeInUp" data-wow-delay=".6s">
								<div class="item-img">
									<a href="agent-lists1.html">
										<img
											src="img/team/team31.png"
											alt="team"
											width="184"
											height="184"
										/>
									</a>
								</div>
								<div class="item-content">
									<div class="item-title">
										<h3>
											<a href="agent-lists1.html">Polly Martinizer</a>
										</h3>
										<h4 class="item-subtitle">
											<a href="agency-lists1.html">Sweet Home</a>
										</h4>
									</div>
									<div class="item-category">
										<a href="agent-lists1.html">06 Listings</a>
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
			<section class="banner-collection4 motion-effects-wrap">
				<div class="item-element">
					<ul>
						<li>
							<img
								class="wow fadeInLeft"
								data-wow-delay=".4s"
								src="img/figure/shape19.svg"
								width="388"
								height="417"
								alt="shape"
							/>
						</li>
						<li>
							<img
								class="motion-effects12"
								src="img/figure/shape20.svg"
								width="191"
								height="178"
								alt="shape"
							/>
						</li>
						<li>
							<img
								src="img/figure/shape21.svg"
								width="570"
								height="243"
								alt="shape"
							/>
						</li>
					</ul>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-lg-3">
							<div class="banner-box-2 wow fadeInLeft" data-wow-delay=".5s">
								<div class="item-img">
									<img
										src="img/banner/banner5.png"
										width="309"
										height="523"
										alt="banner"
									/>
								</div>
							</div>
						</div>
						<div class="col-lg-5">
							<div class="banner-content-2 wow fadeInUp" data-wow-delay=".7s">
								<div class="item-heading-left">
									<h2 class="section-title">
										We’re Providing the Best Real Estate Services
									</h2>
									<p class="item-para">
										Make a type specimen book. It has survived not only
									</p>
									<p>five centuries, but also the leap into.</p>
								</div>
								<div class="row">
									<div class="col-lg-6 col-md-6">
										<div class="service-box-1">
											<div class="service-icon">
												<i class="fas fa-phone-alt"></i>
											</div>
											<div class="service-content">
												<h3 class="info-title">Our Hot Line:</h3>
												<p>+88 1950 555 33</p>
											</div>
										</div>
									</div>
									<div class="col-lg-6 col-md-6">
										<div class="service-box-1 service-box-2">
											<div class="service-icon">
												<i class="fas fa-phone-alt"></i>
											</div>
											<div class="service-content">
												<h3 class="info-title">Mail Us:</h3>
												<p>info@gmail.com</p>
											</div>
										</div>
									</div>
								</div>
								<div class="banner-button">
									<a href="contact.html" class="banner-btn">
										Contact With Us
									</a>
								</div>
							</div>
						</div>
						<div class="col-lg-4">
							<div
								class="banner-img-style-2 wow fadeInRight"
								data-wow-delay=".6s"
							>
								<img
									src="img/banner/banner4.png"
									width="569"
									height="480"
									alt="banner"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <section class="testimonial-wrap3">
				<div class="container">
					<div class="testimonial-layout3 swiper-container">
						<div class="swiper-wrapper">
							<div class="swiper-slide">
								<div class="item-img">
									<img
										src="img/slider/slider1.png"
										width="74"
										height="74"
										alt="slider"
									/>
								</div>
								<div class="testimonial-content">
									<h3 class="item-title">Maria Zokatti</h3>
									<div class="item-subtitle">SEO Marketing</div>
									<div class="rtin-content">
										<span>
											“ when an unknown printer took a galley of type and
											scrambled it to make a type specimen bookhas survived not
											only five centuries, but also the leap into electronic
											type setting emaining essentially unchanged follower.”
										</span>
										<div class="item-icon">
											<i class="fas fa-quote-left"></i>
										</div>
									</div>
								</div>
							</div>
							<div class="swiper-slide">
								<div class="item-img">
									<img
										src="img/slider/slider2.png"
										width="74"
										height="74"
										alt="slider"
									/>
								</div>
								<div class="testimonial-content">
									<h3 class="item-title">Maria Zokatti</h3>
									<div class="item-subtitle">SEO Marketing</div>
									<div class="rtin-content">
										<span>
											“ when an unknown printer took a galley of type and
											scrambled it to make a type specimen bookhas survived not
											only five centuries, but also the leap into electronic
											type setting emaining essentially unchanged follower.”
										</span>
										<div class="item-icon">
											<i class="fas fa-quote-left"></i>
										</div>
									</div>
								</div>
							</div>
							<div class="swiper-slide">
								<div class="item-img">
									<img
										src="img/slider/slider3.png"
										width="74"
										height="74"
										alt="slider"
									/>
								</div>
								<div class="testimonial-content">
									<h3 class="item-title">Maria Zokatti</h3>
									<div class="item-subtitle">SEO Marketing</div>
									<div class="rtin-content">
										<span>
											“ when an unknown printer took a galley of type and
											scrambled it to make a type specimen bookhas survived not
											only five centuries, but also the leap into electronic
											type setting emaining essentially unchanged follower.”
										</span>
										<div class="item-icon">
											<i class="fas fa-quote-left"></i>
										</div>
									</div>
								</div>
							</div>
							<div class="swiper-slide">
								<div class="item-img">
									<img
										src="img/slider/slider1.png"
										width="74"
										height="74"
										alt="slider"
									/>
								</div>
								<div class="testimonial-content">
									<h3 class="item-title">Maria Zokatti</h3>
									<div class="item-subtitle">SEO Marketing</div>
									<div class="rtin-content">
										<span>
											“ when an unknown printer took a galley of type and
											scrambled it to make a type specimen bookhas survived not
											only five centuries, but also the leap into electronic
											type setting emaining essentially unchanged follower.”
										</span>
										<div class="item-icon">
											<i class="fas fa-quote-left"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <div class="swiper-button-prev testimonial-btn"></div>
						<div class="swiper-button-next testimonial-btn"></div> */}
			{/* </div>
				</div>
			</section>  */}
			<section class="banner-collection3">
				<div class="container">
					<div class="item-heading-center">
						<h2 class="section-title">Find Your Desire Dream Home Today!</h2>
						<div class="bg-title-wrap" style={{ display: "block" }}>
							<span class="background-title solid">Dream Home</span>
						</div>
						<div class="banner-button">
							<a href="contact.html" class="banner-btn">
								Contact With Us
							</a>
						</div>
					</div>
				</div>
			</section>{" "}
			<Footer />
		</div>
	);
};

export default Home;
