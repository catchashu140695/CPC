import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function GetAQuote() {

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

  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    power: '',
    note: '',
    to: 'catchashu140695@gmail.com',
  });
  const [submitted, setSubmitted] = useState(false);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    // Simple validation logic (expand according to your needs)
    return form.email.includes('@') && form.name && form.mobile && form.power;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      notifyError("Enter all fields correctly !!!"); // Consider using a more user-friendly notification here
      return;
    }
    // EmailJS parameters
    const serviceId = 'service_qfmv5i7';
    const templateId = 'template_cnwxosj';
    const userId = '-L5wn-qi3lBlVlVK1';
    emailjs.send(serviceId, templateId, form, userId)
      .then((response) => {        
        setSubmitted(true);
        notifySuccess("Email Sent Successfully");
        setForm({
          name:"",
          email:"",
          mobile:"",
          power:0,
          note:""
        })

      }, (err) => {        
        notifyError("Email Sent Error");
      });
  };

  return (
    <>   
   
      <ToastContainer />
      <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div className="container quote px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" style={{ minHeight: "400px" }}>
              <div className="position-relative h-100">
                <img className="position-absolute img-fluid w-100 h-100" src="img/quote.jpg" style={{ objectFit: "cover" }} alt="" />
              </div>
            </div>
            <div className="col-lg-6 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
              <div className="p-lg-5 pe-lg-0">
                <h6 className="text-primary">Free Quote</h6>
                <h1 className="mb-4">Get A Free Quote</h1>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input type="text" name="name" className="form-control border-0" placeholder="Your Name" style={{ height: "55px" }} value={form.name} onChange={handleChange} />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input type="email" name="email" className="form-control border-0" placeholder="Your Email" style={{ height: "55px" }} value={form.email} onChange={handleChange} />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input type="text" name="mobile" className="form-control border-0" placeholder="Your Mobile" style={{ height: "55px" }} value={form.mobile} onChange={handleChange} />
                    </div>
                    <div className="col-12 col-sm-6">
                      <select name="power" className="form-select border-0" style={{ height: "55px" }} value={form.power} onChange={handleChange}>
                        <option value="0">Select</option>
                        <option value="5 kva">5 kva</option>
                        <option value="10 kva">10 kva</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea name="note" className="form-control border-0" placeholder="Special Note" value={form.note} onChange={handleChange}></textarea>
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
}
