import React from 'react';
import { Appbar, useTheme } from 'react-native-paper';

import { createStackNavigator } from '@react-navigation/stack';

import GastosDetalhe from './GastosDetalhe';
import Home from '../Home/Home'

const Stack = createStackNavigator();

const GastosStack = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="GastosList"
      headerMode="screen"
      screenOptions={{
        header: ({ scene, previous, navigation }) => {
          const { options } = scene.descriptor;
          const title =
            options.headerTitle !== undefined
              ? options.headerTitle
              : options.title !== undefined
              ? options.title
              : scene.route.name;

          return (
            <Appbar.Header
              theme={{ colors: { primary: theme.colors.surface } }}
            >
              {previous ? (
                <Appbar.BackAction
                  onPress={navigation.goBack}
                  color={theme.colors.primary}
                />
              ) : <></>}
              <Appbar.Content
                title={title}
                titleStyle={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: theme.colors.primary,
                }}
              />
            </Appbar.Header>
          );
        },
      }}
    >
      <Stack.Screen
        name="GastosList"
        component={Home}
        options={({ route }) => {
          const routeName = route.state
            ? route.state.routes[route.state.index].name
            : 'IWallet';
          return { headerTitle: routeName };
        }}
      />
      <Stack.Screen
        name="GastosDetalhe"
        component={GastosDetalhe}
        options={{ headerTitle: 'Gasto' }}
      />
    </Stack.Navigator>
  );
};

export default GastosStack;