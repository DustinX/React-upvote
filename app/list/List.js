import React, {useState, useEffect} from 'react';
import Product from './Product';


const List = () => {
  
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'Yellow Pail',
      description: 'On-demand sand castle construction expertise.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/daniel.jpg',
      productImageUrl: 'images/products/image-aqua.png',
    },
  ]);
  
  
  // fetch items and categories.  Only runs once on page load
  useEffect(()=>{

    setProducts(window.Seed.products)

  }, [])
  
  return (
    <p>hello</p>
    // <div className="list_page">
    //   <h1>Popular Products</h1>
    //   <ul>{ products
    //           .map( product => <Product key={product.id} item={product} />)} 
    //   </ul>
    // </div>
  )
}

export default List;
