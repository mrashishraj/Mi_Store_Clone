import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css"

const Banner = ({banner}) => {
  return (
    <Carousel fade variant="dark" nextLabel="" prevLabel="" indicators={false}>
        {
            banner.end.map((item, index)=><Carousel.Item key={item.image} id="banner" interval={2000} keyboard={true}>
                <img src={item.image} index={index} className="d-block w-100" id="bannerImage" alt={`${index} banner`}/>
                <Carousel.Caption>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>{item.source}</p>
                </Carousel.Caption>
            </Carousel.Item>)
        }
    </Carousel>
  )
}

export default Banner