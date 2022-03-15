import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const SignUp = () => {

  return (
    <div>
      <Navbar />
      <div class="breadcrumb-wrap">
            <div class="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">My Account</li>
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
                            <form id="rtcl-signup-form" class="form-horizontal" method="post" novalidate="novalidate">
                                <div class="form-group">
                                    <label for="name" class="control-label">
                                        Name
                                        <strong class="rtcl-required">*</strong>
                                    </label>
                                    <input type="text" name="name"  value="" id="name" class="form-control" required=""/>
                                </div>
                                <div class="form-group">
                                    <label for="email" class="control-label">
                                        Email
                                        <strong class="rtcl-required">*</strong>
                                    </label>
                                    <input type="email" name="email"  value="" id="email" class="form-control" required=""/>
                                </div>
                                <div class="form-group">
                                    <label for="userpass" class="control-label">
                                        Password <strong class="rtcl-required">*</strong>
                                    </label>
                                    <input type="password" name="password" id="userpass"  class="form-control" required=""/>
                                </div>
                                <div class="form-group">
                                    <label for="phoneno" class="control-label">
                                        Phone Number <strong class="rtcl-required">*</strong>
                                    </label>
                                    <input type="tel" name="phoneno" id="phoneno"  class="form-control" required=""/>
                                </div>
                                
                                <div class="form-group d-flex align-items-center">
                                <button type="submit" name="signup" class="btn btn-primary" value="signup">
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
