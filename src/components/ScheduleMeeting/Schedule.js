import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Link, useNavigate } from "react-router-dom";

const Schedule = () => {
   return (
		<div>
			<Navbar />

			<section class="property-wrap1 property-wrap-10">
				<div class="container">
					<div class="item-heading-center">
						<span class="section-subtitle">Meetings</span>
						<h2 class="section-title">Scheduled Meetings</h2>
						<div class="bg-title-wrap" style={{ display: "block" }}>
							<span class="background-title solid">Meetings</span>
						</div>
					</div>
					<div class="row">
						<div class="col-xl-4 col-lg-6 col-md-6">
							<div
								class="property-box2 wow animated fadeInUp"
								data-wow-delay=".3s"
							>
								<div class="item-img">
									<Link to="/singleproperty">
										<img
											src="img/blog/blog4.jpg"
											alt="blog"
											width="510"
											height="340"
										/>
									</Link>
									
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
												<Link
													to="/"
													data-bs-toggle="tooltip"
													data-bs-placement="top"
													title="Favourites"
												>
													<i class="flaticon-heart"></i>
												</Link>
											</li>
											<li>
												<Link
													to="/"
													data-bs-toggle="tooltip"
													data-bs-placement="top"
													title="Compare"
												>
													<i class="flaticon-left-and-right-arrows"></i>
												</Link>
											</li>
										</ul>
									</div>
								</div>
								<div class="item-category10">
									<Link to="SingleProperty">Appartment</Link>
								</div>
								<div class="item-content">
									<div class="verified-area">
										<h3 class="item-title">
											<Link to="/singleproperty">Family House For Buy</Link>
										</h3>
									</div>
									<div class="location-area">
										<i class="flaticon-maps-and-flags"></i>Downey, California
									</div>
									<div class="item-categoery3">
										<ul>
											<li>
												Meeting Time: 03
											</li>
											<li>
												Meeting Date: 02
											</li>
											
										</ul>
                                        <ul>
											<li>
												Buyer/Seller Name: Abc
											</li>
											<li>
												Buyer/Seller Phone no.: 02
											</li>
											
										</ul>
                                        <ul>
											<li>
												Meeting ID: 02
											</li>
											
											
										</ul>
                                        <div class="property-button">
						                    <Link to="/" class="item-btn">
							                    Join Meeting
						                    </Link>
					                    </div>
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

export default Schedule;
