import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Login from "./src/Views/Login/Login";
import Cadastro from "./src/Views/Cadastro/Cadastro";
import Empresa from "./src/Views/Empresa/Empresa";
import Home from "./src/Views/Home/Home";
import GastosStack from "./src/Views/Gastos/GastosStack";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}
          initialRouteName="GastosStack">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Empresa" component={Empresa} />
          <Stack.Screen name="GastosStack" component={GastosStack} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
};

export default App;
