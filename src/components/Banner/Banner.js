import React from 'react';
import image from "../../images/background/banner.png";
import { Button } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
    return (
        <div>
            <div className="container">
        <div className="row row-cols-sm-1 row-cols-md-2 justify-content-center align-items-center">
          <div className="col">
            <h1 className="header-text">
              Online Learning <br /> Platforms
            </h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doemqe laudantium totam rem aperiam eaque ipsa quae ab
              illo inventore
            </p>
            <button  class="view-button">View Course</button>
          </div>
          <div className="col">
            <img src={image} className="img-fluid" alt="" />
          </div>
        </div>
        
      </div>
      <div className="col-12">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,320L34.3,314.7C68.6,309,137,299,206,266.7C274.3,235,343,181,411,176C480,171,549,213,617,218.7C685.7,224,754,192,823,181.3C891.4,171,960,181,1029,176C1097.1,171,1166,149,1234,122.7C1302.9,96,1371,64,1406,48L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
        </div>
            
        </div>
    );
};

export default Banner;