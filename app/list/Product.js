import React from 'react';


const Product = (props) => {
  
  const incrementVote = () => {
    
    props.setProducts( 
        props.products.map(
          element => {
            if (element.id === props.product.id){
              element.votes++;
            }
            return element
          }
    ));
  }
  
  return (
    <li className="product">
      <img  className="image" src={props.product.productImageUrl}/>
      <img  className="arrow" src='images/ui/arrow.png' onClick={incrementVote}/>
      <p    className="votes">{props.product.votes}</p>
      <a    className="title" href={props.product.url}>{props.product.title}</a>
      <p    className="description">{props.product.description}</p>
      <p    className="submitted">Submitted by</p>
      <img  className="submitter" src={props.product.submitterAvatarUrl}/>
    </li>
  )
}

export default Product;
