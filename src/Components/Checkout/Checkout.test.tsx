import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import Checkout from './Checkout';

describe('Checkout', () => {
  const cartItems = [
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      quantity: 2,
      totalPrice: 20,
      image: 'https://via.placeholder.com/100x100',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20,
      quantity: 1,
      totalPrice: 20,
      image: 'https://via.placeholder.com/100x100',
    },
  ];

  it('should render the cart items', () => {
    const { getAllByTestId } = render(<Checkout route={{ params: { cart: cartItems } }} />);
    const cartItemElements = getAllByTestId('cart-item');

    expect(cartItemElements).toHaveLength(2);
  });

  it('should remove an item from the cart when the remove button is clicked', () => {
    const callback = jest.fn();
    const { getByText, getAllByTestId } = render(
      <Checkout route={{ params: { cart: cartItems, callback } }} />
    );
    fireEvent.press(getByText('Remove'));

    // Make sure that the callback function is called with the updated cart items
    expect(callback).toHaveBeenCalledWith([
      {
        id: 1,
        name: 'Product 1',
        price: 10,
        quantity: 1,
        totalPrice: 10,
        image: 'https://via.placeholder.com/100x100',
      },
      {
        id: 2,
        name: 'Product 2',
        price: 20,
        quantity: 1,
        totalPrice: 20,
        image: 'https://via.placeholder.com/100x100',
      },
    ]);

    // Make sure that the remaining cart item is rendered
    expect(getAllByTestId('cart-item')).toHaveLength(1);
  });
});
