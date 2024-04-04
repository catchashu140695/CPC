import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function Testimonial() {
  return (
    <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h3 className="mb-4">Testimonials</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
          Real Stories, Real Savings: Discover How Our Solar Solutions Are Making a Difference
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center">
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="img/13.jpeg"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
              alt=""
            />
          </div>
          <h5 className="mb-3">Rajesh Mohapatra</h5>
          <h6 className="text-primary mb-3">Branch Manager, SBI</h6>
          <p className="px-xl-3">
            <MDBIcon fas icon="quote-left" className="pe-2" />
            From the initial consultation to the final installation, the professionalism and knowledge of the Cellera power care team were unmatched. They answered all our questions and tailored a solar solution that fit our needs perfectly. We've seen a significant decrease in our energy costs, and we're proud to be doing our part for the environment.
          </p>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon
                fas
                icon="star-half-alt"
                size="sm"
                className="text-warning"
              />
            </li>
          </MDBTypography>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="img/14.jpeg"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
              alt=""
            />
          </div>
          <h5 className="mb-3">Anjali Biswal</h5>
          <h6 className="text-primary mb-3">Data Science Engineer</h6>
          <p className="px-xl-3">
            <MDBIcon fas icon="quote-left" className="pe-2" />
            Cellera power care exceeded our expectations in every way. Their commitment to quality, sustainability, and customer satisfaction is evident in their work. Switching to solar has been a fantastic investment, not just for our family's budget, but also for the planet. Thank you for making this journey so rewarding!
          </p>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
          </MDBTypography>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="img/15.jpeg"
              className="rounded-circle shadow-1-strong"
              width="150"
              height="150"
              alt=""
            />
          </div>
          <h5 className="mb-3">Vinay Mishra</h5>
          <h6 className="text-primary mb-3">Marketing Specialist</h6>
          <p className="px-xl-3">
            <MDBIcon fas icon="quote-left" className="pe-2" />
            After researching several solar companies, we decided to go with Cellera power care, and we couldn't be happier. The customer service was outstanding from start to finish, and the installation was seamless. It's been six months, and the savings on our energy bills are already noticeable. Plus, knowing we're using a clean energy source is truly rewarding.
          </p>
          <MDBTypography
            listUnStyled
            className="d-flex justify-content-center mb-0"
          >
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon fas icon="star" size="sm" className="text-warning" />
            </li>
            <li>
              <MDBIcon far icon="star" size="sm" className="text-warning" />
            </li>
          </MDBTypography>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}