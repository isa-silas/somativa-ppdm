import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Login} from "./src/screens/Login"
import {Home} from "./src/screens/Home"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{headerShown: false}} component={Login}/>
        <Stack.Screen name="Home" options={{headerShown: true}} component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}