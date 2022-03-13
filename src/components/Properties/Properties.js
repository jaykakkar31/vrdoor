import React, { useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Properties = () => {
  const [isClick, setIsClick] = useState(false);

  return (
    <div>
      <Navbar />

      {/* <!--=====================================-->
    <!--=   Half Map     Start              =-->
    <!--=====================================--> */}

      <section class="half-map-wrap1">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-6">
              <form
                action="https://radiustheme.com/demo/html/homlisti/half-map1.html"
                class="map-form"
              >
                <input
                  type="text"
                  class="form-control"
                  placeholder="What are you looking for?"
                />
                <div class="row">
                  <div class="col-lg-4 pl-15">
                    <div class="rld-single-select">
                      <select
                        class="select single-select mr-0"
                        style={{ width: "fitContent", padding: "0 20px" }}
                      >
                        <option value="1">Property Type</option>
                        <option value="2">Family House</option>
                        <option value="3">Apartment</option>
                        <option value="3">Condo</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-4 pl-15">
                    <div class="rld-single-select">
                      <select
                        class="select single-select mr-0"
                        style={{ width: "fitContent", padding: "0 20px" }}
                      >
                        <option value="1">All Categories</option>
                        <option value="2">Rent</option>
                        <option value="3">Sell</option>
                        <option value="3">Buy</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-4 pl-15">
                    <div class="rld-single-select">
                      <select
                        class="select single-select mr-0"
                        style={{ width: "fitContent", padding: "0 20px" }}
                      >
                        <option value="1">All Cities</option>
                        <option value="2">Los Angeles</option>
                        <option value="3">Chicago</option>
                        <option value="3">Philadelphia</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
              <div class="banner-search-wrap banner-search-wrap-2">
                <div class="rld-main-search rld-main-search2">
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="rld-progress-box">
                        <div class="main-search-field-3">
                          {/* <!-- Area Range --> */}
                          <div class="price-range-wrapper">
                            <div class="range-box">
                              <div class="price-label">Price:</div>
                              <div
                                id="price-range-filter-4"
                                class="price-range-filter"
                              ></div>
                              <div class="price-filter-wrap d-flex align-items-center">
                                <div class="price-range-select">
                                  <div class="price-range range-title">$</div>
                                  <div
                                    class="price-range"
                                    id="price-range-min-4"
                                  ></div>
                                  <div class="price-range">-</div>
                                  <div
                                    class="price-range"
                                    id="price-range-max-4"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="dropdown-filter"
                          onClick={() => {
                            setIsClick(!isClick);
                          }}
                        >
                          <span>
                            <i class="fas fa-sliders-h"></i>
                          </span>
                        </div>
                        <div class="filter-button">
                          <a
                            href="single-listing1.html"
                            class="filter-btn1 search-btn"
                          >
                            Search<i class="fas fa-search"></i>
                          </a>
                        </div>
                        <div
                          class={`explore__form-checkbox-list explore__form-checkbox-list2 full-filter ${
                            isClick && "filter-block"
                          }`}
                        >
                          <div class="row">
                            <div class="col-lg-4 col-md-6 py-1 pr-30 pl-0">
                              {/* <!-- Form Property Status --> */}
                              <div class="form-group bed">
                                <label class="item-bedrooms">Bedrooms</label>
                                <div
                                  class="nice-select form-control wide"
                                  tabIndex="0"
                                >
                                  <span class="current">Any</span>
                                  <ul class="list">
                                    <li data-value="1" class="option selected ">
                                      For Sale
                                    </li>
                                    <li data-value="2" class="option">
                                      For Rent
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              {/* <!--/ End Form Property Status --> */}
                            </div>
                            <div class="col-lg-4 col-md-6 py-1 pr-30 pl-0 ">
                              {/* <!-- Form Bedrooms --> */}
                              <div class="form-group bath">
                                <label class="item-bath">Bathrooms</label>
                                <div
                                  class="nice-select form-control wide"
                                  tabIndex="0"
                                >
                                  <span class="current">Any</span>
                                  <ul class="list">
                                    <li data-value="1" class="option selected">
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
                              {/* <!--/ End Form Bedrooms --> */}
                            </div>
                            <div class="col-lg-4 col-md-6 py-1 pl-0 pr-0">
                              {/* <!-- Form Bathrooms --> */}
                              <div class="form-group garage">
                                <label class="item-garage">Garage</label>
                                <div
                                  class="nice-select form-control wide"
                                  tabIndex="0"
                                >
                                  <span class="current">Any</span>
                                  <ul class="list">
                                    <li data-value="1" class="option selected">
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
                              {/* <!--/ End Form Bathrooms --> */}
                            </div>
                            {/* <!-- Price Fields --> */}
                            <div class="main-search-field-2 col-12">
                              {/* <!-- Area Range --> */}
                              <div class="row">
                                <div class="col-md-6 pl-0">
                                  <div class="price-range-wrapper">
                                    <div class="range-box">
                                      <div class="price-label">Flat Size:</div>
                                      <div
                                        id="price-range-filter-5"
                                        class="price-range-filter"
                                      ></div>
                                      <div class="price-filter-wrap d-flex align-items-center">
                                        <div class="price-range-select">
                                          <div
                                            class="price-range"
                                            id="price-range-min-5"
                                          ></div>
                                          <div class="price-range">-</div>
                                          <div
                                            class="price-range"
                                            id="price-range-max-5"
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
                                        id="price-range-filter-6"
                                        class="price-range-filter"
                                      ></div>
                                      <div class="price-filter-wrap d-flex align-items-center">
                                        <div class="price-range-select">
                                          <div
                                            class="price-range"
                                            id="price-range-min-6"
                                          ></div>
                                          <div class="price-range">-</div>
                                          <div
                                            class="price-range"
                                            id="price-range-max-6"
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
                            {/* <!-- row --> */}
                            <div class="row">
                              <div class="col-lg-12 col-md-12 col-sm-12 mt-3">
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
                            {/* <!-- /row --> */}
                            <div class="filter-button">
                              <a href="half-map1.html" class="filter-btn1">
                                Apply Filter
                              </a>
                              <a
                                href="half-map1.html"
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
                {/* <!--/ End Search Form --> */}
              </div>
              <div class="property-wrap3">
                <div class="row justify-content-center">
                  <div class="col-lg-12 col-md-12">
                    <div class="item-shorting-box">
                      <div class="shorting-title">
                        <h4 class="item-title">Showing 1–6 of 12 results</h4>
                      </div>
                      <div class="item-shorting-box-2">
                        <div class="by-shorting">
                          <div class="shorting">Sort by:</div>
                          <select class="select single-select mr-0">
                            <option value="1">Default</option>
                            <option value="2">High Price</option>
                            <option value="3">Medium Price</option>
                            <option value="3">Low Price</option>
                          </select>
                        </div>
                        <div class="grid-button">
                          <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                              <a
                                class="nav-link active"
                                data-bs-toggle="tab"
                                href="#mylisting"
                              >
                                <i class="fas fa-th"></i>
                              </a>
                            </li>
                            <li class="nav-item">
                              <a
                                class="nav-link"
                                data-bs-toggle="tab"
                                href="#reviews"
                              >
                                <i class="fas fa-list-ul"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-style-1 tab-style-3">
                  <div class="tab-content" id="myTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="mylisting"
                      role="tabpanel"
                    >
                      <div class="row justify-content-center">
                        <div class="col-xl-6 col-lg-6 col-md-6">
                          <div
                            class="property-box2 wow animated fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <div class="item-img">
                              <a href="single-listing1.html">
                                <img
                                  src="img/blog/property21.jpg"
                                  alt="blog"
                                  width="660"
                                  height="440"
                                />
                              </a>
                              <div class="item-category-box1">
                                <div class="item-category">For Rent</div>
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
                                  <a href="single-listing1.html">
                                    Family House For Rent
                                  </a>
                                </h3>
                              </div>
                              <div class="location-area">
                                <i class="flaticon-maps-and-flags"></i>Downey,
                                California
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
                                    <i class="flaticon-two-overlapping-square"></i>
                                    931 Sqft
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6">
                          <div
                            class="property-box2 wow animated fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <div class="item-img">
                              <a href="single-listing1.html">
                                <img
                                  src="img/blog/property22.jpg"
                                  alt="blog"
                                  width="660"
                                  height="440"
                                />
                              </a>
                              <div class="item-category-box1">
                                <div class="item-category">For Buy</div>
                              </div>
                              <div class="rent-price">
                                <div class="item-price">$35,000</div>
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
                                <i class="flaticon-maps-and-flags"></i>Downey,
                                California
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
                                    <i class="flaticon-two-overlapping-square"></i>
                                    931 Sqft
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6">
                          <div
                            class="property-box2 wow animated fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <div class="item-img">
                              <a href="single-listing1.html">
                                <img
                                  src="img/blog/property23.jpg"
                                  alt="blog"
                                  width="660"
                                  height="440"
                                />
                              </a>
                              <div class="item-category-box1">
                                <div class="item-category">For Rent</div>
                              </div>
                              <div class="rent-price">
                                <div class="item-price">
                                  $25,000
                                  <span>
                                    <i>/</i>yr
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
                                    The Most Luxarious
                                  </a>
                                </h3>
                              </div>
                              <div class="location-area">
                                <i class="flaticon-maps-and-flags"></i>Downey,
                                California
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
                                    <i class="flaticon-two-overlapping-square"></i>
                                    931 Sqft
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6">
                          <div
                            class="property-box2 wow animated fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <div class="item-img">
                              <a href="single-listing1.html">
                                <img
                                  src="img/blog/property24.jpg"
                                  alt="blog"
                                  width="660"
                                  height="440"
                                />
                              </a>
                              <div class="item-category-box1">
                                <div class="item-category">For Buy</div>
                              </div>
                              <div class="rent-price">
                                <div class="item-price">$28,000</div>
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
                                  <a href="single-listing1.html">
                                    Triple Story House for Rent
                                  </a>
                                </h3>
                              </div>
                              <div class="location-area">
                                <i class="flaticon-maps-and-flags"></i>Downey,
                                California
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
                                    <i class="flaticon-two-overlapping-square"></i>
                                    931 Sqft
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6">
                          <div
                            class="property-box2 wow animated fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <div class="item-img">
                              <a href="single-listing1.html">
                                <img
                                  src="img/blog/property25.jpg"
                                  alt="blog"
                                  width="660"
                                  height="440"
                                />
                              </a>
                              <div class="item-category-box1">
                                <div class="item-category">For Sell</div>
                              </div>
                              <div class="rent-price">
                                <div class="item-price">
                                  $38,000
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
                                    Northwest Office Space
                                  </a>
                                </h3>
                              </div>
                              <div class="location-area">
                                <i class="flaticon-maps-and-flags"></i>Downey,
                                California
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
                                    <i class="flaticon-two-overlapping-square"></i>
                                    931 Sqft
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6">
                          <div
                            class="property-box2 wow animated fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <div class="item-img">
                              <a href="single-listing1.html">
                                <img
                                  src="img/blog/property26.jpg"
                                  alt="blog"
                                  width="660"
                                  height="440"
                                />
                              </a>
                              <div class="item-category-box1">
                                <div class="item-category">For Rent</div>
                              </div>
                              <div class="rent-price">
                                <div class="item-price">
                                  $25,000
                                  <span>
                                    <i>/</i>yr
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
                                  <a href="single-listing1.html">
                                    Diamond Manco Apartment
                                  </a>
                                </h3>
                              </div>
                              <div class="location-area">
                                <i class="flaticon-maps-and-flags"></i>Downey,
                                California
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
                                    <i class="flaticon-two-overlapping-square"></i>
                                    931 Sqft
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6">
                          <div
                            class="property-box2 wow animated fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <div class="item-img">
                              <a href="single-listing1.html">
                                <img
                                  src="img/blog/property21.jpg"
                                  alt="blog"
                                  width="660"
                                  height="440"
                                />
                              </a>
                              <div class="item-category-box1">
                                <div class="item-category">For Sell</div>
                              </div>
                              <div class="rent-price">
                                <div class="item-price">$45,000</div>
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
                                <i class="flaticon-maps-and-flags"></i>Downey,
                                California
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
                                    <i class="flaticon-two-overlapping-square"></i>
                                    931 Sqft
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6">
                          <div
                            class="property-box2 wow animated fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <div class="item-img">
                              <a href="single-listing1.html">
                                <img
                                  src="img/blog/property22.jpg"
                                  alt="blog"
                                  width="660"
                                  height="440"
                                />
                              </a>
                              <div class="item-category-box1">
                                <div class="item-category">For Rent</div>
                              </div>
                              <div class="rent-price">
                                <div class="item-price">
                                  $9,000
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
                                    Affordable Green Villa House
                                  </a>
                                </h3>
                              </div>
                              <div class="location-area">
                                <i class="flaticon-maps-and-flags"></i>Downey,
                                California
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
                                    <i class="flaticon-two-overlapping-square"></i>
                                    931 Sqft
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="pagination-style-1">
                        <ul class="pagination">
                          <li class="page-item">
                            <a
                              class="page-link"
                              href="with-sidebar2.html"
                              aria-label="Previous"
                            >
                              <span aria-hidden="true">&laquo;</span>
                              <span class="sr-only">Previous</span>
                            </a>
                          </li>
                          <li class="page-item">
                            <a
                              class="page-link active"
                              href="with-sidebar2.html"
                            >
                              1
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="with-sidebar2.html">
                              2
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="with-sidebar2.html">
                              3
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="with-sidebar2.html">
                              4
                            </a>
                          </li>
                          <li class="page-item">
                            <a
                              class="page-link"
                              href="with-sidebar2.html"
                              aria-label="Next"
                            >
                              <span aria-hidden="true">&raquo;</span>
                              <span class="sr-only">Next</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="reviews" role="tabpanel">
                      <div class="row">
                        <div class="col-xl-12 col-lg-9 mx-auto">
                          <div
                            class="property-box2 property-box4 wow animated fadeInUp"
                            data-wow-delay=".6s"
                          >
                            <div class="item-img">
                              <a href="single-listing1.html">
                                <img
                                  src="img/blog/blog13.jpg"
                                  alt="blog"
                                  width="250"
                                  height="200"
                                />
                              </a>
                              <div class="item-category-box1">
                                <div class="item-category">For Rent</div>
                              </div>
                            </div>
                            <div class="item-content item-content-property">
                              <div class="item-category10">
                                <a href="single-listing1.html">Appartment</a>
                              </div>
                              <div class="react-icon react-icon-2">
                                <ul>
                                  <li>
                                    <a
                                      href="favourite.html"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="bottom"
                                      title="Favourites"
                                    >
                                      <i class="flaticon-heart"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="compare.html"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="bottom"
                                      title="Compare"
                                    >
                                      <i class="flaticon-left-and-right-arrows"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div class="verified-area">
                                <h3 class="item-title">
                                  <a href="single-listing1.html">
                                    The Luxarious Fitted Sells
                                  </a>
                                </h3>
                              </div>
                              <div class="location-area">
                                <i class="flaticon-maps-and-flags"></i>Downey,
                                California
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
                                    <i class="flaticon-two-overlapping-square"></i>
                                    931 Sqft
                                  </li>
                                </ul>
                              </div>
                              <div class="item-price">
                                $40,000<i>/</i>
                                <span>yr</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-12 col-lg-9 mx-auto">
                          <div
                            class="property-box2 property-box4 wow animated fadeInUp"
                            data-wow-delay=".6s"
                          >
                            <div class="item-img">
                              <a href="single-listing1.html">
                                <img
                                  src="img/blog/blog13.jpg"
                                  alt="blog"
                                  width="250"
                                  height="200"
                                />
                              </a>
                              <div class="item-category-box1">
                                <div class="item-category">For Sell</div>
                              </div>
                            </div>
                            <div class="item-content item-content-property">
                              <div class="item-category10">
                                <a href="single-listing1.html">Office</a>
                              </div>
                              <div class="react-icon react-icon-2">
                                <ul>
                                  <li>
                                    <a
                                      href="favourite.html"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="bottom"
                                      title="Favourites"
                                    >
                                      <i class="flaticon-heart"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="compare.html"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="bottom"
                                      title="Compare"
                                    >
                                      <i class="flaticon-left-and-right-arrows"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div class="verified-area">
                                <h3 class="item-title">
                                  <a href="single-listing1.html">
                                    The Luxarious Fitted Sells{" "}
                                  </a>
                                </h3>
                              </div>
                              <div class="location-area">
                                <i class="flaticon-maps-and-flags"></i>Downey,
                                California
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
                                    <i class="flaticon-two-overlapping-square"></i>
                                    931 Sqft
                                  </li>
                                </ul>
                              </div>
                              <div class="item-price">
                                $35,000<i>/</i>
                                <span>mo</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-12 col-lg-9 mx-auto">
                          <div
                            class="property-box2 property-box4 wow animated fadeInUp"
                            data-wow-delay=".6s"
                          >
                            <div class="item-img">
                              <a href="single-listing1.html">
                                <img
                                  src="img/blog/blog14.jpg"
                                  alt="blog"
                                  width="250"
                                  height="200"
                                />
                              </a>
                              <div class="item-category-box1">
                                <div class="item-category">For Sell</div>
                              </div>
                            </div>
                            <div class="item-content item-content-property">
                              <div class="item-category10">
                                <a href="single-listing1.html">Villa</a>
                              </div>
                              <div class="react-icon react-icon-2">
                                <ul>
                                  <li>
                                    <a
                                      href="favourite.html"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="bottom"
                                      title="Favourites"
                                    >
                                      <i class="flaticon-heart"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="compare.html"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="bottom"
                                      title="Compare"
                                    >
                                      <i class="flaticon-left-and-right-arrows"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div class="verified-area">
                                <h3 class="item-title">
                                  <a href="single-listing1.html">
                                    Diamond Manco Apartment
                                  </a>
                                </h3>
                              </div>
                              <div class="location-area">
                                <i class="flaticon-maps-and-flags"></i>Downey,
                                California
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
                                    <i class="flaticon-two-overlapping-square"></i>
                                    931 Sqft
                                  </li>
                                </ul>
                              </div>
                              <div class="item-price">
                                $25,000<i>/</i>
                                <span>mo</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-12 col-lg-9 mx-auto">
                          <div
                            class="property-box2 property-box4 wow animated fadeInUp"
                            data-wow-delay=".6s"
                          >
                            <div class="item-img">
                              <a href="single-listing1.html">
                                <img
                                  src="img/blog/blog13.jpg"
                                  alt="blog"
                                  width="250"
                                  height="200"
                                />
                              </a>
                              <div class="item-category-box1">
                                <div class="item-category">For Rent</div>
                              </div>
                            </div>
                            <div class="item-content item-content-property">
                              <div class="item-category10">
                                <a href="single-listing1.html">Restaurant</a>
                              </div>
                              <div class="react-icon react-icon-2">
                                <ul>
                                  <li>
                                    <a
                                      href="favourite.html"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="bottom"
                                      title="Favourites"
                                    >
                                      <i class="flaticon-heart"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="compare.html"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="bottom"
                                      title="Compare"
                                    >
                                      <i class="flaticon-left-and-right-arrows"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div class="verified-area">
                                <h3 class="item-title">
                                  <a href="single-listing1.html">
                                    Affordable Green Villa{" "}
                                  </a>
                                </h3>
                              </div>
                              <div class="location-area">
                                <i class="flaticon-maps-and-flags"></i>Downey,
                                California
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
                                    <i class="flaticon-two-overlapping-square"></i>
                                    931 Sqft
                                  </li>
                                </ul>
                              </div>
                              <div class="item-price">
                                $35,000<i>/</i>
                                <span>mo</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-12 col-lg-9 mx-auto">
                          <div
                            class="property-box2 property-box4 wow animated fadeInUp"
                            data-wow-delay=".6s"
                          >
                            <div class="item-img">
                              <a href="single-listing1.html">
                                <img
                                  src="img/blog/blog17.jpg"
                                  alt="blog"
                                  width="250"
                                  height="200"
                                />
                              </a>
                              <div class="item-category-box1">
                                <div class="item-category">For Buy</div>
                              </div>
                            </div>
                            <div class="item-content item-content-property">
                              <div class="item-category10">
                                <a href="single-listing1.html">Appartment</a>
                              </div>
                              <div class="react-icon react-icon-2">
                                <ul>
                                  <li>
                                    <a
                                      href="favourite.html"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="bottom"
                                      title="Favourites"
                                    >
                                      <i class="flaticon-heart"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="compare.html"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="bottom"
                                      title="Compare"
                                    >
                                      <i class="flaticon-left-and-right-arrows"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div class="verified-area">
                                <h3 class="item-title">
                                  <a href="single-listing1.html">
                                    Countryside Modern View
                                  </a>
                                </h3>
                              </div>
                              <div class="location-area">
                                <i class="flaticon-maps-and-flags"></i>Downey,
                                California
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
                                    <i class="flaticon-two-overlapping-square"></i>
                                    931 Sqft
                                  </li>
                                </ul>
                              </div>
                              <div class="item-price">
                                $25,000<i>/</i>
                                <span>mo</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-12 col-lg-9 mx-auto">
                          <div
                            class="property-box2 property-box4 wow animated fadeInUp"
                            data-wow-delay=".6s"
                          >
                            <div class="item-img">
                              <a href="single-listing1.html">
                                <img
                                  src="img/blog/blog17.jpg"
                                  alt="blog"
                                  width="250"
                                  height="200"
                                />
                              </a>
                              <div class="item-category-box1">
                                <div class="item-category">For Rent</div>
                              </div>
                            </div>
                            <div class="item-content item-content-property">
                              <div class="item-category10">
                                <a href="single-listing1.html">Studio Home</a>
                              </div>
                              <div class="react-icon react-icon-2">
                                <ul>
                                  <li>
                                    <a
                                      href="favourite.html"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="bottom"
                                      title="Favourites"
                                    >
                                      <i class="flaticon-heart"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="compare.html"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="bottom"
                                      title="Compare"
                                    >
                                      <i class="flaticon-left-and-right-arrows"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div class="verified-area">
                                <h3 class="item-title">
                                  <a href="single-listing1.html">
                                    Diamond Manco Apartment
                                  </a>
                                </h3>
                              </div>
                              <div class="location-area">
                                <i class="flaticon-maps-and-flags"></i>Downey,
                                California
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
                                    <i class="flaticon-two-overlapping-square"></i>
                                    931 Sqft
                                  </li>
                                </ul>
                              </div>
                              <div class="item-price">
                                $35,000<i>/</i>
                                <span>yr</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-12 col-lg-9 mx-auto">
                          <div
                            class="property-box2 property-box4 wow animated fadeInUp"
                            data-wow-delay=".6s"
                          >
                            <div class="item-img">
                              <a href="single-listing1.html">
                                <img
                                  src="img/blog/blog18.jpg"
                                  alt="blog"
                                  width="250"
                                  height="200"
                                />
                              </a>
                              <div class="item-category-box1">
                                <div class="item-category">For Rent</div>
                              </div>
                            </div>
                            <div class="item-content item-content-property">
                              <div class="item-category10">
                                <a href="single-listing1.html">Office</a>
                              </div>
                              <div class="react-icon react-icon-2">
                                <ul>
                                  <li>
                                    <a
                                      href="favourite.html"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="bottom"
                                      title="Favourites"
                                    >
                                      <i class="flaticon-heart"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="compare.html"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="bottom"
                                      title="Compare"
                                    >
                                      <i class="flaticon-left-and-right-arrows"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div class="verified-area">
                                <h3 class="item-title">
                                  <a href="single-listing1.html">
                                    New Shopping Mall Sale
                                  </a>
                                </h3>
                              </div>
                              <div class="location-area">
                                <i class="flaticon-maps-and-flags"></i>
                                Downey,California
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
                                    <i class="flaticon-two-overlapping-square"></i>
                                    931 Sqft
                                  </li>
                                </ul>
                              </div>
                              <div class="item-price">
                                $15,000<i>/</i>
                                <span>mo</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="pagination-style-1">
                        <ul class="pagination">
                          <li class="page-item">
                            <a
                              class="page-link"
                              href="with-sidebar2.html"
                              aria-label="Previous"
                            >
                              <span aria-hidden="true">&laquo;</span>
                              <span class="sr-only">Previous</span>
                            </a>
                          </li>
                          <li class="page-item">
                            <a
                              class="page-link active"
                              href="with-sidebar2.html"
                            >
                              1
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="with-sidebar2.html">
                              2
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="with-sidebar2.html">
                              3
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="with-sidebar2.html">
                              4
                            </a>
                          </li>
                          <li class="page-item">
                            <a
                              class="page-link"
                              href="with-sidebar2.html"
                              aria-label="Next"
                            >
                              <span aria-hidden="true">&raquo;</span>
                              <span class="sr-only">Next</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="location-img">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14604.9440088864!2d90.42637295!3d23.774608949999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1640153797321!5m2!1sen!2sbd"
                  width="907"
                  height="2368"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Properties;
