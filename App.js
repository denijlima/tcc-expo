import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Login from "./src/Views/Login/Login";
import Cadastro from "./src/Views/Cadastro/Cadastro";
import Empresa from "./src/Views/Empresa/Empresa";
import GastosStack from "./src/Views/Gastos/GastosStack";
import Welcome from "./src/Views/Welcome";
import Login_new from "./src/Views/Login_new";
import SignUp from "./src/Views/SignUp";

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
          initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login_new" component={Login_new} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Empresa" component={Empresa} />
          <Stack.Screen name="GastosStack" component={GastosStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
};

export default App;
