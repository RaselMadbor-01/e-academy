import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarked,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const addressIcon = <FontAwesomeIcon icon={faMapMarked} />;
  const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt} />;
  return (
    <div style={{ backgroundColor: "#072A5F", color: "#fff" }} >
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,320L34.3,314.7C68.6,309,137,299,206,266.7C274.3,235,343,181,411,176C480,171,549,213,617,218.7C685.7,224,754,192,823,181.3C891.4,171,960,181,1029,176C1097.1,171,1166,149,1234,122.7C1302.9,96,1371,64,1406,48L1440,32L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h3>e-Academy</h3>
            <p>
              Providing Life Changing Experiences Through Education. className That
              Fit Your Busy Life. Closer to Home
            </p>
          </div>
          <div className="col-5">
            <h5> Our Courses</h5>
            <div className="d-flex">
              <ul>
                <li>Web Development</li>
                <li> Computer Engineering</li>
                <li> Graphics Design</li>
                <li> Software Development</li>
                <li> Advance WordPress</li>
              </ul>

              <ul>
                <li> Business Studies</li>
                <li> Photography</li>
                <li> English Learning</li>
                <li> Basic PSD to HTML</li>
              </ul>
            </div>
          </div>
          <div className="col-3">
            <h3>Contact us</h3>
            <p>
              <span> {emailIcon}</span> e-academyLearning@gmail.com
            </p>
            <p>
              <span>{addressIcon}</span> Block-e,Road-09,Lalmatia-Dhaka-1207
            </p>
            <p>
              <span>{phoneIcon}</span>+088-01-23-256-24
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center border-top mt-5 ">
          <p className="p-5">Copyright ©2021 BDevs. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
