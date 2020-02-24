import React from 'react';


const Product = (props) => {
  const incrementVote = () => {
    props.setProducts(
      props.products.map(
        (element) => {
          if (element.id === props.product.id) {
            element.votes += 1;
          }
          return element;
        },
      ),
    );
  };

  return (
    <li className="product" data-testid="product">
      <img className="image" src={props.product.productImageUrl} />
      <img className="arrow" src="images/ui/arrow.png" onClick={incrementVote} data-testid="vote-button" />
      <p className="votes" data-testid="votes">{props.product.votes}</p>
      <a className="title" href={props.product.url}>{props.product.title}</a>
      <p className="description">{props.product.description}</p>
      <p className="submitted">Submitted by:</p>
      <img className="submitter" src={props.product.submitterAvatarUrl} />
    </li>
  );
};

Product.propTypes = {
  setProducts: PropTypes.function,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string,
    title: PropTypes.string,
  })),
  product: PropTypes.shape({
    id: PropTypes.number,
    url: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default Product;
