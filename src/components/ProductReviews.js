import React from 'react'
import ProductReviewsCard from "./ProductReviewsCard.js"
import "../styles/ProductReviews.css"

const ProductReviews = ({ProductReviews}) => {
    // console.log(ProductReviews);
  return (
    <div className='ProductReviews'>
        {ProductReviews.map((item,index)=>
            <ProductReviewsCard image={item.image} key={item.image} index={index} name={item.name} price={item.price} review={item.review}/>
        )}
    </div>
  )
}

export default ProductReviews