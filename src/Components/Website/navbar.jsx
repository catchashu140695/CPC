import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Navbar() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <div>
            <div className="container-fluid bg-dark p-0">
                <div className="row gx-0 d-none d-lg-flex">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center me-4">
                            <small className="fa fa-map-marker-alt text-primary me-2"></small>
                            <small>Damana Square, Bhubaneswar</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center">
                            <small className="far fa-clock text-primary me-2"></small>
                            <small>Mon - Sun : 09.00 AM - 09.00 PM</small>
                        </div>
                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        <div className="h-100 d-inline-flex align-items-center me-4">
                            <small className="fa fa-phone-alt text-primary me-2"></small>
                            <small>+919090033366</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center mx-n2">
                            <NavLink className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" to="www.facebook.com/CelleraPowerCare"><i className="fab fa-facebook-f"></i></NavLink>
                            {/* <NavLink className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" to="www.facebook.com/CelleraPowerCare"><i className="fab fa-twitter"></i></NavLink>
                            <NavLink className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" to="www.linkedin.com/CelleraPowerCare"><i className="fab fa-linkedin-in"></i></NavLink> */}
                            <NavLink className="btn btn-square btn-link rounded-0" to="www.instagram.com/CelleraPowerCare"><i className="fab fa-instagram"></i></NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
                <NavLink to="/" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
                    <h2 className="m-0 text-primary">Cellera Power Care</h2>
                </NavLink>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <NavLink to="/" className="nav-item nav-link" isActive={() => isActive('/')}>Home</NavLink>
                        <NavLink to="/about" className="nav-item nav-link" isActive={() => isActive('/about')}>About</NavLink>
                        <NavLink to="/services" className="nav-item nav-link" isActive={() => isActive('/service')}>Service</NavLink>
                        <NavLink to="/projects" className="nav-item nav-link" isActive={() => isActive('/project')}>Project</NavLink>
                        {/* <NavLink to="/contact" className="nav-item nav-link" isActive={() => isActive('/contact')}>Contact</NavLink> */}
                    </div>
                    <NavLink to="/quote" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Get A Quote<i className="fa fa-arrow-right ms-3"></i></NavLink>
                </div>
            </nav>
        </div>
    )
}
