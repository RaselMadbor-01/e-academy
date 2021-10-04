import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router';

const NotFound = () => {
    const history=useHistory();
    const handleClicked=()=>{
       history.push("/home")
    }
    const arrowIcon = <FontAwesomeIcon icon={faArrowRight} />;
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div>
            <h1 style={{color:"#072A5F",fontSize:"50px",fontWeight:"700"}}>404</h1>
            <h3  style={{color:"#072A5F",fontSize:"30px",fontWeight:"600"}}>Page not found</h3>
            <p style={{color:"#072A5F",fontSize:"20px",fontWeight:"400"}}>Oops! The page you are looking for does not exist.</p>
            <Button onClick={handleClicked}  style={{color:"#072A5F",fontSize:"20px",fontWeight:"700"}}>Back To Home <span>{arrowIcon}</span></Button>
            </div>
        </div>
    );
};

export default NotFound;