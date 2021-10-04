import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./AboutUs.css";

const AboutUs = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("./member.JSON")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  return (
    <div>
    <div className="d-flex flex-column justify-content-center align-items-center m-5" style={{color:"#072A5F"}}>
            <h1 style={{fontSize:"40px",fontWeight:"700"}}> Team Members </h1>
            <p style={{fontSize:"20px",fontWeight:"500"}}>Expert Instructors</p>
    </div>
      <div className="container">
        <div className="row row-cols-3 g-5">
          {members.map((member) => (
            <div key={member.id} >
                <div className="col full-card rounded" >
              <div className="card-img">
                <img
                  src={member.image}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="hover-text">
                <h1>{member.name}</h1>
                <p>{member.designation}</p>
              </div>
            </div>
            </div>
          ))}
         
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
