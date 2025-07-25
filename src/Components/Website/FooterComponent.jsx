import React from 'react'
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';



export default function FooterComponent() {

  const notifySuccess = (message) => toast.success(message, {
    // Customization options
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  // Function to show an error toast
  const notifyError = (message) => toast.error(message, {
    // Customization options
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const newsLetter = () => {
    const email = document.getElementById("txtemail").value;
    // Regular expression for basic email validation
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email !== "" && regex.test(email)) {
        notifySuccess("Congratulations, you are now signed up for Newsletters!");
        document.getElementById("txtemail").value="";
    } else {
        notifyError("Please enter a valid email Id!");
    }
}


  return (
    <>
      <ToastContainer />
      <div className="container-fluid bg-dark text-body footer wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Address</h5>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Damana Square, Bhubaneswar</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+919090033366</p>
              <p className="mb-2"><i className="fa fa-envelope me-3"></i>mycpc@gmail.com</p>
              <div className="d-flex pt-2">
                <NavLink className="btn btn-square btn-outline-light btn-social" to=""><i className="fab fa-twitter"></i></NavLink>
                <NavLink className="btn btn-square btn-outline-light btn-social" to=""><i className="fab fa-facebook-f"></i></NavLink>
                <NavLink className="btn btn-square btn-outline-light btn-social" to=""><i className="fab fa-youtube"></i></NavLink>
                <NavLink className="btn btn-square btn-outline-light btn-social" to=""><i className="fab fa-linkedin-in"></i></NavLink>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Quick Links</h5>
              <NavLink className="btn btn-link" to="/about">About Us</NavLink>
              {/* <NavLink className="btn btn-link" to="/contact">Contact Us</NavLink> */}
              <NavLink className="btn btn-link" to="/services">Our Services</NavLink>
              <NavLink className="btn btn-link" to="projects">Projects</NavLink>
              <NavLink className="btn btn-link" to="/quote">Get a Quote</NavLink>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Project Gallery</h5>
              <div className="row g-2">
                <div className="col-4">
                  <img className="img-fluid rounded" src="img/gallery-1.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid rounded" src="img/gallery-2.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid rounded" src="img/gallery-3.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid rounded" src="img/gallery-4.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid rounded" src="img/gallery-5.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid rounded" src="img/gallery-6.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Newsletter</h5>
              <p>Subscribe to Our Newsletter for the Latest News and Insights!</p>
              <div className="position-relative mx-auto" >
                <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" id='txtemail' placeholder="Your email" />
                <button type="button" onClick={newsLetter} className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <NavLink to="/">Cellera Power Care</NavLink>, All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">


              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
