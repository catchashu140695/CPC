import React from 'react'
import { NavLink } from 'react-router-dom'
import AboutUs from '../../Assets/img/AboutUs.png'


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
                                <h1 className="text-primary">About Us</h1>
                                
                                <p>
                                    Originally established in 2018 as Cellera Power Care, our company began with a strong focus on
                                    revitalizing lead-acid batteries and delivering reliable On-Grid and Off-Grid solar power systems.
                                    With over seven years of hands-on experience, we earned the trust of customers across Odisha by
                                    consistently providing innovative, cost-effective energy solutions.
                                    <br /><br />
                                    As our expertise and impact grew, so did our vision. Today, we proudly operate as Cellera Eco
                                    Solution Pvt. Ltd., reflecting our expanded commitment to clean energy, environmental
                                    responsibility, and technological innovation.
                                    <br /><br />
                                    At Cellera, we’re more than just a solar company — we’re energy partners for a sustainable future.
                                    From residential rooftops to commercial installations, we design and deliver customized solutions
                                    that empower communities and reduce environmental footprints.
                                </p>
                                <p><strong>Why Choose Cellera?</strong></p>
                                <ul>
                                    <li>✅ 7+ Years of Field Experience</li>
                                    <li>✅ Proven Expertise in Battery Revitalization</li>
                                    <li>✅ End-to-End Solar Solutions (On-Grid & Off-Grid)</li>
                                    <li>✅ Odisha’s Trusted Clean Energy Partner</li>
                                    <li>✅ Committed to Innovation & Sustainability</li>
                                </ul>
                                
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
                        {/* <h6 class="text-primary">Team Member</h6> */}
                        <h1 class="text-primary mb-4">Experienced Team Members</h1>
                    </div>
                    <div class="row g-4">
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="team-item rounded overflow-hidden d-flex flex-column h-100">
                                
                                 <div class="team-img-wrap">
                                    <img class="team-img img-fluid w-100" src="img/team-3.png" alt="Tarini Prasad Bal" />                                    
                                </div>
                                <div class="p-4 mt-auto">
                                    <h5>C S Panigrahi</h5>
                                    <span>Implementation</span>
                                </div>
                                
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="team-item rounded overflow-hidden d-flex flex-column h-100">
                                <div class="team-img-wrap">
                                    <img class="team-img img-fluid w-100" src="img/team-2.png" alt="Deepak Kumar Barik" />
                                </div>
                                <div class="p-4 mt-auto">
                                    <h5>Deepak Kumar Barik</h5>
                                    <span>Marketing</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="team-item rounded overflow-hidden d-flex flex-column h-100">
                               <div class="team-img-wrap">
                                    <img class="team-img img-fluid w-100" src="img/team-1.png" alt="C S Panigrahi" />
                                </div>
                                <div class="p-4 mt-auto">
                                    <h5>Tarini Prasad Bal</h5>
                                    <span>Liaisoning</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
