import React from "react";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <div>
    <div className="d-flex flex-column align-items-center justify-content-center m-5" style={{fontSize:"40px" ,fontWeight:"700" ,color:"#072A5F"}}>
    <h5>GET IN TOUCH</h5>
      <p>Contact Us Now</p>
    </div>
    
 <form >
     
 <div className="input-group mb-3">
        <input
          type="text"
          className="form-control me-5"
          placeholder="Name"
          aria-label="Name"
        />
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          aria-label="email"
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control me-5"
          placeholder="Phone"
          aria-label="Phone"
        />
        <input
          type="text"
          className="form-control"
          placeholder="Subject"
          aria-label="Subject"
        />
      </div>

      <div className="input-group">
        
        <textarea className="form-control mb-5" aria-label="With textarea" placeholder="Message"></textarea>
      </div>
      <button type="button" className="button d-block mx-auto border rounded">Send Now</button>
 </form>
    

    </div>
  );
};

export default ContactUs;
