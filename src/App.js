import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Website/navbar.jsx";
import Carousel from "./Components/Website/carousel.jsx";
import FooterComponent from "./Components/Website/FooterComponent.jsx";
import Services from "./Components/Website/services.jsx";
import Contact from "./Components/Website/contact.jsx";
import Projects from "./Components/Website/projects.jsx";
import Testimonial from "./Components/Website/Testimonial.jsx";
import About from "./Components/Website/about.jsx";
import GetQuote from "./Components/Website/getaquote.jsx";


function App() {
  const scrolltop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  

  const testimonials = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      author: 'John Doe',
      image:'../../../public/img/testimonial-1.jpg',
    },
    {
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      author: 'Jane Smith',
      image:'../../../public/img/testimonial-2.jpg',
    }
    
  ];

  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route
            path="/"
            Component={() => {
              return (
                <>
                  <Carousel></Carousel>
                  <About headshow="false"></About>
                  <Services headshow="false" />
                  <Projects headshow="false"></Projects>
                  <Contact headshow="false"></Contact>
                  <GetQuote></GetQuote>
                  <Testimonial testimonials={testimonials}></Testimonial>
                </>
              );
            }}
          ></Route>
          <Route
            exact
            path="/about"
            Component={() => {
              return <About headshow="true"></About>;
            }}
          ></Route>
          <Route
            path="/services"
            Component={() => {
              return <Services headshow="true" />;
            }}
          ></Route>
          <Route
            path="/projects"
            Component={() => {
              return <Projects headshow="true" />;
            }}
          ></Route>
          <Route
            path="/contact"
            Component={() => {
              return <Contact headshow="true" />;
            }}
          ></Route>
           <Route
            path="/quote"
            Component={() => {
              return <GetQuote  />;
            }}
          ></Route>
        </Routes>
        <FooterComponent />
      </Router>

      <button onClick={scrolltop} className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top">
        <i className="bi bi-arrow-up"></i>
      </button>
    </>
  );
}

export default App;
