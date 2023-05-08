import { NavigationContainer } from '@react-navigation/native';
import { MyStack } from './src/navigation/Route';
import React from 'react';

//Uncomment this line to take all js files
// import { MyStack } from './src/navigation/Routs';


export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

