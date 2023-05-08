import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Home from './Home';
import ProductItem from './ProductItem';

const a = {
          id: 1,
          name: 'Product 1',
          price: 10,
          quantity: 1,
          totalPrice: 10,
          image: 'https://via.placeholder.com/100x100',
        };

describe('Home', () => {
  test('renders the loading state', async () => {
    const { getByText } = render(<Home />);
    expect(getByText('Loading...')).not.toBeNull();
  });
  

  test('renders the error state', async () => {
    const {getByText} = render(<Home />);
    expect(getByText('No Items available')).toBeNull();
  });

  test('renders the product list', async () => {
    const {getByTestId} = render(<Home />);
    const productList = getByTestId('product-list');
    expect(productList).not.toBeNull();
  });

  test('adds item to the cart', async () => {
    const {getByTestId} = render(<ProductItem product={a}/>);
    const addToCartButton = getByTestId('add-to-cart-button');
    fireEvent.press(addToCartButton);
    const cartIcon = getByTestId('cart-icon');
    expect(cartIcon).not.toBeNull();
  });

  test('removes item from the cart', async () => {
    const {getByTestId} = render(<ProductItem product={a}/>);
    const addToCartButton = getByTestId('add-to-cart-button');
    const removeFromCartButton = getByTestId('remove-from-cart-button');
    fireEvent.press(addToCartButton);
    fireEvent.press(removeFromCartButton);
    const cartIcon = getByTestId('cart-icon');
    expect(cartIcon).not.toBeNull();
  });
});
