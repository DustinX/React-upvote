import React from 'react';

const Product = (props) => {
  return (
    <li>
      <img loading="lazy" className="image" width="400px" height="400px" src={props.product.productImageUrl}/>
      <img loading="lazy" className="image" width="20px"  height="20px"  src='images/ui/arrow.png'/>
      <p>{props.product.votes}</p>
      <a href={props.product.url}>{props.product.title}</a>
      <p>{props.product.description}</p>
      <p>Submitted by</p>
      <img loading="lazy" className="image" width="20px"  height="20px"  src={props.product.submitterAvatarUrl}/>
    </li>
  )
}

export default Product;
