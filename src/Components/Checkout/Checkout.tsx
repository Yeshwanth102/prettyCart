import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    totalPrice: number;
    img: string;
  }

interface CheckoutProps {
  route: {
    params?: {
      cart?: CartItem[];
      callback?: (cartItems: CartItem[]) => void;
    };
  };
}
interface CheckoutRouteParams {
    cart?: CartItem[];
    callback?: (cartItems: CartItem[]) => void;
  }

export default function Checkout({ route }: CheckoutProps): JSX.Element {
    const { cart, callback } = route?.params || {} as CheckoutRouteParams;
    const [cartItems, setCartItems] = useState<CartItem[]>(cart || []);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [totalQuantity, setTotalQuantity] = useState<number>(0);

  // Calculate the total price and quantity for the items in the cart
  useEffect(() => {
    let totalprice = 0;
    let quantity = 0;

    cartItems.forEach(({ price: itemPrice, quantity: itemQuantity }) => {
      if (itemPrice && itemQuantity) {
        totalprice += itemPrice * itemQuantity;
        quantity += itemQuantity;
      }
    });

    setTotalPrice(totalprice);
    setTotalQuantity(quantity);
  }, [cartItems]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Checkout</Text>

      {/* Display the total price and quantity */}
      <View style={styles.totalContainer}>
        <View>
          <Text style={styles.totalLabel}>Total Quantity:</Text>
          <Text style={styles.totalValue}>{totalQuantity || 0}</Text>
        </View>
        <View>
          <Text style={styles.totalLabel}>Total Price:</Text>
          <Text style={styles.totalValue}>${totalPrice.toFixed(2) || '0.00'}</Text>
        </View>
      </View>

      {/* Display each item in the cart */}
    <ScrollView style={styles.cartContainer}>

        {
            Object.values(
              cartItems.reduce((acc: { [id: number]: CartItem }, item: CartItem) => {
                if (!acc[item.id]) {
                  acc[item.id] = { ...item, quantity: 0, totalPrice: 0 };
                }
              
                acc[item.id].quantity += item.quantity;
                acc[item.id].totalPrice += item.price * item.quantity;
              
                return acc;
              }, {})
            ).map(({ id, name, price, quantity, totalPrice, img }: CartItem, index: number) => (
              <View key={`${id}-${index}`} style={styles.cartItem}>
                <Image source={{ uri: img }} style={styles.itemImage} />
                <View style={styles.itemDetails}>
                  <Text style={styles.itemName}>{name}</Text>
                  <Text>Price: ${(price).toFixed(2)}</Text>
                  <Text>Quantity: {quantity || 0}</Text>
                  <Text style={styles.itemTotal}>Total: ${(totalPrice).toFixed(2) || '0.00'}</Text>
                </View>
              </View>
            ))
          }
          
    </ScrollView>     
    </View>
  )};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
    paddingBottom: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black'
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 20,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  totalValue: {
    fontSize: 18,
    color: 'black',
  },
  cartContainer: {
    width: '80%',
    maxHeight: '60%',
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  itemImage: {
    width: '30%',
    height: '100%',
    marginRight: 50,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  itemTotal: {
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  productsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  product: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '30%',
    aspectRatio: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
    color: 'black',
  },
  productPrice: {
    fontSize: 14,
    color: 'black',
  },
});