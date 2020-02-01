import React, {useState, useEffect} from 'react';
import Product from './Product';


const List = () => {
  
  const [products, setProducts] = useState(window.Seed.products);
  
  
  // fetch items and categories.  Only runs once on page load
  // useEffect(()=>{

  //   setProducts(window.Seed.products)

  // }, [])
  
  return (
    <div className="list_page">
      <h1>Popular Products</h1>
      <ul>{ products
              .map( product => <Product key={product.id} product={product} />)} 
      </ul>
    </div>
  )
}

export default List;
