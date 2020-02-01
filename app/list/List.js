import React, {useState} from 'react';
import Product from './Product';


const List = () => {
  
  const [products, setProducts] = useState(window.Seed.products);
  
  return (
    <div className="list_page">
      <h1 className='header'>Popular Products</h1>
      <hr></hr>
      <ul>{ products
              .map( product => <Product key={product.id} product={product} />)} 
      </ul>
    </div>
  )
}

export default List;
