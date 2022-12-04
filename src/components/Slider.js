import React from 'react'
import Caurosel from "react-bootstrap/Carousel"
import "bootstrap/dist/css/bootstrap.min.css"

const Slider = ({start}) => {
    // console.log(start);
  return (
    <Caurosel variant="dark" nextLabel="" prevLabel="" fade>
            {start.map((item,index)=>(
        <Caurosel.Item key={index} interval={2000}>
            <img className='d-block w-100' src={item} alt="img" />
        </Caurosel.Item>
            ))}
    </Caurosel>
  )
}

export default Slider