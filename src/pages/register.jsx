import React from 'react'
import '../css/vendors_css.css';
import '../css/style.css';
import '../css/skin_color.css';
import bg from '../images/auth-bg/bg-2.jpg'

function AddLibrary(urlOfTheLibrary) {
    const script = document.createElement('script');
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
}

const Register = () => {
  return (
    <>
    <body className="hold-transition theme-primary bg-img" style={{backgroundImage:`url(${bg})`}}>
	
	<div className="container h-p100">
		<div className="row align-items-center justify-content-md-center h-p100">
			
			<div className="col-12">
				<div className="row justify-content-center no-gutters">
					<div className="col-lg-5 col-md-5 col-12">
						<div className="bg-white rounded30 shadow-lg">
							<div className="content-top-agile p-20 pb-0">
								<h2 className="text-primary">Get started with Us</h2>
								<p className="mb-0">Register a new membership</p>							
							</div>
							<div className="p-40">
								<form action="index.html" method="post">
									<div className="form-group">
										<div className="input-group mb-3">
											<div className="input-group-prepend">
												<span className="input-group-text bg-transparent"><i className="ti-user"></i></span>
											</div>
											<input type="text" className="form-control pl-15 bg-transparent" placeholder="Full Name"/>
										</div>
									</div>
									<div className="form-group">
										<div className="input-group mb-3">
											<div className="input-group-prepend">
												<span className="input-group-text bg-transparent"><i className="ti-email"></i></span>
											</div>
											<input type="email" className="form-control pl-15 bg-transparent" placeholder="Email"/>
										</div>
									</div>
									<div className="form-group">
										<div className="input-group mb-3">
											<div className="input-group-prepend">
												<span className="input-group-text bg-transparent"><i className="ti-lock"></i></span>
											</div>
											<input type="password" className="form-control pl-15 bg-transparent" placeholder="Password"/>
										</div>
									</div>
									<div className="form-group">
										<div className="input-group mb-3">
											<div className="input-group-prepend">
												<span className="input-group-text bg-transparent"><i className="ti-lock"></i></span>
											</div>
											<input type="password" className="form-control pl-15 bg-transparent" placeholder="Retype Password"/>
										</div>
									</div>
									  <div className="row">
										<div className="col-12">
										  <div className="checkbox">
											<input type="checkbox" id="basic_checkbox_1" />
											<label for="basic_checkbox_1">I agree to the <a href="#" className="text-warning"><b>Terms</b></a></label>
										  </div>
										</div>
										<div className="col-12 text-center">
										  <button type="submit" className="btn btn-info margin-top-10">SIGN IN</button>
										</div>
									  </div>
								</form>				
								<div className="text-center">
									<p className="mt-15 mb-0">Already have an account?<a href="auth_login.html" className="text-danger ml-5"> Sign In</a></p>
								</div>
							</div>
						</div>								

						<div className="text-center">
						  <p className="mt-20 text-white">- Register With -</p>
						  <p className="gap-items-2 mb-20">
							  <a className="btn btn-social-icon btn-round btn-facebook" href="#"><i className="fa fa-facebook"></i></a>
							  <a className="btn btn-social-icon btn-round btn-twitter" href="#"><i className="fa fa-twitter"></i></a>
							  <a className="btn btn-social-icon btn-round btn-instagram" href="#"><i className="fa fa-instagram"></i></a>
							</p>	
						</div>
					</div>
				</div>
			</div>			
		</div>
	</div>


	<script src="js/vendors.min.js"></script>
	<script src="js/pages/chat-popup.js"></script>
	<script src="../assets/vendor_components/apexcharts-bundle/dist/apexcharts.min.js"></script>
    <script src="../assets/icons/feather-icons/feather.min.js"></script>	
	
	
</body>
    </>
  )
}

export default Register