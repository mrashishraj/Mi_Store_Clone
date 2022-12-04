import React from 'react'
import "../styles/offer.css"

const Offer = ({src,index,link}) => {
    console.log(src,index,link);
  return (
    <a href={link}> <img src={src}  alt={`${index} offer`} /> </a>
  )
}

export default Offer