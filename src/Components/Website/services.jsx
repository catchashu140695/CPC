import React from 'react'
import { NavLink } from 'react-router-dom';
import Testimonial from './Testimonial';


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
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item rounded overflow-hidden">
                                <img className="img-fluid" src="img/img-600x400-1.jpg" alt="" />
                                <div className="position-relative p-4 pt-0">
                                    <div className="service-icon">
                                        <i className="fa fa-solar-panel fa-3x"></i>
                                    </div>
                                    <h4 className="mb-3">Solar Panels</h4>
                                    <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                                    <NavLink className="small fw-medium" to="">Read More<i className="fa fa-arrow-right ms-2"></i></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item rounded overflow-hidden">
                                <img className="img-fluid" src="img/img-600x400-2.jpg" alt="" />
                                <div className="position-relative p-4 pt-0">
                                    <div className="service-icon">
                                        <i className="fa fa-wind fa-3x"></i>
                                    </div>
                                    <h4 className="mb-3">Wind Turbines</h4>
                                    <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                                    <NavLink className="small fw-medium" to="">Read More<i className="fa fa-arrow-right ms-2"></i></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded overflow-hidden">
                                <img className="img-fluid" src="img/img-600x400-3.jpg" alt="" />
                                <div className="position-relative p-4 pt-0">
                                    <div className="service-icon">
                                        <i className="fa fa-lightbulb fa-3x"></i>
                                    </div>
                                    <h4 className="mb-3">Hydropower Plants</h4>
                                    <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                                    <NavLink className="small fw-medium" to="">Read More<i className="fa fa-arrow-right ms-2"></i></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item rounded overflow-hidden">
                                <img className="img-fluid" src="img/img-600x400-4.jpg" alt="" />
                                <div className="position-relative p-4 pt-0">
                                    <div className="service-icon">
                                        <i className="fa fa-solar-panel fa-3x"></i>
                                    </div>
                                    <h4 className="mb-3">Solar Panels</h4>
                                    <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                                    <NavLink className="small fw-medium" to="">Read More<i className="fa fa-arrow-right ms-2"></i></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item rounded overflow-hidden">
                                <img className="img-fluid" src="img/img-600x400-5.jpg" alt="" />
                                <div className="position-relative p-4 pt-0">
                                    <div className="service-icon">
                                        <i className="fa fa-wind fa-3x"></i>
                                    </div>
                                    <h4 className="mb-3">Wind Turbines</h4>
                                    <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                                    <NavLink className="small fw-medium" to="">Read More<i className="fa fa-arrow-right ms-2"></i></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded overflow-hidden">
                                <img className="img-fluid" src="img/img-600x400-6.jpg" alt="" />
                                <div className="position-relative p-4 pt-0">
                                    <div className="service-icon">
                                        <i className="fa fa-lightbulb fa-3x"></i>
                                    </div>
                                    <h4 className="mb-3">Hydropower Plants</h4>
                                    <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                                    <NavLink className="small fw-medium" to="">Read More<i className="fa fa-arrow-right ms-2"></i></NavLink>
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
                                <h1 className="mb-4">Complete Commercial & Residential Solar Systems</h1>
                                <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
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
                                                <h5 className="mb-0">Consultation</h5>
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
                                <img className="position-absolute img-fluid w-100 h-100" src="img/feature.jpg" style={{ objectFit: "cover" }} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                props.headshow==="true"? <Testimonial />:null
            }





        </>
    )
}
