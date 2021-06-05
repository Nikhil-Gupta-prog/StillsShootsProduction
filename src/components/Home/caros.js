import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./style.Scss";
import "bootstrap/dist/css/bootstrap.min.css";



const Caros = () => {
  return (
    <div id="home">
       <Carousel fade>
     
    <Carousel.Item interval={4000} >
      <img
        className="d-block w-100"
        src="https://i.postimg.cc/Jn0X0pDS/1.jpg"
        alt="First slide"
      />
      
     
    </Carousel.Item>
    <Carousel.Item interval={4000}>
      <img
        className="d-block w-100"
        src="https://i.postimg.cc/SQXZtrTZ/2.jpg"
        alt="Second slide"
      />
  
      
    </Carousel.Item>
    <Carousel.Item interval={4000}>
      <img
        className="d-block w-100"
        src="https://i.postimg.cc/Jh4x3cH5/3.jpg"
        alt="Third slide"
      />
  
      
    </Carousel.Item>
  </Carousel> 
  </div>

  );
};
export default Caros;
