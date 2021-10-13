import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faBook,
  faGraduationCap,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import "./Feature.css";
import CountUp from 'react-countup';


const Feature = () => {
  const usersIcon = <FontAwesomeIcon icon={faUsers} />;
  const bookIcon = <FontAwesomeIcon icon={faBook} />;
  const graduationIcon = <FontAwesomeIcon icon={faGraduationCap} />;
  const laptopIcon = <FontAwesomeIcon icon={faLaptopCode} />;
  return (
    <div className="feature-section">
      <div className="container">
        <div className="row row-cols-4 gx-3">
          <div>
            <div className="col d-flex align-items-stretch justify-content-center feature-cart">
              <div>
                <span className="icon">{usersIcon}</span>
              </div>
              <div>
                <h1>
                <CountUp end={1000} duration={2} />+
                </h1>
                <p className="m-0">Saticfied Students</p>
              </div>
            </div>
          </div>

          <div>
            <div className="col d-flex align-items-stretch justify-content-center feature-cart">
              <div>
                <span className="icon">{bookIcon}</span>
              </div>
              <div>
                <h1> <CountUp end={14} duration={1} />+</h1>
                <p className="m-0">Available Courses</p>
              </div>
            </div>
          </div>
          <div>
            <div className="col d-flex align-items-stretch justify-content-center feature-cart">
              <div>
                <span className="icon">{graduationIcon}</span>
              </div>
              <div>
                <h1> <CountUp end={900} duration={2} />+</h1>
                <p className="m-0">Graduate Students</p>
              </div>
            </div>
          </div>
          <div>
            <div className="col d-flex align-items-stretch justify-content-center feature-cart">
              <div>
                <span className="icon">{laptopIcon}</span>
              </div>
              <div>
                <h1> <CountUp end={5} duration={1} />+</h1>
                <p className="m-0">Active Courses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
