import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("*"); // Initially, show all projects

    // Function to handle click event on filter items
    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    // Function to check if a project item matches the active filter
    const shouldShowProject = (filter) => {
        return activeFilter === "*" || activeFilter === filter;
    };

    // Sample project data with filter information
    const projectsData = [
        { image: "img/img-600x400-6.jpg", filter: ".first" },
        { image: "img/img-600x400-5.jpg", filter: ".second" },
        { image: "img/img-600x400-4.jpg", filter: ".third" },
        { image: "img/img-600x400-3.jpg", filter: ".first" },
        { image: "img/img-600x400-2.jpg", filter: ".second" },
        { image: "img/img-600x400-1.jpg", filter: ".third" }
    ];

    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:"600px"}}>
                        <h6 className="text-primary">Our Projects</h6>
                        <h1 className="mb-4">Visit Our Latest Solar And Renewable Energy Projects</h1>
                    </div>
                    <div className="col-12 text-center">
                        <ul className="list-inline mb-5" id="portfolio-flters">
                            <li className={`mx-2 ${activeFilter === "*" ? "active" : ""}`} onClick={() => handleFilterClick("*")}>All</li>
                            <li className={`mx-2 ${activeFilter === ".first" ? "active" : ""}`} onClick={() => handleFilterClick(".first")}>Solar Panels</li>
                            <li className={`mx-2 ${activeFilter === ".second" ? "active" : ""}`} onClick={() => handleFilterClick(".second")}>Wind Turbines</li>
                            <li className={`mx-2 ${activeFilter === ".third" ? "active" : ""}`} onClick={() => handleFilterClick(".third")}>Hydropower Plants</li>
                        </ul>
                    </div>
                    <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.5s">
                        {/* Map through your project data and render project items */}
                        {projectsData.map((project, index) => (
                            shouldShowProject(project.filter) && (
                                <div className={`col-lg-4 col-md-6 portfolio-item ${project.filter}`} key={index}>
                                    <div className="portfolio-img rounded overflow-hidden">
                                        <img className="img-fluid" src={project.image} alt="" />
                                        <div className="portfolio-btn">
                                            <NavLink className="btn btn-lg-square btn-outline-light rounded-circle mx-1" to={project.image} data-lightbox="portfolio"><i className="fa fa-eye"></i></NavLink>
                                            <NavLink className="btn btn-lg-square btn-outline-light rounded-circle mx-1" to=""><i className="fa fa-link"></i></NavLink>
                                        </div>
                                    </div>
                                    <div className="pt-3">
                                        <p className="text-primary mb-0">{project.filter === ".first" ? "Solar Panels" : project.filter === ".second" ? "Wind Turbines" : "Hydropower Plants"}</p>
                                        <hr className="text-primary w-25 my-2" />
                                        <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
                <div className="container quote px-lg-0">
                    <div className="row g-0 mx-lg-0">
                        <div className="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" style={{minHeight:"400px"}}>
                            <div className="position-relative h-100">
                                <img className="position-absolute img-fluid w-100 h-100" src="img/quote.jpg" style={{objectFit:"cover"}} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
                            <div className="p-lg-5 pe-lg-0">
                                <h6 className="text-primary">Free Quote</h6>
                                <h1 className="mb-4">Get A Free Quote</h1>
                                <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <input type="text" className="form-control border-0" placeholder="Your Name" style={{height:"55px"}} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="email" className="form-control border-0" placeholder="Your Email" style={{height:"55px"}} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="text" className="form-control border-0" placeholder="Your Mobile" style={{height:"55px"}} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <select className="form-select border-0" style={{height:"55px"}}>
                                                <option selected>Select A Service</option>
                                                <option value="1">Service 1</option>
                                                <option value="2">Service 2</option>
                                                <option value="3">Service 3</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <textarea className="form-control border-0" placeholder="Special Note"></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;



// import React from 'react'
// import {NavLink} from 'react-router-dom'

// const projects = () => {
//   return (
//     <>
      
//     <div className="container-xxl py-5">
//         <div className="container">
//             <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:"600px"}}>
//                 <h6 className="text-primary">Our Projects</h6>
//                 <h1 className="mb-4">Visit Our Latest Solar And Renewable Energy Projects</h1>
//             </div>
//             <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
//                 <div className="col-12 text-center">
//                     <ul className="list-inline mb-5" id="portfolio-flters">
//                         <li className="mx-2 active" data-filter="*">All</li>
//                         <li className="mx-2" data-filter=".first">Solar Panels</li>
//                         <li className="mx-2" data-filter=".second">Wind Turbines</li>
//                         <li className="mx-2" data-filter=".third">Hydropower Plants</li>
//                     </ul>
//                 </div>
//             </div>
//             <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.5s">
//                 <div className="col-lg-4 col-md-6 portfolio-item first">
//                     <div className="portfolio-img rounded overflow-hidden">
//                         <img className="img-fluid" src="img/img-600x400-6.jpg" alt="" />
//                         <div className="portfolio-btn">
//                             <NavLink className="btn btn-lg-square btn-outline-light rounded-circle mx-1" to="img/img-600x400-6.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></NavLink>
//                             <NavLink className="btn btn-lg-square btn-outline-light rounded-circle mx-1" to=""><i className="fa fa-link"></i></NavLink>
//                         </div>
//                     </div>
//                     <div className="pt-3">
//                         <p className="text-primary mb-0">Solar Panels</p>
//                         <hr className="text-primary w-25 my-2" />
//                         <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
//                     </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 portfolio-item second">
//                     <div className="portfolio-img rounded overflow-hidden">
//                         <img className="img-fluid" src="img/img-600x400-5.jpg" alt="" />
//                         <div className="portfolio-btn">
//                             <NavLink className="btn btn-lg-square btn-outline-light rounded-circle mx-1" to="img/img-600x400-5.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></NavLink>
//                             <NavLink className="btn btn-lg-square btn-outline-light rounded-circle mx-1" to=""><i className="fa fa-link"></i></NavLink>
//                         </div>
//                     </div>
//                     <div className="pt-3">
//                         <p className="text-primary mb-0">Wind Turbines</p>
//                         <hr className="text-primary w-25 my-2" />
//                         <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
//                     </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 portfolio-item third">
//                     <div className="portfolio-img rounded overflow-hidden">
//                         <img className="img-fluid" src="img/img-600x400-4.jpg" alt="" />
//                         <div className="portfolio-btn">
//                             <NavLink className="btn btn-lg-square btn-outline-light rounded-circle mx-1" to="img/img-600x400-4.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></NavLink>
//                             <NavLink className="btn btn-lg-square btn-outline-light rounded-circle mx-1" to=""><i className="fa fa-link"></i></NavLink>
//                         </div>
//                     </div>
//                     <div className="pt-3">
//                         <p className="text-primary mb-0">Hydropower Plants</p>
//                         <hr className="text-primary w-25 my-2" />
//                         <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
//                     </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 portfolio-item first">
//                     <div className="portfolio-img rounded overflow-hidden">
//                         <img className="img-fluid" src="img/img-600x400-3.jpg" alt="" />
//                         <div className="portfolio-btn">
//                             <NavLink className="btn btn-lg-square btn-outline-light rounded-circle mx-1" to="img/img-600x400-3.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></NavLink>
//                             <NavLink className="btn btn-lg-square btn-outline-light rounded-circle mx-1" to=""><i className="fa fa-link"></i></NavLink>
//                         </div>
//                     </div>
//                     <div className="pt-3">
//                         <p className="text-primary mb-0">Solar Panels</p>
//                         <hr className="text-primary w-25 my-2" />
//                         <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
//                     </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 portfolio-item second">
//                     <div className="portfolio-img rounded overflow-hidden">
//                         <img className="img-fluid" src="img/img-600x400-2.jpg" alt="" />
//                         <div className="portfolio-btn">
//                             <NavLink className="btn btn-lg-square btn-outline-light rounded-circle mx-1" to="img/img-600x400-2.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></NavLink>
//                             <NavLink className="btn btn-lg-square btn-outline-light rounded-circle mx-1" to=""><i className="fa fa-link"></i></NavLink>
//                         </div>
//                     </div>
//                     <div className="pt-3">
//                         <p className="text-primary mb-0">Wind Turbines</p>
//                         <hr className="text-primary w-25 my-2" />
//                         <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
//                     </div>
//                 </div>
//                 <div className="col-lg-4 col-md-6 portfolio-item third">
//                     <div className="portfolio-img rounded overflow-hidden">
//                         <img className="img-fluid" src="img/img-600x400-1.jpg" alt="" />
//                         <div className="portfolio-btn">
//                             <NavLink className="btn btn-lg-square btn-outline-light rounded-circle mx-1" to="img/img-600x400-1.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></NavLink>
//                             <NavLink className="btn btn-lg-square btn-outline-light rounded-circle mx-1" to=""><i className="fa fa-link"></i></NavLink>
//                         </div>
//                     </div>
//                     <div className="pt-3">
//                         <p className="text-primary mb-0">Hydropower Plants</p>
//                         <hr className="text-primary w-25 my-2" />
//                         <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
    
//     <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
//         <div className="container quote px-lg-0">
//             <div className="row g-0 mx-lg-0">
//                 <div className="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" style={{minHeight:"400px"}}>
//                     <div className="position-relative h-100">
//                         <img className="position-absolute img-fluid w-100 h-100" src="img/quote.jpg" style={{objectFit:"cover"}} alt="" />
//                     </div>
//                 </div>
//                 <div className="col-lg-6 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
//                     <div className="p-lg-5 pe-lg-0">
//                         <h6 className="text-primary">Free Quote</h6>
//                         <h1 className="mb-4">Get A Free Quote</h1>
//                         <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
//                         <form>
//                             <div className="row g-3">
//                                 <div className="col-12 col-sm-6">
//                                     <input type="text" className="form-control border-0" placeholder="Your Name" style={{height:"55px"}} />
//                                 </div>
//                                 <div className="col-12 col-sm-6">
//                                     <input type="email" className="form-control border-0" placeholder="Your Email" style={{height:"55px"}} />
//                                 </div>
//                                 <div className="col-12 col-sm-6">
//                                     <input type="text" className="form-control border-0" placeholder="Your Mobile" style={{height:"55px"}} />
//                                 </div>
//                                 <div className="col-12 col-sm-6">
//                                     <select className="form-select border-0" style={{height:"55px"}}>
//                                         <option selected>Select A Service</option>
//                                         <option value="1">Service 1</option>
//                                         <option value="2">Service 2</option>
//                                         <option value="3">Service 3</option>
//                                     </select>
//                                 </div>
//                                 <div className="col-12">
//                                     <textarea className="form-control border-0" placeholder="Special Note"></textarea>
//                                 </div>
//                                 <div className="col-12">
//                                     <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Submit</button>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
    
//     </>
//   )
// }

// export default projects
