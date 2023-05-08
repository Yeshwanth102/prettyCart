import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Components/Home/Home';
import Checkout from '../Components/Checkout/Checkout';
import { enableScreens } from 'react-native-screens';

enableScreens();
const Stack = createStackNavigator();

export const MyStack = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName='Product List'>
      <Stack.Screen name="Pretty Little Thing" component={Home} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
};
