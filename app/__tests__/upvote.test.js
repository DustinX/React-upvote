import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer';
import List from '../list/List';



// initialization
window.Seed = {};

function initializeProducts () {
  
  window.Seed.products = [
  {
    id: 1,
    title: 'Yellow Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: 10,
    submitterAvatarUrl: 'images/avatars/daniel.jpg',
    productImageUrl: 'images/products/image-aqua.png',
  },
  {
    id: 2,
    title: 'Supermajority: The Fantasy Congress League',
    description: 'Earn points when your favorite politicians pass legislation.',
    url: '#',
    votes: 9,
    submitterAvatarUrl: 'images/avatars/kristy.png',
    productImageUrl: 'images/products/image-rose.png',
  }]
  
}

beforeEach(() => {
  initializeProducts();
});

// tests
it('renders correctly', () => {
  const tree = renderer
    .create(<List/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Upvote count increases after click', () => {
  
  const {getByText, queryAllByTestId} = render(
    <List />
  );

  expect(getByText('10')).toBeTruthy();
  
  fireEvent.click(queryAllByTestId(/vote-button/i)[0]);
  
  expect(getByText('11')).toBeTruthy();
});



it('switches order correctly', () => {
  
  const {queryAllByTestId} = render(
    <List />
  );
  
  expect( queryAllByTestId(/product/i)[0] ).toHaveTextContent(/Yellow/)

  //upvote twice to make second item become first
  fireEvent.click(queryAllByTestId(/vote-button/i)[1]);
  fireEvent.click(queryAllByTestId(/vote-button/i)[1]);
  
  expect( queryAllByTestId(/product/i)[0] ).toHaveTextContent(/Supermajority/)
  
});
