import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import Slider from "react-slick";

const ServicesSlider = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./services.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="container" style={{padding:"100px 0"}}>
    <h2 className="text-center mb-5" style={{fontSize:"40px" ,fontWeight:"700" ,color:"#072A5F"}}>Our Services</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} >
            <Col className="me-3">
              <Card className="p-2 border rounded text-white" style={{backgroundColor:"#023e8a"}}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  className="img-fluid w-50 m-auto"
                />
                <Card.Body className="m-auto text-center">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ServicesSlider;
