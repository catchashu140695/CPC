import React from 'react'
import { NavLink } from 'react-router-dom';
import Testimonial from './Testimonial';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export default function services(props) {

    

    return (
        <>
            {
                props.headshow === "true" ?
                    <div className="container-fluid page-header py-5 mb-5">
                        <div className="container py-5">
                            <h1 className="display-3 text-white mb-3 animated slideInDown">Services</h1>
                            <nav aria-label="breadcrumb animated slideInDown">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><NavLink className="text-white" to="/">Home</NavLink></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Services</li>
                                </ol>
                            </nav>
                        </div>
                    </div> : null
            }

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <h6 className="text-primary">Our Services</h6>
                        <h1 className="mb-4">We Are Pioneers In The World Of Renewable Energy</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item rounded overflow-hidden">
                                <img className="img-fluid" src="img/7.jpeg" alt="" />
                                <div className="position-relative p-4 pt-0">
                                    <div className="service-icon">
                                        <i className="fa fa-solar-panel fa-3x"></i>
                                    </div>
                                    <h4 className="mb-3">Solar Installation</h4>
                                    <p>We offer comprehensive solar installation services, handling everything from system design and engineering to permitting and installation. Our goal is to make the transition to solar energy seamless and hassle-free for our customers.</p>
                                    {/* <NavLink className="small fw-medium" to="">Read More<i className="fa fa-arrow-right ms-2"></i></NavLink> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item rounded overflow-hidden">
                                <img className="img-fluid" src="img/8.jpg" alt="" />
                                <div className="position-relative p-4 pt-0">
                                    <div className="service-icon">
                                        <i className="fa fa-wind fa-3x"></i>
                                    </div>
                                    <h4 className="mb-3">Maintenance & Repairs</h4>
                                    <p>To ensure optimal performance and longevity of your solar system, we provide regular maintenance services and prompt repairs as needed. Our team will keep your solar panels operating at peak efficiency year-round.</p>
                                    {/* <NavLink className="small fw-medium" to="">Read More<i className="fa fa-arrow-right ms-2"></i></NavLink> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded overflow-hidden">
                                <img className="img-fluid" src="img/9.jpg" alt="" />
                                <div className="position-relative p-4 pt-0">
                                    <div className="service-icon">
                                        <i className="fa fa-lightbulb fa-3x"></i>
                                    </div>
                                    <h4 className="mb-3">Solar Insurance</h4>
                                    <p>Protect your solar investment with our insurance plans, covering natural disasters, theft, and system failures. Ensure uninterrupted energy production and financial security with our comprehensive solar panel protection.</p>
                                    {/* <NavLink className="small fw-medium" to="">Read More<i className="fa fa-arrow-right ms-2"></i></NavLink> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item rounded overflow-hidden">
                                <img className="img-fluid" src="img/10.jpeg" alt="" />
                                <div className="position-relative p-4 pt-0">
                                    <div className="service-icon">
                                    <CurrencyRupeeIcon style={{ fontSize: '70px' }} />
                                    
                                    </div>
                                    <h4 className="mb-3">Financing Options</h4>
                                    <p>We understand that upfront costs can be a barrier to adopting solar energy. That's why we offer flexible financing options to make solar more accessible to homeowners and businesses, including solar leases, loans, and power purchase agreements.</p>
                                    {/* <NavLink className="small fw-medium" to="">Read More<i className="fa fa-arrow-right ms-2"></i></NavLink> */}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
                <div className="container feature px-lg-0">
                    <div className="row g-0 mx-lg-0">
                        <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
                            <div className="p-lg-5 ps-lg-0">
                                <h6 className="text-primary">Why Choose Us!</h6>
                                <h1 className="mb-4">Join the Solar Revolution</h1>
                                <p className="mb-4 pb-2">
                    With over 7 years of experience in the solar industry, we bring unmatched expertise and reliability to every project. Our skilled installation team ensures high-quality workmanship, while our proven track record in both government and private sector projects highlights our versatility and trustworthiness. We offer comprehensive in-house service and Annual Maintenance Contract (AMC) support to guarantee long-term performance. Recognized for our excellence, we are proud recipients of the Award for Innovation and were honored as a Top Performer for the year 2022–23.
                </p>
                                <div className="row g-4">
                                    <div className="col-6">
                                        <div className="d-flex align-items-center">
                                            <div className="btn-lg-square bg-primary rounded-circle">
                                                <i className="fa fa-check text-white"></i>
                                            </div>
                                            <div className="ms-4">
                                                <p className="mb-0">Quality</p>
                                                <h5 className="mb-0">Services</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="d-flex align-items-center">
                                            <div className="btn-lg-square bg-primary rounded-circle">
                                                <i className="fa fa-user-check text-white"></i>
                                            </div>
                                            <div className="ms-4">
                                                <p className="mb-0">Expert</p>
                                                <h5 className="mb-0">Workers</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="d-flex align-items-center">
                                            <div className="btn-lg-square bg-primary rounded-circle">
                                                <i className="fa fa-drafting-compass text-white"></i>
                                            </div>
                                            <div className="ms-4">
                                                <p className="mb-0">Free</p>
                                                <h5 className="mb-0">Advice</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="d-flex align-items-center">
                                            <div className="btn-lg-square bg-primary rounded-circle">
                                                <i className="fa fa-headphones text-white"></i>
                                            </div>
                                            <div className="ms-4">
                                                <p className="mb-0">Customer</p>
                                                <h5 className="mb-0">Support</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: "400px" }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute img-fluid w-100 h-100" src="img/12.jpeg" style={{ objectFit: "cover" }} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           





        </>
    )
}
