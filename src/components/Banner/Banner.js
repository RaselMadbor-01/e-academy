import React from 'react';
import image from "../../images/background/banner.png";
import 'animate.css';
import "./Banner.css";

const Banner = () => {
    return (
        <div  style={{backgroundColor:"#072A5F" ,color:"#fff"}}>
            <div className="container">
        <div className="row row-cols-sm-1 row-cols-md-2 justify-content-center align-items-center">
          <div className="col animate__animated animate__bounceInLeft">
            <h1 className="header-text ">
              Online Learning <br /> Platforms
            </h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doemqe laudantium totam rem aperiam eaque ipsa quae ab
              illo inventore
            </p>
            <button  class="view-button">View Course</button>
          </div>
          <div className="col animate__animated animate__backInRight">
            <img src={image} className="img-fluid" alt="" />
          </div>
        </div>
        
      </div>
      <div className="col-12">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,96L20,101.3C40,107,80,117,120,117.3C160,117,200,107,240,85.3C280,64,320,32,360,53.3C400,75,440,149,480,170.7C520,192,560,160,600,133.3C640,107,680,85,720,74.7C760,64,800,64,840,85.3C880,107,920,149,960,138.7C1000,128,1040,64,1080,64C1120,64,1160,128,1200,133.3C1240,139,1280,85,1320,74.7C1360,64,1400,96,1420,112L1440,128L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
        </div>
            
        </div>
    );
};

export default Banner;