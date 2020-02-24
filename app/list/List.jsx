import React, { useState } from 'react';
import Product from './Product';


const List = () => {
  // eslint-disable-next-line no-undef
  const [products, setProducts] = useState(window.Seed.products);

  return (
    <div className="list_page">
      <h1 className="header">Popular Products</h1>
      <hr />
      <ul>
        {products
          .sort((a, b) => b.votes - a.votes)
          .map((product) => (
            <Product
              key={product.id}
              product={product}
              products={products}
              setProducts={setProducts}
            />
          ))}
      </ul>
    </div>
  );
};

export default List;
