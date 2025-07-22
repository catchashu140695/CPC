import React from 'react'
import { NavLink } from 'react-router-dom'
import AboutUs from '../../Assets/img/AboutUs.jpeg'


export default function About(props) {



    return (
        <div>
            {
                props.headshow === 'true' ?

                    <div className="container-fluid page-header py-5 mb-5">
                        <div className="container py-5">
                            <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
                            <nav aria-label="breadcrumb animated slideInDown">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><NavLink className="text-white" to="/">Home</NavLink></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                                </ol>
                            </nav>
                        </div>
                    </div> : null
            }
           

            <div className="container-fluid" style={{ background: "#f8f9fa" }}>
                <div className="container about px-lg-0">
                    <div className="row g-0 mx-lg-0">
                        <div className="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
                            <div className="p-lg-5 pe-lg-0">
                                <h6 className="text-primary">About Us</h6>
                                <h1 className="mb-4">Empowering Sustainable Energy Solutions</h1>
                                <p>
                                    Founded in 2018, Cellera Power Care has established itself as a trusted name in the solar
                                    energy sector. With over seven years of hands-on experience in revitalizing lead-acid batteries
                                    and executing both On-Grid and Off-Grid solar power systems, we have consistently delivered
                                    reliable, innovative energy solutions across Odisha.
                                    <br /><br />
                                    Driven by a vision to transform the energy landscape, our journey has been marked by steady
                                    growth and a deep commitment to sustainability and innovation.
                                </p>
                                
                                {/* <p><i className="fa fa-check-circle text-primary me-3"></i>Diam dolor diam ipsum</p>
                                <p><i className="fa fa-check-circle text-primary me-3"></i>Aliqu diam amet diam et eos</p>
                                <p><i className="fa fa-check-circle text-primary me-3"></i>Tempor erat elitr rebum at clita</p>
                                <NavLink to="" className="btn btn-primary rounded-pill py-3 px-5 mt-3">Explore More</NavLink> */}
                            </div>
                        </div>
                        <div className="col-lg-6 ps-lg-0 wow fadeIn d-flex align-items-center justify-content-center" data-wow-delay="0.1s" style={{ minHeight: "400px" }}>
                            <div className="position-relative h-100 d-flex align-items-center justify-content-center">
                                <img
                                    className="img-fluid"
                                    src={AboutUs}
                                    alt=""
                                    style={{
                                        objectFit: "cover",
                                        width: "450px",
                                        height: "450px",
                                        borderRadius: "50%",
                                        boxShadow: "0 6px 32px rgba(229, 57, 53, 0.12)",
                                        background: "#fff"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="container-xxl py-5">
                <div className="container">
                    <div className="row justify-content-center align-items-center g-4">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="d-flex flex-wrap justify-content-center w-100" style={{ gap: "2rem" }}>
                                <div className="highlight-card card border-0 text-center">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <div className="btn-lg-square rounded-circle mb-3">
                                            <i className="fa fa-users"></i>
                                        </div>
                                        <h1 className="mb-0" data-toggle="counter-up">3453</h1>
                                        <h5 className="mb-2 mt-2">Happy Customers</h5>
                                        <span className="small">Boosting loyalty and driving growth through satisfaction.</span>
                                    </div>
                                </div>
                                <div className="highlight-card card border-0 text-center">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <div className="btn-lg-square rounded-circle mb-3">
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <h1 className="mb-0" data-toggle="counter-up">3513</h1>
                                        <h5 className="mb-2 mt-2">Projects Done</h5>
                                        <span className="small">Showcasing skills and achievements with timely delivery.</span>
                                    </div>
                                </div>
                                <div className="highlight-card card border-0 text-center">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <div className="btn-lg-square rounded-circle mb-3">
                                            <i className="fa fa-award"></i>
                                        </div>
                                        <h1 className="mb-0" data-toggle="counter-up">200+</h1>
                                        <h5 className="mb-2 mt-2">Awards Won</h5>
                                        <span className="small">Recognized for excellence and inspiring achievements.</span>
                                    </div>
                                </div>
                                <div className="highlight-card card border-0 text-center">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <div className="btn-lg-square rounded-circle mb-3">
                                            <i className="fa fa-users-cog"></i>
                                        </div>
                                        <h1 className="mb-0" data-toggle="counter-up">100+</h1>
                                        <h5 className="mb-2 mt-2">Expert Workers</h5>
                                        <span className="small">Driving innovation and efficiency in every field.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <h6 class="text-primary">Team Member</h6>
                        <h1 class="mb-4">Experienced Team Members</h1>
                    </div>
                    <div class="row g-4">
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="team-item rounded overflow-hidden">
                                <div class="d-flex">
                                    <img class="img-fluid w-100" src="img/team-1.jpg" alt="" />
                                    
                                </div>
                                <div class="p-4">
                                    <h5>Full Name</h5>
                                    <span>Designation</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="team-item rounded overflow-hidden">
                                <div class="d-flex">
                                    <img class="img-fluid w-100" src="img/team-2.jpg" alt="" />
                                    
                                </div>
                                <div class="p-4">
                                    <h5>Full Name</h5>
                                    <span>Designation</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="team-item rounded overflow-hidden">
                                <div class="d-flex">
                                    <img class="img-fluid w-100" src="img/team-3.jpg" alt="" />
                                    
                                </div>
                                <div class="p-4">
                                    <h5>Full Name</h5>
                                    <span>Designation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
