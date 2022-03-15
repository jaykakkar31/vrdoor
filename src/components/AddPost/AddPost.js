import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
const AddPost = () => {
    return (
        <div>
            <Navbar />
            <div
            class="rt-header-menu mean-container position-relative"
            id="meanmenu">
            <div class="mean-bar">
                <a href="index.html">
                    <img src='img/logo.svg' alt='logo' class='img-fluid'/>
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
                                    <li><a href="https://www.radiustheme.com/demo/html/homlisti/about.html">About Us</a></li>
                                    <li><a href="404.html">Error page</a></li>
                                    <li>
                                        <a href="with-sidebar.html">Properties Grid</a>
                                    </li>
                                    <li><a href="without-sidebar.html">Properties Full Width</a></li>
                                    <li><a href="single-agency1.html">Single Agency page</a></li>
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
                                    <li><a href="agent-reviews1.html">Agent Reviews Page</a></li>
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
  
        <div class="breadcrumb-wrap">
            <div class="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Post An Add</li>
                    </ol>
                </nav>
            </div>
        </div>
   
    <main class="site-main content-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-sm-12 col-12">
                    <div class="page-content-block">
                        <div class="main-content">
                            <div class="clearfix">
                                <div id="post-95" class="post-95 page type-page status-publish">
                                    <div class="rtcl">
                                        <div class="row" id="rtcl-user-login-wrapper">
                                            <div class="col-md-12 rtcl-login-form-wrap">
                                                <h2>Post An Add</h2>
                                                <form id="rtcl-login-form" class="form-horizontal" method="post" novalidate="novalidate">
                                                    <div class="form-group">
                                                        <label for="rtcl-user-login" class="control-label">
                                                            Username or E-mail
                                                            <strong class="rtcl-required">*</strong>
                                                        </label>
                                                        <input type="text" name="username" autocomplete="username" value="" id="rtcl-user-login" class="form-control" required=""/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="rtcl-user-pass" class="control-label">
                                                            Password <strong class="rtcl-required">*</strong>
                                                        </label>
                                                        <input type="password" name="password" id="rtcl-user-pass" autocomplete="current-password" class="form-control" required=""/>
                                                    </div>
    
                                                    <div class="form-group d-flex align-items-center">
                                                        <button type="submit" name="rtcl-login" class="btn btn-primary" value="login">
                                                            Login
                                                        </button>
                                                        <div class="form-check">
                                                            <input  type="checkbox" name="rememberme" id="rtcl-rememberme" value="forever"/>
                                                            <label  class="form-check-label" for="rtcl-rememberme"> Remember Me</label>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <p class="rtcl-forgot-password">
                                                            <a href="#">Forgot Your Password</a>
                                                        </p>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div class="page-pagination"></div>
                    </div>
                </div>
                </div>
                <div class="col-lg-4 widget-break-lg sidebar-widget">
                    <div class="widget widget-search-box">
                        <h3 class="widget-subtitle">Search</h3>
                        <div class="widget-form-box">
                            <input class="form-control" type="text" placeholder="What are you looking for?" />
                            <div class="item-search"><i class="fas fa-search"></i></div>
                        </div>
                    </div>
                    <div class="widget widget-categoery-box">
                        <h3 class="widget-subtitle">Categories</h3>
                        <ul class="categoery-list">
                            <li><a href="single-listing1.html">Apartments<span class="categoery-count">03</span></a></li>
                            <li><a href="single-listing1.html">Corporate Building<span class="categoery-count">05</span></a></li>
                            <li><a href="single-listing1.html">Home Land<span class="categoery-count">01</span></a></li>
                            <li><a href="single-listing1.html">Family House<span class="categoery-count">05</span></a></li>
                            <li><a href="single-listing1.html">Real Homes<span class="categoery-count">08</span></a></li>
                            <li><a href="single-listing1.html">Realty Space<span class="categoery-count">09</span></a></li>
                        </ul>
                    </div>
                    <div class="widget widget-listing-box1">
                        <h3 class="widget-subtitle">Latest Listing</h3>
                        <div class="widget-listing">
                            <div class="item-img">
                                <a href="single-listing1.html"><img src="img/blog/widget2.jpg" alt="widget" width="120" height="102" /></a>
                            </div>
                            <div class="item-content">
                                <h5 class="item-title"><a href="single-listing1.html">House Highland Ave  Los Angeles</a></h5>
                                <div class="location-area"><i class="flaticon-maps-and-flags"></i>California</div>
                                <div class="item-price">$3,000<span>/mo</span></div>
                            </div>
                        </div>
                        <div class="widget-listing">
                            <div class="item-img">
                                <a href="single-listing1.html"><img src="img/blog/widget3.jpg" alt="widget" width="120" height="102" /></a>
                            </div>
                            <div class="item-content">
                                <h5 class="item-title"><a href="single-listing1.html">House Highland Ave  Los Angeles</a></h5>
                                <div class="location-area"><i class="flaticon-maps-and-flags"></i>California</div>
                                <div class="item-price">$1,200<span>/mo</span></div>
                            </div>
                        </div>
                        <div class="widget-listing no-brd">
                            <div class="item-img">
                                <a href="single-agent1.html"><img src="img/blog/widget4.jpg" alt="widget" width="120" height="102" /></a>
                            </div>
                            <div class="item-content">
                                <h5 class="item-title"><a href="single-listing1.html">House Highland Ave  Los Angeles</a></h5>
                                <div class="location-area"><i class="flaticon-maps-and-flags"></i>California</div>
                                <div class="item-price">$1,900<span>/mo</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="widget widget-taglist">
                        <h3 class="widget-subtitle">Popular Tags</h3>
                        <ul class="tag-list">
                            <li><a href="single-listing1.html">apartment</a></li>
                            <li><a href="single-listing1.html">building</a></li>
                            <li><a href="single-listing1.html">modern</a></li>
                            <li><a href="single-listing1.html">luxarious</a></li>
                            <li><a href="single-listing1.html">real estate</a></li>
                            <li><a href="single-listing1.html">Villa</a></li>
                            <li><a href="single-listing1.html">apartment</a></li>
                            <li><a href="single-listing1.html">building</a></li>
                            <li><a href="single-listing1.html">modern</a></li>
                        </ul>
                    </div>
                    <div class="widget widget-post">
                        <div class="item-img">
                            <img src="img/blog/widget5.jpg" alt="widget" />
                            <div class="circle-shape">
                                <span class="item-shape"></span>
                            </div>
                        </div>
                        <div class="item-content">
                            <h4 class="item-title">Find Your Dream House</h4>
                            <div class="item-price">$2,999</div>
                            <div class="post-button"><a href="single-listing2.html" class="item-btn">Shop Now</a></div>
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
export default AddPost;
