import React, {Fragment,useState,useEffect} from 'react';
import Login from "./src/Views/Login/Login";
import Cadastro from "./src/Views/Cadastro/Cadastro";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  };

  


export default App;
