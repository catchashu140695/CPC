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
            
        </>
    );
};

export default Projects;




