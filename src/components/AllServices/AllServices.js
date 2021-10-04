import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./AllServices.css";

const AllServices = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./services.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container py-5" style={{padding:"100px 0"}}>
      <h2 className="text-center mb-5 pb-5" style={{fontSize:"40px" ,fontWeight:"700" ,color:"#072A5F"}}>Our Services</h2>
      <div>
        <div>
          <Row xs={1} md={3} className="g-5">
            {
                products.map(product=><div key={product.id}  >
                    <Col>
                <Card className="p-2 border  rounded text-white service-card" style={{backgroundColor:"#023e8a"}}>
                  <Card.Img variant="top" src={product.image} className="img-fluid w-50 m-auto" />
                  <Card.Body className="m-auto text-center">
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text style={{fontSize:"25px"}}>
                      {product.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
                </div> )
            }
          </Row>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
